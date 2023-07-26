const data = [
  { augment: "A Cut Above", games: 8350, avg: 4.13, stage2: 4.0, stage3: 4.35, stage4: '', games2: 5281, games3: 3069, games4: 0, id: 50, rank: 2, tags: "" },
  { augment: "Adrenaline Rush", games: 1636, avg: 4.27, stage2: 4.73, stage3: 4.28, stage4: 4.18, games2: 209, games3: 361, games4: 1066, id: 51, rank: 2, tags: "" },
  { augment: "AFK", games: 1886, avg: 4.53, stage2: 4.53, stage3: '', stage4: '', games2: 1886, games3: 0, games4: 0, id: 0, rank: 1, tags: "Legend Tahm Kench TK" },
  { augment: "All Natural I", games: 930, avg: 4.58, stage2: 4.8, stage3: 4.55, stage4: 4.32, games2: 235, games3: 581, games4: 114, id: 1, rank: 1, tags: "" },
  { augment: "All Natural II", games: 953, avg: 4.69, stage2: 4.67, stage3: 4.54, stage4: 4.78, games2: 169, games3: 284, games4: 500, id: 52, rank: 2, tags: "" },
  { augment: "All That Shimmers", games: 10944, avg: 4.26, stage2: 4.04, stage3: 4.71, stage4: '', games2: 7385, games3: 3558, games4: 1, id: 53, rank: 2, tags: "" },
  { augment: "Ancient Archives I", games: 3973, avg: 4.88, stage2: 4.76, stage3: 4.95, stage4: '', games2: 1500, games3: 2473, games4: 0, id: 159, rank: 2, tags: "Legend Urf" },
  { augment: "Ancient Archives II", games: 6608, avg: 4.57, stage2: 4.74, stage3: 4.56, stage4: 4.54, games2: 963, games3: 2707, games4: 2938, id: 160, rank: 3, tags: "Legend Urf" },
  { augment: "Army Building", games: 7826, avg: 4.61, stage2: 4.61, stage3: 4.61, stage4: '', games2: 2318, games3: 5508, games4: 0, id: 2, rank: 1, tags: "" },
  { augment: "Ascension", games: 973, avg: 4.98, stage2: '', stage3: '', stage4: 4.98, games2: 0, games3: 0, games4: 973, id: 528, rank: 2, tags: "Legend Veigar Vladimir" },
  { augment: "Balanced Budget", games: 1665, avg: 4.63, stage2: '', stage3: 4.57, stage4: '', games2: 34, games3: 1631, games4: 0, id: 518, rank: 1, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget II", games: 2824, avg: 4.64, stage2: '', stage3: 4.6, stage4: '', games2: 41, games3: 2783, games4: 0, id: 519, rank: 2, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget III", games: 1397, avg: 4.67, stage2: '', stage3: 4.63, stage4: '', games2: 20, games3: 1377, games4: 0, id: 520, rank: 3, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Bastion Crest", games: 1666, avg: 4.62, stage2: 4.63, stage3: 4.48, stage4: 4.68, games2: 237, games3: 402, games4: 1027, id: 54, rank: 2, tags: "" },
  { augment: "Bastion Crown", games: 1111, avg: 4.61, stage2: 4.61, stage3: 4.55, stage4: 4.67, games2: 308, games3: 409, games4: 394, id: 161, rank: 3, tags: "" },
  { augment: "Bastion Heart", games: 1455, avg: 4.57, stage2: 4.8, stage3: 4.42, stage4: 4.61, games2: 490, games3: 778, games4: 187, id: 3, rank: 1, tags: "" },
  { augment: "Battle Ready", games: 576, avg: 4.87, stage2: '', stage3: 4.82, stage4: '', games2: 9, games3: 567, games4: 0, id: 551, rank: 1, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready II", games: 1229, avg: 4.71, stage2: '', stage3: 4.63, stage4: '', games2: 30, games3: 1199, games4: 0, id: 552, rank: 2, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready III", games: 706, avg: 4.95, stage2: '', stage3: 4.91, stage4: '', games2: 10, games3: 696, games4: 0, id: 553, rank: 3, tags: "Legend Master Yi Vladimir" },
  { augment: "Big Grab Bag", games: 2919, avg: 4.79, stage2: '', stage3: 4.74, stage4: '', games2: 50, games3: 2869, games4: 0, id: 540, rank: 2, tags: "Legend Urf Ezreal" },
  { augment: "Binary Airdrop", games: 899, avg: 4.75, stage2: 5.17, stage3: 4.76, stage4: 4.65, games2: 115, games3: 312, games4: 472, id: 162, rank: 3, tags: "" },
  { augment: "Birthday Present", games: 886, avg: 4.68, stage2: 4.68, stage3: '', stage4: '', games2: 886, games3: 0, games4: 0, id: 163, rank: 3, tags: "" },
  { augment: "Blinding Speed", games: 2000, avg: 4.89, stage2: '', stage3: 4.87, stage4: 4.92, games2: 1, games3: 936, games4: 1063, id: 164, rank: 3, tags: "" },
  { augment: "Blood Money", games: 2339, avg: 4.32, stage2: 4.32, stage3: '', stage4: '', games2: 2339, games3: 0, games4: 0, id: 4, rank: 1, tags: "" },
  { augment: "Branching Out", games: 4010, avg: 4.84, stage2: 4.63, stage3: 4.95, stage4: '', games2: 1392, games3: 2618, games4: 0, id: 5, rank: 1, tags: "Legend Urf" },
  { augment: "Bronze Ticket", games: 3473, avg: 4.66, stage2: 4.79, stage3: 4.62, stage4: 4.6, games2: 779, games3: 2299, games4: 395, id: 6, rank: 1, tags: "" },
  { augment: "Bruiser Crest", games: 1659, avg: 4.56, stage2: 4.63, stage3: 4.41, stage4: 4.61, games2: 382, games3: 430, games4: 847, id: 55, rank: 2, tags: "" },
  { augment: "Bruiser Crown", games: 1053, avg: 4.17, stage2: 4.23, stage3: 4.07, stage4: 4.2, games2: 367, games3: 352, games4: 334, id: 165, rank: 3, tags: "" },
  { augment: "Bruiser Heart", games: 1708, avg: 4.58, stage2: 4.49, stage3: 4.6, stage4: 4.88, games2: 708, games3: 845, games4: 155, id: 7, rank: 1, tags: "" },
  { augment: "Built Different II", games: 509, avg: 5.03, stage2: 5.0, stage3: 5.14, stage4: '', games2: 413, games3: 96, games4: 0, id: 56, rank: 2, tags: "" },
  { augment: "Built Different III", games: 1187, avg: 4.28, stage2: 4.22, stage3: 4.53, stage4: '', games2: 953, games3: 234, games4: 0, id: 166, rank: 3, tags: "" },
  { augment: "Buried Treasures I", games: 969, avg: 4.37, stage2: 4.37, stage3: '', stage4: '', games2: 969, games3: 0, games4: 0, id: 8, rank: 1, tags: "Legend Ezreal" },
  { augment: "Buried Treasures II", games: 1030, avg: 4.64, stage2: 4.64, stage3: '', stage4: '', games2: 1030, games3: 0, games4: 0, id: 57, rank: 2, tags: "Legend Ezreal" },
  { augment: "Buried Treasures III", games: 1661, avg: 4.81, stage2: 4.79, stage3: 4.82, stage4: '', games2: 410, games3: 1251, games4: 0, id: 167, rank: 3, tags: "Legend Ezreal" },
  { augment: "Capricious Forge", games: 5337, avg: 4.43, stage2: '', stage3: 4.26, stage4: 4.51, games2: 3, games3: 1738, games4: 3596, id: 58, rank: 2, tags: "" },
  { augment: "Caretaker's Ally", games: 557, avg: 4.86, stage2: 4.86, stage3: '', stage4: '', games2: 557, games3: 0, games4: 0, id: 229, rank: 1, tags: "Legend Bard" },
  { augment: "Caretaker's Chosen", games: 1040, avg: 4.33, stage2: 4.33, stage3: '', stage4: '', games2: 1040, games3: 0, games4: 0, id: 231, rank: 3, tags: "Legend Bard" },
  { augment: "Caretaker's Favor", games: 869, avg: 4.49, stage2: 4.48, stage3: '', stage4: '', games2: 868, games3: 1, games4: 0, id: 230, rank: 2, tags: "Legend Bard" },
  { augment: "Challenger Crest", games: 3901, avg: 4.47, stage2: 4.34, stage3: 4.52, stage4: 4.49, games2: 678, games3: 1077, games4: 2146, id: 59, rank: 2, tags: "" },
  { augment: "Challenger Crown", games: 2505, avg: 4.41, stage2: 4.47, stage3: 4.31, stage4: 4.46, games2: 657, games3: 954, games4: 894, id: 168, rank: 3, tags: "" },
  { augment: "Challenger Heart", games: 3305, avg: 4.5, stage2: 4.64, stage3: 4.47, stage4: 4.29, games2: 1055, games3: 1856, games4: 394, id: 9, rank: 1, tags: "" },
  { augment: "Chemtech Enhancements", games: 1805, avg: 4.47, stage2: 4.59, stage3: 4.26, stage4: 4.5, games2: 276, games3: 378, games4: 1151, id: 60, rank: 2, tags: "" },
  { augment: "Combat Caster", games: 4896, avg: 4.23, stage2: 4.41, stage3: 4.19, stage4: 4.21, games2: 674, games3: 1235, games4: 2987, id: 61, rank: 2, tags: "" },
  { augment: "Component Buffet", games: 2223, avg: 4.45, stage2: 4.45, stage3: '', stage4: '', games2: 2223, games3: 0, games4: 0, id: 10, rank: 1, tags: "" },
  { augment: "Consistency", games: 2013, avg: 4.55, stage2: 4.55, stage3: '', stage4: '', games2: 2013, games3: 0, games4: 0, id: 240, rank: 1, tags: "" },
  { augment: "Contagion", games: 9908, avg: 4.44, stage2: 4.61, stage3: 4.47, stage4: 4.41, games2: 975, games3: 2694, games4: 6239, id: 62, rank: 2, tags: "" },
  { augment: "Cruel Pact", games: 1691, avg: 4.4, stage2: 4.4, stage3: '', stage4: '', games2: 1691, games3: 0, games4: 0, id: 169, rank: 3, tags: "" },
  { augment: "Cursed Crown", games: 1136, avg: 4.73, stage2: 4.84, stage3: 4.33, stage4: 4.87, games2: 172, games3: 291, games4: 673, id: 233, rank: 3, tags: "" },
  { augment: "Cutting Corners", games: 697, avg: 4.66, stage2: 4.66, stage3: '', stage4: '', games2: 697, games3: 0, games4: 0, id: 232, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "Cybernetic Bulk I", games: 2790, avg: 4.28, stage2: 4.32, stage3: 4.23, stage4: 4.39, games2: 620, games3: 1690, games4: 480, id: 11, rank: 1, tags: "" },
  { augment: "Cybernetic Bulk II", games: 3127, avg: 4.5, stage2: 4.5, stage3: 4.43, stage4: 4.53, games2: 389, games3: 790, games4: 1948, id: 63, rank: 2, tags: "" },
  { augment: "Cybernetic Bulk III", games: 2313, avg: 4.57, stage2: 4.96, stage3: 4.5, stage4: 4.53, games2: 263, games3: 844, games4: 1206, id: 170, rank: 3, tags: "" },
  { augment: "Cybernetic Leech I", games: 6250, avg: 4.34, stage2: 4.49, stage3: 4.33, stage4: 4.19, games2: 1129, games3: 4066, games4: 1055, id: 12, rank: 1, tags: "" },
  { augment: "Cybernetic Leech II", games: 7902, avg: 4.38, stage2: 4.64, stage3: 4.36, stage4: 4.36, games2: 766, games3: 1949, games4: 5187, id: 64, rank: 2, tags: "" },
  { augment: "Cybernetic Leech III", games: 4654, avg: 4.38, stage2: 4.8, stage3: 4.41, stage4: 4.28, games2: 458, games3: 1820, games4: 2376, id: 171, rank: 3, tags: "" },
  { augment: "Deadeye Crest", games: 3321, avg: 4.52, stage2: 4.63, stage3: 4.43, stage4: 4.53, games2: 466, games3: 837, games4: 2018, id: 65, rank: 2, tags: "" },
  { augment: "Deadeye Crown", games: 2871, avg: 4.54, stage2: 4.65, stage3: 4.37, stage4: 4.6, games2: 816, games3: 997, games4: 1058, id: 172, rank: 3, tags: "" },
  { augment: "Deadeye Heart", games: 3315, avg: 4.5, stage2: 4.58, stage3: 4.46, stage4: 4.45, games2: 995, games3: 1871, games4: 449, id: 13, rank: 1, tags: "" },
  { augment: "Dedication", games: 4155, avg: 4.83, stage2: 5.03, stage3: 4.73, stage4: '', games2: 1407, games3: 2748, games4: 0, id: 66, rank: 2, tags: "" },
  { augment: "Defensive Dash", games: 2370, avg: 4.39, stage2: 4.49, stage3: 4.2, stage4: 4.45, games2: 306, games3: 642, games4: 1422, id: 67, rank: 2, tags: "" },
  { augment: "Demacia Crest", games: 784, avg: 4.88, stage2: 4.79, stage3: 5.01, stage4: 4.87, games2: 160, games3: 158, games4: 466, id: 236, rank: 2, tags: "" },
  { augment: "Demacia Crown", games: 403, avg: 4.75, stage2: 4.92, stage3: 4.42, stage4: 4.89, games2: 103, games3: 132, games4: 168, id: 173, rank: 3, tags: "" },
  { augment: "Demonflare", games: 532, avg: 4.58, stage2: 4.5, stage3: 5.11, stage4: '', games2: 467, games3: 65, games4: 0, id: 68, rank: 2, tags: "" },
  { augment: "Double Trouble II", games: 3004, avg: 4.37, stage2: 4.34, stage3: 4.46, stage4: '', games2: 2233, games3: 771, games4: 0, id: 69, rank: 2, tags: "" },
  { augment: "Double Trouble III", games: 3247, avg: 4.38, stage2: 4.4, stage3: 4.31, stage4: '', games2: 2421, games3: 826, games4: 0, id: 174, rank: 3, tags: "" },
  { augment: "Dueling Gunners", games: 3194, avg: 4.83, stage2: 5.22, stage3: 5.02, stage4: 4.68, games2: 481, games3: 637, games4: 2076, id: 70, rank: 2, tags: "" },
  { augment: "Early Education", games: 1222, avg: 4.83, stage2: 4.83, stage3: '', stage4: '', games2: 1222, games3: 0, games4: 0, id: 71, rank: 2, tags: "" },
  { augment: "Endless Hordes", games: 1628, avg: 4.52, stage2: '', stage3: 4.13, stage4: 5.03, games2: 2, games3: 930, games4: 696, id: 175, rank: 3, tags: "" },
  { augment: "Endurance Training", games: 826, avg: 4.66, stage2: 4.66, stage3: '', stage4: '', games2: 826, games3: 0, games4: 0, id: 72, rank: 2, tags: "" },
  { augment: "Escort Quest", games: 1212, avg: 4.34, stage2: 4.28, stage3: 4.48, stage4: '', games2: 821, games3: 391, games4: 0, id: 73, rank: 2, tags: "" },
  { augment: "Final Ascension", games: 464, avg: 4.7, stage2: '', stage3: '', stage4: 4.7, games2: 0, games3: 0, games4: 464, id: 529, rank: 3, tags: "Legend Veigar Vladimir" },
  { augment: "Final Grab Bag", games: 282, avg: 4.54, stage2: '', stage3: '', stage4: 4.54, games2: 0, games3: 0, games4: 282, id: 536, rank: 1, tags: "Legend Pengu Urf" },
  { augment: "Final Grab Bag II", games: 3619, avg: 4.66, stage2: '', stage3: '', stage4: 4.65, games2: 0, games3: 5, games4: 3614, id: 537, rank: 2, tags: "Legend Pengu Urf" },
  { augment: "Final Reserves", games: 1315, avg: 4.69, stage2: '', stage3: 4.69, stage4: '', games2: 1, games3: 1314, games4: 0, id: 177, rank: 3, tags: "" },
  { augment: "Freljord Heart", games: 6805, avg: 4.37, stage2: 4.61, stage3: 4.22, stage4: 4.33, games2: 1223, games3: 647, games4: 4935, id: 74, rank: 2, tags: "" },
  { augment: "Freljord Soul", games: 2921, avg: 4.45, stage2: 4.92, stage3: 4.43, stage4: 4.29, games2: 631, games3: 453, games4: 1837, id: 178, rank: 3, tags: "" },
  { augment: "Frequent Flier", games: 3492, avg: 4.95, stage2: 5.02, stage3: 4.91, stage4: '', games2: 1291, games3: 2201, games4: 0, id: 75, rank: 2, tags: "" },
  { augment: "Gargantuan Resolve", games: 3110, avg: 4.75, stage2: 4.77, stage3: 4.72, stage4: '', games2: 1454, games3: 1656, games4: 0, id: 76, rank: 2, tags: "" },
  { augment: "Giant Grab Bag", games: 1456, avg: 4.61, stage2: '', stage3: 4.58, stage4: '', games2: 14, games3: 1442, games4: 0, id: 541, rank: 3, tags: "Legend Urf Ezreal" },
  { augment: "Gifts from the Fallen", games: 15155, avg: 4.26, stage2: 4.49, stage3: 4.24, stage4: 4.23, games2: 1948, games3: 3972, games4: 9235, id: 77, rank: 2, tags: "" },
  { augment: "Glacial Breeze", games: 5676, avg: 4.2, stage2: 4.24, stage3: 3.95, stage4: 4.22, games2: 955, games3: 534, games4: 4187, id: 78, rank: 2, tags: "" },
  { augment: "Gold Legend Augment", games: 102796, avg: 4.52, stage2: 4.52, stage3: '', stage4: '', games2: 102796, games3: 0, games4: 0, id: 432, rank: 2, tags: "" },
  { augment: "Golden Ticket", games: 10625, avg: 4.45, stage2: 4.47, stage3: 4.39, stage4: 4.51, games2: 2905, games3: 4285, games4: 3435, id: 180, rank: 3, tags: "" },
  { augment: "Gotta Go Fast!", games: 199, avg: 4.54, stage2: '', stage3: '', stage4: 4.54, games2: 0, games3: 0, games4: 199, id: 554, rank: 1, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast! II", games: 2449, avg: 4.53, stage2: '', stage3: '', stage4: 4.53, games2: 0, games3: 1, games4: 2448, id: 555, rank: 2, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast!!! III", games: 834, avg: 4.59, stage2: '', stage3: '', stage4: 4.59, games2: 0, games3: 0, games4: 834, id: 556, rank: 3, tags: "Legend Master Yi" },
  { augment: "Gunner Crest", games: 2934, avg: 4.58, stage2: 4.96, stage3: 4.64, stage4: 4.47, games2: 431, games3: 606, games4: 1897, id: 79, rank: 2, tags: "" },
  { augment: "Gunner Crown", games: 1709, avg: 4.64, stage2: 4.6, stage3: 4.74, stage4: 4.59, games2: 470, games3: 464, games4: 775, id: 181, rank: 3, tags: "" },
  { augment: "Gunner Heart", games: 2312, avg: 4.64, stage2: 4.82, stage3: 4.6, stage4: 4.3, games2: 868, games3: 1103, games4: 341, id: 15, rank: 1, tags: "" },
  { augment: "Harmacist I", games: 5649, avg: 4.44, stage2: 4.45, stage3: 4.42, stage4: 4.5, games2: 972, games3: 3680, games4: 997, id: 16, rank: 1, tags: "" },
  { augment: "Harmacist II", games: 8035, avg: 4.54, stage2: 4.61, stage3: 4.63, stage4: 4.5, games2: 714, games3: 2045, games4: 5276, id: 80, rank: 2, tags: "" },
  { augment: "Harmacist III", games: 5274, avg: 4.41, stage2: 4.9, stage3: 4.44, stage4: 4.3, games2: 555, games3: 2049, games4: 2670, id: 182, rank: 3, tags: "" },
  { augment: "Haunted Shell", games: 1194, avg: 4.84, stage2: 5.31, stage3: 4.78, stage4: 4.72, games2: 220, games3: 281, games4: 693, id: 81, rank: 2, tags: "" },
  { augment: "Healing Orbs I", games: 7097, avg: 4.34, stage2: 4.41, stage3: 4.3, stage4: 4.38, games2: 1654, games3: 4475, games4: 968, id: 17, rank: 1, tags: "" },
  { augment: "Healing Orbs II", games: 7697, avg: 4.56, stage2: 4.62, stage3: 4.5, stage4: 4.58, games2: 954, games3: 2081, games4: 4662, id: 82, rank: 2, tags: "" },
  { augment: "Hedge Fund", games: 928, avg: 4.69, stage2: 4.69, stage3: '', stage4: '', games2: 928, games3: 0, games4: 0, id: 183, rank: 3, tags: "Legend Tahm Kench TK" },
  { augment: "Hedge Fund+", games: 2825, avg: 4.37, stage2: '', stage3: 4.35, stage4: '', games2: 10, games3: 2815, games4: 0, id: 184, rank: 3, tags: "" },
  { augment: "Hedge Fund++", games: 3399, avg: 4.46, stage2: '', stage3: '', stage4: 4.46, games2: 0, games3: 5, games4: 3394, id: 185, rank: 3, tags: "" },
  { augment: "Hustler", games: 565, avg: 4.67, stage2: 4.67, stage3: '', stage4: '', games2: 565, games3: 0, games4: 0, id: 239, rank: 2, tags: "" },
  { augment: "Idealism", games: 7557, avg: 4.32, stage2: 4.3, stage3: 4.33, stage4: '', games2: 3323, games3: 4234, games4: 0, id: 83, rank: 2, tags: "" },
  { augment: "Impenetrable Bulwark", games: 2217, avg: 4.7, stage2: '', stage3: 4.63, stage4: 4.75, games2: 4, games3: 1029, games4: 1184, id: 187, rank: 3, tags: "" },
  { augment: "Inconsistency", games: 3331, avg: 4.31, stage2: 4.31, stage3: '', stage4: '', games2: 3331, games3: 0, games4: 0, id: 18, rank: 1, tags: "" },
  { augment: "Indomitable Will", games: 3725, avg: 4.65, stage2: 4.8, stage3: 4.7, stage4: 4.29, games2: 650, games3: 2456, games4: 619, id: 84, rank: 1, tags: "" },
  { augment: "Infernal Contract", games: 2779, avg: 4.61, stage2: '', stage3: '', stage4: 4.61, games2: 0, games3: 0, games4: 2779, id: 228, rank: 3, tags: "" },
  { augment: "Infusion", games: 5813, avg: 4.52, stage2: 4.6, stage3: 4.51, stage4: 4.5, games2: 851, games3: 1635, games4: 3327, id: 85, rank: 2, tags: "" },
  { augment: "Invoker Crest", games: 3715, avg: 4.59, stage2: 4.57, stage3: 4.59, stage4: 4.59, games2: 955, games3: 986, games4: 1774, id: 86, rank: 2, tags: "" },
  { augment: "Invoker Crown", games: 2600, avg: 4.31, stage2: 4.31, stage3: 4.23, stage4: 4.39, games2: 969, games3: 844, games4: 787, id: 188, rank: 3, tags: "" },
  { augment: "Invoker Heart", games: 3546, avg: 4.4, stage2: 4.48, stage3: 4.33, stage4: 4.46, games2: 1380, games3: 1794, games4: 372, id: 19, rank: 1, tags: "" },
  { augment: "Ionia Crest", games: 3575, avg: 4.51, stage2: 4.48, stage3: 4.34, stage4: 4.61, games2: 991, games3: 852, games4: 1732, id: 87, rank: 2, tags: "" },
  { augment: "Ionia Crown", games: 1901, avg: 4.49, stage2: 4.69, stage3: 4.27, stage4: 4.52, games2: 623, games3: 650, games4: 628, id: 189, rank: 3, tags: "" },
  { augment: "Iron Assets", games: 1800, avg: 4.63, stage2: 4.63, stage3: '', stage4: '', games2: 1800, games3: 0, games4: 0, id: 21, rank: 1, tags: "" },
  { augment: "It Pays To Learn", games: 1265, avg: 4.59, stage2: '', stage3: '', stage4: 4.58, games2: 0, games3: 2, games4: 1263, id: 548, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn II", games: 23089, avg: 4.43, stage2: '', stage3: '', stage4: 4.43, games2: 0, games3: 18, games4: 23071, id: 549, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn III", games: 7665, avg: 4.32, stage2: '', stage3: '', stage4: 4.31, games2: 0, games3: 4, games4: 7661, id: 550, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Item Grab Bag I", games: 849, avg: 5.07, stage2: '', stage3: 5.0, stage4: '', games2: 22, games3: 827, games4: 0, id: 533, rank: 1, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag II", games: 1461, avg: 4.91, stage2: '', stage3: 4.84, stage4: '', games2: 31, games3: 1430, games4: 0, id: 534, rank: 2, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag III", games: 517, avg: 5.43, stage2: '', stage3: 5.37, stage4: '', games2: 13, games3: 504, games4: 0, id: 535, rank: 3, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Jeweled Lotus I", games: 7379, avg: 4.59, stage2: 4.64, stage3: 4.6, stage4: 4.48, games2: 1203, games3: 5225, games4: 951, id: 23, rank: 1, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus II", games: 12451, avg: 4.58, stage2: 4.84, stage3: 4.61, stage4: 4.5, games2: 1706, games3: 3725, games4: 7020, id: 88, rank: 2, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus III", games: 9267, avg: 4.29, stage2: 4.74, stage3: 4.28, stage4: 4.16, games2: 1168, games3: 4040, games4: 4059, id: 190, rank: 3, tags: "Legend Veigar" },
  { augment: "Job Well Done", games: 27840, avg: 4.55, stage2: '', stage3: '', stage4: 4.55, games2: 0, games3: 7, games4: 27833, id: 516, rank: 2, tags: "Legend Ornn" },
  { augment: "Job's Done", games: 2893, avg: 4.33, stage2: '', stage3: '', stage4: 4.33, games2: 0, games3: 0, games4: 2893, id: 515, rank: 1, tags: "Legend Ornn" },
  { augment: "Juggernaut Crest", games: 1762, avg: 4.5, stage2: 5.08, stage3: 4.59, stage4: 4.38, games2: 174, games3: 399, games4: 1189, id: 89, rank: 2, tags: "" },
  { augment: "Juggernaut Crown", games: 1277, avg: 4.24, stage2: 4.16, stage3: 4.41, stage4: 4.19, games2: 404, games3: 384, games4: 489, id: 191, rank: 3, tags: "" },
  { augment: "Juggernaut Heart", games: 1248, avg: 4.63, stage2: 4.8, stage3: 4.55, stage4: 4.59, games2: 349, games3: 695, games4: 204, id: 24, rank: 1, tags: "" },
  { augment: "Know Your Enemy", games: 10367, avg: 4.2, stage2: 4.26, stage3: 4.21, stage4: 4.18, games2: 1220, games3: 2812, games4: 6335, id: 90, rank: 2, tags: "" },
  { augment: "Knowledge Download I", games: 5688, avg: 4.7, stage2: '', stage3: 4.66, stage4: '', games2: 61, games3: 5627, games4: 0, id: 545, rank: 1, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download II", games: 13191, avg: 4.7, stage2: '', stage3: 4.67, stage4: '', games2: 101, games3: 13090, games4: 0, id: 546, rank: 2, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download III", games: 6536, avg: 4.64, stage2: '', stage3: 4.62, stage4: '', games2: 51, games3: 6485, games4: 0, id: 547, rank: 3, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Large Forge", games: 11957, avg: 4.62, stage2: '', stage3: 4.61, stage4: '', games2: 37, games3: 11920, games4: 0, id: 514, rank: 3, tags: "Legend Ornn Bard" },
  { augment: "Last Stand", games: 2341, avg: 4.5, stage2: '', stage3: 4.49, stage4: '', games2: 5, games3: 2336, games4: 0, id: 91, rank: 2, tags: "" },
  { augment: "Lategame Specialist", games: 3228, avg: 4.11, stage2: '', stage3: 4.09, stage4: '', games2: 13, games3: 3214, games4: 1, id: 235, rank: 1, tags: "" },
  { augment: "Latent Forge", games: 1499, avg: 4.34, stage2: 4.34, stage3: '', stage4: '', games2: 1498, games3: 1, games4: 0, id: 25, rank: 1, tags: "Legend Ornn" },
  { augment: "Level Up!", games: 10259, avg: 4.36, stage2: 4.53, stage3: 4.15, stage4: 4.58, games2: 1967, games3: 4920, games4: 3372, id: 192, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Library Card", games: 6646, avg: 4.58, stage2: '', stage3: '', stage4: 4.58, games2: 0, games3: 3, games4: 6643, id: 92, rank: 2, tags: "" },
  { augment: "Living Forge", games: 596, avg: 4.55, stage2: 4.55, stage3: '', stage4: '', games2: 596, games3: 0, games4: 0, id: 193, rank: 3, tags: "Legend Ornn" },
  { augment: "Long Distance Pals II", games: 22320, avg: 4.38, stage2: 4.48, stage3: 4.42, stage4: 4.33, games2: 3458, games3: 5768, games4: 13094, id: 93, rank: 2, tags: "" },
  { augment: "Loving Invocation", games: 4033, avg: 4.32, stage2: 4.28, stage3: 4.29, stage4: 4.35, games2: 923, games3: 978, games4: 2132, id: 94, rank: 2, tags: "" },
  { augment: "Lucky Gloves", games: 1686, avg: 4.91, stage2: 4.96, stage3: 4.93, stage4: 4.88, games2: 343, games3: 534, games4: 809, id: 194, rank: 3, tags: "" },
  { augment: "Magic Wand", games: 11431, avg: 4.32, stage2: 4.28, stage3: 4.31, stage4: 4.34, games2: 2151, games3: 3173, games4: 6107, id: 95, rank: 2, tags: "" },
  { augment: "Mana Burn", games: 3201, avg: 4.4, stage2: '', stage3: '', stage4: 4.4, games2: 0, games3: 1, games4: 3200, id: 96, rank: 2, tags: "" },
  { augment: "March of Progress", games: 1204, avg: 4.61, stage2: 4.61, stage3: '', stage4: '', games2: 1204, games3: 0, games4: 0, id: 195, rank: 3, tags: "" },
  { augment: "Martyr", games: 3827, avg: 4.29, stage2: 4.64, stage3: 4.28, stage4: 4.24, games2: 391, games3: 955, games4: 2481, id: 97, rank: 2, tags: "" },
  { augment: "Masterful Job", games: 9554, avg: 4.39, stage2: '', stage3: '', stage4: 4.39, games2: 0, games3: 1, games4: 9553, id: 517, rank: 3, tags: "Legend Ornn" },
  { augment: "Medium Forge", games: 25405, avg: 4.44, stage2: '', stage3: 4.43, stage4: 5.0, games2: 87, games3: 25317, games4: 1, id: 513, rank: 2, tags: "Legend Ornn Bard" },
  { augment: "Medium-End Shopping", games: 15470, avg: 4.36, stage2: 4.36, stage3: 4.35, stage4: 4.44, games2: 4807, games3: 9065, games4: 1598, id: 98, rank: 1, tags: "" },
  { augment: "Metabolic Accelerator", games: 694, avg: 4.69, stage2: 4.68, stage3: '', stage4: '', games2: 693, games3: 1, games4: 0, id: 99, rank: 2, tags: "Legend Pengu" },
  { augment: "Missed Connections", games: 1088, avg: 4.73, stage2: '', stage3: 4.65, stage4: 5.73, games2: 4, games3: 1011, games4: 73, id: 27, rank: 1, tags: "" },
  { augment: "Money Money Money!", games: 1988, avg: 4.62, stage2: '', stage3: '', stage4: 4.62, games2: 0, games3: 3, games4: 1985, id: 523, rank: 3, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money Money!", games: 6387, avg: 4.7, stage2: '', stage3: '', stage4: 4.69, games2: 0, games3: 17, games4: 6370, id: 522, rank: 2, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money!", games: 382, avg: 4.6, stage2: '', stage3: '', stage4: 4.58, games2: 0, games3: 2, games4: 380, id: 521, rank: 1, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Morning Light", games: 1772, avg: 4.64, stage2: 5.08, stage3: 4.42, stage4: 4.65, games2: 199, games3: 456, games4: 1117, id: 100, rank: 2, tags: "" },
  { augment: "Multicaster Heart", games: 1072, avg: 5.31, stage2: 5.75, stage3: 5.28, stage4: 5.19, games2: 189, games3: 228, games4: 655, id: 101, rank: 2, tags: "" },
  { augment: "Multicaster Soul", games: 783, avg: 4.96, stage2: 5.19, stage3: 4.95, stage4: 4.73, games2: 283, games3: 240, games4: 260, id: 196, rank: 3, tags: "" },
  { augment: "Not Today", games: 2775, avg: 4.65, stage2: 4.91, stage3: 4.7, stage4: 4.56, games2: 407, games3: 720, games4: 1648, id: 102, rank: 2, tags: "" },
  { augment: "Noxus Crest", games: 3044, avg: 4.3, stage2: 4.34, stage3: 4.04, stage4: 4.4, games2: 857, games3: 704, games4: 1483, id: 103, rank: 2, tags: "" },
  { augment: "Noxus Crown", games: 2390, avg: 3.75, stage2: 3.57, stage3: 3.72, stage4: 4.16, games2: 1121, games3: 734, games4: 535, id: 197, rank: 3, tags: "" },
  { augment: "On a Roll", games: 1850, avg: 5.09, stage2: 5.05, stage3: 5.13, stage4: '', games2: 923, games3: 927, games4: 0, id: 104, rank: 1, tags: "Legend Lee Sin" },
  { augment: "One Twos Three", games: 938, avg: 4.47, stage2: 4.47, stage3: '', stage4: '', games2: 938, games3: 0, games4: 0, id: 29, rank: 1, tags: "Legend Caitlyn" },
  { augment: "One, Two, Five!", games: 899, avg: 4.62, stage2: '', stage3: '', stage4: 4.62, games2: 0, games3: 0, games4: 899, id: 237, rank: 1, tags: "" },
  { augment: "Overcharged Manafont", games: 5165, avg: 4.24, stage2: 4.09, stage3: 4.11, stage4: 4.35, games2: 987, games3: 1404, games4: 2774, id: 105, rank: 2, tags: "" },
  { augment: "Overwhelming Force", games: 2492, avg: 4.72, stage2: '', stage3: 4.68, stage4: 4.77, games2: 0, games3: 1375, games4: 1117, id: 198, rank: 3, tags: "" },
  { augment: "Pandora's Bench", games: 9414, avg: 4.76, stage2: 4.62, stage3: 4.81, stage4: 4.86, games2: 2643, games3: 5877, games4: 894, id: 30, rank: 1, tags: "" },
  { augment: "Pandora's Items", games: 7092, avg: 4.69, stage2: 4.6, stage3: 4.71, stage4: 4.68, games2: 1564, games3: 4878, games4: 650, id: 31, rank: 1, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items II", games: 5721, avg: 4.98, stage2: 4.74, stage3: 4.99, stage4: 5.04, games2: 968, games3: 1809, games4: 2944, id: 106, rank: 2, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items III", games: 3903, avg: 4.81, stage2: 4.73, stage3: 4.77, stage4: 4.9, games2: 656, games3: 1730, games4: 1517, id: 199, rank: 3, tags: "Legend Twisted Fate TF" },
  { augment: "Partial Ascension", games: 83, avg: 4.87, stage2: '', stage3: '', stage4: 4.79, games2: 0, games3: 2, games4: 81, id: 527, rank: 1, tags: "Legend Veigar Vladimir" },
  { augment: "Parting Gifts", games: 1148, avg: 4.63, stage2: 4.23, stage3: 4.67, stage4: 4.74, games2: 221, games3: 280, games4: 647, id: 200, rank: 2, tags: "" },
  { augment: "Patient Study", games: 1509, avg: 4.59, stage2: 4.59, stage3: '', stage4: '', games2: 1509, games3: 0, games4: 0, id: 107, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "Perfected Repetition", games: 1409, avg: 5.16, stage2: 5.39, stage3: 5.26, stage4: 5.04, games2: 311, games3: 297, games4: 801, id: 108, rank: 2, tags: "" },
  { augment: "Petricite Shackles", games: 1244, avg: 4.45, stage2: 4.42, stage3: 4.3, stage4: 4.52, games2: 289, games3: 225, games4: 730, id: 109, rank: 2, tags: "" },
  { augment: "Phreaky Friday", games: 1615, avg: 4.25, stage2: 4.25, stage3: '', stage4: '', games2: 1615, games3: 0, games4: 0, id: 201, rank: 3, tags: "" },
  { augment: "Phreaky Friday +", games: 4519, avg: 4.34, stage2: '', stage3: 4.22, stage4: 4.48, games2: 3, games3: 2442, games4: 2074, id: 202, rank: 3, tags: "" },
  { augment: "Piltover Heart", games: 1482, avg: 4.64, stage2: 4.45, stage3: 5.15, stage4: 5.3, games2: 1119, games3: 155, games4: 208, id: 110, rank: 2, tags: "" },
  { augment: "Piltover Soul", games: 903, avg: 4.63, stage2: 4.6, stage3: 4.71, stage4: 4.72, games2: 663, games3: 154, games4: 86, id: 203, rank: 3, tags: "" },
  { augment: "Portable Forge", games: 13538, avg: 4.55, stage2: 4.34, stage3: 4.5, stage4: 4.65, games2: 2458, games3: 4135, games4: 6945, id: 111, rank: 2, tags: "Legend Ornn" },
  { augment: "Prismatic Legend Augment", games: 34242, avg: 4.45, stage2: 4.45, stage3: '', stage4: '', games2: 34242, games3: 0, games4: 0, id: 433, rank: 3, tags: "" },
  { augment: "Pumping Up I", games: 780, avg: 4.62, stage2: 4.61, stage3: '', stage4: '', games2: 779, games3: 1, games4: 0, id: 32, rank: 1, tags: "Legend Master Yi" },
  { augment: "Pumping Up II", games: 1344, avg: 4.69, stage2: 4.69, stage3: '', stage4: '', games2: 1344, games3: 0, games4: 0, id: 112, rank: 2, tags: "Legend Master Yi" },
  { augment: "Pumping Up III", games: 883, avg: 4.86, stage2: 4.86, stage3: '', stage4: '', games2: 883, games3: 0, games4: 0, id: 204, rank: 3, tags: "Legend Master Yi" },
  { augment: "Radiant Relics", games: 8844, avg: 4.6, stage2: 4.77, stage3: 4.59, stage4: 4.52, games2: 1781, games3: 3565, games4: 3498, id: 205, rank: 3, tags: "" },
  { augment: "Ravenous Hunter", games: 4762, avg: 4.11, stage2: 4.05, stage3: 4.55, stage4: '', games2: 4233, games3: 529, games4: 0, id: 114, rank: 2, tags: "" },
  { augment: "Recombobulator", games: 3020, avg: 4.63, stage2: '', stage3: 4.59, stage4: 4.75, games2: 7, games3: 2450, games4: 563, id: 33, rank: 1, tags: "" },
  { augment: "Red Buff", games: 8017, avg: 4.47, stage2: 4.52, stage3: 4.46, stage4: 4.42, games2: 2142, games3: 4894, games4: 981, id: 34, rank: 1, tags: "" },
  { augment: "Return on Investment", games: 5629, avg: 4.72, stage2: 5.06, stage3: 4.86, stage4: 4.58, games2: 677, games3: 1599, games4: 3353, id: 115, rank: 2, tags: "" },
  { augment: "Rich Get Richer", games: 1605, avg: 4.8, stage2: 4.8, stage3: '', stage4: '', games2: 1605, games3: 0, games4: 0, id: 116, rank: 2, tags: "Legend Tahm Kench TK" },
  { augment: "Rich Get Richer+", games: 2557, avg: 4.66, stage2: '', stage3: 4.65, stage4: '', games2: 8, games3: 2549, games4: 0, id: 117, rank: 2, tags: "" },
  { augment: "Riftwalk", games: 3166, avg: 4.25, stage2: 4.2, stage3: 4.79, stage4: '', games2: 2931, games3: 235, games4: 0, id: 118, rank: 2, tags: "" },
  { augment: "Risky Moves", games: 3351, avg: 4.26, stage2: 4.26, stage3: '', stage4: '', games2: 3351, games3: 0, games4: 0, id: 35, rank: 1, tags: "" },
  { augment: "Rogue Crest", games: 431, avg: 4.98, stage2: 5.35, stage3: 4.79, stage4: 4.92, games2: 88, games3: 104, games4: 239, id: 119, rank: 2, tags: "" },
  { augment: "Rogue Crown", games: 395, avg: 4.29, stage2: 4.06, stage3: 4.35, stage4: 4.58, games2: 171, games3: 111, games4: 113, id: 206, rank: 3, tags: "" },
  { augment: "Rogue Heart", games: 377, avg: 4.86, stage2: 4.76, stage3: 4.87, stage4: 5.22, games2: 148, games3: 188, games4: 41, id: 36, rank: 1, tags: "" },
  { augment: "Roll The Dice", games: 3132, avg: 4.48, stage2: 4.39, stage3: 4.48, stage4: 4.51, games2: 636, games3: 1132, games4: 1364, id: 207, rank: 3, tags: "" },
  { augment: "Rolling For Days I", games: 339, avg: 4.97, stage2: '', stage3: '', stage4: 4.96, games2: 0, games3: 1, games4: 338, id: 530, rank: 1, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days II", games: 4221, avg: 4.96, stage2: '', stage3: '', stage4: 4.96, games2: 0, games3: 2, games4: 4219, id: 531, rank: 2, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days III", games: 1466, avg: 4.89, stage2: '', stage3: '', stage4: 4.89, games2: 0, games3: 1, games4: 1465, id: 532, rank: 3, tags: "Legend Draven Caitlyn" },
  { augment: "Salvage Bin", games: 428, avg: 4.65, stage2: 4.65, stage3: '', stage4: '', games2: 428, games3: 0, games4: 0, id: 120, rank: 2, tags: "" },
  { augment: "Salvage Bin+", games: 1676, avg: 4.88, stage2: 5.24, stage3: 4.93, stage4: 4.84, games2: 38, games3: 619, games4: 1019, id: 234, rank: 2, tags: "" },
  { augment: "Scoped Weapons", games: 3338, avg: 4.76, stage2: 5.24, stage3: 4.91, stage4: 4.61, games2: 382, games3: 839, games4: 2117, id: 121, rank: 2, tags: "" },
  { augment: "Scrappy Inventions", games: 191, avg: 4.66, stage2: 4.66, stage3: '', stage4: '', games2: 191, games3: 0, games4: 0, id: 238, rank: 2, tags: "" },
  { augment: "Seeing Double I", games: 138, avg: 5.09, stage2: '', stage3: '', stage4: 5.09, games2: 0, games3: 0, games4: 138, id: 563, rank: 1, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double II", games: 1649, avg: 5.16, stage2: '', stage3: '', stage4: 5.15, games2: 0, games3: 7, games4: 1642, id: 564, rank: 2, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double III", games: 456, avg: 5.32, stage2: '', stage3: '', stage4: 5.31, games2: 0, games3: 1, games4: 455, id: 565, rank: 3, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Sentinel's Spirit", games: 2476, avg: 4.39, stage2: 4.23, stage3: 4.31, stage4: 4.5, games2: 669, games3: 563, games4: 1244, id: 122, rank: 2, tags: "" },
  { augment: "Shadow Isles Crest", games: 2433, avg: 4.45, stage2: 4.52, stage3: 4.23, stage4: 4.5, games2: 799, games3: 527, games4: 1107, id: 123, rank: 2, tags: "" },
  { augment: "Shadow Isles Crown", games: 1971, avg: 4.03, stage2: 3.93, stage3: 3.99, stage4: 4.29, games2: 1061, games3: 438, games4: 472, id: 208, rank: 3, tags: "" },
  { augment: "Shadow Isles Heart", games: 1751, avg: 4.81, stage2: 5.05, stage3: 4.64, stage4: 4.47, games2: 798, games3: 797, games4: 156, id: 37, rank: 1, tags: "" },
  { augment: "Shimmering Inventors", games: 492, avg: 4.82, stage2: 4.44, stage3: 5.59, stage4: 5.3, games2: 305, games3: 83, games4: 104, id: 124, rank: 2, tags: "" },
  { augment: "Shoplifting", games: 1376, avg: 4.47, stage2: '', stage3: 4.46, stage4: '', games2: 4, games3: 1372, games4: 0, id: 125, rank: 2, tags: "" },
  { augment: "Shopping Spree", games: 452, avg: 4.57, stage2: 4.57, stage3: '', stage4: '', games2: 452, games3: 0, games4: 0, id: 186, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Shurima Crest", games: 2246, avg: 4.49, stage2: 4.83, stage3: 4.26, stage4: 4.45, games2: 472, games3: 436, games4: 1338, id: 126, rank: 2, tags: "" },
  { augment: "Shurima Crown", games: 1512, avg: 4.33, stage2: 4.57, stage3: 4.12, stage4: 4.21, games2: 591, games3: 378, games4: 543, id: 209, rank: 3, tags: "" },
  { augment: "Shurima's Legacy", games: 2724, avg: 4.25, stage2: 4.21, stage3: 4.09, stage4: 4.33, games2: 965, games3: 450, games4: 1309, id: 127, rank: 2, tags: "" },
  { augment: "Silver Legend Augment", games: 30177, avg: 4.49, stage2: 4.49, stage3: '', stage4: '', games2: 30177, games3: 0, games4: 0, id: 431, rank: 1, tags: "" },
  { augment: "Silver Spoon", games: 2815, avg: 4.4, stage2: 4.4, stage3: '', stage4: '', games2: 2815, games3: 0, games4: 0, id: 39, rank: 1, tags: "" },
  { augment: "Silver Ticket", games: 3673, avg: 4.61, stage2: 4.67, stage3: 4.58, stage4: '', games2: 1456, games3: 2217, games4: 0, id: 128, rank: 2, tags: "" },
  { augment: "Slayer Crest", games: 1897, avg: 4.86, stage2: 5.4, stage3: 4.75, stage4: 4.74, games2: 336, games3: 323, games4: 1238, id: 129, rank: 2, tags: "" },
  { augment: "Slayer Crown", games: 881, avg: 4.82, stage2: 5.07, stage3: 4.71, stage4: 4.74, games2: 230, games3: 219, games4: 432, id: 210, rank: 3, tags: "" },
  { augment: "Slayer Heart", games: 1245, avg: 4.92, stage2: 5.2, stage3: 4.75, stage4: 4.79, games2: 469, games3: 574, games4: 202, id: 40, rank: 1, tags: "" },
  { augment: "Slayer's Resolve", games: 1297, avg: 4.84, stage2: 5.15, stage3: 4.69, stage4: 4.81, games2: 215, games3: 259, games4: 823, id: 130, rank: 2, tags: "" },
  { augment: "Sleight of Hand", games: 559, avg: 4.89, stage2: 4.98, stage3: 4.82, stage4: '', games2: 222, games3: 337, games4: 0, id: 131, rank: 2, tags: "" },
  { augment: "Small Forge", games: 19790, avg: 4.41, stage2: '', stage3: 4.4, stage4: '', games2: 73, games3: 19716, games4: 1, id: 512, rank: 1, tags: "Legend Ornn Bard" },
  { augment: "Social Distancing I", games: 7512, avg: 4.31, stage2: 4.24, stage3: 4.33, stage4: 4.34, games2: 2035, games3: 4592, games4: 885, id: 41, rank: 1, tags: "" },
  { augment: "Social Distancing II", games: 12687, avg: 4.32, stage2: 4.42, stage3: 4.21, stage4: 4.35, games2: 1969, games3: 3547, games4: 7171, id: 132, rank: 2, tags: "" },
  { augment: "Social Distancing III", games: 9014, avg: 4.22, stage2: 4.48, stage3: 4.13, stage4: 4.18, games2: 1730, games3: 3501, games4: 3783, id: 211, rank: 3, tags: "" },
  { augment: "Sorcerer Crest", games: 6077, avg: 4.41, stage2: 4.52, stage3: 4.35, stage4: 4.4, games2: 1305, games3: 1650, games4: 3122, id: 133, rank: 2, tags: "" },
  { augment: "Sorcerer Crown", games: 3591, avg: 4.07, stage2: 4.07, stage3: 3.98, stage4: 4.15, games2: 1094, games3: 1281, games4: 1216, id: 212, rank: 3, tags: "" },
  { augment: "Sorcerer Heart", games: 5343, avg: 4.3, stage2: 4.25, stage3: 4.31, stage4: 4.47, games2: 2064, games3: 2764, games4: 515, id: 42, rank: 1, tags: "" },
  { augment: "Spectral Supplies", games: 1041, avg: 4.77, stage2: '', stage3: 4.88, stage4: 4.68, games2: 2, games3: 418, games4: 621, id: 179, rank: 3, tags: "" },
  { augment: "Spoils of War I", games: 1026, avg: 4.39, stage2: 4.39, stage3: '', stage4: '', games2: 1026, games3: 0, games4: 0, id: 43, rank: 1, tags: "Legend Draven" },
  { augment: "Spoils of War II", games: 778, avg: 4.72, stage2: 4.72, stage3: '', stage4: '', games2: 778, games3: 0, games4: 0, id: 134, rank: 2, tags: "Legend Draven" },
  { augment: "Spoils of War III", games: 417, avg: 4.78, stage2: 4.78, stage3: '', stage4: '', games2: 417, games3: 0, games4: 0, id: 213, rank: 3, tags: "Legend Draven" },
  { augment: "Stable Evolution", games: 2225, avg: 4.03, stage2: 3.88, stage3: 3.82, stage4: 4.22, games2: 625, games3: 521, games4: 1079, id: 113, rank: 2, tags: "" },
  { augment: "Stars are Born", games: 1352, avg: 4.64, stage2: 4.64, stage3: '', stage4: '', games2: 1352, games3: 0, games4: 0, id: 135, rank: 2, tags: "Legend Caitlyn" },
  { augment: "Starter Kit", games: 1445, avg: 4.82, stage2: 4.82, stage3: '', stage4: '', games2: 1445, games3: 0, games4: 0, id: 214, rank: 3, tags: "Legend Caitlyn" },
  { augment: "Stellacorn's Blessing", games: 2909, avg: 4.37, stage2: 4.41, stage3: 4.24, stage4: 4.38, games2: 791, games3: 325, games4: 1793, id: 136, rank: 2, tags: "" },
  { augment: "Strategist Heart", games: 2440, avg: 4.87, stage2: 4.94, stage3: 5.03, stage4: 4.82, games2: 414, games3: 297, games4: 1729, id: 137, rank: 2, tags: "" },
  { augment: "Strategist Soul", games: 1064, avg: 4.79, stage2: 5.08, stage3: 4.7, stage4: 4.72, games2: 217, games3: 233, games4: 614, id: 215, rank: 3, tags: "" },
  { augment: "Suppressing Fire", games: 4143, avg: 4.25, stage2: 4.11, stage3: 4.14, stage4: 4.32, games2: 601, games3: 944, games4: 2598, id: 138, rank: 2, tags: "" },
  { augment: "Tactical Superiority", games: 1823, avg: 4.5, stage2: 4.63, stage3: 4.38, stage4: 4.48, games2: 339, games3: 208, games4: 1276, id: 139, rank: 2, tags: "" },
  { augment: "Tactician's Tools", games: 4520, avg: 4.88, stage2: 5.39, stage3: 4.9, stage4: 4.69, games2: 748, games3: 1655, games4: 2117, id: 216, rank: 3, tags: "" },
  { augment: "Targon Heart", games: 3108, avg: 4.88, stage2: 5.08, stage3: 4.76, stage4: 4.85, games2: 552, games3: 388, games4: 2168, id: 140, rank: 2, tags: "" },
  { augment: "Targon Soul", games: 1631, avg: 4.52, stage2: 4.64, stage3: 4.31, stage4: 4.54, games2: 437, games3: 327, games4: 867, id: 217, rank: 3, tags: "" },
  { augment: "The Boss", games: 1470, avg: 4.62, stage2: 4.55, stage3: 4.85, stage4: '', games2: 1103, games3: 367, games4: 0, id: 141, rank: 2, tags: "" },
  { augment: "The Golden Egg", games: 2017, avg: 4.06, stage2: '', stage3: '', stage4: 4.06, games2: 0, games3: 0, games4: 2017, id: 218, rank: 3, tags: "" },
  { augment: "Three's a Crowd", games: 1407, avg: 4.22, stage2: '', stage3: 4.03, stage4: 4.31, games2: 0, games3: 464, games4: 943, id: 143, rank: 2, tags: "" },
  { augment: "Three's Company", games: 2065, avg: 4.66, stage2: 4.66, stage3: '', stage4: '', games2: 2065, games3: 0, games4: 0, id: 142, rank: 2, tags: "" },
  { augment: "Tiniest Titan", games: 2394, avg: 4.68, stage2: 4.23, stage3: 4.92, stage4: '', games2: 827, games3: 1567, games4: 0, id: 220, rank: 3, tags: "Legend Pengu" },
  { augment: "Tiny Grab Bag", games: 1442, avg: 4.91, stage2: '', stage3: 4.87, stage4: '', games2: 22, games3: 1420, games4: 0, id: 539, rank: 1, tags: "Legend Urf Ezreal" },
  { augment: "Tiny Power I", games: 430, avg: 4.78, stage2: '', stage3: 4.76, stage4: '', games2: 2, games3: 428, games4: 0, id: 524, rank: 1, tags: "Legend Veigar" },
  { augment: "Tiny Power II", games: 513, avg: 4.7, stage2: '', stage3: 4.67, stage4: '', games2: 5, games3: 508, games4: 0, id: 525, rank: 2, tags: "Legend Veigar" },
  { augment: "Tiny Power III", games: 300, avg: 4.58, stage2: '', stage3: 4.53, stage4: '', games2: 5, games3: 295, games4: 0, id: 526, rank: 3, tags: "Legend Veigar" },
  { augment: "Tiny Titans", games: 5409, avg: 4.53, stage2: 4.6, stage3: 4.52, stage4: '', games2: 554, games3: 4855, games4: 0, id: 44, rank: 1, tags: "Legend Pengu" },
  { augment: "Titanic Strength", games: 1255, avg: 4.45, stage2: 4.66, stage3: 4.52, stage4: 4.3, games2: 339, games3: 310, games4: 606, id: 144, rank: 2, tags: "" },
  { augment: "Tons of Stats!", games: 13884, avg: 4.28, stage2: 4.33, stage3: 4.22, stage4: 4.29, games2: 1975, games3: 3708, games4: 8201, id: 145, rank: 2, tags: "" },
  { augment: "Total Domination", games: 4120, avg: 4.07, stage2: 4.11, stage3: 3.95, stage4: 4.09, games2: 1246, games3: 906, games4: 1968, id: 146, rank: 2, tags: "" },
  { augment: "Trade Sector", games: 1678, avg: 4.74, stage2: 4.74, stage3: '', stage4: '', games2: 1678, games3: 0, games4: 0, id: 147, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward", games: 1433, avg: 4.91, stage2: '', stage3: 4.86, stage4: '', games2: 22, games3: 1411, games4: 0, id: 560, rank: 1, tags: "Legend Lee Sin" },
  { augment: "Training Reward II", games: 1920, avg: 4.99, stage2: '', stage3: 4.95, stage4: '', games2: 27, games3: 1893, games4: 0, id: 561, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward III", games: 784, avg: 5.05, stage2: '', stage3: 4.99, stage4: '', games2: 18, games3: 766, games4: 0, id: 562, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Transfusion I", games: 3042, avg: 4.51, stage2: 4.68, stage3: 4.49, stage4: '', games2: 341, games3: 2701, games4: 0, id: 45, rank: 1, tags: "Legend Vladimir" },
  { augment: "Transfusion II", games: 3019, avg: 4.31, stage2: 4.26, stage3: 4.32, stage4: '', games2: 739, games3: 2280, games4: 0, id: 148, rank: 2, tags: "Legend Vladimir" },
  { augment: "Transfusion III", games: 2645, avg: 4.19, stage2: 4.53, stage3: 4.12, stage4: '', games2: 428, games3: 2217, games4: 0, id: 221, rank: 3, tags: "Legend Vladimir" },
  { augment: "Two Healthy", games: 1831, avg: 4.27, stage2: 4.42, stage3: 4.03, stage4: '', games2: 1142, games3: 689, games4: 0, id: 149, rank: 2, tags: "" },
  { augment: "Unburdened I", games: 505, avg: 4.37, stage2: 4.67, stage3: 4.11, stage4: 4.85, games2: 165, games3: 285, games4: 55, id: 46, rank: 1, tags: "" },
  { augment: "Unburdened II", games: 596, avg: 4.66, stage2: 4.61, stage3: 4.5, stage4: 4.76, games2: 135, games3: 148, games4: 313, id: 150, rank: 2, tags: "" },
  { augment: "Unified Resistance I", games: 12154, avg: 4.34, stage2: 4.48, stage3: 4.31, stage4: 4.3, games2: 2812, games3: 7738, games4: 1604, id: 47, rank: 1, tags: "" },
  { augment: "Unified Resistance II", games: 15028, avg: 4.3, stage2: 4.44, stage3: 4.28, stage4: 4.29, games2: 1951, games3: 4278, games4: 8799, id: 151, rank: 2, tags: "" },
  { augment: "Unleashed Arcana", games: 2734, avg: 4.82, stage2: '', stage3: 4.86, stage4: 4.78, games2: 3, games3: 1406, games4: 1325, id: 222, rank: 3, tags: "" },
  { augment: "Unstable Yordle Delivery", games: 759, avg: 4.46, stage2: 4.43, stage3: 4.75, stage4: '', games2: 687, games3: 72, games4: 0, id: 152, rank: 2, tags: "" },
  { augment: "Urf's Grab Bag", games: 1189, avg: 4.69, stage2: '', stage3: '', stage4: 4.68, games2: 0, games3: 3, games4: 1186, id: 538, rank: 3, tags: "Legend Pengu Urf" },
  { augment: "Vampiric Blades", games: 811, avg: 4.47, stage2: 4.55, stage3: 4.32, stage4: 4.49, games2: 201, games3: 157, games4: 453, id: 153, rank: 2, tags: "" },
  { augment: "Void Crest", games: 2908, avg: 4.29, stage2: 4.3, stage3: 4.12, stage4: 4.38, games2: 1140, games3: 692, games4: 1076, id: 242, rank: 2, tags: "" },
  { augment: "Void Crown", games: 1859, avg: 4.08, stage2: 4.22, stage3: 3.92, stage4: 4.03, games2: 836, games3: 604, games4: 419, id: 243, rank: 3, tags: "" },
  { augment: "Wandering Trainer", games: 1747, avg: 4.52, stage2: 4.52, stage3: '', stage4: '', games2: 1747, games3: 0, games4: 0, id: 224, rank: 3, tags: "" },
  { augment: "Well-Earned Comforts I", games: 23, avg: 4.78, stage2: '', stage3: '', stage4: 4.78, games2: 0, games3: 0, games4: 23, id: 557, rank: 1, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts II", games: 203, avg: 5.39, stage2: '', stage3: '', stage4: 5.37, games2: 0, games3: 2, games4: 201, id: 558, rank: 2, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts III", games: 157, avg: 4.68, stage2: '', stage3: '', stage4: 4.68, games2: 0, games3: 0, games4: 157, id: 559, rank: 3, tags: "Legend Ezreal" },
  { augment: "Wellness Trust", games: 1299, avg: 4.7, stage2: '', stage3: 4.69, stage4: '', games2: 3, games3: 1296, games4: 0, id: 225, rank: 3, tags: "" },
  { augment: "What Doesn't Kill You", games: 881, avg: 4.7, stage2: 4.7, stage3: '', stage4: '', games2: 881, games3: 0, games4: 0, id: 241, rank: 2, tags: "" },
  { augment: "What The Forge", games: 1042, avg: 4.97, stage2: '', stage3: 4.91, stage4: 5.02, games2: 1, games3: 528, games4: 513, id: 226, rank: 3, tags: "" },
  { augment: "Winds of War", games: 704, avg: 4.64, stage2: 4.64, stage3: 4.64, stage4: '', games2: 619, games3: 85, games4: 0, id: 155, rank: 2, tags: "" },
  { augment: "You Have My Bow", games: 9804, avg: 4.52, stage2: 4.52, stage3: 4.48, stage4: 4.55, games2: 2019, games3: 2939, games4: 4846, id: 156, rank: 2, tags: "" },
  { augment: "You Have My Sword", games: 10652, avg: 4.36, stage2: 4.3, stage3: 4.33, stage4: 4.41, games2: 2081, games3: 3187, games4: 5384, id: 157, rank: 2, tags: "" },
  { augment: "Young and Wild and Free", games: 3445, avg: 4.12, stage2: 4.58, stage3: 3.75, stage4: '', games2: 1527, games3: 1918, games4: 0, id: 48, rank: 1, tags: "" },
  { augment: "Zaun Crest", games: 3610, avg: 4.59, stage2: 4.86, stage3: 4.53, stage4: 4.52, games2: 771, games3: 631, games4: 2208, id: 158, rank: 2, tags: "" },
  { augment: "Zaun Crown", games: 2094, avg: 4.45, stage2: 4.76, stage3: 4.43, stage4: 4.25, games2: 607, games3: 594, games4: 893, id: 227, rank: 3, tags: "" },
  { augment: "Zaun Heart", games: 2708, avg: 4.52, stage2: 4.69, stage3: 4.41, stage4: 4.3, games2: 1205, games3: 1158, games4: 345, id: 49, rank: 1, tags: "" },
];

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
}

// Function to filter the table data based on the search query
function filterTable() {
  const searchInput = document.getElementById('search-input');
  const filter = searchInput.value.toLowerCase();
  const filterSplit = filter.split(',');

  const silverCheckbox = document.getElementById('silver');
  const goldCheckbox = document.getElementById('gold');
  const prismaticCheckbox = document.getElementById('prismatic');

  const filteredData = data.filter(item => {
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
  const key = Object.keys(data[0])[columnIndex];

  if (currentSortColumn === key) {
    isAscending = !isAscending;
  } else {
    currentSortColumn = key;
    isAscending = true;
  }

  data.sort((a, b) => {
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

  generateTableRows(data);
  filterTable();
}

// Initial call to generate the table with default data
generateTableRows(data);
