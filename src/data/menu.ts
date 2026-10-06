/**
 * Meniul complet Merci Bistro & Coffee — generat din exportul meniului digital (Qubs),
 * cu diacritice corectate. Prețuri în lei (RON). Valorile nutriționale sunt per 100 g.
 *
 * TODO_CLIENT: confirmați gramajul pentru „Quesadilla de pui a la Merci" (în sistemul vechi apare 100 g,
 * dar valorile nutriționale sunt calculate pentru 600 g).
 * TODO_CLIENT: alergenii nu au putut fi preluați per preparat — trebuie completați (câmpul `allergens`).
 */
import type { MenuCategory } from "./menu-types";

export const menu: MenuCategory[] = [
  {
    "slug": "mic-dejun",
    "name": "Mic dejun",
    "sections": [
      {
        "items": [
          {
            "id": "mic-dejun--avocado-toast",
            "name": "AVOCADO TOAST",
            "price": 38,
            "description": "Pâine prăjită, avocado, ochiuri de ou, somon afumat, lămâie, ulei de măsline, sare, piper",
            "weight": 350,
            "nutrition": {
              "kcal": 210.0,
              "fat": 13.3,
              "saturates": 2.9,
              "carbs": 15.1,
              "sugars": 2.0,
              "protein": 8.2,
              "salt": 1.1
            }
          },
          {
            "id": "mic-dejun--mic-dejun-traditional",
            "name": "MIC DEJUN TRADIȚIONAL",
            "price": 36,
            "description": "Ouă, slănină, cartofi prăjiți, telemea, ceapă verde",
            "weight": 450,
            "nutrition": {
              "kcal": 213.6,
              "fat": 17.5,
              "saturates": 7.2,
              "carbs": 8.3,
              "sugars": 0.8,
              "protein": 6.6,
              "salt": 0.81
            }
          },
          {
            "id": "mic-dejun--omleta-simpla",
            "name": "OMLETĂ SIMPLĂ",
            "price": 19,
            "description": "Omletă din ouă proaspete — adaugă extra ingrediente la alegere",
            "weight": 120,
            "nutrition": {
              "kcal": 98.4,
              "fat": 6.9,
              "saturates": 2.1,
              "carbs": 1.6,
              "sugars": 0.9,
              "protein": 8.7,
              "salt": 0.2
            }
          }
        ]
      }
    ],
    "intro": "Dimineți fără grabă, de la 9:00 în cursul săptămânii."
  },
  {
    "slug": "sharing-is-caring",
    "name": "Sharing is caring",
    "sections": [
      {
        "items": [
          {
            "id": "sharing-is-caring--grill-fest-pentru-4-persoane",
            "name": "GRILL FEST PENTRU 4 PERSOANE",
            "price": 290,
            "description": "Piept de pui, ceafă de porc, costiță porc, cârnăcior, cartofi copți, ceapă roșie, ciuperci, telemea, sos rose, sos usturoi",
            "weight": 2500,
            "nutrition": {
              "kcal": 210.0,
              "fat": 13.0,
              "saturates": 4.5,
              "carbs": 10.0,
              "sugars": 1.5,
              "protein": 14.0,
              "salt": 1.6
            }
          },
          {
            "id": "sharing-is-caring--sharing-plate",
            "name": "SHARING PLATE",
            "price": 180,
            "description": "Burger porc, pizza, flavor chicken wrap, cartofi prăjiți, sos rose",
            "weight": 1100,
            "nutrition": {
              "kcal": 250.0,
              "fat": 13.0,
              "saturates": 3.0,
              "carbs": 25.0,
              "sugars": 3.0,
              "protein": 10.0,
              "salt": 1.4
            }
          }
        ]
      }
    ],
    "intro": "Platouri generoase, gândite pentru mese lungi cu prietenii."
  },
  {
    "slug": "startere",
    "name": "Startere",
    "sections": [
      {
        "items": [
          {
            "id": "startere--nachos-mexican",
            "name": "NACHOS MEXICAN",
            "price": 42,
            "description": "Carne de vită tocată, ceapă, ardei, sos de roșii, cajun, nachos, sos cedar, ardei iute",
            "weight": 250,
            "nutrition": {
              "kcal": 230.0,
              "fat": 13.0,
              "saturates": 4.0,
              "carbs": 20.0,
              "sugars": 3.0,
              "protein": 8.0,
              "salt": 1.4
            }
          },
          {
            "id": "startere--pita-cu-unsoare",
            "name": "PITA CU UNSOARE",
            "price": 20,
            "description": "Pâine de casă, untură de porc, roșii de grădină, ceapă verde, boia afumată",
            "weight": 200,
            "nutrition": {
              "kcal": 320.0,
              "fat": 19.5,
              "saturates": 7.0,
              "carbs": 29.8,
              "sugars": 2.2,
              "protein": 6.1,
              "salt": 1.1
            }
          },
          {
            "id": "startere--fritto-misto",
            "name": "FRITTO MISTO",
            "price": 78,
            "description": "Calamar, creveți, dovlecel, făină, lapte, ou, sare",
            "weight": 300,
            "nutrition": {
              "kcal": 210.0,
              "fat": 11.0,
              "saturates": 1.8,
              "carbs": 15.0,
              "sugars": 1.2,
              "protein": 12.5,
              "salt": 1.1
            }
          },
          {
            "id": "startere--bruschete-cu-rosii-si-grana",
            "name": "BRUSCHETE CU ROȘII ȘI GRANA",
            "price": 29,
            "description": "Bruschetă, roșii, busuioc, oregano, ulei de măsline, grana",
            "weight": 250,
            "nutrition": {
              "kcal": 191.0,
              "fat": 7.0,
              "saturates": 2.0,
              "carbs": 25.0,
              "sugars": 3.1,
              "protein": 6.0,
              "salt": 1.1
            }
          },
          {
            "id": "startere--bruschete-mixte",
            "name": "BRUSCHETE MIXTE",
            "price": 39,
            "description": "Pâine prăjită, roșii, prosciutto crudo, somon, philadelphia, anșoa, busuioc, ulei de măsline, lămâie",
            "weight": 350,
            "nutrition": {
              "kcal": 220.0,
              "fat": 9.0,
              "saturates": 2.5,
              "carbs": 25.0,
              "sugars": 3.8,
              "protein": 9.0,
              "salt": 1.6
            }
          },
          {
            "id": "startere--humus-libanez",
            "name": "HUMUS LIBANEZ",
            "price": 29,
            "description": "Năut, chimion, ulei de măsline, lămâie, roșii cherry, măsline verzi, feta",
            "weight": 300,
            "nutrition": {
              "kcal": 206.0,
              "fat": 13.5,
              "saturates": 2.5,
              "carbs": 16.5,
              "sugars": 1.2,
              "protein": 6.5,
              "salt": 1.2
            }
          },
          {
            "id": "startere--platou-mixt-branzeturi-si-salamuri-italiene",
            "name": "PLATOU MIXT BRÂNZETURI ȘI SALAMURI ITALIENE",
            "price": 85,
            "description": "Cheddar, cașcaval afumat, gorgonzola, grana, prosciutto crudo",
            "weight": 250,
            "nutrition": {
              "kcal": 380.0,
              "fat": 30.0,
              "saturates": 19.0,
              "carbs": 2.5,
              "sugars": 0.8,
              "protein": 22.0,
              "salt": 2.3
            }
          },
          {
            "id": "startere--garlic-bread-butter-cheese",
            "name": "GARLIC BREAD BUTTER CHEESE",
            "price": 32,
            "description": "Ciabatta, prosciutto, gorgonzola, cheddar, unt, usturoi",
            "weight": 180,
            "nutrition": {
              "kcal": 345.0,
              "fat": 18.0,
              "saturates": 9.0,
              "carbs": 32.0,
              "sugars": 2.0,
              "protein": 11.0,
              "salt": 1.9
            }
          },
          {
            "id": "startere--salata-de-vinete",
            "name": "SALATĂ DE VINETE",
            "price": 25,
            "description": "Vinete, ou, ceapă roșie, muștar, lămâie, ulei",
            "weight": 150,
            "nutrition": {
              "kcal": 170.0,
              "fat": 16.0,
              "saturates": 2.2,
              "carbs": 4.5,
              "sugars": 2.9,
              "protein": 2.3,
              "salt": 0.8
            }
          }
        ]
      }
    ],
    "intro": "Gusturi mici, de deschis apetitul."
  },
  {
    "slug": "supe",
    "name": "Supe & ciorbe",
    "sections": [
      {
        "items": [
          {
            "id": "supe--ciorba-de-legume",
            "name": "CIORBĂ DE LEGUME",
            "price": 25,
            "description": "Morcovi, țelină, ceapă, ardei, roșii",
            "weight": 450,
            "nutrition": {
              "kcal": 24.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 5.0,
              "sugars": 2.7,
              "protein": 0.9,
              "salt": 0.6
            }
          },
          {
            "id": "supe--ciorba-de-burta",
            "name": "CIORBĂ DE BURTĂ",
            "price": 32,
            "description": "Burtă de vită, smântână, usturoi, morcovi, gogoșari murați, ardei iute",
            "weight": 450,
            "nutrition": {
              "kcal": 65.0,
              "fat": 3.8,
              "saturates": 2.1,
              "carbs": 3.0,
              "sugars": 1.6,
              "protein": 4.5,
              "salt": 1.2
            }
          },
          {
            "id": "supe--gulas-de-vita",
            "name": "GULAȘ DE VITĂ",
            "price": 32,
            "description": "Carne de vită, cartofi, morcovi, ardei roșu, ceapă, chimen",
            "weight": 450,
            "nutrition": {
              "kcal": 98.0,
              "fat": 4.2,
              "saturates": 1.5,
              "carbs": 7.6,
              "sugars": 2.5,
              "protein": 7.2,
              "salt": 0.85
            }
          }
        ]
      }
    ],
    "intro": "Rețete calde, gătite ca acasă."
  },
  {
    "slug": "salate",
    "name": "Salate",
    "sections": [
      {
        "items": [
          {
            "id": "salate--salata-cu-ton",
            "name": "SALATĂ CU TON",
            "price": 41,
            "description": "Mix de salată, bucăți ton, ceapă, apio, ardei roșu, roșii, măsline verzi, ulei măsline, zeamă lămâie",
            "weight": 350,
            "nutrition": {
              "kcal": 92.0,
              "fat": 5.7,
              "saturates": 0.8,
              "carbs": 3.5,
              "sugars": 1.8,
              "protein": 7.5,
              "salt": 1.1
            }
          },
          {
            "id": "salate--salata-cu-prosciutto-crudo-piersici-si-mozzarella-di-bufala",
            "name": "SALATĂ CU PROSCIUTTO CRUDO, PIERSICI ȘI MOZZARELLA DI BUFALA",
            "price": 49,
            "description": "Salată mixtă, prosciutto crudo, piersici, mozzarella di bufala, roșii cherry, nuci, ulei de măsline, sare, piper",
            "weight": 350,
            "nutrition": {
              "kcal": 175.0,
              "fat": 13.0,
              "saturates": 5.5,
              "carbs": 6.0,
              "sugars": 4.0,
              "protein": 8.0,
              "salt": 1.5
            }
          },
          {
            "id": "salate--salata-thera",
            "name": "SALATĂ THERA",
            "price": 39,
            "description": "Mix de salată, năut, castraveți, măsline verzi, roșii, miere, muștar, ulei de măsline, cremă de oțet balsamic, brânză feta",
            "weight": 300,
            "nutrition": {
              "kcal": 120.0,
              "fat": 7.0,
              "saturates": 2.5,
              "carbs": 10.0,
              "sugars": 4.0,
              "protein": 4.0,
              "salt": 1.1
            }
          },
          {
            "id": "salate--salata-caesar",
            "name": "SALATĂ CAESAR",
            "price": 41,
            "description": "Piept de pui la grill, salată, capere, anșoa, ou, ulei de măsline, zeamă de lămâie, muștar, parmezan",
            "weight": 300,
            "nutrition": {
              "kcal": 170.0,
              "fat": 11.0,
              "saturates": 2.5,
              "carbs": 5.0,
              "sugars": 1.2,
              "protein": 13.0,
              "salt": 1.5
            }
          }
        ]
      }
    ],
    "intro": "Proaspete, colorate, pline de gust."
  },
  {
    "slug": "sandwiches",
    "name": "Sandwiches",
    "sections": [
      {
        "items": [
          {
            "id": "sandwiches--veggie",
            "name": "VEGGIE",
            "price": 25,
            "description": "Ciabatta, pesto, castraveți, roșii, mozzarella, busuioc, unt",
            "weight": 180,
            "nutrition": {
              "kcal": 240.0,
              "fat": 10.0,
              "saturates": 4.0,
              "carbs": 29.0,
              "sugars": 2.5,
              "protein": 7.0,
              "salt": 1.1
            }
          },
          {
            "id": "sandwiches--pesto-chicken",
            "name": "PESTO CHICKEN",
            "price": 29,
            "description": "Ciabatta, piept de pui la grill, pesto, mozzarella, roșii, castraveți, unt",
            "weight": 200,
            "nutrition": {
              "kcal": 230.0,
              "fat": 12.0,
              "saturates": 3.5,
              "carbs": 17.0,
              "sugars": 2.1,
              "protein": 13.0,
              "salt": 1.2
            }
          },
          {
            "id": "sandwiches--pulled-pork-smoked",
            "name": "PULLED PORK SMOKED",
            "price": 33,
            "description": "Ciabatta, pulled pork, muștar, mozzarella, castraveți murați, unt",
            "weight": 250,
            "nutrition": {
              "kcal": 230.0,
              "fat": 9.0,
              "saturates": 4.0,
              "carbs": 25.0,
              "sugars": 2.5,
              "protein": 11.0,
              "salt": 1.5
            }
          },
          {
            "id": "sandwiches--marinara-snitel",
            "name": "MARINARA ȘNIȚEL",
            "price": 30,
            "description": "Ciabatta, șnițel de pui, sos de roșii coapte, mozzarella, unt, cremă de brânză philadelphia",
            "weight": 200,
            "nutrition": {
              "kcal": 237.0,
              "fat": 9.0,
              "saturates": 3.6,
              "carbs": 27.0,
              "sugars": 2.3,
              "protein": 12.0,
              "salt": 1.1
            }
          },
          {
            "id": "sandwiches--tuna",
            "name": "TUNA",
            "price": 29,
            "description": "Ciabatta, ton, porumb, ceapă roșie, maioneză, mozzarella, unt",
            "weight": 250,
            "nutrition": {
              "kcal": 235.0,
              "fat": 11.0,
              "saturates": 3.2,
              "carbs": 21.0,
              "sugars": 3.4,
              "protein": 12.0,
              "salt": 1.4
            }
          }
        ]
      }
    ],
    "intro": "Ciabatta crocantă, umpluturi generoase."
  },
  {
    "slug": "street-food",
    "name": "Street food",
    "sections": [
      {
        "items": [
          {
            "id": "street-food--burger-de-pui",
            "name": "BURGER DE PUI",
            "price": 38,
            "description": "Piept de pui, chiflă, ou, panko, salată coleslaw, castraveți murați cu scorțișoară și mărar, chedar, sos rose",
            "weight": 350,
            "nutrition": {
              "kcal": 210.0,
              "fat": 8.0,
              "saturates": 2.1,
              "carbs": 21.0,
              "sugars": 3.7,
              "protein": 13.0,
              "salt": 1.2
            }
          },
          {
            "id": "street-food--burger-de-vita",
            "name": "BURGER DE VITĂ",
            "price": 40,
            "description": "Carne de vită tocată, chiflă, chedar, bacon, ceapă caramelizată, sos de burger, salată verde",
            "weight": 350,
            "nutrition": {
              "kcal": 270.0,
              "fat": 16.0,
              "saturates": 6.0,
              "carbs": 20.0,
              "sugars": 4.0,
              "protein": 13.0,
              "salt": 1.2
            }
          },
          {
            "id": "street-food--burger-pulled-pork-smoked",
            "name": "BURGER PULLED PORK SMOKED",
            "price": 40,
            "description": "Pulled pork smoked, chiflă, chedar, salată coleslaw, castraveți murați, sos signature BBQ",
            "weight": 350,
            "nutrition": {
              "kcal": 220.0,
              "fat": 9.0,
              "saturates": 3.7,
              "carbs": 22.0,
              "sugars": 6.1,
              "protein": 11.0,
              "salt": 1.3
            }
          },
          {
            "id": "street-food--panino-de-pui",
            "name": "PANINO DE PUI",
            "price": 23,
            "description": "Chiflă de casă, cartofi prăjiți, pui grill, roșii, varză, ceapă roșie, sos de iaurt cu usturoi",
            "weight": 300,
            "nutrition": {
              "kcal": 205.0,
              "fat": 7.5,
              "saturates": 2.0,
              "carbs": 27.0,
              "sugars": 4.0,
              "protein": 8.0,
              "salt": 1.2
            }
          },
          {
            "id": "street-food--fried-box-pulled-pork-smoked",
            "name": "FRIED BOX PULLED PORK SMOKED",
            "price": 49,
            "description": "Pulled pork smoked, cartofi prăjiți, castraveți murați, mix de brânzeturi",
            "weight": 450,
            "nutrition": {
              "kcal": 240.0,
              "fat": 14.0,
              "saturates": 4.2,
              "carbs": 15.0,
              "sugars": 1.2,
              "protein": 14.0,
              "salt": 1.7
            }
          },
          {
            "id": "street-food--smash-burger-in-baie-de-sos-cheddar",
            "name": "SMASH BURGER ÎN BAIE DE SOS CHEDDAR",
            "price": 45,
            "description": "Carne de vită tocată, chiflă, chedar, ceapă roșie, jalapenos, sos chedar, ceapă crispy",
            "weight": 400,
            "nutrition": {
              "kcal": 250.0,
              "fat": 12.0,
              "saturates": 5.0,
              "carbs": 21.0,
              "sugars": 4.0,
              "protein": 14.0,
              "salt": 1.5
            }
          }
        ]
      }
    ],
    "intro": "Burgeri și clasici de stradă, făcuți ca la carte."
  },
  {
    "slug": "pizza",
    "name": "Pizza & focaccia",
    "sections": [
      {
        "title": "Focaccia",
        "items": [
          {
            "id": "pizza--focaccia-primavera",
            "name": "FOCACCIA PRIMAVERA",
            "price": 33,
            "description": "Aluat, mozzarella di bufala, roșii cherry, pesto, busuioc, grana",
            "weight": 300,
            "nutrition": {
              "kcal": 275.0,
              "fat": 10.0,
              "saturates": 4.5,
              "carbs": 35.0,
              "sugars": 2.9,
              "protein": 9.0,
              "salt": 1.1
            }
          },
          {
            "id": "pizza--focaccia-simpla",
            "name": "FOCACCIA SIMPLĂ",
            "price": 19,
            "description": "Aluat, oregano, sare",
            "weight": 150,
            "nutrition": {
              "kcal": 250.0,
              "fat": 4.0,
              "saturates": 0.6,
              "carbs": 48.0,
              "sugars": 1.5,
              "protein": 7.0,
              "salt": 1.2
            }
          },
          {
            "id": "pizza--focaccia-marinara",
            "name": "FOCACCIA MARINARA",
            "price": 29,
            "description": "Aluat, sos de roșii, cremă de usturoi, grana, roșii cherry, oregano, busuioc",
            "weight": 350,
            "nutrition": {
              "kcal": 245.0,
              "fat": 6.3,
              "saturates": 1.1,
              "carbs": 39.0,
              "sugars": 3.8,
              "protein": 6.5,
              "salt": 1.4
            }
          }
        ]
      },
      {
        "title": "Pizza Red",
        "items": [
          {
            "id": "pizza--margherita",
            "name": "MARGHERITA",
            "price": 33,
            "description": "Aluat, sos de roșii, mozzarella, ulei de măsline, busuioc",
            "weight": 370,
            "nutrition": {
              "kcal": 250.0,
              "fat": 8.0,
              "saturates": 3.5,
              "carbs": 33.0,
              "sugars": 3.5,
              "protein": 9.0,
              "salt": 1.1
            }
          },
          {
            "id": "pizza--diavola",
            "name": "DIAVOLA",
            "price": 35,
            "description": "Aluat, sos de roșii, mozzarella, salam picant",
            "weight": 450,
            "nutrition": {
              "kcal": 245.0,
              "fat": 11.0,
              "saturates": 4.4,
              "carbs": 25.0,
              "sugars": 4.0,
              "protein": 11.0,
              "salt": 2.4
            }
          },
          {
            "id": "pizza--napoli",
            "name": "NAPOLI",
            "price": 39,
            "description": "Aluat, sos de roșii, mozzarella, anșoa, capere",
            "weight": 430,
            "nutrition": {
              "kcal": 225.0,
              "fat": 6.0,
              "saturates": 3.0,
              "carbs": 30.0,
              "sugars": 3.5,
              "protein": 11.0,
              "salt": 2.6
            }
          },
          {
            "id": "pizza--nduja-calabrese-e-bufala",
            "name": "NDUJA CALABRESE E BUFALA",
            "price": 48,
            "description": "Aluat, sos de roșii, nduja calabrese (salam picant), mozzarella di bufala, busuioc",
            "weight": 480,
            "nutrition": {
              "kcal": 250.0,
              "fat": 11.0,
              "saturates": 4.5,
              "carbs": 27.0,
              "sugars": 2.8,
              "protein": 11.0,
              "salt": 1.8
            }
          },
          {
            "id": "pizza--cotto-e-funghi",
            "name": "COTTO E FUNGHI",
            "price": 40,
            "description": "Aluat, sos de roșii, mozzarella, cotto di Parma, ciuperci trifolate",
            "weight": 450,
            "nutrition": {
              "kcal": 190.0,
              "fat": 7.0,
              "saturates": 2.5,
              "carbs": 23.0,
              "sugars": 2.8,
              "protein": 9.0,
              "salt": 1.8
            }
          },
          {
            "id": "pizza--capriciosa",
            "name": "CAPRICIOSA",
            "price": 40,
            "description": "Aluat, sos de roșii, mozzarella, cotto di Parma, ciuperci trifolate, măsline verzi",
            "weight": 480,
            "nutrition": {
              "kcal": 220.0,
              "fat": 8.0,
              "saturates": 3.0,
              "carbs": 28.0,
              "sugars": 3.5,
              "protein": 10.0,
              "salt": 1.8
            }
          },
          {
            "id": "pizza--vegetariana",
            "name": "VEGETARIANA",
            "price": 38,
            "description": "Aluat, sos de roșii, mozzarella, vinete, dovlecei, ardei, roșii cherry la cuptor, busuioc",
            "weight": 450,
            "nutrition": {
              "kcal": 172.0,
              "fat": 6.2,
              "saturates": 2.8,
              "carbs": 22.8,
              "sugars": 3.5,
              "protein": 6.1,
              "salt": 1.1
            }
          },
          {
            "id": "pizza--bufala",
            "name": "BUFALA",
            "price": 41,
            "description": "Aluat, sos de roșii, mozzarella, bufala, busuioc, grana",
            "weight": 430,
            "nutrition": {
              "kcal": 228.0,
              "fat": 8.0,
              "saturates": 3.6,
              "carbs": 29.0,
              "sugars": 3.0,
              "protein": 10.0,
              "salt": 1.3
            }
          },
          {
            "id": "pizza--junior",
            "name": "JUNIOR",
            "price": 35,
            "description": "Aluat, sos de roșii, mozzarella, șuncă, porumb",
            "weight": 450,
            "nutrition": {
              "kcal": 220.0,
              "fat": 7.0,
              "saturates": 3.5,
              "carbs": 30.0,
              "sugars": 3.0,
              "protein": 9.0,
              "salt": 1.5
            }
          },
          {
            "id": "pizza--americana",
            "name": "AMERICANA",
            "price": 44,
            "description": "Aluat, sos de roșii, mozzarella, philadelphia, cotto di Parma, salam picant",
            "weight": 480,
            "nutrition": {
              "kcal": 250.0,
              "fat": 12.0,
              "saturates": 5.0,
              "carbs": 25.0,
              "sugars": 3.0,
              "protein": 11.0,
              "salt": 1.7
            }
          },
          {
            "id": "pizza--salami",
            "name": "SALAMI",
            "price": 39,
            "description": "Aluat, sos de roșii, mozzarella, salam dulce",
            "weight": 450,
            "nutrition": {
              "kcal": 250.0,
              "fat": 11.0,
              "saturates": 4.5,
              "carbs": 26.0,
              "sugars": 3.0,
              "protein": 12.0,
              "salt": 1.6
            }
          },
          {
            "id": "pizza--frutti-di-mare",
            "name": "FRUTTI DI MARE",
            "price": 55,
            "description": "Aluat, mix fructe de mare, sos de roșii",
            "weight": 460,
            "nutrition": {
              "kcal": 170.0,
              "fat": 4.5,
              "saturates": 1.0,
              "carbs": 23.0,
              "sugars": 3.0,
              "protein": 10.0,
              "salt": 1.3
            }
          },
          {
            "id": "pizza--crudo-e-gorgonzola",
            "name": "CRUDO E GORGONZOLA",
            "price": 45,
            "description": "Aluat, sos de roșii, crudo di Parma, gorgonzola",
            "weight": 450,
            "nutrition": {
              "kcal": 260.0,
              "fat": 12.0,
              "saturates": 6.5,
              "carbs": 28.0,
              "sugars": 2.9,
              "protein": 12.0,
              "salt": 1.7
            }
          },
          {
            "id": "pizza--quattro-stagioni",
            "name": "QUATTRO STAGIONI",
            "price": 42,
            "description": "Aluat, sos de roșii, mozzarella, șuncă, ciuperci, măsline, porumb",
            "weight": 450,
            "nutrition": {
              "kcal": 225.0,
              "fat": 8.0,
              "saturates": 3.7,
              "carbs": 28.0,
              "sugars": 3.2,
              "protein": 10.0,
              "salt": 1.4
            }
          },
          {
            "id": "pizza--romaneasca",
            "name": "ROMÂNEASCĂ",
            "price": 46,
            "description": "Aluat, sos de roșii, mozzarella, cârnați, bacon, ceapă roșie",
            "weight": 450,
            "nutrition": {
              "kcal": 247.0,
              "fat": 12.0,
              "saturates": 5.2,
              "carbs": 23.0,
              "sugars": 3.2,
              "protein": 11.0,
              "salt": 1.7
            }
          }
        ]
      },
      {
        "title": "Pizza White",
        "items": [
          {
            "id": "pizza--quattro-formaggi",
            "name": "QUATTRO FORMAGGI",
            "price": 42,
            "description": "Aluat, mozzarella, scamorza, parmezan, gorgonzola",
            "weight": 450,
            "nutrition": {
              "kcal": 270.0,
              "fat": 15.0,
              "saturates": 9.0,
              "carbs": 20.0,
              "sugars": 2.0,
              "protein": 15.0,
              "salt": 1.6
            }
          },
          {
            "id": "pizza--tonno-e-cipolla",
            "name": "TONNO E CIPOLLA",
            "price": 43,
            "description": "Aluat, mozzarella, ton, ceapă roșie, ceapă caramelizată, busuioc",
            "weight": 480,
            "nutrition": {
              "kcal": 210.0,
              "fat": 7.0,
              "saturates": 3.0,
              "carbs": 24.0,
              "sugars": 3.5,
              "protein": 11.0,
              "salt": 1.6
            }
          },
          {
            "id": "pizza--pizza-antonia",
            "name": "PIZZA ANTONIA",
            "price": 49,
            "description": "Aluat, mozzarella, mozzarella di bufala, ciuperci trifolate, crudo di Parma, grana, roșii uscate, busuioc",
            "weight": 470,
            "nutrition": {
              "kcal": 230.0,
              "fat": 9.5,
              "saturates": 4.5,
              "carbs": 25.0,
              "sugars": 3.2,
              "protein": 11.0,
              "salt": 2.0
            }
          }
        ]
      }
    ],
    "intro": "Aluat dospit, cuptor fierbinte — roșie, albă sau focaccia."
  },
  {
    "slug": "paste",
    "name": "Paste de casă",
    "sections": [
      {
        "items": [
          {
            "id": "paste--paste-de-casa-carbonara",
            "name": "PASTE DE CASĂ CARBONARA",
            "price": 42,
            "description": "Făină, ou, guanciale, parmezan, piper",
            "weight": 350,
            "nutrition": {
              "kcal": 298.0,
              "fat": 13.6,
              "saturates": 4.5,
              "carbs": 32.0,
              "sugars": 1.1,
              "protein": 13.5,
              "salt": 1.3
            }
          },
          {
            "id": "paste--paste-cu-pui-ciuperci-si-parmezan",
            "name": "PASTE CU PUI, CIUPERCI ȘI PARMEZAN",
            "price": 46,
            "description": "Făină, ou, pui, ciuperci, parmezan",
            "weight": 350,
            "nutrition": {
              "kcal": 165.0,
              "fat": 5.2,
              "saturates": 2.3,
              "carbs": 20.5,
              "sugars": 1.5,
              "protein": 10.0,
              "salt": 1.1
            }
          },
          {
            "id": "paste--paste-zucchini-e-gamberi",
            "name": "PASTE ZUCCHINI E GAMBERI",
            "price": 66,
            "description": "Făină, ou, creveți, dovlecel, sos de roșii, smântână, busuioc, vin alb, usturoi, pătrunjel, unt",
            "weight": 350,
            "tags": [
              "Conține alcool",
              "Pescatarian"
            ],
            "nutrition": {
              "kcal": 160.0,
              "fat": 6.0,
              "saturates": 2.1,
              "carbs": 19.0,
              "sugars": 2.2,
              "protein": 7.0,
              "salt": 1.1
            }
          },
          {
            "id": "paste--paste-de-casa-cu-fructe-de-mare",
            "name": "PASTE DE CASĂ CU FRUCTE DE MARE",
            "price": 69,
            "description": "Făină, ou, creveți, midii, anșoa, capere, roșii cherry, sos de roșii, ulei de măsline, usturoi, vin, busuioc, unt",
            "weight": 350,
            "nutrition": {
              "kcal": 175.0,
              "fat": 5.0,
              "saturates": 1.2,
              "carbs": 24.0,
              "sugars": 2.5,
              "protein": 8.0,
              "salt": 1.0
            }
          },
          {
            "id": "paste--paste-de-casa-cu-sos-de-rosii-si-parmezan",
            "name": "PASTE DE CASĂ CU SOS DE ROȘII ȘI PARMEZAN",
            "price": 34,
            "description": "Făină, ou, sos de roșii, ulei de măsline, busuioc, usturoi, parmezan",
            "weight": 350,
            "nutrition": {
              "kcal": 178.0,
              "fat": 5.1,
              "saturates": 1.6,
              "carbs": 25.9,
              "sugars": 3.9,
              "protein": 6.2,
              "salt": 0.8
            }
          },
          {
            "id": "paste--paste-de-casa-cu-branza-de-capra-prosciutto-praz-si-merisoare",
            "name": "PASTE DE CASĂ CU BRÂNZĂ DE CAPRĂ, PROSCIUTTO, PRAZ ȘI MERIȘOARE",
            "price": 49,
            "description": "Făină, ou, brânză de capră, prosciutto crudo, praz, merișoare, unt, parmezan",
            "weight": 350,
            "nutrition": {
              "kcal": 240.0,
              "fat": 11.0,
              "saturates": 6.0,
              "carbs": 25.0,
              "sugars": 2.0,
              "protein": 10.0,
              "salt": 1.5
            }
          }
        ]
      }
    ],
    "intro": "Paste făcute în casă, sosuri gătite pe loc."
  },
  {
    "slug": "main-course",
    "name": "Main course",
    "sections": [
      {
        "items": [
          {
            "id": "main-course--somon-la-cuptor-cu-legume-la-tigaie-sos-provensal",
            "name": "SOMON LA CUPTOR CU LEGUME LA TIGAIE, SOS PROVENSAL",
            "price": 69,
            "description": "Somon, morcovi, broccoli, ciuperci, ceapă, rozmarin, usturoi, unt, cimbru",
            "weight": 400,
            "nutrition": {
              "kcal": 130.0,
              "fat": 8.0,
              "saturates": 2.0,
              "carbs": 5.0,
              "sugars": 2.5,
              "protein": 10.0,
              "salt": 0.7
            }
          },
          {
            "id": "main-course--risotto-cu-trio-de-ciuperci",
            "name": "RISOTTO CU TRIO DE CIUPERCI",
            "price": 43,
            "description": "Orez arborio, mix de ciuperci, unt, ceapă, vin, parmezan",
            "weight": 250,
            "nutrition": {
              "kcal": 135.0,
              "fat": 4.8,
              "saturates": 2.8,
              "carbs": 18.7,
              "sugars": 1.2,
              "protein": 3.2,
              "salt": 0.7
            }
          },
          {
            "id": "main-course--steak-din-ceafa-de-porc-la-grill",
            "name": "STEAK DIN CEAFĂ DE PORC LA GRILL",
            "price": 40,
            "description": "Ceafă porc, condimente",
            "weight": 200,
            "nutrition": {
              "kcal": 290.0,
              "fat": 24.0,
              "saturates": 8.0,
              "carbs": 0.0,
              "sugars": 0.0,
              "protein": 19.0,
              "salt": 0.9
            }
          },
          {
            "id": "main-course--frigarui-de-pui-cu-cartofi-copti-cremolada-de-usturoi-si-telemea",
            "name": "FRIGĂRUI DE PUI CU CARTOFI COPȚI, CREMOLADĂ DE USTUROI ȘI TELEMEA",
            "price": 59,
            "description": "Piept de pui, iaurt, usturoi, pătrunjel, telemea, ceapă verde",
            "weight": 450,
            "nutrition": {
              "kcal": 130.0,
              "fat": 5.0,
              "saturates": 2.3,
              "carbs": 9.0,
              "sugars": 1.5,
              "protein": 13.0,
              "salt": 1.2
            }
          },
          {
            "id": "main-course--asian-beef-noodles",
            "name": "ASIAN BEEF NOODLES",
            "price": 69,
            "description": "Mușchi de vită, noodles, sos soia, sos teriyaki, cremă de rodie, praz, ardei, morcovi, ciuperci, susan, ceapă verde",
            "weight": 350,
            "nutrition": {
              "kcal": 165.0,
              "fat": 6.0,
              "saturates": 1.8,
              "carbs": 18.0,
              "sugars": 3.5,
              "protein": 9.0,
              "salt": 1.6
            }
          },
          {
            "id": "main-course--quesadilla-de-pui-a-la-merci",
            "name": "QUESADILLA DE PUI A LA MERCI",
            "price": 57,
            "description": "Lipie, piept de pui, panko, ou, făină, chedar, cartofi, roșii, ardei, porumb, sos rose, mozzarella, salată mixtă",
            "weight": 100,
            "nutrition": {
              "kcal": 35.0,
              "fat": 1.7,
              "saturates": 0.6,
              "carbs": 2.8,
              "sugars": 0.3,
              "protein": 2.2,
              "salt": 0.18
            }
          },
          {
            "id": "main-course--pulpa-de-rata-la-cuptor-piure-de-cartofi-cu-trufe-si-sos-de-cirese",
            "name": "PULPĂ DE RAȚĂ LA CUPTOR, PIURE DE CARTOFI CU TRUFE ȘI SOS DE CIREȘE",
            "price": 69,
            "description": "Pulpă de rață, cartofi, cremă de trufe, cireșe, vin, unt",
            "weight": 450,
            "nutrition": {
              "kcal": 180.0,
              "fat": 11.0,
              "saturates": 3.2,
              "carbs": 10.0,
              "sugars": 3.5,
              "protein": 10.0,
              "salt": 0.9
            }
          },
          {
            "id": "main-course--tagliata-de-pui-cu-rosii-cherry-rucola-si-parmezan",
            "name": "TAGLIATA DE PUI CU ROȘII CHERRY, RUCOLA ȘI PARMEZAN",
            "price": 51,
            "description": "Piept de pui, roșii cherry, rucola, parmezan, cremă de oțet balsamic, ulei de măsline, sare, piper",
            "weight": 300,
            "nutrition": {
              "kcal": 145.0,
              "fat": 6.0,
              "saturates": 1.2,
              "carbs": 2.0,
              "sugars": 1.0,
              "protein": 19.0,
              "salt": 0.8
            }
          },
          {
            "id": "main-course--tagliata-de-vita-rucola-rosii-cherry-grana",
            "name": "TAGLIATA DE VITĂ, RUCOLA, ROȘII CHERRY, GRANA",
            "price": 98,
            "description": "Mușchi de vită, rucola, grana, roșii cherry, oțet balsamic",
            "weight": 300,
            "nutrition": {
              "kcal": 145.0,
              "fat": 7.0,
              "saturates": 3.0,
              "carbs": 2.0,
              "sugars": 1.0,
              "protein": 16.0,
              "salt": 0.7
            }
          },
          {
            "id": "main-course--mici-cu-cartofi-prajiti-si-mustar",
            "name": "MICI CU CARTOFI PRĂJIȚI ȘI MUȘTAR",
            "price": 35,
            "description": "Carne de vită, condimente, cartofi, muștar",
            "weight": 450,
            "nutrition": {
              "kcal": 250.0,
              "fat": 15.0,
              "saturates": 6.0,
              "carbs": 17.0,
              "sugars": 1.0,
              "protein": 10.0,
              "salt": 1.5
            }
          }
        ]
      }
    ],
    "intro": "Felurile principale, de prin lume adunate."
  },
  {
    "slug": "fum-si-foc",
    "name": "Povești din fum și foc",
    "sections": [
      {
        "items": [
          {
            "id": "fum-si-foc--aripioare-de-pui-cu-glazura-sticky-miere-si-sweet-chilli",
            "name": "ARIPIOARE DE PUI CU GLAZURĂ STICKY, MIERE ȘI SWEET CHILLI",
            "price": 35,
            "description": "Aripioare de pui, sos sweet chilli, miere",
            "weight": 350,
            "nutrition": {
              "kcal": 230.0,
              "fat": 12.0,
              "saturates": 3.2,
              "carbs": 14.0,
              "sugars": 9.0,
              "protein": 16.0,
              "salt": 1.4
            }
          },
          {
            "id": "fum-si-foc--coaste-de-porc-la-smoker",
            "name": "COASTE DE PORC LA SMOKER",
            "price": 58,
            "description": "Coaste porc, sos BBQ, muștar, condimente",
            "weight": 350,
            "nutrition": {
              "kcal": 270.0,
              "fat": 18.0,
              "saturates": 6.0,
              "carbs": 9.0,
              "sugars": 7.0,
              "protein": 18.0,
              "salt": 1.4
            }
          },
          {
            "id": "fum-si-foc--coaste-de-vita-la-smoker",
            "name": "COASTE DE VITĂ LA SMOKER",
            "price": 89,
            "description": "Coaste vită, sos BBQ, muștar, condimente",
            "weight": 350,
            "nutrition": {
              "kcal": 295.0,
              "fat": 22.0,
              "saturates": 8.5,
              "carbs": 6.5,
              "sugars": 4.2,
              "protein": 18.5,
              "salt": 1.2
            }
          },
          {
            "id": "fum-si-foc--porchetta-de-porc-la-smoker",
            "name": "PORCHETTA DE PORC LA SMOKER",
            "price": 42,
            "description": "Piept porc, sos BBQ, muștar, condimente",
            "weight": 250,
            "nutrition": {
              "kcal": 270.0,
              "fat": 18.0,
              "saturates": 6.0,
              "carbs": 7.0,
              "sugars": 5.0,
              "protein": 20.0,
              "salt": 2.1
            }
          }
        ]
      }
    ],
    "intro": "Carne gătită încet, la smoker, până devine fragedă."
  },
  {
    "slug": "garnituri",
    "name": "Garnituri",
    "sections": [
      {
        "items": [
          {
            "id": "garnituri--cartofi-prajiti",
            "name": "Cartofi prăjiți",
            "price": 15,
            "weight": 150,
            "nutrition": {
              "kcal": 312.0,
              "fat": 15.0,
              "saturates": 3.0,
              "carbs": 41.0,
              "sugars": 0.5,
              "protein": 3.4,
              "salt": 0.3
            }
          },
          {
            "id": "garnituri--cartofi-copti-cu-mozzarella",
            "name": "Cartofi copți cu mozzarella",
            "price": 22,
            "weight": 200,
            "nutrition": {
              "kcal": 130.0,
              "fat": 4.5,
              "saturates": 2.7,
              "carbs": 18.0,
              "sugars": 1.5,
              "protein": 5.0,
              "salt": 0.6
            }
          },
          {
            "id": "garnituri--piure-de-cartofi",
            "name": "Piure de cartofi",
            "price": 15,
            "weight": 150,
            "nutrition": {
              "kcal": 85.0,
              "fat": 3.0,
              "saturates": 1.5,
              "carbs": 14.0,
              "sugars": 1.0,
              "protein": 1.5,
              "salt": 0.8
            }
          },
          {
            "id": "garnituri--cartofi-copti-cu-branza-telemea",
            "name": "Cartofi copți cu brânză telemea",
            "price": 22,
            "weight": 200,
            "nutrition": {
              "kcal": 145.0,
              "fat": 5.2,
              "saturates": 3.5,
              "carbs": 19.0,
              "sugars": 1.2,
              "protein": 4.5,
              "salt": 0.9
            }
          },
          {
            "id": "garnituri--cartofi-copti-cu-rozmarin",
            "name": "Cartofi copți cu rozmarin",
            "price": 16,
            "weight": 200,
            "nutrition": {
              "kcal": 110.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 24.0,
              "sugars": 0.8,
              "protein": 2.0,
              "salt": 0.01
            }
          },
          {
            "id": "garnituri--legume-la-tigaie",
            "name": "Legume la tigaie",
            "price": 25,
            "description": "Morcovi, ciuperci, broccoli, unt, cimbrișor",
            "weight": 150,
            "nutrition": {
              "kcal": 73.0,
              "fat": 4.6,
              "saturates": 2.7,
              "carbs": 5.5,
              "sugars": 3.7,
              "protein": 2.4,
              "salt": 0.06
            }
          },
          {
            "id": "garnituri--orez-basmati",
            "name": "Orez basmati",
            "price": 15,
            "weight": 150,
            "nutrition": {
              "kcal": 350.0,
              "fat": 0.8,
              "saturates": 0.2,
              "carbs": 77.0,
              "sugars": 0.2,
              "protein": 8.0,
              "salt": 0.0
            }
          },
          {
            "id": "garnituri--cartofi-prajiti-cu-parmezan-usturoi-si-patrunjel",
            "name": "Cartofi prăjiți cu parmezan, usturoi și pătrunjel",
            "price": 22,
            "weight": 180,
            "nutrition": {
              "kcal": 260.0,
              "fat": 13.0,
              "saturates": 2.5,
              "carbs": 30.0,
              "sugars": 1.0,
              "protein": 4.5,
              "salt": 1.3
            }
          },
          {
            "id": "garnituri--cartofi-dulci-prajiti",
            "name": "Cartofi dulci prăjiți",
            "price": 22,
            "weight": 150,
            "nutrition": {
              "kcal": 150.0,
              "fat": 4.0,
              "saturates": 0.7,
              "carbs": 26.0,
              "sugars": 5.4,
              "protein": 1.5,
              "salt": 0.2
            }
          }
        ]
      }
    ],
    "intro": "Partenerii perfecți pentru orice fel principal."
  },
  {
    "slug": "salate-insotire",
    "name": "Salate de însoțire",
    "sections": [
      {
        "items": [
          {
            "id": "salate-insotire--varza-dulce-cu-morcovi",
            "name": "Varză dulce cu morcovi",
            "price": 14,
            "weight": 150,
            "nutrition": {
              "kcal": 44.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 10.3,
              "sugars": 6.3,
              "protein": 1.1,
              "salt": 0.03
            }
          },
          {
            "id": "salate-insotire--gogosari-murati",
            "name": "Gogoșari murați",
            "price": 14,
            "weight": 150,
            "nutrition": {
              "kcal": 25.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 5.2,
              "sugars": 4.0,
              "protein": 0.8,
              "salt": 2.3
            }
          },
          {
            "id": "salate-insotire--coleslaw",
            "name": "Coleslaw",
            "price": 16,
            "weight": 150,
            "nutrition": {
              "kcal": 152.0,
              "fat": 11.5,
              "saturates": 1.2,
              "carbs": 11.2,
              "sugars": 8.8,
              "protein": 1.2,
              "salt": 0.94
            }
          },
          {
            "id": "salate-insotire--sfecla-rosie-cu-hrean",
            "name": "Sfeclă roșie cu hrean",
            "price": 16,
            "weight": 150,
            "nutrition": {
              "kcal": 65.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 13.0,
              "sugars": 9.0,
              "protein": 1.8,
              "salt": 0.05
            }
          },
          {
            "id": "salate-insotire--rucola-si-grana",
            "name": "Rucola și grana",
            "price": 19,
            "weight": 70,
            "nutrition": {
              "kcal": 167.0,
              "fat": 11.0,
              "saturates": 7.0,
              "carbs": 5.0,
              "sugars": 1.0,
              "protein": 6.0,
              "salt": 1.0
            }
          },
          {
            "id": "salate-insotire--salata-de-muraturi",
            "name": "Salată de murături",
            "price": 14,
            "description": "Mix de murături",
            "weight": 150,
            "nutrition": {
              "kcal": 18.0,
              "fat": 0.1,
              "saturates": 0.0,
              "carbs": 3.6,
              "sugars": 1.4,
              "protein": 0.5,
              "salt": 2.8
            }
          },
          {
            "id": "salate-insotire--mixt-de-cruditati",
            "name": "Mixt de crudități",
            "price": 14,
            "weight": 150,
            "nutrition": {
              "kcal": 32.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 6.4,
              "sugars": 4.9,
              "protein": 1.2,
              "salt": 0.04
            }
          }
        ]
      }
    ],
    "intro": "Murături și salate reci de însoțire."
  },
  {
    "slug": "sosuri",
    "name": "Sosuri",
    "sections": [
      {
        "items": [
          {
            "id": "sosuri--usturoi-afumat",
            "name": "Usturoi afumat",
            "price": 9,
            "weight": 40,
            "nutrition": {
              "kcal": 255.0,
              "fat": 26.0,
              "saturates": 2.1,
              "carbs": 7.0,
              "sugars": 2.5,
              "protein": 2.0,
              "salt": 1.8
            }
          },
          {
            "id": "sosuri--sweet-chilli",
            "name": "Sweet Chilli",
            "price": 9,
            "weight": 40,
            "nutrition": {
              "kcal": 200.0,
              "fat": 0.2,
              "saturates": 0.0,
              "carbs": 48.0,
              "sugars": 45.0,
              "protein": 0.5,
              "salt": 2.2
            }
          },
          {
            "id": "sosuri--mustar-cu-miere",
            "name": "Muștar cu miere",
            "price": 9,
            "weight": 40,
            "nutrition": {
              "kcal": 185.0,
              "fat": 7.0,
              "saturates": 0.5,
              "carbs": 24.0,
              "sugars": 14.0,
              "protein": 6.0,
              "salt": 3.2
            }
          },
          {
            "id": "sosuri--sos-de-maioneza",
            "name": "Sos de maioneză",
            "price": 6,
            "weight": 40,
            "nutrition": {
              "kcal": 680.0,
              "fat": 75.0,
              "saturates": 7.5,
              "carbs": 2.0,
              "sugars": 1.0,
              "protein": 1.5,
              "salt": 1.4
            }
          },
          {
            "id": "sosuri--hot-red-chilli-pepper",
            "name": "Hot red chilli pepper",
            "price": 9,
            "weight": 40,
            "nutrition": {
              "kcal": 80.0,
              "fat": 1.2,
              "saturates": 0.2,
              "carbs": 16.0,
              "sugars": 7.0,
              "protein": 2.0,
              "salt": 2.5
            }
          },
          {
            "id": "sosuri--ketchup",
            "name": "Ketchup",
            "price": 6,
            "weight": 40,
            "nutrition": {
              "kcal": 100.0,
              "fat": 0.1,
              "saturates": 0.0,
              "carbs": 23.2,
              "sugars": 21.0,
              "protein": 1.2,
              "salt": 2.2
            }
          },
          {
            "id": "sosuri--signature-bbq",
            "name": "Signature BBQ",
            "price": 9,
            "weight": 40,
            "nutrition": {
              "kcal": 177.0,
              "fat": 0.8,
              "saturates": 0.2,
              "carbs": 40.0,
              "sugars": 30.0,
              "protein": 1.8,
              "salt": 1.5
            }
          },
          {
            "id": "sosuri--sos-rose",
            "name": "Sos Rose",
            "price": 6,
            "weight": 40,
            "nutrition": {
              "kcal": 335.0,
              "fat": 34.0,
              "saturates": 3.5,
              "carbs": 7.0,
              "sugars": 5.0,
              "protein": 1.0,
              "salt": 1.5
            }
          }
        ]
      }
    ],
    "intro": "Porții de 40 g, pentru orice poftă."
  },
  {
    "slug": "desert",
    "name": "Desert",
    "sections": [
      {
        "items": [
          {
            "id": "desert--lava-cake-cu-inghetata-de-vanilie",
            "name": "LAVA CAKE CU ÎNGHEȚATĂ DE VANILIE",
            "price": 25,
            "description": "Ouă, cacao, făină, înghețată de vanilie",
            "weight": 250,
            "nutrition": {
              "kcal": 0.0,
              "fat": 0.0,
              "saturates": 0.0,
              "carbs": 0.0,
              "sugars": 0.0,
              "protein": 0.0,
              "salt": 0.0
            }
          },
          {
            "id": "desert--cheesecake-cu-caramel-sarat-sau-fructe-de-padure",
            "name": "CHEESECAKE CU CARAMEL SĂRAT SAU FRUCTE DE PĂDURE",
            "price": 25,
            "description": "Cremă de brânză, mascarpone, frișcă, unt, biscuiți, zahăr, extract de vanilie, caramel sărat / fructe de pădure",
            "weight": 250,
            "nutrition": {
              "kcal": 350.0,
              "fat": 22.0,
              "saturates": 13.0,
              "carbs": 32.0,
              "sugars": 22.0,
              "protein": 5.0,
              "salt": 0.4
            }
          },
          {
            "id": "desert--papanasi-de-casa-cu-gem-de-afine-si-smantana",
            "name": "PAPANAȘI DE CASĂ CU GEM DE AFINE ȘI SMÂNTÂNĂ",
            "price": 25,
            "description": "Făină, ouă, brânză, smântână, zahăr, gem de afine",
            "weight": 250,
            "nutrition": {
              "kcal": 315.0,
              "fat": 13.8,
              "saturates": 6.2,
              "carbs": 41.2,
              "sugars": 21.0,
              "protein": 7.1,
              "salt": 0.55
            }
          }
        ]
      }
    ],
    "intro": "Finalul dulce al poveștii."
  },
  {
    "slug": "copii-studenti",
    "name": "Meniu pentru copii & studenți",
    "sections": [
      {
        "items": [
          {
            "id": "copii-studenti--paste-de-casa-carbonara",
            "name": "PASTE DE CASĂ CARBONARA",
            "price": 42,
            "description": "Făină, ou, guanciale, parmezan, piper",
            "weight": 350,
            "nutrition": {
              "kcal": 298.0,
              "fat": 13.6,
              "saturates": 4.5,
              "carbs": 32.0,
              "sugars": 1.1,
              "protein": 13.5,
              "salt": 1.3
            }
          },
          {
            "id": "copii-studenti--burger-de-pui",
            "name": "BURGER DE PUI",
            "price": 30,
            "description": "Piept de pui, chiflă, ou, panko, salată coleslaw, castraveți murați cu scorțișoară și mărar, chedar, sos rose",
            "weight": 350,
            "nutrition": {
              "kcal": 210.0,
              "fat": 8.0,
              "saturates": 2.1,
              "carbs": 21.0,
              "sugars": 3.7,
              "protein": 13.0,
              "salt": 1.2
            }
          },
          {
            "id": "copii-studenti--paste-de-casa-cu-sos-de-rosii-si-parmezan",
            "name": "PASTE DE CASĂ CU SOS DE ROȘII ȘI PARMEZAN",
            "price": 34,
            "description": "Făină, ou, sos de roșii, ulei de măsline, busuioc, usturoi, parmezan",
            "weight": 350,
            "nutrition": {
              "kcal": 178.0,
              "fat": 5.1,
              "saturates": 1.6,
              "carbs": 25.9,
              "sugars": 3.9,
              "protein": 6.2,
              "salt": 0.8
            }
          },
          {
            "id": "copii-studenti--snitel-de-pui",
            "name": "ȘNIȚEL DE PUI",
            "price": 28,
            "description": "Piept de pui, ou, făină",
            "weight": 250,
            "nutrition": {
              "kcal": 213.0,
              "fat": 11.0,
              "saturates": 2.0,
              "carbs": 11.0,
              "sugars": 0.5,
              "protein": 18.0,
              "salt": 1.1
            }
          },
          {
            "id": "copii-studenti--crispy-de-pui",
            "name": "CRISPY DE PUI",
            "price": 25,
            "description": "Piept de pui, ou, făină, panko",
            "weight": 200,
            "nutrition": {
              "kcal": 220.0,
              "fat": 9.0,
              "saturates": 2.0,
              "carbs": 17.0,
              "sugars": 1.0,
              "protein": 17.0,
              "salt": 1.0
            }
          }
        ]
      }
    ],
    "intro": "Porții pe gustul celor mici și al studenților."
  }
];
