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

// Function to show the popup with additional details and the second table
function showPopup(row) {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');

    // Get the data from the row and populate the main table content
    const rowData = row.cells;
    const popupContentHTML = `
        <h2>${rowData[0].innerText}</h2>
        <table id="popup-table"></table>
    `;

    popupContent.innerHTML = popupContentHTML;
    const popupTable = document.getElementById('popup-table');

    // Generate the second table (popup table)
    let popupTableHTML = `
    <thead>
      <tr>
        <th>Unit</th>
        <th>Games</th>
        <th>AVG</th>
        <th>Delta</th>
      </tr>
    </thead>
    <tbody>
    `;

    window.augment_unit_data[rowData[0].innerText].sort((a, b) => {
        return -(a['games'] - b['games']);
    });

    window.augment_unit_data[rowData[0].innerText].forEach(item => {
        popupTableHTML += `
        <tr>
          <td>${item.unit}</td>
          <td>${item.games}</td>
          <td>${item.avg.toFixed(2)}</td>
          <td>${item.delta.toFixed(2)}</td>
        </tr>`
    });

    popupTableHTML += `</tbody>
    `;

    popupTable.innerHTML = popupTableHTML;
    popupContainer.style.display = 'block';
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
