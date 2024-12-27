const recipesData = [
    {
      id: 1,
      title: "Poulet Rôti",
      ingredients: ["1 poulet", "2 gousses d'ail", "50g de beurre"],
      steps: ["Préchauffer le four à 180°C.", "Badigeonner le poulet avec le beurre.", "Cuire au four pendant 1h30."],
    },
    {
      id: 2,
      title: "Soupe de Légumes",
      ingredients: ["3 carottes", "2 pommes de terre", "1 oignon"],
      steps: ["Peler et couper les légumes.", "Faire mijoter dans de l'eau pendant 20 minutes.", "Mixer avant de servir."],
    },
    {
      id: 3,
      title: "Lasagnes",
      ingredients: ["12 feuilles de lasagnes", "500g de viande hachée", "1 oignon", "2 gousses d'ail", "400g de tomates concassées", "500ml de béchamel", "50g de parmesan", "100g de mozzarella"],
      steps: [
        "Préchauffer le four à 180°C.",
        "Faire revenir l'oignon et l'ail hachés dans une poêle avec un peu d'huile.",
        "Ajouter la viande hachée et cuire jusqu'à ce qu'elle soit dorée.",
        "Ajouter les tomates concassées et laisser mijoter pendant 20 minutes.",
        "Dans un plat allant au four, alterner les couches de lasagnes, sauce, béchamel et fromage.",
        "Cuire au four pendant 40 minutes."
      ],
    },
    {
      id: 4,
      title: "Tarte Tatin",
      ingredients: ["6 pommes", "100g de sucre", "50g de beurre", "1 pâte brisée", "1 cuillère à soupe de cannelle"],
      steps: [
        "Préchauffer le four à 180°C.",
        "Faire fondre le sucre et le beurre dans une poêle jusqu'à obtenir un caramel.",
        "Ajouter les pommes épluchées et coupées en quartiers.",
        "Laisser cuire 10 minutes, puis ajouter la cannelle.",
        "Recouvrir les pommes de la pâte brisée et cuire au four pendant 30 minutes.",
        "Retourner la tarte sur un plat de service et servir tiède."
      ],
    },
    {
      id: 5,
      title: "Salade César",
      ingredients: ["1 laitue romaine", "200g de poulet grillé", "50g de croûtons", "50g de parmesan râpé", "2 cuillères à soupe de mayonnaise", "1 cuillère à soupe de moutarde", "1 cuillère à soupe de vinaigre balsamique"],
      steps: [
        "Laver et couper la laitue.",
        "Faire griller le poulet et le couper en tranches.",
        "Dans un bol, mélanger la mayonnaise, la moutarde et le vinaigre.",
        "Ajouter le poulet, les croûtons, le parmesan et mélanger.",
        "Servir frais."
      ],
    },
    {
      id: 6,
      title: "Pizza Margherita",
      ingredients: ["1 pâte à pizza", "200g de sauce tomate", "200g de mozzarella", "1 poignée de basilic frais", "1 cuillère à soupe d'huile d'olive"],
      steps: [
        "Préchauffer le four à 220°C.",
        "Étaler la pâte à pizza et y étaler la sauce tomate.",
        "Ajouter la mozzarella coupée en tranches.",
        "Cuire au four pendant 15-20 minutes.",
        "Garnir de basilic frais avant de servir."
      ],
    },
    {
      id: 7,
      title: "Quiche Lorraine",
      ingredients: ["1 pâte brisée", "200g de lardons", "3 œufs", "200ml de crème fraîche", "100g de fromage râpé", "Sel et poivre"],
      steps: [
        "Préchauffer le four à 180°C.",
        "Faire revenir les lardons dans une poêle.",
        "Battre les œufs avec la crème, le fromage râpé, le sel et le poivre.",
        "Étaler la pâte dans un moule à tarte, ajouter les lardons, puis verser le mélange d'œufs.",
        "Cuire au four pendant 30-35 minutes."
      ],
    },
    {
      id: 8,
      title: "Croque-Monsieur",
      ingredients: ["4 tranches de pain de mie", "2 tranches de jambon", "2 tranches de fromage", "Beurre"],
      steps: [
        "Beurrer les tranches de pain.",
        "Placer une tranche de jambon et une tranche de fromage entre deux tranches de pain.",
        "Faire cuire dans une poêle à feu moyen jusqu'à ce que les deux côtés soient dorés."
      ],
    },
    {
      id: 9,
      title: "Pâtes Carbonara",
      ingredients: ["400g de pâtes", "150g de pancetta", "3 œufs", "100g de parmesan", "50g de pecorino", "1 gousse d'ail"],
      steps: [
        "Cuire les pâtes dans de l'eau salée.",
        "Faire revenir la pancetta avec l'ail dans une poêle.",
        "Battre les œufs avec le fromage râpé.",
        "Égoutter les pâtes et les mélanger avec la pancetta.",
        "Ajouter le mélange d'œufs et de fromage, puis mélanger rapidement.",
        "Servir immédiatement."
      ],
    },
    {
      id: 10,
      title: "Chili Con Carne",
      ingredients: ["500g de viande hachée", "1 oignon", "2 gousses d'ail", "400g de tomates concassées", "200g de haricots rouges", "1 cuillère à soupe de chili en poudre", "1 cuillère à soupe de cumin", "1 poivron"],
      steps: [
        "Faire revenir l'oignon et l'ail dans une poêle.",
        "Ajouter la viande hachée et cuire jusqu'à ce qu'elle soit bien dorée.",
        "Ajouter les tomates concassées, les haricots rouges, le chili, le cumin et le poivron coupé.",
        "Laisser mijoter pendant 30 minutes.",
        "Servir chaud avec du riz."
      ],
    },
    {
      id: 11,
      title: "Gâteau au Chocolat",
      ingredients: ["200g de chocolat", "100g de beurre", "150g de sucre", "4 œufs", "50g de farine", "1 cuillère à café de levure chimique"],
      steps: [
        "Préchauffer le four à 180°C.",
        "Faire fondre le chocolat et le beurre au bain-marie.",
        "Battre les œufs avec le sucre, puis ajouter le mélange chocolat-beurre.",
        "Incorporer la farine et la levure.",
        "Verser la pâte dans un moule et cuire au four pendant 25 minutes.",
        "Laisser refroidir avant de servir."
      ],
    }
  ];
  
  export default recipesData;
  