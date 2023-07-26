const data = [
  { augment: "A Cut Above", games: 2110, avg: 4.13, stage2: 3.95, stage3: 4.46, stage4: '', id: 50, rank: 2, tags: "" },
  { augment: "AFK", games: 495, avg: 4.55, stage2: 4.55, stage3: '', stage4: '', id: 0, rank: 1, tags: "Legend Tahm Kench TK" },
  { augment: "Adrenaline Rush", games: 466, avg: 4.32, stage2: 5.13, stage3: 4.16, stage4: 4.19, id: 51, rank: 2, tags: "" },
  { augment: "All Natural I", games: 254, avg: 4.6, stage2: 5.08, stage3: 4.49, stage4: 3.93, id: 1, rank: 1, tags: "" },
  { augment: "All Natural II", games: 274, avg: 4.82, stage2: 4.38, stage3: 4.57, stage4: 5.08, id: 52, rank: 2, tags: "" },
  { augment: "All That Shimmers", games: 2869, avg: 4.24, stage2: 4.05, stage3: 4.65, stage4: '', id: 53, rank: 2, tags: "" },
  { augment: "Ancient Archives I", games: 1068, avg: 4.82, stage2: 4.67, stage3: 4.92, stage4: '', id: 159, rank: 2, tags: "Legend Urf" },
  { augment: "Ancient Archives II", games: 1846, avg: 4.54, stage2: 4.73, stage3: 4.53, stage4: 4.5, id: 160, rank: 3, tags: "Legend Urf" },
  { augment: "Army Building", games: 2159, avg: 4.61, stage2: 4.64, stage3: 4.6, stage4: '', id: 2, rank: 1, tags: "" },
  { augment: "Ascension", games: 246, avg: 4.89, stage2: '', stage3: '', stage4: 4.89, id: 528, rank: 2, tags: "Legend Veigar Vladimir" },
  { augment: "Balanced Budget", games: 554, avg: 4.56, stage2: '', stage3: 4.52, stage4: '', id: 518, rank: 1, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget II", games: 946, avg: 4.67, stage2: '', stage3: 4.64, stage4: '', id: 519, rank: 2, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Balanced Budget III", games: 401, avg: 4.61, stage2: '', stage3: 4.57, stage4: '', id: 520, rank: 3, tags: "Legend Tahm Kench TK Draven" },
  { augment: "Bastion Crest", games: 491, avg: 4.73, stage2: 4.7, stage3: 4.58, stage4: 4.79, id: 54, rank: 2, tags: "" },
  { augment: "Bastion Crown", games: 292, avg: 4.45, stage2: 4.44, stage3: 4.39, stage4: 4.5, id: 161, rank: 3, tags: "" },
  { augment: "Bastion Heart", games: 409, avg: 4.69, stage2: 5.06, stage3: 4.55, stage4: 4.39, id: 3, rank: 1, tags: "" },
  { augment: "Battle Ready", games: 172, avg: 4.97, stage2: '', stage3: 4.95, stage4: '', id: 551, rank: 1, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready II", games: 339, avg: 4.71, stage2: '', stage3: 4.63, stage4: '', id: 552, rank: 2, tags: "Legend Master Yi Vladimir" },
  { augment: "Battle Ready III", games: 222, avg: 4.87, stage2: '', stage3: 4.8, stage4: '', id: 553, rank: 3, tags: "Legend Master Yi Vladimir" },
  { augment: "Big Grab Bag", games: 880, avg: 4.76, stage2: '', stage3: 4.71, stage4: '', id: 540, rank: 2, tags: "Legend Urf Ezreal" },
  { augment: "Binary Airdrop", games: 252, avg: 4.64, stage2: 5.17, stage3: 4.41, stage4: 4.68, id: 162, rank: 3, tags: "" },
  { augment: "Birthday Present", games: 230, avg: 4.62, stage2: 4.62, stage3: '', stage4: '', id: 163, rank: 3, tags: "" },
  { augment: "Blinding Speed", games: 554, avg: 4.88, stage2: '', stage3: 4.89, stage4: 4.87, id: 164, rank: 3, tags: "" },
  { augment: "Blood Money", games: 560, avg: 4.3, stage2: 4.3, stage3: '', stage4: '', id: 4, rank: 1, tags: "" },
  { augment: "Branching Out", games: 1094, avg: 4.77, stage2: 4.48, stage3: 4.92, stage4: '', id: 5, rank: 1, tags: "Legend Urf" },
  { augment: "Bronze Ticket", games: 970, avg: 4.62, stage2: 4.66, stage3: 4.61, stage4: 4.61, id: 6, rank: 1, tags: "" },
  { augment: "Bruiser Crest", games: 463, avg: 4.53, stage2: 4.9, stage3: 3.96, stage4: 4.62, id: 55, rank: 2, tags: "" },
  { augment: "Bruiser Crown", games: 271, avg: 4.19, stage2: 4.39, stage3: 4.05, stage4: 4.13, id: 165, rank: 3, tags: "" },
  { augment: "Bruiser Heart", games: 484, avg: 4.58, stage2: 4.46, stage3: 4.62, stage4: 4.95, id: 7, rank: 1, tags: "" },
  { augment: "Built Different II", games: 138, avg: 5.13, stage2: 5.08, stage3: 5.38, stage4: '', id: 56, rank: 2, tags: "" },
  { augment: "Built Different III", games: 301, avg: 4.33, stage2: 4.27, stage3: 4.59, stage4: '', id: 166, rank: 3, tags: "" },
  { augment: "Buried Treasures I", games: 261, avg: 4.34, stage2: 4.34, stage3: '', stage4: '', id: 8, rank: 1, tags: "Legend Ezreal" },
  { augment: "Buried Treasures II", games: 269, avg: 4.63, stage2: 4.63, stage3: '', stage4: '', id: 57, rank: 2, tags: "Legend Ezreal" },
  { augment: "Buried Treasures III", games: 409, avg: 4.84, stage2: 4.88, stage3: 4.82, stage4: '', id: 167, rank: 3, tags: "Legend Ezreal" },
  { augment: "Capricious Forge", games: 1491, avg: 4.44, stage2: '', stage3: 4.22, stage4: 4.54, id: 58, rank: 2, tags: "" },
  { augment: "Caretaker's Ally", games: 188, avg: 4.77, stage2: 4.77, stage3: '', stage4: '', id: 229, rank: 1, tags: "Legend Bard" },
  { augment: "Caretaker's Chosen", games: 306, avg: 4.27, stage2: 4.27, stage3: '', stage4: '', id: 231, rank: 3, tags: "Legend Bard" },
  { augment: "Caretaker's Favor", games: 214, avg: 4.54, stage2: 4.54, stage3: '', stage4: '', id: 230, rank: 2, tags: "Legend Bard" },
  { augment: "Challenger Crest", games: 1105, avg: 4.48, stage2: 4.26, stage3: 4.6, stage4: 4.49, id: 59, rank: 2, tags: "" },
  { augment: "Challenger Crown", games: 694, avg: 4.39, stage2: 4.37, stage3: 4.2, stage4: 4.58, id: 168, rank: 3, tags: "" },
  { augment: "Challenger Heart", games: 963, avg: 4.47, stage2: 4.42, stage3: 4.54, stage4: 4.28, id: 9, rank: 1, tags: "" },
  { augment: "Chemtech Enhancements", games: 485, avg: 4.34, stage2: 4.65, stage3: 3.99, stage4: 4.36, id: 60, rank: 2, tags: "" },
  { augment: "Combat Caster", games: 1341, avg: 4.25, stage2: 4.31, stage3: 4.07, stage4: 4.31, id: 61, rank: 2, tags: "" },
  { augment: "Component Buffet", games: 499, avg: 4.31, stage2: 4.31, stage3: '', stage4: '', id: 10, rank: 1, tags: "" },
  { augment: "Consistency", games: 501, avg: 4.51, stage2: 4.51, stage3: '', stage4: '', id: 240, rank: 1, tags: "" },
  { augment: "Contagion", games: 2678, avg: 4.43, stage2: 4.47, stage3: 4.56, stage4: 4.36, id: 62, rank: 2, tags: "" },
  { augment: "Cruel Pact", games: 396, avg: 4.4, stage2: 4.4, stage3: '', stage4: '', id: 169, rank: 3, tags: "" },
  { augment: "Cursed Crown", games: 270, avg: 4.78, stage2: 5.0, stage3: 3.97, stage4: 5.07, id: 233, rank: 3, tags: "" },
  { augment: "Cutting Corners", games: 198, avg: 4.69, stage2: 4.69, stage3: '', stage4: '', id: 232, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "Cybernetic Bulk I", games: 767, avg: 4.33, stage2: 4.41, stage3: 4.32, stage4: 4.24, id: 11, rank: 1, tags: "" },
  { augment: "Cybernetic Bulk II", games: 780, avg: 4.53, stage2: 4.91, stage3: 4.35, stage4: 4.53, id: 63, rank: 2, tags: "" },
  { augment: "Cybernetic Bulk III", games: 615, avg: 4.64, stage2: 5.06, stage3: 4.53, stage4: 4.61, id: 170, rank: 3, tags: "" },
  { augment: "Cybernetic Leech I", games: 1673, avg: 4.33, stage2: 4.5, stage3: 4.28, stage4: 4.36, id: 12, rank: 1, tags: "" },
  { augment: "Cybernetic Leech II", games: 2167, avg: 4.33, stage2: 4.55, stage3: 4.32, stage4: 4.29, id: 64, rank: 2, tags: "" },
  { augment: "Cybernetic Leech III", games: 1186, avg: 4.37, stage2: 4.68, stage3: 4.32, stage4: 4.36, id: 171, rank: 3, tags: "" },
  { augment: "Deadeye Crest", games: 842, avg: 4.48, stage2: 4.39, stage3: 4.41, stage4: 4.54, id: 65, rank: 2, tags: "" },
  { augment: "Deadeye Crown", games: 743, avg: 4.57, stage2: 4.67, stage3: 4.4, stage4: 4.68, id: 172, rank: 3, tags: "" },
  { augment: "Deadeye Heart", games: 865, avg: 4.46, stage2: 4.45, stage3: 4.56, stage4: 4.09, id: 13, rank: 1, tags: "" },
  { augment: "Dedication", games: 1124, avg: 4.85, stage2: 4.94, stage3: 4.8, stage4: '', id: 66, rank: 2, tags: "" },
  { augment: "Defensive Dash", games: 701, avg: 4.32, stage2: 4.48, stage3: 4.05, stage4: 4.4, id: 67, rank: 2, tags: "" },
  { augment: "Demacia Crest", games: 229, avg: 4.8, stage2: 4.56, stage3: 5.26, stage4: 4.73, id: 236, rank: 2, tags: "" },
  { augment: "Demacia Crown", games: 131, avg: 4.69, stage2: 4.88, stage3: 4.76, stage4: 4.53, id: 173, rank: 3, tags: "" },
  { augment: "Demonflare", games: 146, avg: 4.39, stage2: 4.33, stage3: 4.93, stage4: '', id: 68, rank: 2, tags: "" },
  { augment: "Double Trouble II", games: 805, avg: 4.38, stage2: 4.35, stage3: 4.45, stage4: '', id: 69, rank: 2, tags: "" },
  { augment: "Double Trouble III", games: 862, avg: 4.39, stage2: 4.33, stage3: 4.53, stage4: '', id: 174, rank: 3, tags: "" },
  { augment: "Dueling Gunners", games: 851, avg: 4.78, stage2: 5.05, stage3: 5.15, stage4: 4.62, id: 70, rank: 2, tags: "" },
  { augment: "Early Education", games: 322, avg: 4.82, stage2: 4.82, stage3: '', stage4: '', id: 71, rank: 2, tags: "" },
  { augment: "Endless Hordes", games: 444, avg: 4.67, stage2: '', stage3: 4.45, stage4: 4.96, id: 175, rank: 3, tags: "" },
  { augment: "Endurance Training", games: 226, avg: 4.77, stage2: 4.77, stage3: '', stage4: '', id: 72, rank: 2, tags: "" },
  { augment: "Escort Quest", games: 327, avg: 4.42, stage2: 4.39, stage3: 4.48, stage4: '', id: 73, rank: 2, tags: "" },
  { augment: "Final Ascension", games: 136, avg: 4.8, stage2: '', stage3: '', stage4: 4.8, id: 529, rank: 3, tags: "Legend Veigar Vladimir" },
  { augment: "Final Grab Bag", games: 89, avg: 4.4, stage2: '', stage3: '', stage4: 4.4, id: 536, rank: 1, tags: "Legend Pengu Urf" },
  { augment: "Final Grab Bag II", games: 1084, avg: 4.7, stage2: '', stage3: '', stage4: 4.69, id: 537, rank: 2, tags: "Legend Pengu Urf" },
  { augment: "Final Reserves", games: 271, avg: 4.44, stage2: '', stage3: 4.44, stage4: '', id: 177, rank: 3, tags: "" },
  { augment: "Freljord Heart", games: 1732, avg: 4.39, stage2: 4.63, stage3: 4.36, stage4: 4.34, id: 74, rank: 2, tags: "" },
  { augment: "Freljord Soul", games: 687, avg: 4.59, stage2: 5.0, stage3: 4.32, stage4: 4.53, id: 178, rank: 3, tags: "" },
  { augment: "Frequent Flier", games: 1018, avg: 4.9, stage2: 4.96, stage3: 4.87, stage4: '', id: 75, rank: 2, tags: "" },
  { augment: "Gargantuan Resolve", games: 860, avg: 4.76, stage2: 4.68, stage3: 4.82, stage4: '', id: 76, rank: 2, tags: "" },
  { augment: "Giant Grab Bag", games: 412, avg: 4.73, stage2: '', stage3: 4.69, stage4: '', id: 541, rank: 3, tags: "Legend Urf Ezreal" },
  { augment: "Gifts from the Fallen", games: 4040, avg: 4.26, stage2: 4.32, stage3: 4.15, stage4: 4.3, id: 77, rank: 2, tags: "" },
  { augment: "Glacial Breeze", games: 1367, avg: 4.22, stage2: 4.27, stage3: 3.8, stage4: 4.26, id: 78, rank: 2, tags: "" },
  { augment: "Gold Legend Augment", games: 27145, avg: 4.52, stage2: 4.52, stage3: '', stage4: '', id: 432, rank: 2, tags: "" },
  { augment: "Golden Ticket", games: 2847, avg: 4.43, stage2: 4.43, stage3: 4.42, stage4: 4.46, id: 180, rank: 3, tags: "" },
  { augment: "Gotta Go Fast!", games: 64, avg: 4.62, stage2: '', stage3: '', stage4: 4.62, id: 554, rank: 1, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast! II", games: 751, avg: 4.6, stage2: '', stage3: '', stage4: 4.6, id: 555, rank: 2, tags: "Legend Master Yi" },
  { augment: "Gotta Go Fast!!! III", games: 261, avg: 4.66, stage2: '', stage3: '', stage4: 4.66, id: 556, rank: 3, tags: "Legend Master Yi" },
  { augment: "Gunner Crest", games: 713, avg: 4.5, stage2: 4.76, stage3: 4.49, stage4: 4.45, id: 79, rank: 2, tags: "" },
  { augment: "Gunner Crown", games: 461, avg: 4.77, stage2: 4.9, stage3: 4.92, stage4: 4.6, id: 181, rank: 3, tags: "" },
  { augment: "Gunner Heart", games: 600, avg: 4.71, stage2: 4.8, stage3: 4.67, stage4: 4.64, id: 15, rank: 1, tags: "" },
  { augment: "Harmacist I", games: 1485, avg: 4.4, stage2: 4.53, stage3: 4.31, stage4: 4.65, id: 16, rank: 1, tags: "" },
  { augment: "Harmacist II", games: 2154, avg: 4.47, stage2: 4.44, stage3: 4.48, stage4: 4.46, id: 80, rank: 2, tags: "" },
  { augment: "Harmacist III", games: 1406, avg: 4.39, stage2: 4.85, stage3: 4.35, stage4: 4.31, id: 182, rank: 3, tags: "" },
  { augment: "Haunted Shell", games: 351, avg: 4.6, stage2: 4.82, stage3: 4.65, stage4: 4.51, id: 81, rank: 2, tags: "" },
  { augment: "Healing Orbs I", games: 1878, avg: 4.38, stage2: 4.54, stage3: 4.34, stage4: 4.32, id: 17, rank: 1, tags: "" },
  { augment: "Healing Orbs II", games: 2049, avg: 4.6, stage2: 4.9, stage3: 4.56, stage4: 4.56, id: 82, rank: 2, tags: "" },
  { augment: "Hedge Fund", games: 249, avg: 4.48, stage2: 4.48, stage3: '', stage4: '', id: 183, rank: 3, tags: "Legend Tahm Kench TK" },
  { augment: "Hedge Fund+", games: 756, avg: 4.29, stage2: '', stage3: 4.27, stage4: '', id: 184, rank: 3, tags: "" },
  { augment: "Hedge Fund++", games: 929, avg: 4.51, stage2: '', stage3: '', stage4: 4.5, id: 185, rank: 3, tags: "" },
  { augment: "Hustler", games: 164, avg: 4.85, stage2: 4.85, stage3: '', stage4: '', id: 239, rank: 2, tags: "" },
  { augment: "Idealism", games: 2089, avg: 4.36, stage2: 4.34, stage3: 4.38, stage4: '', id: 83, rank: 2, tags: "" },
  { augment: "Impenetrable Bulwark", games: 610, avg: 4.64, stage2: '', stage3: 4.62, stage4: 4.61, id: 187, rank: 3, tags: "" },
  { augment: "Inconsistency", games: 844, avg: 4.39, stage2: 4.39, stage3: '', stage4: '', id: 18, rank: 1, tags: "" },
  { augment: "Indomitable Will", games: 940, avg: 4.69, stage2: 4.65, stage3: 4.78, stage4: 4.36, id: 84, rank: 1, tags: "" },
  { augment: "Infernal Contract", games: 760, avg: 4.53, stage2: '', stage3: '', stage4: 4.53, id: 228, rank: 3, tags: "" },
  { augment: "Infusion", games: 1608, avg: 4.57, stage2: 4.71, stage3: 4.59, stage4: 4.52, id: 85, rank: 2, tags: "" },
  { augment: "Invoker Crest", games: 1022, avg: 4.56, stage2: 4.57, stage3: 4.48, stage4: 4.59, id: 86, rank: 2, tags: "" },
  { augment: "Invoker Crown", games: 741, avg: 4.26, stage2: 4.24, stage3: 4.27, stage4: 4.27, id: 188, rank: 3, tags: "" },
  { augment: "Invoker Heart", games: 1060, avg: 4.37, stage2: 4.52, stage3: 4.25, stage4: 4.34, id: 19, rank: 1, tags: "" },
  { augment: "Ionia Crest", games: 1021, avg: 4.46, stage2: 4.41, stage3: 4.18, stage4: 4.66, id: 87, rank: 2, tags: "" },
  { augment: "Ionia Crown", games: 528, avg: 4.49, stage2: 4.8, stage3: 4.18, stage4: 4.49, id: 189, rank: 3, tags: "" },
  { augment: "Iron Assets", games: 455, avg: 4.72, stage2: 4.72, stage3: '', stage4: '', id: 21, rank: 1, tags: "" },
  { augment: "It Pays To Learn", games: 306, avg: 4.46, stage2: '', stage3: '', stage4: 4.45, id: 548, rank: 1, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn II", games: 5579, avg: 4.42, stage2: '', stage3: '', stage4: 4.42, id: 549, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "It Pays to Learn III", games: 1799, avg: 4.28, stage2: '', stage3: '', stage4: 4.27, id: 550, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Item Grab Bag I", games: 274, avg: 4.99, stage2: '', stage3: 4.96, stage4: '', id: 533, rank: 1, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag II", games: 521, avg: 4.87, stage2: '', stage3: 4.82, stage4: '', id: 534, rank: 2, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Item Grab Bag III", games: 180, avg: 5.34, stage2: '', stage3: 5.28, stage4: '', id: 535, rank: 3, tags: "Legend Pengu Twisted Fate TF" },
  { augment: "Jeweled Lotus I", games: 1988, avg: 4.45, stage2: 4.38, stage3: 4.44, stage4: 4.59, id: 23, rank: 1, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus II", games: 3424, avg: 4.55, stage2: 4.79, stage3: 4.58, stage4: 4.48, id: 88, rank: 2, tags: "Legend Veigar" },
  { augment: "Jeweled Lotus III", games: 2545, avg: 4.31, stage2: 4.79, stage3: 4.3, stage4: 4.19, id: 190, rank: 3, tags: "Legend Veigar" },
  { augment: "Job Well Done", games: 6701, avg: 4.56, stage2: '', stage3: '', stage4: 4.56, id: 516, rank: 2, tags: "Legend Ornn" },
  { augment: "Job's Done", games: 759, avg: 4.39, stage2: '', stage3: '', stage4: 4.39, id: 515, rank: 1, tags: "Legend Ornn" },
  { augment: "Juggernaut Crest", games: 460, avg: 4.6, stage2: 5.13, stage3: 4.91, stage4: 4.42, id: 89, rank: 2, tags: "" },
  { augment: "Juggernaut Crown", games: 357, avg: 4.46, stage2: 4.38, stage3: 4.72, stage4: 4.31, id: 191, rank: 3, tags: "" },
  { augment: "Juggernaut Heart", games: 367, avg: 4.73, stage2: 4.69, stage3: 4.82, stage4: 4.48, id: 24, rank: 1, tags: "" },
  { augment: "Know Your Enemy", games: 2755, avg: 4.16, stage2: 4.11, stage3: 4.35, stage4: 4.09, id: 90, rank: 2, tags: "" },
  { augment: "Knowledge Download I", games: 1607, avg: 4.63, stage2: '', stage3: 4.6, stage4: '', id: 545, rank: 1, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download II", games: 3544, avg: 4.68, stage2: '', stage3: 4.66, stage4: '', id: 546, rank: 2, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Knowledge Download III", games: 1600, avg: 4.55, stage2: '', stage3: 4.52, stage4: '', id: 547, rank: 3, tags: "Legend Aurelion Sol ASol Caitlyn" },
  { augment: "Large Forge", games: 3112, avg: 4.67, stage2: '', stage3: 4.66, stage4: '', id: 514, rank: 3, tags: "Legend Ornn Bard" },
  { augment: "Last Stand", games: 513, avg: 4.63, stage2: '', stage3: 4.61, stage4: '', id: 91, rank: 2, tags: "" },
  { augment: "Lategame Specialist", games: 854, avg: 4.15, stage2: '', stage3: 4.12, stage4: '', id: 235, rank: 1, tags: "" },
  { augment: "Latent Forge", games: 421, avg: 4.35, stage2: 4.35, stage3: '', stage4: '', id: 25, rank: 1, tags: "Legend Ornn" },
  { augment: "Level Up!", games: 2678, avg: 4.33, stage2: 4.51, stage3: 4.13, stage4: 4.49, id: 192, rank: 3, tags: "Legend Aurelion Sol ASol" },
  { augment: "Library Card", games: 1805, avg: 4.58, stage2: '', stage3: '', stage4: 4.57, id: 92, rank: 2, tags: "" },
  { augment: "Living Forge", games: 171, avg: 4.54, stage2: 4.54, stage3: '', stage4: '', id: 193, rank: 3, tags: "Legend Ornn" },
  { augment: "Long Distance Pals II", games: 5911, avg: 4.36, stage2: 4.53, stage3: 4.32, stage4: 4.33, id: 93, rank: 2, tags: "" },
  { augment: "Loving Invocation", games: 1134, avg: 4.34, stage2: 4.15, stage3: 4.33, stage4: 4.43, id: 94, rank: 2, tags: "" },
  { augment: "Lucky Gloves", games: 476, avg: 4.89, stage2: 4.86, stage3: 4.99, stage4: 4.83, id: 194, rank: 3, tags: "" },
  { augment: "Magic Wand", games: 3145, avg: 4.38, stage2: 4.35, stage3: 4.3, stage4: 4.43, id: 95, rank: 2, tags: "" },
  { augment: "Mana Burn", games: 909, avg: 4.35, stage2: '', stage3: '', stage4: 4.35, id: 96, rank: 2, tags: "" },
  { augment: "March of Progress", games: 302, avg: 4.72, stage2: 4.72, stage3: '', stage4: '', id: 195, rank: 3, tags: "" },
  { augment: "Martyr", games: 1116, avg: 4.25, stage2: 4.59, stage3: 4.1, stage4: 4.25, id: 97, rank: 2, tags: "" },
  { augment: "Masterful Job", games: 2340, avg: 4.42, stage2: '', stage3: '', stage4: 4.42, id: 517, rank: 3, tags: "Legend Ornn" },
  { augment: "Medium Forge", games: 6729, avg: 4.45, stage2: '', stage3: 4.44, stage4: 5.0, id: 513, rank: 2, tags: "Legend Ornn Bard" },
  { augment: "Medium-End Shopping", games: 3669, avg: 4.43, stage2: 4.36, stage3: 4.46, stage4: 4.49, id: 98, rank: 1, tags: "" },
  { augment: "Metabolic Accelerator", games: 151, avg: 5.1, stage2: 5.1, stage3: '', stage4: '', id: 99, rank: 2, tags: "Legend Pengu" },
  { augment: "Missed Connections", games: 310, avg: 4.6, stage2: '', stage3: 4.53, stage4: 5.29, id: 27, rank: 1, tags: "" },
  { augment: "Money Money Money!", games: 645, avg: 4.53, stage2: '', stage3: '', stage4: 4.53, id: 523, rank: 3, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money Money!", games: 2061, avg: 4.64, stage2: '', stage3: '', stage4: 4.63, id: 522, rank: 2, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Money!", games: 113, avg: 4.67, stage2: '', stage3: '', stage4: 4.64, id: 521, rank: 1, tags: "Legend Tahm Kench TK Lee Sin" },
  { augment: "Morning Light", games: 559, avg: 4.55, stage2: 4.71, stage3: 4.42, stage4: 4.57, id: 100, rank: 2, tags: "" },
  { augment: "Multicaster Heart", games: 310, avg: 5.16, stage2: 5.54, stage3: 5.47, stage4: 4.95, id: 101, rank: 2, tags: "" },
  { augment: "Multicaster Soul", games: 230, avg: 5.03, stage2: 5.23, stage3: 5.35, stage4: 4.55, id: 196, rank: 3, tags: "" },
  { augment: "Not Today", games: 735, avg: 4.61, stage2: 4.71, stage3: 4.55, stage4: 4.61, id: 102, rank: 2, tags: "" },
  { augment: "Noxus Crest", games: 800, avg: 4.33, stage2: 4.57, stage3: 4.05, stage4: 4.32, id: 103, rank: 2, tags: "" },
  { augment: "Noxus Crown", games: 622, avg: 3.8, stage2: 3.61, stage3: 3.85, stage4: 4.07, id: 197, rank: 3, tags: "" },
  { augment: "On a Roll", games: 517, avg: 5.0, stage2: 4.88, stage3: 5.11, stage4: '', id: 104, rank: 1, tags: "Legend Lee Sin" },
  { augment: "One Twos Three", games: 275, avg: 4.35, stage2: 4.35, stage3: '', stage4: '', id: 29, rank: 1, tags: "Legend Caitlyn" },
  { augment: "One, Two, Five!", games: 248, avg: 4.53, stage2: '', stage3: '', stage4: 4.53, id: 237, rank: 1, tags: "" },
  { augment: "Overcharged Manafont", games: 1375, avg: 4.24, stage2: 4.02, stage3: 4.02, stage4: 4.44, id: 105, rank: 2, tags: "" },
  { augment: "Overwhelming Force", games: 647, avg: 4.66, stage2: '', stage3: 4.7, stage4: 4.61, id: 198, rank: 3, tags: "" },
  { augment: "Pandora's Bench", games: 2595, avg: 4.76, stage2: 4.55, stage3: 4.85, stage4: 4.88, id: 30, rank: 1, tags: "" },
  { augment: "Pandora's Items", games: 1901, avg: 4.66, stage2: 4.58, stage3: 4.7, stage4: 4.58, id: 31, rank: 1, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items II", games: 1584, avg: 4.91, stage2: 4.69, stage3: 4.93, stage4: 4.98, id: 106, rank: 2, tags: "Legend Twisted Fate TF" },
  { augment: "Pandora's Items III", games: 1080, avg: 4.81, stage2: 4.63, stage3: 4.73, stage4: 4.98, id: 199, rank: 3, tags: "Legend Twisted Fate TF" },
  { augment: "Partial Ascension", games: 18, avg: 4.44, stage2: '', stage3: '', stage4: 4.44, id: 527, rank: 1, tags: "Legend Veigar Vladimir" },
  { augment: "Parting Gifts", games: 300, avg: 4.51, stage2: 4.11, stage3: 4.48, stage4: 4.62, id: 200, rank: 2, tags: "" },
  { augment: "Patient Study", games: 401, avg: 4.62, stage2: 4.62, stage3: '', stage4: '', id: 107, rank: 2, tags: "Legend Aurelion Sol ASol" },
  { augment: "Perfected Repetition", games: 436, avg: 5.01, stage2: 5.29, stage3: 5.04, stage4: 4.88, id: 108, rank: 2, tags: "" },
  { augment: "Petricite Shackles", games: 337, avg: 4.5, stage2: 4.53, stage3: 4.97, stage4: 4.31, id: 109, rank: 2, tags: "" },
  { augment: "Phreaky Friday", games: 436, avg: 4.17, stage2: 4.17, stage3: '', stage4: '', id: 201, rank: 3, tags: "" },
  { augment: "Phreaky Friday +", games: 1247, avg: 4.29, stage2: '', stage3: 4.11, stage4: 4.49, id: 202, rank: 3, tags: "" },
  { augment: "Piltover Heart", games: 385, avg: 4.72, stage2: 4.41, stage3: 5.38, stage4: 5.64, id: 110, rank: 2, tags: "" },
  { augment: "Piltover Soul", games: 225, avg: 4.44, stage2: 4.35, stage3: 4.81, stage4: 4.55, id: 203, rank: 3, tags: "" },
  { augment: "Portable Forge", games: 3696, avg: 4.59, stage2: 4.44, stage3: 4.59, stage4: 4.64, id: 111, rank: 2, tags: "Legend Ornn" },
  { augment: "Prismatic Legend Augment", games: 9551, avg: 4.46, stage2: 4.46, stage3: '', stage4: '', id: 433, rank: 3, tags: "" },
  { augment: "Pumping Up I", games: 211, avg: 4.61, stage2: 4.59, stage3: '', stage4: '', id: 32, rank: 1, tags: "Legend Master Yi" },
  { augment: "Pumping Up II", games: 343, avg: 4.76, stage2: 4.76, stage3: '', stage4: '', id: 112, rank: 2, tags: "Legend Master Yi" },
  { augment: "Pumping Up III", games: 201, avg: 4.78, stage2: 4.78, stage3: '', stage4: '', id: 204, rank: 3, tags: "Legend Master Yi" },
  { augment: "Radiant Relics", games: 2432, avg: 4.61, stage2: 4.86, stage3: 4.61, stage4: 4.47, id: 205, rank: 3, tags: "" },
  { augment: "Ravenous Hunter", games: 1262, avg: 4.05, stage2: 4.03, stage3: 4.17, stage4: '', id: 114, rank: 2, tags: "" },
  { augment: "Recombobulator", games: 787, avg: 4.53, stage2: '', stage3: 4.53, stage4: 4.57, id: 33, rank: 1, tags: "" },
  { augment: "Red Buff", games: 2229, avg: 4.51, stage2: 4.64, stage3: 4.48, stage4: 4.39, id: 34, rank: 1, tags: "" },
  { augment: "Return on Investment", games: 1537, avg: 4.67, stage2: 4.93, stage3: 4.91, stage4: 4.52, id: 115, rank: 2, tags: "" },
  { augment: "Rich Get Richer", games: 429, avg: 4.62, stage2: 4.62, stage3: '', stage4: '', id: 116, rank: 2, tags: "Legend Tahm Kench TK" },
  { augment: "Rich Get Richer+", games: 722, avg: 4.56, stage2: '', stage3: 4.56, stage4: '', id: 117, rank: 2, tags: "" },
  { augment: "Riftwalk", games: 852, avg: 4.31, stage2: 4.28, stage3: 4.75, stage4: '', id: 118, rank: 2, tags: "" },
  { augment: "Risky Moves", games: 811, avg: 4.29, stage2: 4.29, stage3: '', stage4: '', id: 35, rank: 1, tags: "" },
  { augment: "Rogue Crest", games: 140, avg: 4.98, stage2: 4.83, stage3: 4.76, stage4: 5.11, id: 119, rank: 2, tags: "" },
  { augment: "Rogue Crown", games: 126, avg: 4.52, stage2: 4.19, stage3: 4.57, stage4: 4.97, id: 206, rank: 3, tags: "" },
  { augment: "Rogue Heart", games: 114, avg: 5.0, stage2: 4.98, stage3: 4.86, stage4: 6.0, id: 36, rank: 1, tags: "" },
  { augment: "Roll The Dice", games: 895, avg: 4.47, stage2: 4.58, stage3: 4.43, stage4: 4.44, id: 207, rank: 3, tags: "" },
  { augment: "Rolling For Days I", games: 110, avg: 4.96, stage2: '', stage3: '', stage4: 4.94, id: 530, rank: 1, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days II", games: 1145, avg: 4.97, stage2: '', stage3: '', stage4: 4.97, id: 531, rank: 2, tags: "Legend Draven Caitlyn" },
  { augment: "Rolling For Days III", games: 394, avg: 4.93, stage2: '', stage3: '', stage4: 4.93, id: 532, rank: 3, tags: "Legend Draven Caitlyn" },
  { augment: "Salvage Bin", games: 106, avg: 4.86, stage2: 4.86, stage3: '', stage4: '', id: 120, rank: 2, tags: "" },
  { augment: "Salvage Bin+", games: 471, avg: 4.88, stage2: 4.69, stage3: 4.98, stage4: 4.83, id: 234, rank: 2, tags: "" },
  { augment: "Scoped Weapons", games: 916, avg: 4.79, stage2: 5.19, stage3: 4.81, stage4: 4.7, id: 121, rank: 2, tags: "" },
  { augment: "Scrappy Inventions", games: 56, avg: 4.73, stage2: 4.73, stage3: '', stage4: '', id: 238, rank: 2, tags: "" },
  { augment: "Seeing Double I", games: 49, avg: 5.04, stage2: '', stage3: '', stage4: 5.04, id: 563, rank: 1, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double II", games: 625, avg: 5.06, stage2: '', stage3: '', stage4: 5.04, id: 564, rank: 2, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Seeing Double III", games: 173, avg: 5.37, stage2: '', stage3: '', stage4: 5.37, id: 565, rank: 3, tags: "Legend Twisted Fate TF Bard" },
  { augment: "Sentinel's Spirit", games: 711, avg: 4.47, stage2: 4.21, stage3: 4.56, stage4: 4.58, id: 122, rank: 2, tags: "" },
  { augment: "Shadow Isles Crest", games: 693, avg: 4.24, stage2: 4.16, stage3: 4.07, stage4: 4.39, id: 123, rank: 2, tags: "" },
  { augment: "Shadow Isles Crown", games: 561, avg: 4.05, stage2: 3.94, stage3: 4.02, stage4: 4.29, id: 208, rank: 3, tags: "" },
  { augment: "Shadow Isles Heart", games: 487, avg: 4.82, stage2: 5.17, stage3: 4.55, stage4: 4.41, id: 37, rank: 1, tags: "" },
  { augment: "Shimmering Inventors", games: 128, avg: 4.96, stage2: 4.58, stage3: 5.36, stage4: 5.52, id: 124, rank: 2, tags: "" },
  { augment: "Shoplifting", games: 386, avg: 4.43, stage2: '', stage3: 4.4, stage4: '', id: 125, rank: 2, tags: "" },
  { augment: "Shopping Spree", games: 116, avg: 4.6, stage2: 4.6, stage3: '', stage4: '', id: 186, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Shurima Crest", games: 616, avg: 4.52, stage2: 4.84, stage3: 4.22, stage4: 4.52, id: 126, rank: 2, tags: "" },
  { augment: "Shurima Crown", games: 417, avg: 4.4, stage2: 4.54, stage3: 4.52, stage4: 4.14, id: 209, rank: 3, tags: "" },
  { augment: "Shurima's Legacy", games: 807, avg: 4.19, stage2: 4.15, stage3: 4.07, stage4: 4.27, id: 127, rank: 2, tags: "" },
  { augment: "Silver Legend Augment", games: 8480, avg: 4.5, stage2: 4.5, stage3: '', stage4: '', id: 431, rank: 1, tags: "" },
  { augment: "Silver Spoon", games: 767, avg: 4.3, stage2: 4.3, stage3: '', stage4: '', id: 39, rank: 1, tags: "" },
  { augment: "Silver Ticket", games: 1019, avg: 4.65, stage2: 4.79, stage3: 4.56, stage4: '', id: 128, rank: 2, tags: "" },
  { augment: "Slayer Crest", games: 596, avg: 4.83, stage2: 5.4, stage3: 4.85, stage4: 4.67, id: 129, rank: 2, tags: "" },
  { augment: "Slayer Crown", games: 274, avg: 4.76, stage2: 5.03, stage3: 4.58, stage4: 4.73, id: 210, rank: 3, tags: "" },
  { augment: "Slayer Heart", games: 408, avg: 5.02, stage2: 5.22, stage3: 4.88, stage4: 5.03, id: 40, rank: 1, tags: "" },
  { augment: "Slayer's Resolve", games: 412, avg: 4.82, stage2: 5.22, stage3: 4.53, stage4: 4.81, id: 130, rank: 2, tags: "" },
  { augment: "Sleight of Hand", games: 152, avg: 5.03, stage2: 5.4, stage3: 4.8, stage4: '', id: 131, rank: 2, tags: "" },
  { augment: "Small Forge", games: 5328, avg: 4.39, stage2: '', stage3: 4.38, stage4: '', id: 512, rank: 1, tags: "Legend Ornn Bard" },
  { augment: "Social Distancing I", games: 1990, avg: 4.25, stage2: 4.03, stage3: 4.29, stage4: 4.5, id: 41, rank: 1, tags: "" },
  { augment: "Social Distancing II", games: 3299, avg: 4.28, stage2: 4.38, stage3: 4.14, stage4: 4.32, id: 132, rank: 2, tags: "" },
  { augment: "Social Distancing III", games: 2363, avg: 4.24, stage2: 4.54, stage3: 4.2, stage4: 4.13, id: 211, rank: 3, tags: "" },
  { augment: "Sorcerer Crest", games: 1612, avg: 4.36, stage2: 4.45, stage3: 4.29, stage4: 4.37, id: 133, rank: 2, tags: "" },
  { augment: "Sorcerer Crown", games: 945, avg: 3.98, stage2: 3.83, stage3: 3.97, stage4: 4.12, id: 212, rank: 3, tags: "" },
  { augment: "Sorcerer Heart", games: 1387, avg: 4.33, stage2: 4.3, stage3: 4.29, stage4: 4.65, id: 42, rank: 1, tags: "" },
  { augment: "Spectral Supplies", games: 286, avg: 4.69, stage2: '', stage3: 4.92, stage4: 4.57, id: 179, rank: 3, tags: "" },
  { augment: "Spoils of War I", games: 310, avg: 4.42, stage2: 4.42, stage3: '', stage4: '', id: 43, rank: 1, tags: "Legend Draven" },
  { augment: "Spoils of War II", games: 206, avg: 4.57, stage2: 4.57, stage3: '', stage4: '', id: 134, rank: 2, tags: "Legend Draven" },
  { augment: "Spoils of War III", games: 112, avg: 4.64, stage2: 4.64, stage3: '', stage4: '', id: 213, rank: 3, tags: "Legend Draven" },
  { augment: "Stable Evolution", games: 647, avg: 4.08, stage2: 3.62, stage3: 4.17, stage4: 4.29, id: 113, rank: 2, tags: "" },
  { augment: "Stars are Born", games: 367, avg: 4.55, stage2: 4.55, stage3: '', stage4: '', id: 135, rank: 2, tags: "Legend Caitlyn" },
  { augment: "Starter Kit", games: 394, avg: 4.95, stage2: 4.95, stage3: '', stage4: '', id: 214, rank: 3, tags: "Legend Caitlyn" },
  { augment: "Stellacorn's Blessing", games: 841, avg: 4.34, stage2: 4.31, stage3: 4.23, stage4: 4.37, id: 136, rank: 2, tags: "" },
  { augment: "Strategist Heart", games: 726, avg: 4.76, stage2: 4.73, stage3: 4.8, stage4: 4.76, id: 137, rank: 2, tags: "" },
  { augment: "Strategist Soul", games: 291, avg: 4.72, stage2: 5.13, stage3: 4.98, stage4: 4.46, id: 215, rank: 3, tags: "" },
  { augment: "Suppressing Fire", games: 1059, avg: 4.13, stage2: 4.16, stage3: 4.03, stage4: 4.16, id: 138, rank: 2, tags: "" },
  { augment: "Tactical Superiority", games: 520, avg: 4.57, stage2: 4.3, stage3: 4.59, stage4: 4.65, id: 139, rank: 2, tags: "" },
  { augment: "Tactician's Tools", games: 1247, avg: 4.81, stage2: 5.25, stage3: 4.85, stage4: 4.62, id: 216, rank: 3, tags: "" },
  { augment: "Targon Heart", games: 909, avg: 4.86, stage2: 4.94, stage3: 4.87, stage4: 4.84, id: 140, rank: 2, tags: "" },
  { augment: "Targon Soul", games: 485, avg: 4.52, stage2: 4.62, stage3: 4.21, stage4: 4.57, id: 217, rank: 3, tags: "" },
  { augment: "The Boss", games: 395, avg: 4.66, stage2: 4.55, stage3: 4.98, stage4: '', id: 141, rank: 2, tags: "" },
  { augment: "The Golden Egg", games: 500, avg: 4.09, stage2: '', stage3: '', stage4: 4.09, id: 218, rank: 3, tags: "" },
  { augment: "Three's Company", games: 537, avg: 4.73, stage2: 4.73, stage3: '', stage4: '', id: 142, rank: 2, tags: "" },
  { augment: "Three's a Crowd", games: 418, avg: 4.3, stage2: '', stage3: 4.12, stage4: 4.38, id: 143, rank: 2, tags: "" },
  { augment: "Tiniest Titan", games: 586, avg: 4.68, stage2: 4.18, stage3: 4.98, stage4: '', id: 220, rank: 3, tags: "Legend Pengu" },
  { augment: "Tiny Grab Bag", games: 471, avg: 4.93, stage2: '', stage3: 4.91, stage4: '', id: 539, rank: 1, tags: "Legend Urf Ezreal" },
  { augment: "Tiny Power I", games: 154, avg: 4.44, stage2: '', stage3: 4.41, stage4: '', id: 524, rank: 1, tags: "Legend Veigar" },
  { augment: "Tiny Power II", games: 196, avg: 4.86, stage2: '', stage3: 4.83, stage4: '', id: 525, rank: 2, tags: "Legend Veigar" },
  { augment: "Tiny Power III", games: 90, avg: 4.56, stage2: '', stage3: 4.56, stage4: '', id: 526, rank: 3, tags: "Legend Veigar" },
  { augment: "Tiny Titans", games: 1273, avg: 4.53, stage2: 4.24, stage3: 4.56, stage4: '', id: 44, rank: 1, tags: "Legend Pengu" },
  { augment: "Titanic Strength", games: 372, avg: 4.49, stage2: 4.62, stage3: 4.7, stage4: 4.33, id: 144, rank: 2, tags: "" },
  { augment: "Tons of Stats!", games: 3722, avg: 4.27, stage2: 4.21, stage3: 4.15, stage4: 4.34, id: 145, rank: 2, tags: "" },
  { augment: "Total Domination", games: 1066, avg: 4.19, stage2: 4.1, stage3: 4.26, stage4: 4.22, id: 146, rank: 2, tags: "" },
  { augment: "Trade Sector", games: 438, avg: 4.62, stage2: 4.62, stage3: '', stage4: '', id: 147, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward", games: 435, avg: 4.94, stage2: '', stage3: 4.91, stage4: '', id: 560, rank: 1, tags: "Legend Lee Sin" },
  { augment: "Training Reward II", games: 629, avg: 4.93, stage2: '', stage3: 4.89, stage4: '', id: 561, rank: 2, tags: "Legend Lee Sin" },
  { augment: "Training Reward III", games: 228, avg: 4.93, stage2: '', stage3: 4.84, stage4: '', id: 562, rank: 3, tags: "Legend Lee Sin" },
  { augment: "Transfusion I", games: 759, avg: 4.45, stage2: 4.71, stage3: 4.42, stage4: '', id: 45, rank: 1, tags: "Legend Vladimir" },
  { augment: "Transfusion II", games: 760, avg: 4.42, stage2: 4.39, stage3: 4.43, stage4: '', id: 148, rank: 2, tags: "Legend Vladimir" },
  { augment: "Transfusion III", games: 684, avg: 4.28, stage2: 4.6, stage3: 4.22, stage4: '', id: 221, rank: 3, tags: "Legend Vladimir" },
  { augment: "Two Healthy", games: 539, avg: 4.36, stage2: 4.51, stage3: 4.14, stage4: '', id: 149, rank: 2, tags: "" },
  { augment: "Unburdened I", games: 152, avg: 4.4, stage2: 4.64, stage3: 4.15, stage4: 4.73, id: 46, rank: 1, tags: "" },
  { augment: "Unburdened II", games: 169, avg: 4.71, stage2: 4.73, stage3: 5.13, stage4: 4.52, id: 150, rank: 2, tags: "" },
  { augment: "Unified Resistance I", games: 3317, avg: 4.35, stage2: 4.52, stage3: 4.34, stage4: 4.14, id: 47, rank: 1, tags: "" },
  { augment: "Unified Resistance II", games: 4095, avg: 4.29, stage2: 4.42, stage3: 4.28, stage4: 4.27, id: 151, rank: 2, tags: "" },
  { augment: "Unleashed Arcana", games: 740, avg: 4.69, stage2: '', stage3: 4.82, stage4: 4.54, id: 222, rank: 3, tags: "" },
  { augment: "Unstable Yordle Delivery", games: 220, avg: 4.61, stage2: 4.58, stage3: 4.87, stage4: '', id: 152, rank: 2, tags: "" },
  { augment: "Urf's Grab Bag", games: 340, avg: 4.81, stage2: '', stage3: '', stage4: 4.79, id: 538, rank: 3, tags: "Legend Pengu Urf" },
  { augment: "Vampiric Blades", games: 263, avg: 4.6, stage2: 4.62, stage3: 4.91, stage4: 4.5, id: 153, rank: 2, tags: "" },
  { augment: "Void Crest", games: 816, avg: 4.38, stage2: 4.55, stage3: 4.3, stage4: 4.26, id: 242, rank: 2, tags: "" },
  { augment: "Void Crown", games: 538, avg: 4.17, stage2: 4.44, stage3: 3.79, stage4: 4.15, id: 243, rank: 3, tags: "" },
  { augment: "Wandering Trainer", games: 451, avg: 4.54, stage2: 4.54, stage3: '', stage4: '', id: 224, rank: 3, tags: "" },
  { augment: "Well-Earned Comforts I", games: 10, avg: 4.3, stage2: '', stage3: '', stage4: 4.3, id: 557, rank: 1, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts II", games: 75, avg: 5.39, stage2: '', stage3: '', stage4: 5.35, id: 558, rank: 2, tags: "Legend Ezreal" },
  { augment: "Well-Earned Comforts III", games: 49, avg: 5.27, stage2: '', stage3: '', stage4: 5.27, id: 559, rank: 3, tags: "Legend Ezreal" },
  { augment: "Wellness Trust", games: 274, avg: 4.68, stage2: '', stage3: 4.68, stage4: '', id: 225, rank: 3, tags: "" },
  { augment: "What Doesn't Kill You", games: 249, avg: 4.79, stage2: 4.79, stage3: '', stage4: '', id: 241, rank: 2, tags: "" },
  { augment: "What The Forge", games: 365, avg: 4.91, stage2: '', stage3: 4.91, stage4: 4.91, id: 226, rank: 3, tags: "" },
  { augment: "Winds of War", games: 218, avg: 4.56, stage2: 4.53, stage3: 4.74, stage4: '', id: 155, rank: 2, tags: "" },
  { augment: "You Have My Bow", games: 2485, avg: 4.53, stage2: 4.58, stage3: 4.36, stage4: 4.61, id: 156, rank: 2, tags: "" },
  { augment: "You Have My Sword", games: 2800, avg: 4.31, stage2: 4.34, stage3: 4.25, stage4: 4.33, id: 157, rank: 2, tags: "" },
  { augment: "Young and Wild and Free", games: 801, avg: 4.16, stage2: 4.67, stage3: 3.77, stage4: '', id: 48, rank: 1, tags: "" },
  { augment: "Zaun Crest", games: 836, avg: 4.56, stage2: 4.84, stage3: 4.95, stage4: 4.35, id: 158, rank: 2, tags: "" },
  { augment: "Zaun Crown", games: 470, avg: 4.49, stage2: 4.65, stage3: 4.49, stage4: 4.36, id: 227, rank: 3, tags: "" },
  { augment: "Zaun Heart", games: 618, avg: 4.4, stage2: 4.69, stage3: 4.21, stage4: 4.11, id: 49, rank: 1, tags: "" },
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
      <td>${stage2}</td>
      <td>${stage3}</td>
      <td>${stage4}</td>
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
