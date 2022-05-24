import { gql } from "@apollo/client";

const BUY_CARDS = gql`
  query GET_BUY_CARDS {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
      data{
      id
      attributes{
        Short_Andress
        Preview_Image{
          data{
            attributes{
              url
            }
          }
        }
      Price
        location{
          data{
            attributes{
              City
            }
          }
        }
      categories{
        data{
          attributes{
            Category
          }
        }
      }
      Neighbourhood
      Short_Andress
      Price
        }
      }
    }
  }
`;

const RENT_CARDS = gql`
  query GET_RENT_CARDS {
    houses(filters: { categories: { Category: { contains: "Rent" } } }) {
      data{
      id
      attributes{
        Short_Andress
        Preview_Image{
          data{
            attributes{
              url
            }
          }
        }
      Price
        location{
          data{
            attributes{
              City
            }
          }
        }
      categories{
        data{
          attributes{
            Category
          }
        }
      }
      Neighbourhood
      Short_Andress
      Price
        }
      }
    }
  }
`;

const ID_CARD = gql`
  query GET_ID_CARD($id: ID) {
    houses(filters: { id: { eq: $id } }) {
      data{
      id
      attributes{
        Short_Andress
        Preview_Image{
          data{
            attributes{
              url
            }
          }
        }
      Price
        location{
          data{
            attributes{
              City
            }
          }
        }
      categories{
        data{
          attributes{
            Category
          }
        }
      }
      Neighbourhood
      Short_Andress
      Price
        }
      }
    }
  }
`;

const FILTERED_CARDS = gql`
  query GET_FILTERED_CARDS(
    $cat: String
    $maxPrice: Float
    $minPrice: Float
    $forRent: Float
    $page: Int
  ) {
    houses(
      filters: {
        categories: { Category: { contains: $cat } }
        or: [{ Price: { eq: $forRent } }, { Price: { gte: $minPrice } }]
        and: { Price: { lt: $maxPrice } }
      }
      pagination: { pageSize: 3, page: $page }
    ) {
      data{
      id
      attributes{
        Short_Andress
        Preview_Image{
          data{
            attributes{
              url
            }
          }
        }
      Price
        location{
          data{
            attributes{
              City
            }
          }
        }
      categories{
        data{
          attributes{
            Category
          }
        }
      }
      Neighbourhood
      Short_Andress
      Price
        }
      }
    }
  }
`;

export { BUY_CARDS, RENT_CARDS, ID_CARD, FILTERED_CARDS };
