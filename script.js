const produtos = [
  {
    "id": 1,
    "nome": "Bruschetta Clássica",
    "descricao": "Pão italiano, tomate, manjericão e azeite.",
    "preco": 18,
    "categoria": "ENTRADAS"
  },
  {
    "id": 2,
    "nome": "Bruschetta de Queijo",
    "descricao": "Pão italiano, queijo gratinado e ervas.",
    "preco": 22,
    "categoria": "ENTRADAS"
  },
  {
    "id": 3,
    "nome": "Bolinho de Bacalhau",
    "descricao": "Porção crocante de bolinhos de bacalhau.",
    "preco": 28,
    "categoria": "ENTRADAS"
  },
  {
    "id": 4,
    "nome": "Dadinho de Tapioca",
    "descricao": "Cubos de tapioca crocantes com molho agridoce.",
    "preco": 24,
    "categoria": "ENTRADAS"
  },
  {
    "id": 5,
    "nome": "Coxinha Gourmet",
    "descricao": "Coxinha de frango com massa cremosa.",
    "preco": 20,
    "categoria": "ENTRADAS"
  },
  {
    "id": 6,
    "nome": "Pastel de Queijo",
    "descricao": "Pastéis crocantes recheados com queijo.",
    "preco": 19,
    "categoria": "ENTRADAS"
  },
  {
    "id": 7,
    "nome": "Pastel de Carne",
    "descricao": "Pastéis recheados com carne temperada.",
    "preco": 21,
    "categoria": "ENTRADAS"
  },
  {
    "id": 8,
    "nome": "Pastel de Camarão",
    "descricao": "Pastéis crocantes com camarão cremoso.",
    "preco": 29,
    "categoria": "ENTRADAS"
  },
  {
    "id": 9,
    "nome": "Isca de Frango",
    "descricao": "Tiras de frango empanadas com molho da casa.",
    "preco": 26,
    "categoria": "ENTRADAS"
  },
  {
    "id": 10,
    "nome": "Isca de Peixe",
    "descricao": "Tiras de peixe empanadas e crocantes.",
    "preco": 30,
    "categoria": "ENTRADAS"
  },
  {
    "id": 11,
    "nome": "Anéis de Cebola",
    "descricao": "Anéis de cebola empanados e crocantes.",
    "preco": 22,
    "categoria": "ENTRADAS"
  },
  {
    "id": 12,
    "nome": "Batata Rústica",
    "descricao": "Batatas rústicas assadas com ervas.",
    "preco": 25,
    "categoria": "ENTRADAS"
  },
  {
    "id": 13,
    "nome": "Batata com Cheddar",
    "descricao": "Batatas crocantes com cheddar cremoso.",
    "preco": 29,
    "categoria": "ENTRADAS"
  },
  {
    "id": 14,
    "nome": "Queijo Coalho Grelhado",
    "descricao": "Espetos de queijo coalho grelhado.",
    "preco": 27,
    "categoria": "ENTRADAS"
  },
  {
    "id": 15,
    "nome": "Calabresa Acebolada",
    "descricao": "Calabresa grelhada com cebola dourada.",
    "preco": 28,
    "categoria": "ENTRADAS"
  },
  {
    "id": 16,
    "nome": "Mini Espetinhos",
    "descricao": "Espetinhos de carne com molho especial.",
    "preco": 32,
    "categoria": "ENTRADAS"
  },
  {
    "id": 17,
    "nome": "Carpaccio Tradicional",
    "descricao": "Fatias finas de carne com parmesão e molho.",
    "preco": 36,
    "categoria": "ENTRADAS"
  },
  {
    "id": 18,
    "nome": "Carpaccio de Salmão",
    "descricao": "Salmão em fatias finas com limão e ervas.",
    "preco": 42,
    "categoria": "ENTRADAS"
  },
  {
    "id": 19,
    "nome": "Camarão ao Alho",
    "descricao": "Camarões salteados no alho e azeite.",
    "preco": 44,
    "categoria": "ENTRADAS"
  },
  {
    "id": 20,
    "nome": "Camarão Empanado",
    "descricao": "Camarões empanados com molho especial.",
    "preco": 46,
    "categoria": "ENTRADAS"
  },
  {
    "id": 21,
    "nome": "Fritas com Parmesão",
    "descricao": "Batatas fritas com parmesão e ervas.",
    "preco": 27,
    "categoria": "ENTRADAS"
  },
  {
    "id": 22,
    "nome": "Cogumelos Salteados",
    "descricao": "Cogumelos frescos salteados na manteiga.",
    "preco": 25,
    "categoria": "ENTRADAS"
  },
  {
    "id": 23,
    "nome": "Tábua de Frios",
    "descricao": "Seleção de queijos, frios e acompanhamentos.",
    "preco": 48,
    "categoria": "ENTRADAS"
  },
  {
    "id": 24,
    "nome": "Tábua de Queijos",
    "descricao": "Seleção de queijos nacionais e importados.",
    "preco": 52,
    "categoria": "ENTRADAS"
  },
  {
    "id": 25,
    "nome": "Pão de Alho",
    "descricao": "Pães assados com creme de alho e ervas.",
    "preco": 18,
    "categoria": "ENTRADAS"
  },
  {
    "id": 26,
    "nome": "Pão Artesanal",
    "descricao": "Fatias de pão artesanal com azeite temperado.",
    "preco": 17,
    "categoria": "ENTRADAS"
  },
  {
    "id": 27,
    "nome": "Salada Caprese",
    "descricao": "Tomate, muçarela, manjericão e azeite.",
    "preco": 28,
    "categoria": "ENTRADAS"
  },
  {
    "id": 28,
    "nome": "Salada Caesar Mini",
    "descricao": "Folhas, croutons, parmesão e molho Caesar.",
    "preco": 26,
    "categoria": "ENTRADAS"
  },
  {
    "id": 29,
    "nome": "Mix de Folhas",
    "descricao": "Folhas frescas com molho cítrico.",
    "preco": 23,
    "categoria": "ENTRADAS"
  },
  {
    "id": 30,
    "nome": "Azeitonas Temperadas",
    "descricao": "Azeitonas selecionadas com ervas e azeite.",
    "preco": 20,
    "categoria": "ENTRADAS"
  },
  {
    "id": 31,
    "nome": "Filé Mignon ao Molho Madeira",
    "descricao": "Filé grelhado com molho madeira e acompanhamentos.",
    "preco": 68,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 32,
    "nome": "Filé Mignon ao Gorgonzola",
    "descricao": "Filé com molho cremoso de gorgonzola.",
    "preco": 72,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 33,
    "nome": "Filé Parmegiano",
    "descricao": "Filé empanado, molho de tomate e queijo gratinado.",
    "preco": 64,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 34,
    "nome": "Picanha Grelhada",
    "descricao": "Picanha grelhada com arroz e farofa.",
    "preco": 62,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 35,
    "nome": "Picanha Acebolada",
    "descricao": "Picanha com cebolas douradas e acompanhamentos.",
    "preco": 65,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 36,
    "nome": "Bife Ancho",
    "descricao": "Corte alto grelhado ao ponto escolhido.",
    "preco": 76,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 37,
    "nome": "Costela ao Molho Barbecue",
    "descricao": "Costela assada lentamente com barbecue.",
    "preco": 69,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 38,
    "nome": "Frango à Parmegiana",
    "descricao": "Peito de frango empanado com queijo e molho.",
    "preco": 49,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 39,
    "nome": "Frango Grelhado",
    "descricao": "Filé de frango grelhado com legumes.",
    "preco": 45,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 40,
    "nome": "Frango ao Molho de Ervas",
    "descricao": "Frango grelhado com molho de ervas frescas.",
    "preco": 48,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 41,
    "nome": "Salmão Grelhado",
    "descricao": "Salmão grelhado com legumes e arroz.",
    "preco": 67,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 42,
    "nome": "Salmão ao Molho de Maracujá",
    "descricao": "Salmão grelhado com molho de maracujá.",
    "preco": 71,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 43,
    "nome": "Tilápia Crocante",
    "descricao": "Filé de tilápia empanado com acompanhamentos.",
    "preco": 52,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 44,
    "nome": "Tilápia ao Limão",
    "descricao": "Tilápia grelhada com molho de limão.",
    "preco": 50,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 45,
    "nome": "Camarão Internacional",
    "descricao": "Camarões, arroz cremoso, presunto e queijo.",
    "preco": 74,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 46,
    "nome": "Camarão ao Catupiry",
    "descricao": "Camarões ao molho cremoso com catupiry.",
    "preco": 78,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 47,
    "nome": "Moqueca de Peixe",
    "descricao": "Peixe cozido com leite de coco, tomate e pimentões.",
    "preco": 70,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 48,
    "nome": "Moqueca de Camarão",
    "descricao": "Camarões em molho de coco e dendê.",
    "preco": 82,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 49,
    "nome": "Risoto de Camarão",
    "descricao": "Arroz arbóreo cremoso com camarões.",
    "preco": 73,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 50,
    "nome": "Risoto de Cogumelos",
    "descricao": "Risoto cremoso com cogumelos frescos.",
    "preco": 58,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 51,
    "nome": "Risoto de Filé",
    "descricao": "Risoto cremoso com tiras de filé mignon.",
    "preco": 69,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 52,
    "nome": "Lasanha Bolonhesa",
    "descricao": "Lasanha artesanal com carne e queijo gratinado.",
    "preco": 48,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 53,
    "nome": "Lasanha de Frango",
    "descricao": "Lasanha cremosa de frango e queijo.",
    "preco": 46,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 54,
    "nome": "Nhoque ao Sugo",
    "descricao": "Nhoque artesanal com molho de tomate.",
    "preco": 43,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 55,
    "nome": "Nhoque de Quatro Queijos",
    "descricao": "Nhoque com molho cremoso de quatro queijos.",
    "preco": 51,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 56,
    "nome": "Espaguete à Bolonhesa",
    "descricao": "Massa com molho de carne e tomate.",
    "preco": 42,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 57,
    "nome": "Fettuccine Alfredo",
    "descricao": "Massa com molho cremoso e parmesão.",
    "preco": 45,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 58,
    "nome": "Ravioli de Queijo",
    "descricao": "Ravioli artesanal com molho de tomate.",
    "preco": 49,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 59,
    "nome": "Ravioli de Carne",
    "descricao": "Ravioli recheado com carne e molho especial.",
    "preco": 53,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 60,
    "nome": "Arroz de Polvo",
    "descricao": "Arroz cremoso preparado com polvo e ervas.",
    "preco": 79,
    "categoria": "PRATO PRINCIPAL"
  },
  {
    "id": 61,
    "nome": "Pudim de Leite",
    "descricao": "Pudim cremoso com calda de caramelo.",
    "preco": 18,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 62,
    "nome": "Pudim de Chocolate",
    "descricao": "Pudim de chocolate com calda.",
    "preco": 20,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 63,
    "nome": "Brownie com Sorvete",
    "descricao": "Brownie quente servido com sorvete.",
    "preco": 25,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 64,
    "nome": "Brownie de Nozes",
    "descricao": "Brownie artesanal com nozes.",
    "preco": 23,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 65,
    "nome": "Petit Gâteau",
    "descricao": "Bolo de chocolate com recheio cremoso e sorvete.",
    "preco": 29,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 66,
    "nome": "Cheesecake de Frutas Vermelhas",
    "descricao": "Cheesecake cremoso com calda de frutas vermelhas.",
    "preco": 27,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 67,
    "nome": "Cheesecake de Maracujá",
    "descricao": "Cheesecake com cobertura de maracujá.",
    "preco": 26,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 68,
    "nome": "Torta de Limão",
    "descricao": "Torta cremosa com merengue.",
    "preco": 21,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 69,
    "nome": "Torta de Chocolate",
    "descricao": "Torta intensa de chocolate.",
    "preco": 24,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 70,
    "nome": "Torta de Maçã",
    "descricao": "Torta de maçã com canela.",
    "preco": 22,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 71,
    "nome": "Mousse de Chocolate",
    "descricao": "Mousse aerada de chocolate.",
    "preco": 19,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 72,
    "nome": "Mousse de Maracujá",
    "descricao": "Mousse leve de maracujá.",
    "preco": 18,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 73,
    "nome": "Mousse de Limão",
    "descricao": "Mousse refrescante de limão.",
    "preco": 18,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 74,
    "nome": "Creme Brûlée",
    "descricao": "Creme francês com crosta caramelizada.",
    "preco": 28,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 75,
    "nome": "Banoffee",
    "descricao": "Banana, doce de leite, creme e biscoito.",
    "preco": 24,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 76,
    "nome": "Pavê de Chocolate",
    "descricao": "Camadas de biscoito e creme de chocolate.",
    "preco": 20,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 77,
    "nome": "Pavê de Limão",
    "descricao": "Camadas de creme de limão e biscoito.",
    "preco": 19,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 78,
    "nome": "Sorvete de Baunilha",
    "descricao": "Duas bolas de sorvete de baunilha.",
    "preco": 15,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 79,
    "nome": "Sorvete de Chocolate",
    "descricao": "Duas bolas de sorvete de chocolate.",
    "preco": 15,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 80,
    "nome": "Sorvete de Morango",
    "descricao": "Duas bolas de sorvete de morango.",
    "preco": 15,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 81,
    "nome": "Sorvete de Pistache",
    "descricao": "Duas bolas de sorvete de pistache.",
    "preco": 19,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 82,
    "nome": "Sorvete de Coco",
    "descricao": "Duas bolas de sorvete de coco.",
    "preco": 16,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 83,
    "nome": "Açaí Especial",
    "descricao": "Açaí com banana, granola e leite em pó.",
    "preco": 22,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 84,
    "nome": "Salada de Frutas",
    "descricao": "Frutas frescas da estação.",
    "preco": 18,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 85,
    "nome": "Frutas com Mel",
    "descricao": "Frutas frescas com mel.",
    "preco": 17,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 86,
    "nome": "Churros Gourmet",
    "descricao": "Churros com doce de leite e chocolate.",
    "preco": 23,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 87,
    "nome": "Cocada Cremosa",
    "descricao": "Cocada artesanal cremosa.",
    "preco": 18,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 88,
    "nome": "Romeu e Julieta",
    "descricao": "Queijo cremoso com goiabada.",
    "preco": 21,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 89,
    "nome": "Crepe de Nutella",
    "descricao": "Crepe recheado com creme de avelã.",
    "preco": 25,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 90,
    "nome": "Profiteroles",
    "descricao": "Massa choux com creme e chocolate.",
    "preco": 28,
    "categoria": "SOBREMESAS"
  },
  {
    "id": 91,
    "nome": "Água Mineral",
    "descricao": "Garrafa de água mineral sem gás.",
    "preco": 6,
    "categoria": "BEBIDAS"
  },
  {
    "id": 92,
    "nome": "Água com Gás",
    "descricao": "Garrafa de água mineral com gás.",
    "preco": 7,
    "categoria": "BEBIDAS"
  },
  {
    "id": 93,
    "nome": "Água de Coco",
    "descricao": "Água de coco gelada.",
    "preco": 10,
    "categoria": "BEBIDAS"
  },
  {
    "id": 94,
    "nome": "Refrigerante Cola",
    "descricao": "Refrigerante de cola gelado.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 95,
    "nome": "Refrigerante Guaraná",
    "descricao": "Refrigerante de guaraná gelado.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 96,
    "nome": "Refrigerante Limão",
    "descricao": "Refrigerante sabor limão.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 97,
    "nome": "Refrigerante Laranja",
    "descricao": "Refrigerante sabor laranja.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 98,
    "nome": "Tônica",
    "descricao": "Água tônica gelada.",
    "preco": 9,
    "categoria": "BEBIDAS"
  },
  {
    "id": 99,
    "nome": "Suco de Laranja",
    "descricao": "Suco natural de laranja.",
    "preco": 13,
    "categoria": "BEBIDAS"
  },
  {
    "id": 100,
    "nome": "Suco de Limão",
    "descricao": "Suco natural de limão.",
    "preco": 12,
    "categoria": "BEBIDAS"
  },
  {
    "id": 101,
    "nome": "Suco de Maracujá",
    "descricao": "Suco natural de maracujá.",
    "preco": 13,
    "categoria": "BEBIDAS"
  },
  {
    "id": 102,
    "nome": "Suco de Abacaxi",
    "descricao": "Suco natural de abacaxi.",
    "preco": 13,
    "categoria": "BEBIDAS"
  },
  {
    "id": 103,
    "nome": "Suco de Morango",
    "descricao": "Suco natural de morango.",
    "preco": 15,
    "categoria": "BEBIDAS"
  },
  {
    "id": 104,
    "nome": "Suco de Acerola",
    "descricao": "Suco natural de acerola.",
    "preco": 13,
    "categoria": "BEBIDAS"
  },
  {
    "id": 105,
    "nome": "Suco de Caju",
    "descricao": "Suco natural de caju.",
    "preco": 13,
    "categoria": "BEBIDAS"
  },
  {
    "id": 106,
    "nome": "Limonada Suíça",
    "descricao": "Limão batido com gelo e leite condensado.",
    "preco": 16,
    "categoria": "BEBIDAS"
  },
  {
    "id": 107,
    "nome": "Pink Lemonade",
    "descricao": "Limonada refrescante com frutas vermelhas.",
    "preco": 17,
    "categoria": "BEBIDAS"
  },
  {
    "id": 108,
    "nome": "Vitamina de Banana",
    "descricao": "Banana batida com leite.",
    "preco": 15,
    "categoria": "BEBIDAS"
  },
  {
    "id": 109,
    "nome": "Vitamina de Morango",
    "descricao": "Morangos batidos com leite.",
    "preco": 17,
    "categoria": "BEBIDAS"
  },
  {
    "id": 110,
    "nome": "Vitamina de Abacate",
    "descricao": "Abacate batido com leite.",
    "preco": 17,
    "categoria": "BEBIDAS"
  },
  {
    "id": 111,
    "nome": "Café Espresso",
    "descricao": "Café espresso intenso.",
    "preco": 7,
    "categoria": "BEBIDAS"
  },
  {
    "id": 112,
    "nome": "Café com Leite",
    "descricao": "Café espresso com leite vaporizado.",
    "preco": 9,
    "categoria": "BEBIDAS"
  },
  {
    "id": 113,
    "nome": "Cappuccino",
    "descricao": "Café com leite vaporizado e espuma.",
    "preco": 12,
    "categoria": "BEBIDAS"
  },
  {
    "id": 114,
    "nome": "Chocolate Quente",
    "descricao": "Bebida cremosa de chocolate.",
    "preco": 14,
    "categoria": "BEBIDAS"
  },
  {
    "id": 115,
    "nome": "Chá de Camomila",
    "descricao": "Chá aromático de camomila.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 116,
    "nome": "Chá de Hortelã",
    "descricao": "Chá refrescante de hortelã.",
    "preco": 8,
    "categoria": "BEBIDAS"
  },
  {
    "id": 117,
    "nome": "Chá de Frutas Vermelhas",
    "descricao": "Infusão aromática de frutas vermelhas.",
    "preco": 10,
    "categoria": "BEBIDAS"
  },
  {
    "id": 118,
    "nome": "Milk-shake de Chocolate",
    "descricao": "Milk-shake cremoso de chocolate.",
    "preco": 21,
    "categoria": "BEBIDAS"
  },
  {
    "id": 119,
    "nome": "Milk-shake de Morango",
    "descricao": "Milk-shake cremoso de morango.",
    "preco": 21,
    "categoria": "BEBIDAS"
  },
  {
    "id": 120,
    "nome": "Milk-shake de Baunilha",
    "descricao": "Milk-shake cremoso de baunilha.",
    "preco": 21,
    "categoria": "BEBIDAS"
  },
  {
    "id": 121,
    "nome": "Vinho Tinto Cabernet Sauvignon",
    "descricao": "Vinho tinto encorpado e aromático.",
    "preco": 95,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 122,
    "nome": "Vinho Tinto Merlot",
    "descricao": "Tinto macio com notas frutadas.",
    "preco": 88,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 123,
    "nome": "Vinho Tinto Malbec",
    "descricao": "Tinto intenso com notas de frutas escuras.",
    "preco": 110,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 124,
    "nome": "Vinho Tinto Pinot Noir",
    "descricao": "Tinto elegante e delicado.",
    "preco": 120,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 125,
    "nome": "Vinho Tinto Syrah",
    "descricao": "Tinto estruturado com notas especiadas.",
    "preco": 115,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 126,
    "nome": "Vinho Tinto Tannat",
    "descricao": "Tinto encorpado e persistente.",
    "preco": 105,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 127,
    "nome": "Vinho Tinto Carménère",
    "descricao": "Tinto frutado e equilibrado.",
    "preco": 98,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 128,
    "nome": "Vinho Tinto Tempranillo",
    "descricao": "Tinto espanhol de boa estrutura.",
    "preco": 125,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 129,
    "nome": "Vinho Tinto Sangiovese",
    "descricao": "Tinto italiano com acidez equilibrada.",
    "preco": 118,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 130,
    "nome": "Vinho Tinto Barbera",
    "descricao": "Tinto italiano fresco e frutado.",
    "preco": 112,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 131,
    "nome": "Vinho Branco Chardonnay",
    "descricao": "Branco aromático e equilibrado.",
    "preco": 92,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 132,
    "nome": "Vinho Branco Sauvignon Blanc",
    "descricao": "Branco fresco com notas cítricas.",
    "preco": 89,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 133,
    "nome": "Vinho Branco Riesling",
    "descricao": "Branco aromático e refrescante.",
    "preco": 105,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 134,
    "nome": "Vinho Branco Pinot Grigio",
    "descricao": "Branco leve e elegante.",
    "preco": 98,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 135,
    "nome": "Vinho Branco Moscato",
    "descricao": "Branco aromático com toque adocicado.",
    "preco": 85,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 136,
    "nome": "Vinho Branco Chenin Blanc",
    "descricao": "Branco fresco e frutado.",
    "preco": 90,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 137,
    "nome": "Vinho Branco Viognier",
    "descricao": "Branco perfumado e macio.",
    "preco": 108,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 138,
    "nome": "Vinho Branco Verde",
    "descricao": "Vinho branco português leve e fresco.",
    "preco": 82,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 139,
    "nome": "Rosé Seco",
    "descricao": "Rosé delicado e refrescante.",
    "preco": 90,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 140,
    "nome": "Rosé de Provence",
    "descricao": "Rosé elegante de perfil floral.",
    "preco": 135,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 141,
    "nome": "Rosé Frutado",
    "descricao": "Rosé leve com aromas de frutas.",
    "preco": 86,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 142,
    "nome": "Espumante Brut",
    "descricao": "Espumante seco e refrescante.",
    "preco": 115,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 143,
    "nome": "Espumante Rosé",
    "descricao": "Espumante rosé elegante.",
    "preco": 125,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 144,
    "nome": "Espumante Moscatel",
    "descricao": "Espumante aromático e levemente doce.",
    "preco": 105,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 145,
    "nome": "Champagne Brut",
    "descricao": "Espumante francês de alta qualidade.",
    "preco": 280,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 146,
    "nome": "Champagne Rosé",
    "descricao": "Champagne rosé elegante e complexo.",
    "preco": 340,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 147,
    "nome": "Vinho do Porto Tawny",
    "descricao": "Vinho fortificado com notas de frutas secas.",
    "preco": 145,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 148,
    "nome": "Vinho do Porto Ruby",
    "descricao": "Vinho fortificado intenso e frutado.",
    "preco": 130,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 149,
    "nome": "Vinho Madeira",
    "descricao": "Vinho fortificado português aromático.",
    "preco": 155,
    "categoria": "CARTA DE VINHOS"
  },
  {
    "id": 150,
    "nome": "Vinho Licoroso Moscatel",
    "descricao": "Vinho doce e aromático para sobremesas.",
    "preco": 120,
    "categoria": "CARTA DE VINHOS"
  }
];
let carrinho = {};
let categoriaAtual = "TODAS";

const categorias = ["TODAS", ...new Set(produtos.map(p=>p.categoria))];

function moeda(v) {
  return v.toLocaleString("pt-BR", {style:"currency",currency:"BRL"});
}

function iniciar(){
  const menu=document.getElementById("menuCategorias");
  menu.innerHTML=categorias.map(c=>`<button class="${c==="TODAS"?"ativo":""}" onclick="selecionarCategoria('${c}',this)">${c}</button>`).join("");
  document.getElementById("filtro").innerHTML=categorias.map(c=>`<option value="${c}">${c==="TODAS"?"Todas as categorias":c}</option>`).join("");
  renderProdutos();
  atualizarPedido();
}

function selecionarCategoria(cat,botao){
  categoriaAtual=cat;
  document.querySelectorAll(".categorias button").forEach(b=>b.classList.remove("ativo"));
  botao.classList.add("ativo");
  document.getElementById("filtro").value=cat;
  renderProdutos();
}

function renderProdutos(){
  const busca=document.getElementById("pesquisa").value.toLowerCase().trim();
  const filtro=document.getElementById("filtro").value;
  const ordem=document.getElementById("ordenacao").value;
  let lista=produtos.filter(p=>(categoriaAtual==="TODAS" ? true : p.categoria===categoriaAtual))
    .filter(p=>(filtro==="TODAS" || p.categoria===filtro))
    .filter(p=>p.nome.toLowerCase().includes(busca));
  if(ordem==="menor") lista.sort((a,b)=>a.preco-b.preco);
  if(ordem==="maior") lista.sort((a,b)=>b.preco-a.preco);
  if(ordem==="az") lista.sort((a,b)=>a.nome.localeCompare(b.nome));
  document.getElementById("listaProdutos").innerHTML=lista.map(p=>`
    <article class="produto">
      <span class="tag">${p.categoria}</span>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <div class="produto-bottom"><span class="preco">${moeda(p.preco)}</span>
      <button class="add" onclick="adicionar(${p.id})">+ ADICIONAR</button></div>
    </article>`).join("") || '<p>Nenhum produto encontrado.</p>';
}

function adicionar(id){ carrinho[id]=(carrinho[id]||0)+1; atualizarPedido(); }
function alterar(id,delta){ carrinho[id]=(carrinho[id]||0)+delta; if(carrinho[id]<=0) delete carrinho[id]; atualizarPedido(); }
function remover(id){ delete carrinho[id]; atualizarPedido(); }

function atualizarPedido(){
  const ids=Object.keys(carrinho).map(Number);
  const itens=document.getElementById("itensPedido");
  document.getElementById("vazio").style.display=ids.length?"none":"block";
  itens.innerHTML=ids.map(id=>{
    const p=produtos.find(x=>x.id===id),q=carrinho[id];
    return `<div class="item">
      <div class="item-top"><div><h4>${p.nome}</h4><small>${moeda(p.preco)} / unidade</small></div><strong>${moeda(p.preco*q)}</strong></div>
      <div class="qtd"><button onclick="alterar(${id},-1)">−</button><b>${q}</b><button onclick="alterar(${id},1)">+</button><button class="remover" onclick="remover(${id})">Remover</button></div>
    </div>`;
  }).join("");
  const subtotal=ids.reduce((s,id)=>s+produtos.find(p=>p.id===id).preco*carrinho[id],0);
  const garcom=document.getElementById("garcom").checked?subtotal*.10:0;
  document.getElementById("subtotal").textContent=moeda(subtotal);
  document.getElementById("valorGarcom").textContent=moeda(garcom);
  document.getElementById("total").textContent=moeda(subtotal+garcom);
  const qtd=ids.reduce((s,id)=>s+carrinho[id],0);
  document.getElementById("contador").textContent=qtd;
  document.getElementById("badgePedido").textContent=`${qtd} ${qtd===1?"item":"itens"}`;
}

function abrirFinalizacao(){
  if(!Object.keys(carrinho).length){alert("Adicione pelo menos um produto ao pedido.");return;}
  document.getElementById("modalConteudo").innerHTML=`
    <h2>Finalizar pedido</h2><p>Informe os dados para concluir.</p>
    <div class="form">
      <input id="cliente" placeholder="Nome do cliente *">
      <input id="mesa" type="number" min="1" placeholder="Número da mesa *">
      <textarea id="obs" rows="3" placeholder="Observações do pedido (opcional)"></textarea>
      <button class="confirmar" onclick="confirmarPedido()">CONFIRMAR PEDIDO</button>
    </div>`;
  document.getElementById("modal").classList.remove("hidden");
}

function confirmarPedido(){
  const nome=document.getElementById("cliente").value.trim(),mesa=document.getElementById("mesa").value.trim();
  if(!nome||!mesa){alert("Preencha o nome do cliente e o número da mesa.");return;}
  const ids=Object.keys(carrinho).map(Number);
  const subtotal=ids.reduce((s,id)=>s+produtos.find(p=>p.id===id).preco*carrinho[id],0);
  const taxa=document.getElementById("garcom").checked?subtotal*.10:0;
  const numero=Math.floor(100000+Math.random()*900000);
  const itens=ids.map(id=>{const p=produtos.find(x=>x.id===id);return `<p><b>${carrinho[id]}×</b> ${p.nome} — ${moeda(p.preco*carrinho[id])}</p>`}).join("");
  const obs=document.getElementById("obs").value.trim();
  document.getElementById("modalConteudo").innerHTML=`
    <div class="sucesso"><p class="eyebrow">PEDIDO REGISTRADO</p><div class="numero">#${numero}</div><h2>Obrigado, ${nome}!</h2></div>
    <div class="resumo-final"><p><b>Mesa:</b> ${mesa}</p>${itens}<hr>
      <p><b>Subtotal:</b> ${moeda(subtotal)}</p><p><b>Garçom (10%):</b> ${moeda(taxa)}</p><p><b>Total:</b> ${moeda(subtotal+taxa)}</p>
      ${obs?`<p><b>Observações:</b> ${obs}</p>`:""}</div>
    <button class="confirmar" onclick="novoPedido()">NOVO PEDIDO</button>`;
}

function novoPedido(){carrinho={};document.getElementById("garcom").checked=false;fecharModal();atualizarPedido();}
function fecharModal(){document.getElementById("modal").classList.add("hidden");}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")fecharModal();});
iniciar();
