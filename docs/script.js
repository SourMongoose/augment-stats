const data = [
  { augment: "A Cut Above", games: 2867, avg: 4.12, stage2: 3.94, stage3: 4.42, stage4: '', games2: 1808, games3: 1059, games4: 0, id: 50, rank: 2, tags: "" },
  { augment: "Adrenaline Rush", games: 619, avg: 4.22, stage2: 5.07, stage3: 4.11, stage4: 4.09, games2: 81, games3: 133, games4: 405, id: 51, rank: 2, tags: "" },
  { augment: "AFK", games: 640, avg: 4.56, stage2: 4.56, stage3: '', stage4: '', games2: 640, games3: 0, games4: 0, id: 0, rank: 1, tags: "Legend Tahm Kench TK" },
  { augment: "All Natural I", games: 349, avg: 4.56, stage2: 4.86, stage3: 4.51, stage4: 4.11, games2: 95, games3: 216, games4: 38, id: 1, rank: 1, tags: "" },
  { augment: "All Natural II", games: 334, avg: 4.76, stage2: 4.39, stage3: 4.55, stage4: 5.01, games2: 64, games3: 92, games4: 178, id: 52, rank: 2, tags: "" },
  { augment: "All That Shimmers", games: 3848, avg: 4.25, stage2: 4.06, stage3: 4.66, stage4: '', games2: 2628, games3: 1220, games4: 0, id: 53, rank: 2, tags: "" },
  { augment: "Ancient Archives I", games: 1390, avg: 4.8, stage2: 4.66, stage3: 4.89, stage4: '', games2: 528, games3: 862, games4: 0, id: 159, rank: 2, tags: "Legend Urf" },
  { augment: "Ancient Archives II", games: 2380, avg: 4.53, stage2: 4.63, stage3: 4.5, stage4: 4.52, games2: 341, games3: 892, games4: 1147, id: 160, rank: 3, tags: "Legend Urf" },
  { augment: "Army Building", games: 2818, avg: 4.62, stage2: 4.63, stage3: 4.62, stage4: '', games2: 820, games3: 1998, games4: 0, id: 2, rank: 1, tags: "" },
  { augment: "Ascension", games: 326, avg: 4.95, stage2: '', stage3: '', stage4: 4.95, games2: 0, games3: 0, games4: 326, id: 528, rank: 2, tags: "Legend Veigar Vladimir" },
  { augment: "Balanced Budget", games: 661, avg: 4.57, stage2: '', stage3: 4.53, stage4: '', games2: 9, games3: 652, games4: 0, id: 518, rank: 1, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget II", games: 1170, avg: 4.73, stage2: '', stage3: 4.69, stage4: '', games2: 15, games3: 1155, games4: 0, id: 519, rank: 2, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget III", games: 520, avg: 4.55, stage2: '', stage3: 4.5, stage4: '', games2: 8, games3: 512, games4: 0, id: 520, rank: 3, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Bastion Crest", games: 633, avg: 4.63, stage2: 4.61, stage3: 4.32, stage4: 4.76, games2: 89, games3: 155, games4: 389, id: 54, rank: 2, tags: "" },
  { augment: "Bastion Crown", games: 371, avg: 4.58, stage2: 4.7, stage3: 4.54, stage4: 4.52, games2: 105, games3: 134, games4: 132, id: 161, rank: 3, tags: "" },
  { augment: "Bastion Heart", games: 543, avg: 4.64, stage2: 4.92, stage3: 4.5, stage4: 4.47, games2: 183, games3: 290, games4: 70, id: 3, rank: 1, tags: "" },
  { augment: "Battle Ready", games: 213, avg: 5.0, stage2: '', stage3: 4.97, stage4: '', games2: 2, games3: 211, games4: 0, id: 551, rank: 1, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready II", games: 444, avg: 4.74, stage2: '', stage3: 4.65, stage4: '', games2: 13, games3: 431, games4: 0, id: 552, rank: 2, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready III", games: 276, avg: 4.91, stage2: '', stage3: 4.85, stage4: '', games2: 5, games3: 271, games4: 0, id: 553, rank: 3, tags: "Legend Master Yi Vladimir" },
  { augment: "Big Grab Bag", games: 1116, avg: 4.77, stage2: '', stage3: 4.71, stage4: '', games2: 21, games3: 1095, games4: 0, id: 540, rank: 2, tags: "Legend Urf Ezreal" },
  { augment: "Binary Airdrop", games: 327, avg: 4.54, stage2: 5.16, stage3: 4.25, stage4: 4.58, games2: 43, games3: 110, games4: 174, id: 162, rank: 3, tags: "" },
  { augment: "Birthday Present", games: 309, avg: 4.6, stage2: 4.6, stage3: '', stage4: '', games2: 309, games3: 0, games4: 0, id: 163, rank: 3, tags: "" },
  { augment: "Blinding Speed", games: 715, avg: 4.85, stage2: '', stage3: 4.85, stage4: 4.84, games2: 1, games3: 338, games4: 376, id: 164, rank: 3, tags: "" },
  { augment: "Blood Money", games: 780, avg: 4.29, stage2: 4.29, stage3: '', stage4: '', games2: 780, games3: 0, games4: 0, id: 4, rank: 1, tags: "" },
  { augment: "Branching Out", games: 1433, avg: 4.77, stage2: 4.54, stage3: 4.88, stage4: '', games2: 484, games3: 949, games4: 0, id: 5, rank: 1, tags: "Legend Urf" },
  { augment: "Bronze Ticket", games: 1276, avg: 4.61, stage2: 4.66, stage3: 4.6, stage4: 4.62, games2: 288, games3: 850, games4: 138, id: 6, rank: 1, tags: "" },
  { augment: "Bruiser Crest", games: 606, avg: 4.59, stage2: 5.01, stage3: 4.27, stage4: 4.56, games2: 137, games3: 153, games4: 316, id: 55, rank: 2, tags: "" },
  { augment: "Bruiser Crown", games: 367, avg: 4.27, stage2: 4.37, stage3: 4.18, stage4: 4.25, games2: 131, games3: 120, games4: 116, id: 165, rank: 3, tags: "" },
  { augment: "Bruiser Heart", games: 608, avg: 4.54, stage2: 4.38, stage3: 4.6, stage4: 5.0, games2: 268, games3: 293, games4: 47, id: 7, rank: 1, tags: "" },
  { augment: "Built Different II", games: 181, avg: 5.07, stage2: 5.08, stage3: 5.03, stage4: '', games2: 150, games3: 31, games4: 0, id: 56, rank: 2, tags: "" },
  { augment: "Built Different III", games: 410, avg: 4.18, stage2: 4.15, stage3: 4.3, stage4: '', games2: 327, games3: 83, games4: 0, id: 166, rank: 3, tags: "" },
  { augment: "Buried Treasures I", games: 343, avg: 4.29, stage2: 4.29, stage3: '', stage4: '', games2: 343, games3: 0, games4: 0, id: 8, rank: 1, tags: "Legend Ezreal" },
  { augment: "Buried Treasures II", games: 370, avg: 4.7, stage2: 4.7, stage3: '', stage4: '', games2: 370, games3: 0, games4: 0, id: 57, rank: 2, tags: "Legend Ezreal" },
  { augment: "Buried Treasures III", games: 542, avg: 4.81, stage2: 4.96, stage3: 4.75, stage4: '', games2: 139, games3: 403, games4: 0, id: 167, rank: 3, tags: "Legend Ezreal" },
  { augment: "Capricious Forge", games: 1937, avg: 4.4, stage2: '', stage3: 4.19, stage4: 4.49, games2: 2, games3: 640, games4: 1295, id: 58, rank: 2, tags: "" },
  { augment: "Caretaker's Ally", games: 218, avg: 4.81, stage2: 4.81, stage3: '', stage4: '', games2: 218, games3: 0, games4: 0, id: 229, rank: 1, tags: "Legend Bard" },
  { augment: "Caretaker's Chosen", games: 404, avg: 4.27, stage2: 4.27, stage3: '', stage4: '', games2: 404, games3: 0, games4: 0, id: 231, rank: 3, tags: "Legend Bard" },
  { augment: "Caretaker's Favor", games: 292, avg: 4.42, stage2: 4.42, stage3: '', stage4: '', games2: 292, games3: 0, games4: 0, id: 230, rank: 2, tags: "Legend Bard" },
  { augment: "Challenger Crest", games: 1437, avg: 4.45, stage2: 4.29, stage3: 4.52, stage4: 4.48, games2: 248, games3: 387, games4: 802, id: 59, rank: 2, tags: "" },
  { augment: "Challenger Crown", games: 896, avg: 4.44, stage2: 4.52, stage3: 4.25, stage4: 4.55, games2: 222, games3: 313, games4: 361, id: 168, rank: 3, tags: "" },
  { augment: "Challenger Heart", games: 1221, avg: 4.5, stage2: 4.5, stage3: 4.53, stage4: 4.36, games2: 400, games3: 680, games4: 141, id: 9, rank: 1, tags: "" },
  { augment: "Chemtech Enhancements", games: 635, avg: 4.39, stage2: 4.84, stage3: 3.99, stage4: 4.4, games2: 113, games3: 141, games4: 381, id: 60, rank: 2, tags: "" },
  { augment: "Combat Caster", games: 1749, avg: 4.27, stage2: 4.4, stage3: 4.21, stage4: 4.26, games2: 255, games3: 437, games4: 1057, id: 61, rank: 2, tags: "" },
  { augment: "Component Buffet", games: 707, avg: 4.29, stage2: 4.29, stage3: '', stage4: '', games2: 707, games3: 0, games4: 0, id: 10, rank: 1, tags: "" },
  { augment: "Consistency", games: 695, avg: 4.61, stage2: 4.61, stage3: '', stage4: '', games2: 695, games3: 0, games4: 0, id: 240, rank: 1, tags: "" },
  { augment: "Contagion", games: 3512, avg: 4.44, stage2: 4.63, stage3: 4.55, stage4: 4.37, games2: 359, games3: 927, games4: 2226, id: 62, rank: 2, tags: "" },
  { augment: "Cruel Pact", games: 535, avg: 4.43, stage2: 4.43, stage3: '', stage4: '', games2: 535, games3: 0, games4: 0, id: 169, rank: 3, tags: "" },
  { augment: "Cursed Crown", games: 362, avg: 4.73, stage2: 4.98, stage3: 4.05, stage4: 4.95, games2: 55, games3: 91, games4: 216, id: 233, rank: 3, tags: "" },
  { augment: "Cutting Corners", games: 263, avg: 4.76, stage2: 4.76, stage3: '', stage4: '', games2: 263, games3: 0, games4: 0, id: 232, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "Cybernetic Bulk I", games: 977, avg: 4.34, stage2: 4.53, stage3: 4.29, stage4: 4.27, games2: 224, games3: 595, games4: 158, id: 11, rank: 1, tags: "" },
  { augment: "Cybernetic Bulk II", games: 1076, avg: 4.52, stage2: 4.83, stage3: 4.28, stage4: 4.56, games2: 129, games3: 270, games4: 677, id: 63, rank: 2, tags: "" },
  { augment: "Cybernetic Bulk III", games: 821, avg: 4.63, stage2: 4.98, stage3: 4.59, stage4: 4.56, games2: 112, games3: 297, games4: 412, id: 170, rank: 3, tags: "" },
  { augment: "Cybernetic Leech I", games: 2163, avg: 4.33, stage2: 4.55, stage3: 4.3, stage4: 4.23, games2: 398, games3: 1421, games4: 344, id: 12, rank: 1, tags: "" },
  { augment: "Cybernetic Leech II", games: 2859, avg: 4.32, stage2: 4.56, stage3: 4.37, stage4: 4.27, games2: 282, games3: 691, games4: 1886, id: 64, rank: 2, tags: "" },
  { augment: "Cybernetic Leech III", games: 1579, avg: 4.31, stage2: 4.64, stage3: 4.29, stage4: 4.27, games2: 154, games3: 630, games4: 795, id: 171, rank: 3, tags: "" },
  { augment: "Deadeye Crest", games: 1121, avg: 4.51, stage2: 4.4, stage3: 4.4, stage4: 4.58, games2: 166, games3: 301, games4: 654, id: 65, rank: 2, tags: "" },
  { augment: "Deadeye Crown", games: 984, avg: 4.61, stage2: 4.64, stage3: 4.44, stage4: 4.77, games2: 287, games3: 343, games4: 354, id: 172, rank: 3, tags: "" },
  { augment: "Deadeye Heart", games: 1149, avg: 4.49, stage2: 4.49, stage3: 4.58, stage4: 4.09, games2: 354, games3: 641, games4: 154, id: 13, rank: 1, tags: "" },
  { augment: "Dedication", games: 1511, avg: 4.81, stage2: 4.92, stage3: 4.76, stage4: '', games2: 491, games3: 1020, games4: 0, id: 66, rank: 2, tags: "" },
  { augment: "Defensive Dash", games: 881, avg: 4.37, stage2: 4.51, stage3: 4.12, stage4: 4.44, games2: 110, games3: 229, games4: 542, id: 67, rank: 2, tags: "" },
  { augment: "Demacia Crest", games: 298, avg: 4.82, stage2: 4.57, stage3: 5.21, stage4: 4.76, games2: 61, games3: 62, games4: 175, id: 236, rank: 2, tags: "" },
  { augment: "Demacia Crown", games: 156, avg: 4.75, stage2: 4.83, stage3: 4.82, stage4: 4.65, games2: 40, games3: 50, games4: 66, id: 173, rank: 3, tags: "" },
  { augment: "Demonflare", games: 199, avg: 4.49, stage2: 4.44, stage3: 4.87, stage4: '', games2: 176, games3: 23, games4: 0, id: 68, rank: 2, tags: "" },
  { augment: "Double Trouble II", games: 1071, avg: 4.36, stage2: 4.35, stage3: 4.39, stage4: '', games2: 769, games3: 302, games4: 0, id: 69, rank: 2, tags: "" },
  { augment: "Double Trouble III", games: 1128, avg: 4.46, stage2: 4.43, stage3: 4.55, stage4: '', games2: 825, games3: 303, games4: 0, id: 174, rank: 3, tags: "" },
  { augment: "Dueling Gunners", games: 1108, avg: 4.78, stage2: 5.2, stage3: 5.0, stage4: 4.63, games2: 153, games3: 218, games4: 737, id: 70, rank: 2, tags: "" },
  { augment: "Early Education", games: 419, avg: 4.85, stage2: 4.85, stage3: '', stage4: '', games2: 419, games3: 0, games4: 0, id: 71, rank: 2, tags: "" },
  { augment: "Endless Hordes", games: 591, avg: 4.62, stage2: '', stage3: 4.33, stage4: 5.02, games2: 1, games3: 348, games4: 242, id: 175, rank: 3, tags: "" },
  { augment: "Endurance Training", games: 283, avg: 4.73, stage2: 4.73, stage3: '', stage4: '', games2: 283, games3: 0, games4: 0, id: 72, rank: 2, tags: "" },
  { augment: "Escort Quest", games: 450, avg: 4.43, stage2: 4.36, stage3: 4.55, stage4: '', games2: 288, games3: 162, games4: 0, id: 73, rank: 2, tags: "" },
  { augment: "Final Ascension", games: 175, avg: 4.75, stage2: '', stage3: '', stage4: 4.75, games2: 0, games3: 0, games4: 175, id: 529, rank: 3, tags: "Legend Veigar Vladimir" },
  { augment: "Final Grab Bag", games: 113, avg: 4.42, stage2: '', stage3: '', stage4: 4.42, games2: 0, games3: 0, games4: 113, id: 536, rank: 1, tags: "Legend Pengu Urf" },
  { augment: "Final Grab Bag II", games: 1347, avg: 4.72, stage2: '', stage3: '', stage4: 4.72, games2: 0, games3: 2, games4: 1345, id: 537, rank: 2, tags: "Legend Pengu Urf" },
  { augment: "Final Reserves", games: 377, avg: 4.56, stage2: '', stage3: 4.56, stage4: '', games2: 0, games3: 377, games4: 0, id: 177, rank: 3, tags: "" },
  { augment: "Freljord Heart", games: 2352, avg: 4.44, stage2: 4.64, stage3: 4.38, stage4: 4.4, games2: 411, games3: 217, games4: 1724, id: 74, rank: 2, tags: "" },
  { augment: "Freljord Soul", games: 941, avg: 4.53, stage2: 5.0, stage3: 4.31, stage4: 4.43, games2: 201, games3: 150, games4: 590, id: 178, rank: 3, tags: "" },
  { augment: "Frequent Flier", games: 1345, avg: 4.95, stage2: 5.05, stage3: 4.9, stage4: '', games2: 498, games3: 847, games4: 0, id: 75, rank: 2, tags: "" },
  { augment: "Gargantuan Resolve", games: 1094, avg: 4.74, stage2: 4.69, stage3: 4.8, stage4: '', games2: 508, games3: 586, games4: 0, id: 76, rank: 2, tags: "" },
  { augment: "Giant Grab Bag", games: 532, avg: 4.68, stage2: '', stage3: 4.65, stage4: '', games2: 5, games3: 527, games4: 0, id: 541, rank: 3, tags: "Legend Urf Ezreal" },
  { augment: "Gifts from the Fallen", games: 5319, avg: 4.27, stage2: 4.32, stage3: 4.22, stage4: 4.27, games2: 671, games3: 1414, games4: 3234, id: 77, rank: 2, tags: "" },
  { augment: "Glacial Breeze", games: 1875, avg: 4.17, stage2: 4.25, stage3: 3.88, stage4: 4.19, games2: 320, games3: 204, games4: 1351, id: 78, rank: 2, tags: "" },
  { augment: "Gold Legend Augment", games: 35749, avg: 4.52, stage2: 4.52, stage3: '', stage4: '', games2: 35749, games3: 0, games4: 0, id: 432, rank: 2, tags: "" },
  { augment: "Golden Ticket", games: 3726, avg: 4.47, stage2: 4.5, stage3: 4.41, stage4: 4.5, games2: 1048, games3: 1480, games4: 1198, id: 180, rank: 3, tags: "" },
  { augment: "Gotta Go Fast!", games: 78, avg: 4.73, stage2: '', stage3: '', stage4: 4.73, games2: 0, games3: 0, games4: 78, id: 554, rank: 1, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast! II", games: 961, avg: 4.54, stage2: '', stage3: '', stage4: 4.54, games2: 0, games3: 0, games4: 961, id: 555, rank: 2, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast!!! III", games: 326, avg: 4.68, stage2: '', stage3: '', stage4: 4.68, games2: 0, games3: 0, games4: 326, id: 556, rank: 3, tags: "Legend Master Yi" },
  { augment: "Gunner Crest", games: 961, avg: 4.45, stage2: 4.77, stage3: 4.52, stage4: 4.36, games2: 137, games3: 223, games4: 601, id: 79, rank: 2, tags: "" },
  { augment: "Gunner Crown", games: 596, avg: 4.73, stage2: 4.83, stage3: 4.84, stage4: 4.61, games2: 155, games3: 175, games4: 266, id: 181, rank: 3, tags: "" },
  { augment: "Gunner Heart", games: 778, avg: 4.67, stage2: 4.95, stage3: 4.6, stage4: 4.3, games2: 272, games3: 380, games4: 126, id: 15, rank: 1, tags: "" },
  { augment: "Harmacist I", games: 1978, avg: 4.43, stage2: 4.5, stage3: 4.36, stage4: 4.65, games2: 324, games3: 1312, games4: 342, id: 16, rank: 1, tags: "" },
  { augment: "Harmacist II", games: 2856, avg: 4.48, stage2: 4.48, stage3: 4.54, stage4: 4.45, games2: 258, games3: 756, games4: 1842, id: 80, rank: 2, tags: "" },
  { augment: "Harmacist III", games: 1828, avg: 4.42, stage2: 4.93, stage3: 4.37, stage4: 4.34, games2: 187, games3: 719, games4: 922, id: 182, rank: 3, tags: "" },
  { augment: "Haunted Shell", games: 435, avg: 4.72, stage2: 4.84, stage3: 4.92, stage4: 4.6, games2: 74, games3: 105, games4: 256, id: 81, rank: 2, tags: "" },
  { augment: "Healing Orbs I", games: 2481, avg: 4.38, stage2: 4.5, stage3: 4.34, stage4: 4.42, games2: 581, games3: 1571, games4: 329, id: 17, rank: 1, tags: "" },
  { augment: "Healing Orbs II", games: 2709, avg: 4.62, stage2: 4.91, stage3: 4.6, stage4: 4.57, games2: 332, games3: 735, games4: 1642, id: 82, rank: 2, tags: "" },
  { augment: "Hedge Fund", games: 332, avg: 4.6, stage2: 4.6, stage3: '', stage4: '', games2: 332, games3: 0, games4: 0, id: 183, rank: 3, tags: "Legend Tahm Kench TK" },
  { augment: "Hedge Fund+", games: 995, avg: 4.32, stage2: '', stage3: 4.3, stage4: '', games2: 6, games3: 989, games4: 0, id: 184, rank: 3, tags: "" },
  { augment: "Hedge Fund++", games: 1192, avg: 4.44, stage2: '', stage3: '', stage4: 4.44, games2: 0, games3: 2, games4: 1190, id: 185, rank: 3, tags: "" },
  { augment: "Hustler", games: 205, avg: 4.82, stage2: 4.82, stage3: '', stage4: '', games2: 205, games3: 0, games4: 0, id: 239, rank: 2, tags: "" },
  { augment: "Idealism", games: 2719, avg: 4.35, stage2: 4.38, stage3: 4.33, stage4: '', games2: 1194, games3: 1525, games4: 0, id: 83, rank: 2, tags: "" },
  { augment: "Impenetrable Bulwark", games: 767, avg: 4.63, stage2: '', stage3: 4.71, stage4: 4.55, games2: 4, games3: 338, games4: 425, id: 187, rank: 3, tags: "" },
  { augment: "Inconsistency", games: 1149, avg: 4.34, stage2: 4.34, stage3: '', stage4: '', games2: 1149, games3: 0, games4: 0, id: 18, rank: 1, tags: "" },
  { augment: "Indomitable Will", games: 1258, avg: 4.65, stage2: 4.68, stage3: 4.75, stage4: 4.23, games2: 241, games3: 811, games4: 206, id: 84, rank: 1, tags: "" },
  { augment: "Infernal Contract", games: 997, avg: 4.54, stage2: '', stage3: '', stage4: 4.54, games2: 0, games3: 0, games4: 997, id: 228, rank: 3, tags: "" },
  { augment: "Infusion", games: 2137, avg: 4.54, stage2: 4.73, stage3: 4.54, stage4: 4.48, games2: 315, games3: 602, games4: 1220, id: 85, rank: 2, tags: "" },
  { augment: "Invoker Crest", games: 1329, avg: 4.58, stage2: 4.64, stage3: 4.43, stage4: 4.63, games2: 316, games3: 352, games4: 661, id: 86, rank: 2, tags: "" },
  { augment: "Invoker Crown", games: 975, avg: 4.3, stage2: 4.27, stage3: 4.25, stage4: 4.38, games2: 347, games3: 317, games4: 311, id: 188, rank: 3, tags: "" },
  { augment: "Invoker Heart", games: 1338, avg: 4.33, stage2: 4.42, stage3: 4.25, stage4: 4.36, games2: 533, games3: 674, games4: 131, id: 19, rank: 1, tags: "" },
  { augment: "Ionia Crest", games: 1353, avg: 4.5, stage2: 4.48, stage3: 4.25, stage4: 4.65, games2: 375, games3: 346, games4: 632, id: 87, rank: 2, tags: "" },
  { augment: "Ionia Crown", games: 673, avg: 4.47, stage2: 4.75, stage3: 4.18, stage4: 4.47, games2: 216, games3: 223, games4: 234, id: 189, rank: 3, tags: "" },
  { augment: "Iron Assets", games: 633, avg: 4.71, stage2: 4.71, stage3: '', stage4: '', games2: 633, games3: 0, games4: 0, id: 21, rank: 1, tags: "" },
  { augment: "It Pays To Learn", games: 417, avg: 4.42, stage2: '', stage3: '', stage4: 4.41, games2: 0, games3: 1, games4: 416, id: 548, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn II", games: 7618, avg: 4.4, stage2: '', stage3: '', stage4: 4.39, games2: 0, games3: 10, games4: 7608, id: 549, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn III", games: 2459, avg: 4.3, stage2: '', stage3: '', stage4: 4.3, games2: 0, games3: 3, games4: 2456, id: 550, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Item Grab Bag I", games: 338, avg: 4.96, stage2: '', stage3: 4.93, stage4: '', games2: 5, games3: 333, games4: 0, id: 533, rank: 1, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag II", games: 640, avg: 4.81, stage2: '', stage3: 4.75, stage4: '', games2: 13, games3: 627, games4: 0, id: 534, rank: 2, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag III", games: 214, avg: 5.36, stage2: '', stage3: 5.3, stage4: '', games2: 6, games3: 208, games4: 0, id: 535, rank: 3, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Jeweled Lotus I", games: 2607, avg: 4.48, stage2: 4.43, stage3: 4.47, stage4: 4.59, games2: 419, games3: 1851, games4: 337, id: 23, rank: 1, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus II", games: 4450, avg: 4.54, stage2: 4.75, stage3: 4.58, stage4: 4.46, games2: 595, games3: 1312, games4: 2543, id: 88, rank: 2, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus III", games: 3336, avg: 4.32, stage2: 4.75, stage3: 4.27, stage4: 4.24, games2: 411, games3: 1431, games4: 1494, id: 190, rank: 3, tags: "Legend Veigar" },
  { augment: "Job Well Done", games: 9173, avg: 4.57, stage2: '', stage3: '', stage4: 4.57, games2: 0, games3: 5, games4: 9168, id: 516, rank: 2, tags: "Legend Ornn" },
  { augment: "Job's Done", games: 1007, avg: 4.41, stage2: '', stage3: '', stage4: 4.41, games2: 0, games3: 0, games4: 1007, id: 515, rank: 1, tags: "Legend Ornn" },
  { augment: "Juggernaut Crest", games: 603, avg: 4.57, stage2: 5.11, stage3: 4.93, stage4: 4.37, games2: 61, games3: 133, games4: 409, id: 89, rank: 2, tags: "" },
  { augment: "Juggernaut Crown", games: 456, avg: 4.45, stage2: 4.3, stage3: 4.73, stage4: 4.34, games2: 143, games3: 138, games4: 175, id: 191, rank: 3, tags: "" },
  { augment: "Juggernaut Heart", games: 462, avg: 4.62, stage2: 4.58, stage3: 4.68, stage4: 4.46, games2: 127, games3: 267, games4: 68, id: 24, rank: 1, tags: "" },
  { augment: "Know Your Enemy", games: 3658, avg: 4.18, stage2: 4.15, stage3: 4.26, stage4: 4.15, games2: 453, games3: 951, games4: 2254, id: 90, rank: 2, tags: "" },
  { augment: "Knowledge Download I", games: 2071, avg: 4.66, stage2: '', stage3: 4.63, stage4: '', games2: 22, games3: 2049, games4: 0, id: 545, rank: 1, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download II", games: 4691, avg: 4.66, stage2: '', stage3: 4.64, stage4: '', games2: 39, games3: 4652, games4: 0, id: 546, rank: 2, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download III", games: 2102, avg: 4.59, stage2: '', stage3: 4.56, stage4: '', games2: 17, games3: 2085, games4: 0, id: 547, rank: 3, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Large Forge", games: 4099, avg: 4.68, stage2: '', stage3: 4.67, stage4: '', games2: 12, games3: 4087, games4: 0, id: 514, rank: 3, tags: "Legend Ornn Bard" },
  { augment: "Last Stand", games: 739, avg: 4.65, stage2: '', stage3: 4.63, stage4: '', games2: 3, games3: 736, games4: 0, id: 91, rank: 2, tags: "" },
  { augment: "Lategame Specialist", games: 1140, avg: 4.08, stage2: '', stage3: 4.06, stage4: '', games2: 5, games3: 1134, games4: 1, id: 235, rank: 1, tags: "" },
  { augment: "Latent Forge", games: 548, avg: 4.44, stage2: 4.43, stage3: '', stage4: '', games2: 547, games3: 1, games4: 0, id: 25, rank: 1, tags: "Legend Ornn" },
  { augment: "Level Up!", games: 3525, avg: 4.3, stage2: 4.46, stage3: 4.11, stage4: 4.47, games2: 664, games3: 1654, games4: 1207, id: 192, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Library Card", games: 2347, avg: 4.62, stage2: '', stage3: '', stage4: 4.61, games2: 0, games3: 3, games4: 2344, id: 92, rank: 2, tags: "" },
  { augment: "Living Forge", games: 231, avg: 4.51, stage2: 4.51, stage3: '', stage4: '', games2: 231, games3: 0, games4: 0, id: 193, rank: 3, tags: "Legend Ornn" },
  { augment: "Long Distance Pals II", games: 7847, avg: 4.36, stage2: 4.52, stage3: 4.35, stage4: 4.32, games2: 1219, games3: 2016, games4: 4612, id: 93, rank: 2, tags: "" },
  { augment: "Loving Invocation", games: 1507, avg: 4.35, stage2: 4.18, stage3: 4.36, stage4: 4.41, games2: 349, games3: 346, games4: 812, id: 94, rank: 2, tags: "" },
  { augment: "Lucky Gloves", games: 617, avg: 4.89, stage2: 4.86, stage3: 4.96, stage4: 4.86, games2: 130, games3: 192, games4: 295, id: 194, rank: 3, tags: "" },
  { augment: "Magic Wand", games: 4068, avg: 4.37, stage2: 4.37, stage3: 4.3, stage4: 4.4, games2: 734, games3: 1169, games4: 2165, id: 95, rank: 2, tags: "" },
  { augment: "Mana Burn", games: 1216, avg: 4.39, stage2: '', stage3: '', stage4: 4.39, games2: 0, games3: 1, games4: 1215, id: 96, rank: 2, tags: "" },
  { augment: "March of Progress", games: 412, avg: 4.58, stage2: 4.58, stage3: '', stage4: '', games2: 412, games3: 0, games4: 0, id: 195, rank: 3, tags: "" },
  { augment: "Martyr", games: 1445, avg: 4.33, stage2: 4.83, stage3: 4.21, stage4: 4.29, games2: 148, games3: 368, games4: 929, id: 97, rank: 2, tags: "" },
  { augment: "Masterful Job", games: 3154, avg: 4.38, stage2: '', stage3: '', stage4: 4.38, games2: 0, games3: 1, games4: 3153, id: 517, rank: 3, tags: "Legend Ornn" },
  { augment: "Medium Forge", games: 8948, avg: 4.43, stage2: '', stage3: 4.42, stage4: 5.0, games2: 42, games3: 8905, games4: 1, id: 513, rank: 2, tags: "Legend Ornn Bard" },
  { augment: "Medium-End Shopping", games: 4990, avg: 4.41, stage2: 4.33, stage3: 4.43, stage4: 4.53, games2: 1551, games3: 2912, games4: 527, id: 98, rank: 1, tags: "" },
  { augment: "Metabolic Accelerator", games: 215, avg: 4.9, stage2: 4.9, stage3: '', stage4: '', games2: 215, games3: 0, games4: 0, id: 99, rank: 2, tags: "Legend Pengu" },
  { augment: "Missed Connections", games: 395, avg: 4.69, stage2: '', stage3: 4.6, stage4: 5.64, games2: 2, games3: 368, games4: 25, id: 27, rank: 1, tags: "" },
  { augment: "Money Money Money!", games: 804, avg: 4.57, stage2: '', stage3: '', stage4: 4.57, games2: 0, games3: 1, games4: 803, id: 523, rank: 3, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money Money!", games: 2557, avg: 4.67, stage2: '', stage3: '', stage4: 4.66, games2: 0, games3: 6, games4: 2551, id: 522, rank: 2, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money!", games: 139, avg: 4.8, stage2: '', stage3: '', stage4: 4.78, games2: 0, games3: 1, games4: 138, id: 521, rank: 1, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Morning Light", games: 709, avg: 4.62, stage2: 4.85, stage3: 4.4, stage4: 4.66, games2: 89, games3: 174, games4: 446, id: 100, rank: 2, tags: "" },
  { augment: "Multicaster Heart", games: 404, avg: 5.19, stage2: 5.83, stage3: 5.29, stage4: 4.96, games2: 72, games3: 87, games4: 245, id: 101, rank: 2, tags: "" },
  { augment: "Multicaster Soul", games: 304, avg: 5.1, stage2: 5.1, stage3: 5.48, stage4: 4.75, games2: 111, games3: 92, games4: 101, id: 196, rank: 3, tags: "" },
  { augment: "Not Today", games: 995, avg: 4.63, stage2: 4.62, stage3: 4.59, stage4: 4.64, games2: 162, games3: 232, games4: 601, id: 102, rank: 2, tags: "" },
  { augment: "Noxus Crest", games: 1068, avg: 4.32, stage2: 4.52, stage3: 3.98, stage4: 4.35, games2: 304, games3: 239, games4: 525, id: 103, rank: 2, tags: "" },
  { augment: "Noxus Crown", games: 832, avg: 3.79, stage2: 3.55, stage3: 3.88, stage4: 4.12, games2: 369, games3: 265, games4: 198, id: 197, rank: 3, tags: "" },
  { augment: "On a Roll", games: 673, avg: 5.05, stage2: 4.95, stage3: 5.15, stage4: '', games2: 318, games3: 355, games4: 0, id: 104, rank: 1, tags: "Legend Lee Sin" },
  { augment: "One Twos Three", games: 348, avg: 4.37, stage2: 4.37, stage3: '', stage4: '', games2: 348, games3: 0, games4: 0, id: 29, rank: 1, tags: "Legend Caitlyn" },
  { augment: "One, Two, Five!", games: 320, avg: 4.51, stage2: '', stage3: '', stage4: 4.51, games2: 0, games3: 0, games4: 320, id: 237, rank: 1, tags: "" },
  { augment: "Overcharged Manafont", games: 1858, avg: 4.25, stage2: 4.07, stage3: 4.06, stage4: 4.42, games2: 350, games3: 531, games4: 977, id: 105, rank: 2, tags: "" },
  { augment: "Overwhelming Force", games: 864, avg: 4.63, stage2: '', stage3: 4.6, stage4: 4.66, games2: 0, games3: 465, games4: 399, id: 198, rank: 3, tags: "" },
  { augment: "Pandora's Bench", games: 3375, avg: 4.76, stage2: 4.53, stage3: 4.84, stage4: 4.91, games2: 985, games3: 2068, games4: 322, id: 30, rank: 1, tags: "" },
  { augment: "Pandora's Items", games: 2470, avg: 4.67, stage2: 4.56, stage3: 4.7, stage4: 4.74, games2: 569, games3: 1671, games4: 230, id: 31, rank: 1, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items II", games: 2051, avg: 4.9, stage2: 4.7, stage3: 4.89, stage4: 4.97, games2: 349, games3: 635, games4: 1067, id: 106, rank: 2, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items III", games: 1388, avg: 4.83, stage2: 4.68, stage3: 4.71, stage4: 5.03, games2: 237, games3: 601, games4: 550, id: 199, rank: 3, tags: "Legend Twisted Fate TF" },
  { augment: "Partial Ascension", games: 26, avg: 4.12, stage2: '', stage3: '', stage4: 4.12, games2: 0, games3: 0, games4: 26, id: 527, rank: 1, tags: "Legend Veigar Vladimir" },
  { augment: "Parting Gifts", games: 401, avg: 4.58, stage2: 4.18, stage3: 4.57, stage4: 4.7, games2: 61, games3: 109, games4: 231, id: 200, rank: 2, tags: "" },
  { augment: "Patient Study", games: 532, avg: 4.59, stage2: 4.59, stage3: '', stage4: '', games2: 532, games3: 0, games4: 0, id: 107, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "Perfected Repetition", games: 547, avg: 5.1, stage2: 5.42, stage3: 5.11, stage4: 4.95, games2: 125, games3: 122, games4: 300, id: 108, rank: 2, tags: "" },
  { augment: "Petricite Shackles", games: 465, avg: 4.37, stage2: 4.62, stage3: 4.63, stage4: 4.17, games2: 104, games3: 93, games4: 268, id: 109, rank: 2, tags: "" },
  { augment: "Phreaky Friday", games: 589, avg: 4.21, stage2: 4.21, stage3: '', stage4: '', games2: 589, games3: 0, games4: 0, id: 201, rank: 3, tags: "" },
  { augment: "Phreaky Friday +", games: 1651, avg: 4.29, stage2: '', stage3: 4.14, stage4: 4.45, games2: 1, games3: 876, games4: 774, id: 202, rank: 3, tags: "" },
  { augment: "Piltover Heart", games: 522, avg: 4.67, stage2: 4.42, stage3: 5.35, stage4: 5.37, games2: 383, games3: 60, games4: 79, id: 110, rank: 2, tags: "" },
  { augment: "Piltover Soul", games: 297, avg: 4.47, stage2: 4.35, stage3: 4.83, stage4: 4.89, games2: 223, games3: 46, games4: 28, id: 203, rank: 3, tags: "" },
  { augment: "Portable Forge", games: 4818, avg: 4.58, stage2: 4.43, stage3: 4.57, stage4: 4.63, games2: 856, games3: 1484, games4: 2478, id: 111, rank: 2, tags: "Legend Ornn" },
  { augment: "Prismatic Legend Augment", games: 12416, avg: 4.45, stage2: 4.45, stage3: '', stage4: '', games2: 12416, games3: 0, games4: 0, id: 433, rank: 3, tags: "" },
  { augment: "Pumping Up I", games: 271, avg: 4.65, stage2: 4.64, stage3: '', stage4: '', games2: 270, games3: 1, games4: 0, id: 32, rank: 1, tags: "Legend Master Yi" },
  { augment: "Pumping Up II", games: 472, avg: 4.71, stage2: 4.71, stage3: '', stage4: '', games2: 472, games3: 0, games4: 0, id: 112, rank: 2, tags: "Legend Master Yi" },
  { augment: "Pumping Up III", games: 266, avg: 4.7, stage2: 4.7, stage3: '', stage4: '', games2: 266, games3: 0, games4: 0, id: 204, rank: 3, tags: "Legend Master Yi" },
  { augment: "Radiant Relics", games: 3171, avg: 4.61, stage2: 4.85, stage3: 4.6, stage4: 4.5, games2: 670, games3: 1239, games4: 1262, id: 205, rank: 3, tags: "" },
  { augment: "Ravenous Hunter", games: 1662, avg: 4.02, stage2: 3.99, stage3: 4.25, stage4: '', games2: 1468, games3: 194, games4: 0, id: 114, rank: 2, tags: "" },
  { augment: "Recombobulator", games: 1038, avg: 4.52, stage2: '', stage3: 4.47, stage4: 4.69, games2: 1, games3: 836, games4: 201, id: 33, rank: 1, tags: "" },
  { augment: "Red Buff", games: 2904, avg: 4.49, stage2: 4.62, stage3: 4.46, stage4: 4.33, games2: 777, games3: 1800, games4: 327, id: 34, rank: 1, tags: "" },
  { augment: "Return on Investment", games: 1986, avg: 4.67, stage2: 4.96, stage3: 4.86, stage4: 4.54, games2: 216, games3: 560, games4: 1210, id: 115, rank: 2, tags: "" },
  { augment: "Rich Get Richer", games: 571, avg: 4.67, stage2: 4.67, stage3: '', stage4: '', games2: 571, games3: 0, games4: 0, id: 116, rank: 2, tags: "Legend Tahm Kench TK" },
  { augment: "Rich Get Richer+", games: 947, avg: 4.64, stage2: '', stage3: 4.64, stage4: '', games2: 1, games3: 946, games4: 0, id: 117, rank: 2, tags: "" },
  { augment: "Riftwalk", games: 1125, avg: 4.28, stage2: 4.25, stage3: 4.74, stage4: '', games2: 1053, games3: 72, games4: 0, id: 118, rank: 2, tags: "" },
  { augment: "Risky Moves", games: 1102, avg: 4.23, stage2: 4.23, stage3: '', stage4: '', games2: 1102, games3: 0, games4: 0, id: 35, rank: 1, tags: "" },
  { augment: "Rogue Crest", games: 181, avg: 4.95, stage2: 4.88, stage3: 4.7, stage4: 5.08, games2: 33, games3: 44, games4: 104, id: 119, rank: 2, tags: "" },
  { augment: "Rogue Crown", games: 156, avg: 4.36, stage2: 3.9, stage3: 4.7, stage4: 4.72, games2: 67, games3: 43, games4: 46, id: 206, rank: 3, tags: "" },
  { augment: "Rogue Heart", games: 137, avg: 4.88, stage2: 4.71, stage3: 4.89, stage4: 5.8, games2: 56, games3: 71, games4: 10, id: 36, rank: 1, tags: "" },
  { augment: "Roll The Dice", games: 1132, avg: 4.49, stage2: 4.6, stage3: 4.46, stage4: 4.46, games2: 240, games3: 415, games4: 477, id: 207, rank: 3, tags: "" },
  { augment: "Rolling For Days I", games: 134, avg: 5.0, stage2: '', stage3: '', stage4: 4.98, games2: 0, games3: 1, games4: 133, id: 530, rank: 1, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days II", games: 1520, avg: 4.96, stage2: '', stage3: '', stage4: 4.96, games2: 0, games3: 0, games4: 1520, id: 531, rank: 2, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days III", games: 514, avg: 4.86, stage2: '', stage3: '', stage4: 4.86, games2: 0, games3: 0, games4: 514, id: 532, rank: 3, tags: "Legend Draven Caitlyn" },
  { augment: "Salvage Bin", games: 135, avg: 4.78, stage2: 4.78, stage3: '', stage4: '', games2: 135, games3: 0, games4: 0, id: 120, rank: 2, tags: "" },
  { augment: "Salvage Bin+", games: 614, avg: 4.9, stage2: 4.78, stage3: 5.01, stage4: 4.83, games2: 18, games3: 219, games4: 377, id: 234, rank: 2, tags: "" },
  { augment: "Scoped Weapons", games: 1199, avg: 4.79, stage2: 5.17, stage3: 4.92, stage4: 4.67, games2: 130, games3: 308, games4: 761, id: 121, rank: 2, tags: "" },
  { augment: "Scrappy Inventions", games: 78, avg: 4.78, stage2: 4.78, stage3: '', stage4: '', games2: 78, games3: 0, games4: 0, id: 238, rank: 2, tags: "" },
  { augment: "Seeing Double I", games: 61, avg: 5.0, stage2: '', stage3: '', stage4: 5.0, games2: 0, games3: 0, games4: 61, id: 563, rank: 1, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double II", games: 757, avg: 5.05, stage2: '', stage3: '', stage4: 5.04, games2: 0, games3: 4, games4: 753, id: 564, rank: 2, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double III", games: 207, avg: 5.18, stage2: '', stage3: '', stage4: 5.18, games2: 0, games3: 0, games4: 207, id: 565, rank: 3, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Sentinel's Spirit", games: 906, avg: 4.42, stage2: 4.07, stage3: 4.44, stage4: 4.59, games2: 248, games3: 195, games4: 463, id: 122, rank: 2, tags: "" },
  { augment: "Shadow Isles Crest", games: 901, avg: 4.37, stage2: 4.39, stage3: 4.19, stage4: 4.44, games2: 296, games3: 200, games4: 405, id: 123, rank: 2, tags: "" },
  { augment: "Shadow Isles Crown", games: 709, avg: 4.04, stage2: 3.92, stage3: 4.08, stage4: 4.29, games2: 387, games3: 152, games4: 170, id: 208, rank: 3, tags: "" },
  { augment: "Shadow Isles Heart", games: 601, avg: 4.77, stage2: 5.05, stage3: 4.57, stage4: 4.27, games2: 283, games3: 256, games4: 62, id: 37, rank: 1, tags: "" },
  { augment: "Shimmering Inventors", games: 165, avg: 4.97, stage2: 4.54, stage3: 5.47, stage4: 5.54, games2: 92, games3: 32, games4: 41, id: 124, rank: 2, tags: "" },
  { augment: "Shoplifting", games: 513, avg: 4.45, stage2: '', stage3: 4.43, stage4: '', games2: 3, games3: 510, games4: 0, id: 125, rank: 2, tags: "" },
  { augment: "Shopping Spree", games: 163, avg: 4.58, stage2: 4.58, stage3: '', stage4: '', games2: 163, games3: 0, games4: 0, id: 186, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Shurima Crest", games: 790, avg: 4.53, stage2: 4.9, stage3: 4.24, stage4: 4.49, games2: 157, games3: 154, games4: 479, id: 126, rank: 2, tags: "" },
  { augment: "Shurima Crown", games: 521, avg: 4.35, stage2: 4.55, stage3: 4.32, stage4: 4.11, games2: 224, games3: 123, games4: 174, id: 209, rank: 3, tags: "" },
  { augment: "Shurima's Legacy", games: 1033, avg: 4.23, stage2: 4.25, stage3: 4.07, stage4: 4.28, games2: 361, games3: 175, games4: 497, id: 127, rank: 2, tags: "" },
  { augment: "Silver Legend Augment", games: 11056, avg: 4.51, stage2: 4.51, stage3: '', stage4: '', games2: 11056, games3: 0, games4: 0, id: 431, rank: 1, tags: "" },
  { augment: "Silver Spoon", games: 1016, avg: 4.41, stage2: 4.41, stage3: '', stage4: '', games2: 1016, games3: 0, games4: 0, id: 39, rank: 1, tags: "" },
  { augment: "Silver Ticket", games: 1322, avg: 4.65, stage2: 4.72, stage3: 4.61, stage4: '', games2: 550, games3: 772, games4: 0, id: 128, rank: 2, tags: "" },
  { augment: "Slayer Crest", games: 737, avg: 4.82, stage2: 5.42, stage3: 4.76, stage4: 4.67, games2: 128, games3: 139, games4: 470, id: 129, rank: 2, tags: "" },
  { augment: "Slayer Crown", games: 343, avg: 4.75, stage2: 4.9, stage3: 4.48, stage4: 4.82, games2: 88, games3: 91, games4: 164, id: 210, rank: 3, tags: "" },
  { augment: "Slayer Heart", games: 493, avg: 4.99, stage2: 5.23, stage3: 4.86, stage4: 4.85, games2: 179, games3: 240, games4: 74, id: 40, rank: 1, tags: "" },
  { augment: "Slayer's Resolve", games: 504, avg: 4.81, stage2: 5.18, stage3: 4.37, stage4: 4.85, games2: 85, games3: 101, games4: 318, id: 130, rank: 2, tags: "" },
  { augment: "Sleight of Hand", games: 193, avg: 5.04, stage2: 5.38, stage3: 4.83, stage4: '', games2: 72, games3: 121, games4: 0, id: 131, rank: 2, tags: "" },
  { augment: "Small Forge", games: 6913, avg: 4.4, stage2: '', stage3: 4.39, stage4: '', games2: 18, games3: 6895, games4: 0, id: 512, rank: 1, tags: "Legend Ornn Bard" },
  { augment: "Social Distancing I", games: 2603, avg: 4.28, stage2: 4.09, stage3: 4.32, stage4: 4.5, games2: 680, games3: 1611, games4: 312, id: 41, rank: 1, tags: "" },
  { augment: "Social Distancing II", games: 4387, avg: 4.3, stage2: 4.36, stage3: 4.16, stage4: 4.36, games2: 661, games3: 1244, games4: 2482, id: 132, rank: 2, tags: "" },
  { augment: "Social Distancing III", games: 3084, avg: 4.27, stage2: 4.55, stage3: 4.21, stage4: 4.18, games2: 619, games3: 1139, games4: 1326, id: 211, rank: 3, tags: "" },
  { augment: "Sorcerer Crest", games: 2191, avg: 4.39, stage2: 4.46, stage3: 4.31, stage4: 4.4, games2: 446, games3: 635, games4: 1110, id: 133, rank: 2, tags: "" },
  { augment: "Sorcerer Crown", games: 1237, avg: 3.99, stage2: 3.91, stage3: 3.95, stage4: 4.12, games2: 381, games3: 442, games4: 414, id: 212, rank: 3, tags: "" },
  { augment: "Sorcerer Heart", games: 1838, avg: 4.28, stage2: 4.26, stage3: 4.27, stage4: 4.47, games2: 712, games3: 953, games4: 173, id: 42, rank: 1, tags: "" },
  { augment: "Spectral Supplies", games: 360, avg: 4.71, stage2: '', stage3: 4.99, stage4: 4.54, games2: 0, games3: 132, games4: 228, id: 179, rank: 3, tags: "" },
  { augment: "Spoils of War I", games: 387, avg: 4.4, stage2: 4.4, stage3: '', stage4: '', games2: 387, games3: 0, games4: 0, id: 43, rank: 1, tags: "Legend Draven" },
  { augment: "Spoils of War II", games: 272, avg: 4.58, stage2: 4.58, stage3: '', stage4: '', games2: 272, games3: 0, games4: 0, id: 134, rank: 2, tags: "Legend Draven" },
  { augment: "Spoils of War III", games: 148, avg: 4.58, stage2: 4.58, stage3: '', stage4: '', games2: 148, games3: 0, games4: 0, id: 213, rank: 3, tags: "Legend Draven" },
  { augment: "Stable Evolution", games: 795, avg: 4.08, stage2: 3.68, stage3: 4.06, stage4: 4.29, games2: 214, games3: 177, games4: 404, id: 113, rank: 2, tags: "" },
  { augment: "Stars are Born", games: 486, avg: 4.6, stage2: 4.6, stage3: '', stage4: '', games2: 486, games3: 0, games4: 0, id: 135, rank: 2, tags: "Legend Caitlyn" },
  { augment: "Starter Kit", games: 516, avg: 4.87, stage2: 4.87, stage3: '', stage4: '', games2: 516, games3: 0, games4: 0, id: 214, rank: 3, tags: "Legend Caitlyn" },
  { augment: "Stellacorn's Blessing", games: 1088, avg: 4.42, stage2: 4.4, stage3: 4.27, stage4: 4.46, games2: 302, games3: 129, games4: 657, id: 136, rank: 2, tags: "" },
  { augment: "Strategist Heart", games: 923, avg: 4.81, stage2: 4.72, stage3: 4.87, stage4: 4.82, games2: 154, games3: 112, games4: 657, id: 137, rank: 2, tags: "" },
  { augment: "Strategist Soul", games: 390, avg: 4.79, stage2: 5.11, stage3: 5.06, stage4: 4.57, games2: 87, games3: 80, games4: 223, id: 215, rank: 3, tags: "" },
  { augment: "Suppressing Fire", games: 1405, avg: 4.2, stage2: 4.13, stage3: 4.03, stage4: 4.27, games2: 198, games3: 313, games4: 894, id: 138, rank: 2, tags: "" },
  { augment: "Tactical Superiority", games: 672, avg: 4.67, stage2: 4.6, stage3: 4.49, stage4: 4.72, games2: 129, games3: 85, games4: 458, id: 139, rank: 2, tags: "" },
  { augment: "Tactician's Tools", games: 1615, avg: 4.82, stage2: 5.29, stage3: 4.85, stage4: 4.62, games2: 284, games3: 582, games4: 749, id: 216, rank: 3, tags: "" },
  { augment: "Targon Heart", games: 1143, avg: 4.87, stage2: 4.91, stage3: 4.77, stage4: 4.87, games2: 199, games3: 144, games4: 800, id: 140, rank: 2, tags: "" },
  { augment: "Targon Soul", games: 614, avg: 4.54, stage2: 4.59, stage3: 4.3, stage4: 4.61, games2: 162, games3: 120, games4: 332, id: 217, rank: 3, tags: "" },
  { augment: "The Boss", games: 517, avg: 4.62, stage2: 4.49, stage3: 4.95, stage4: '', games2: 380, games3: 137, games4: 0, id: 141, rank: 2, tags: "" },
  { augment: "The Golden Egg", games: 674, avg: 4.12, stage2: '', stage3: '', stage4: 4.12, games2: 0, games3: 0, games4: 674, id: 218, rank: 3, tags: "" },
  { augment: "Three's a Crowd", games: 553, avg: 4.3, stage2: '', stage3: 4.08, stage4: 4.42, games2: 0, games3: 196, games4: 357, id: 143, rank: 2, tags: "" },
  { augment: "Three's Company", games: 701, avg: 4.73, stage2: 4.73, stage3: '', stage4: '', games2: 701, games3: 0, games4: 0, id: 142, rank: 2, tags: "" },
  { augment: "Tiniest Titan", games: 798, avg: 4.71, stage2: 4.3, stage3: 4.94, stage4: '', games2: 284, games3: 514, games4: 0, id: 220, rank: 3, tags: "Legend Pengu" },
  { augment: "Tiny Grab Bag", games: 561, avg: 4.93, stage2: '', stage3: 4.9, stage4: '', games2: 6, games3: 555, games4: 0, id: 539, rank: 1, tags: "Legend Urf Ezreal" },
  { augment: "Tiny Power I", games: 180, avg: 4.63, stage2: '', stage3: 4.61, stage4: '', games2: 1, games3: 179, games4: 0, id: 524, rank: 1, tags: "Legend Veigar" },
  { augment: "Tiny Power II", games: 229, avg: 4.92, stage2: '', stage3: 4.88, stage4: '', games2: 3, games3: 226, games4: 0, id: 525, rank: 2, tags: "Legend Veigar" },
  { augment: "Tiny Power III", games: 110, avg: 4.54, stage2: '', stage3: 4.54, stage4: '', games2: 0, games3: 110, games4: 0, id: 526, rank: 3, tags: "Legend Veigar" },
  { augment: "Tiny Titans", games: 1708, avg: 4.56, stage2: 4.24, stage3: 4.59, stage4: '', games2: 163, games3: 1545, games4: 0, id: 44, rank: 1, tags: "Legend Pengu" },
  { augment: "Titanic Strength", games: 463, avg: 4.55, stage2: 4.68, stage3: 4.72, stage4: 4.4, games2: 125, games3: 108, games4: 230, id: 144, rank: 2, tags: "" },
  { augment: "Tons of Stats!", games: 4899, avg: 4.28, stage2: 4.3, stage3: 4.21, stage4: 4.31, games2: 738, games3: 1331, games4: 2830, id: 145, rank: 2, tags: "" },
  { augment: "Total Domination", games: 1421, avg: 4.14, stage2: 4.09, stage3: 4.18, stage4: 4.15, games2: 435, games3: 301, games4: 685, id: 146, rank: 2, tags: "" },
  { augment: "Trade Sector", games: 578, avg: 4.68, stage2: 4.68, stage3: '', stage4: '', games2: 578, games3: 0, games4: 0, id: 147, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward", games: 542, avg: 4.93, stage2: '', stage3: 4.9, stage4: '', games2: 4, games3: 538, games4: 0, id: 560, rank: 1, tags: "Legend Lee Sin" },
  { augment: "Training Reward II", games: 786, avg: 4.96, stage2: '', stage3: 4.91, stage4: '', games2: 12, games3: 774, games4: 0, id: 561, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward III", games: 286, avg: 5.03, stage2: '', stage3: 4.95, stage4: '', games2: 7, games3: 279, games4: 0, id: 562, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Transfusion I", games: 1005, avg: 4.49, stage2: 4.74, stage3: 4.46, stage4: '', games2: 110, games3: 895, games4: 0, id: 45, rank: 1, tags: "Legend Vladimir" },
  { augment: "Transfusion II", games: 1042, avg: 4.46, stage2: 4.44, stage3: 4.47, stage4: '', games2: 254, games3: 788, games4: 0, id: 148, rank: 2, tags: "Legend Vladimir" },
  { augment: "Transfusion III", games: 907, avg: 4.24, stage2: 4.52, stage3: 4.19, stage4: '', games2: 152, games3: 755, games4: 0, id: 221, rank: 3, tags: "Legend Vladimir" },
  { augment: "Two Healthy", games: 691, avg: 4.34, stage2: 4.44, stage3: 4.17, stage4: '', games2: 420, games3: 271, games4: 0, id: 149, rank: 2, tags: "" },
  { augment: "Unburdened I", games: 200, avg: 4.29, stage2: 4.66, stage3: 3.92, stage4: 4.83, games2: 73, games3: 104, games4: 23, id: 46, rank: 1, tags: "" },
  { augment: "Unburdened II", games: 210, avg: 4.75, stage2: 4.85, stage3: 5.04, stage4: 4.57, games2: 47, games3: 53, games4: 110, id: 150, rank: 2, tags: "" },
  { augment: "Unified Resistance I", games: 4335, avg: 4.32, stage2: 4.46, stage3: 4.31, stage4: 4.14, games2: 997, games3: 2756, games4: 582, id: 47, rank: 1, tags: "" },
  { augment: "Unified Resistance II", games: 5321, avg: 4.31, stage2: 4.41, stage3: 4.31, stage4: 4.28, games2: 703, games3: 1517, games4: 3101, id: 151, rank: 2, tags: "" },
  { augment: "Unleashed Arcana", games: 960, avg: 4.75, stage2: '', stage3: 4.86, stage4: 4.62, games2: 2, games3: 497, games4: 461, id: 222, rank: 3, tags: "" },
  { augment: "Unstable Yordle Delivery", games: 288, avg: 4.59, stage2: 4.55, stage3: 5.0, stage4: '', games2: 260, games3: 28, games4: 0, id: 152, rank: 2, tags: "" },
  { augment: "Urf's Grab Bag", games: 439, avg: 4.8, stage2: '', stage3: '', stage4: 4.78, games2: 0, games3: 2, games4: 437, id: 538, rank: 3, tags: "Legend Pengu Urf" },
  { augment: "Vampiric Blades", games: 323, avg: 4.49, stage2: 4.52, stage3: 4.53, stage4: 4.46, games2: 87, games3: 59, games4: 177, id: 153, rank: 2, tags: "" },
  { augment: "Void Crest", games: 1056, avg: 4.34, stage2: 4.43, stage3: 4.23, stage4: 4.33, games2: 394, games3: 279, games4: 383, id: 242, rank: 2, tags: "" },
  { augment: "Void Crown", games: 690, avg: 4.09, stage2: 4.36, stage3: 3.73, stage4: 4.08, games2: 308, games3: 227, games4: 155, id: 243, rank: 3, tags: "" },
  { augment: "Wandering Trainer", games: 615, avg: 4.51, stage2: 4.51, stage3: '', stage4: '', games2: 615, games3: 0, games4: 0, id: 224, rank: 3, tags: "" },
  { augment: "Well-Earned Comforts I", games: 12, avg: 4.17, stage2: '', stage3: '', stage4: 4.17, games2: 0, games3: 0, games4: 12, id: 557, rank: 1, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts II", games: 91, avg: 5.36, stage2: '', stage3: '', stage4: 5.33, games2: 0, games3: 1, games4: 90, id: 558, rank: 2, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts III", games: 63, avg: 5.17, stage2: '', stage3: '', stage4: 5.17, games2: 0, games3: 0, games4: 63, id: 559, rank: 3, tags: "Legend Ezreal" },
  { augment: "Wellness Trust", games: 375, avg: 4.7, stage2: '', stage3: 4.7, stage4: '', games2: 0, games3: 375, games4: 0, id: 225, rank: 3, tags: "" },
  { augment: "What Doesn't Kill You", games: 317, avg: 4.74, stage2: 4.74, stage3: '', stage4: '', games2: 317, games3: 0, games4: 0, id: 241, rank: 2, tags: "" },
  { augment: "What The Forge", games: 447, avg: 4.85, stage2: '', stage3: 4.9, stage4: 4.81, games2: 0, games3: 215, games4: 232, id: 226, rank: 3, tags: "" },
  { augment: "Winds of War", games: 271, avg: 4.47, stage2: 4.43, stage3: 4.77, stage4: '', games2: 236, games3: 35, games4: 0, id: 155, rank: 2, tags: "" },
  { augment: "You Have My Bow", games: 3324, avg: 4.52, stage2: 4.6, stage3: 4.42, stage4: 4.55, games2: 689, games3: 972, games4: 1663, id: 156, rank: 2, tags: "" },
  { augment: "You Have My Sword", games: 3722, avg: 4.33, stage2: 4.28, stage3: 4.32, stage4: 4.36, games2: 744, games3: 1066, games4: 1912, id: 157, rank: 2, tags: "" },
  { augment: "Young and Wild and Free", games: 1065, avg: 4.19, stage2: 4.68, stage3: 3.79, stage4: '', games2: 477, games3: 588, games4: 0, id: 48, rank: 1, tags: "" },
  { augment: "Zaun Crest", games: 1145, avg: 4.56, stage2: 4.88, stage3: 4.79, stage4: 4.39, games2: 250, games3: 196, games4: 699, id: 158, rank: 2, tags: "" },
  { augment: "Zaun Crown", games: 648, avg: 4.55, stage2: 4.88, stage3: 4.5, stage4: 4.32, games2: 203, games3: 177, games4: 268, id: 227, rank: 3, tags: "" },
  { augment: "Zaun Heart", games: 878, avg: 4.44, stage2: 4.71, stage3: 4.24, stage4: 4.14, games2: 390, games3: 376, games4: 112, id: 49, rank: 1, tags: "" },
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
