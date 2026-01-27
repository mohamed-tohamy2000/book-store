/* 
    * Strapi: Headless CMS (Content Management System) (You only Deal With GUI)
        - replace backend developer

        - create folder for backend (strapi)
        - open cmd and write this command (npx create-strapi-app@latest ./)
        - Skip login or signup option to not losing free trial days 🙋‍♂️
        - SELECT OPTIONS WITH CAPITAL LETTER (Y OR N) 🙈
        - write this command to run backend strapi server 🕵️‍♀️ (npm run dev)

    * Strapi Side Menu:
        * Content Manager
            - Used to add new row (values to fields) inside selected collection (table)

        * Content Type Builder
            - Used to add or edit collections (tables) with fields
            - Used to make relations between collections 🤔
                1. add new field and choose relation type
                2. choose in right side the table you want to make relation with
                3. write in left side name of field
                4. choose relation you want between collections

                (to make user data show when populate you need to open its permissions in roles) 😥


        * Settings => USERS & PERMISSIONS PLUGIN => Roles
            - Used to show apis for using in frontend
            ( Login Api: http://localhost:1337/api/auth/local )
            ( Register Api: http://localhost:1337/api/auth/local/register )

            * Public: (No JWT Needed)
                - to allow access for every one

            * Authenticated: (JWT Needed In Authorization)
                - to limit access for specific users


        * Hint:
            Endpoint: domain + apiendpoint
            (Domain in strapi http://localhost:1337/api/products)
*/

/* 
    * Strapi request cheat sheet:

        * populate: for relations
            * Syntax:
                - "populate[relation field name][populate]": "*" or "field name"

                - many layers of relations: "populate[relation field name][populate][relation field name][populate][relation field name][populate]": "*" or "field name"

        * filters:
            * Syntax:
                - "filters[fieldname][$operator]": value

                - nested filter: "filters[relation field name][field name][$operator]": value
                - values: can be any datatypes
                
                * Operators:
                    - eq: =
                    - ne: !=
                    - lt: <
                    - lte: <=
                    - gt: >
                    - gte: >=
                    - contains: يحتوي على
                    - startsWith: يبدا ب
                    - endsWith: ينتهي ب

        * pagination:
            * Syntax:
                - "pagination[page]": page number, "pagination[pageSize]": items number

                - "pagination[start]": first item, "pagination[limit]": items number

        * sort:
            * Syntax:
                - "sort[رقم الترتيب]": "fieldname: نوع الترتيب" (asc تصاعدي) (desc تنازلي)

        * fields: select what you want to get from api
            * Syntax:
                - "fields[0]": "fieldname", "fields[1]": "fieldname"
*/