let currentSortColumn = null;
let isAscending = true;

// Function to generate the table rows dynamically
function generateTableRows(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(item => {
        let avg = item.avg.toFixed(2);
        let stage2 = typeof item.stage2 == 'number' ? item.stage2.toFixed(2) : item.stage2;
        let stage3 = typeof item.stage3 == 'number' ? item.stage3.toFixed(2) : item.stage3;
        let stage4 = typeof item.stage4 == 'number' ? item.stage4.toFixed(2) : item.stage4;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.augment}</td>
            <td>${item.games}</td>
            <td>${avg}</td>
            <td title="${item.games2} games">${stage2}</td>
            <td title="${item.games3} games">${stage3}</td>
            <td title="${item.games4} games">${stage4}</td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listener to the table rows to handle click event
    const tableRows = document.querySelectorAll('#data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => showPopup(row));
    });
}

// Function to filter the table data based on the search query
function filterTable() {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase();
    const filterSplit = filter.split(',');

    const silverCheckbox = document.getElementById('silver');
    const goldCheckbox = document.getElementById('gold');
    const prismaticCheckbox = document.getElementById('prismatic');

    const filteredData = window.augment_data.filter(item => {
        const filterMatch = filterSplit.some((s) => item.augment.toString().toLowerCase().includes(s.trim()) || item.tags.toString().toLowerCase().includes(s.trim()));

        const isSilver = silverCheckbox.checked;
        const isGold = goldCheckbox.checked;
        const isPrismatic = prismaticCheckbox.checked;

        if (isSilver || isGold || isPrismatic) {
            if (!(isSilver && item.rank === 1 || isGold && item.rank === 2 || isPrismatic && item.rank === 3)) {
                return false;
            }
        }

        return filterMatch;
    });

    generateTableRows(filteredData);
}

// Add event listener to the search input to trigger filtering
document.getElementById('search-input').addEventListener('input', filterTable);
document.getElementById('silver').addEventListener('click', filterTable);
document.getElementById('gold').addEventListener('click', filterTable);
document.getElementById('prismatic').addEventListener('click', filterTable);

// Function to sort the table data based on the selected column
function sortTable(columnIndex) {
    const key = Object.keys(window.augment_data[0])[columnIndex];

    if (currentSortColumn === key) {
        isAscending = !isAscending;
    } else {
        currentSortColumn = key;
        isAscending = true;
    }

    window.augment_data.sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        
        if (typeof valA === 'string' && typeof valB === 'string') {
            return isAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else if (typeof valA === 'string' && typeof valB == 'number') {
            return 1;
        } else if (typeof valA === 'number' && typeof valB == 'string') {
            return -1;
        } else {
            return isAscending ? valA - valB : valB - valA;
        }
    });

    generateTableRows(window.augment_data);
    filterTable();
}

// Function to generate the popup table header dynamically
function generatePopupTableHeader() {
  const thead = document.querySelectorAll('#popup-table thead')[0];
  thead.innerHTML = '';
  const headerRow = thead.insertRow();
  const tableHeaders = ['Unit', 'Games', 'AVG', 'Delta']; // Add more header labels as needed

  tableHeaders.forEach(label => {
    const headerCell = document.createElement('th');
    headerCell.textContent = label;
    headerRow.appendChild(headerCell);
  });
}

// Function to generate the popup table rows dynamically
function generatePopupTableRows(data) {
  const tableBody = document.getElementById('popup-table-body');
  tableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.unit}</td>
      <td>${item.games}</td>
      <td>${item.avg.toFixed(2)}</td>
      <td>${item.delta.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to sort the popup table data based on the clicked column
function sortPopupTable(data, columnIndex, ascending) {
  data.sort((a, b) => {
    const keyA = Object.values(a)[columnIndex];
    const keyB = Object.values(b)[columnIndex];

    if (typeof keyA === 'string') {
      // Sort strings alphabetically
      return ascending ? keyA.localeCompare(keyB) : keyB.localeCompare(keyA);
    } else {
      // Sort numbers
      return ascending ? keyA - keyB : keyB - keyA;
    }
  });

  // Generate the sorted popup table rows and update the table
  generatePopupTableRows(data);
}

// Function to show the popup with additional details and the second table
function showPopup(row) {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const popupTable = document.getElementById('popup-table');

    // Generate the popup table header and rows
    document.querySelectorAll('#popup-content h2')[0].innerHTML = row.cells[0].innerText;
    generatePopupTableHeader();
    let data = window.augment_unit_data[row.cells[0].innerText];
    sortPopupTable(data, 1, !isAscending);
    generatePopupTableRows(data);

    // Add event listeners to the popup table headers for sorting
    const popupTableHeaders = document.querySelectorAll('#popup-table th');
    popupTableHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            const isAscending = header.classList.contains('ascending');
            sortPopupTable(data, index, !isAscending);

            // Toggle the ascending/descending class for the header
            popupTableHeaders.forEach(h => h.classList.remove('ascending', 'descending'));
            header.classList.toggle(isAscending ? 'descending' : 'ascending');
        });
    });

    popupContainer.style.display = 'block';
    popupContent.scrollTop = 0;
}

// Function to close the popup
function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}

// Add event listener to close the popup when clicking outside the popup content
window.addEventListener('click', event => {
    const popupContainer = document.getElementById('popup-container');
    if (event.target === popupContainer) {
        closePopup();
    }
});

// Initial call to generate the table with default data
generateTableRows(window.augment_data);
