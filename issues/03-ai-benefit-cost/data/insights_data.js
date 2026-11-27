window.ISSUE03_GRAPHS = [
  {
    "id": "topic_adoption_trend",
    "ref": "Topic 1A · Adoption",
    "title": "Overall AI Adoption & Historical Diffusion Speed",
    "question": "Is real-world business AI/SI adoption rising steadily, and how does its diffusion pace compare with past general-purpose technologies?",
    "color": "#22c55e",
    "charts": [
      {
        "headline": "US business AI/SI adoption climbed steadily across populated 2025–2026 survey waves while 6-month plans stayed higher",
        "footnote": "Source: <a href=\"https://www.census.gov/hfp/btos/\" target=\"_blank\" rel=\"noopener noreferrer\">US Census Bureau — Business Trends and Outlook Survey (BTOS)</a> &middot; 2025-W24 to 2026-W23 (Biweekly) &middot; N=26 populated waves (2025-W21–W23 shutdown gap)",
        "chart": {
          "type": "line",
          "title": "US Business AI/SI Adoption Over Time: Current Use vs Planned Next 6 Months (%)",
          "labels": [
            "2025-W24",
            "2025-W25",
            "2025-W26",
            "2026-W01",
            "2026-W02",
            "2026-W03",
            "2026-W04",
            "2026-W05",
            "2026-W06",
            "2026-W07",
            "2026-W08",
            "2026-W09",
            "2026-W10",
            "2026-W11",
            "2026-W12",
            "2026-W13",
            "2026-W14",
            "2026-W15",
            "2026-W16",
            "2026-W17",
            "2026-W18",
            "2026-W19",
            "2026-W20",
            "2026-W21",
            "2026-W22",
            "2026-W23"
          ],
          "x_title": "BTOS Biweekly Survey Wave (Populated Waves Only)",
          "y_title": "Share of US Businesses (%)",
          "datasets": [
            {
              "label": "Business Function AI/SI Use (Last 2 Wks)",
              "data": [
                17.3,
                17.2,
                17.8,
                17.7,
                18.2,
                18.9,
                17.5,
                18.2,
                18.9,
                19.1,
                19.8,
                19.8,
                19.5,
                20.6,
                20.6,
                20.6,
                21.7,
                21.5,
                21.8,
                22.4,
                23.2,
                23.8,
                23.8,
                24.6,
                24.2,
                25.0
              ],
              "borderColor": "#22c55e",
              "tension": 0.25
            },
            {
              "label": "Employee Generative AI Task Use",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                26.8,
                27.6
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Planned AI/SI Use (Next 6 Months)",
              "data": [
                21.1,
                20.9,
                21.3,
                22.4,
                22.1,
                22.1,
                21.0,
                21.8,
                22.3,
                22.5,
                23.0,
                22.8,
                22.7,
                23.7,
                23.9,
                23.7,
                24.5,
                24.3,
                25.9,
                25.9,
                27.3,
                27.6,
                27.7,
                28.6,
                27.6,
                28.2
              ],
              "borderColor": "#a1a1aa",
              "borderDash": [
                5,
                4
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Share of US employer businesses reporting AI/SI use in business functions (QID 7), employee GenAI use (QID 8), or planned 6-month use (QID 28).",
          "scope": "United States, biweekly waves 2023–2026 (US Census BTOS).",
          "nuance": "Note: Census updated questionnaire wording from 'AI' to 'Super Intelligence (SI)'; cycles 202521–202523 are missing due to the Oct–Nov 2025 federal funding lapse."
        }
      },
      {
        "headline": "Each general-purpose technology diffused faster across US households than the industrial wave before it",
        "footnote": "Source: <a href=\"https://ourworldindata.org/technological-change\" target=\"_blank\" rel=\"noopener noreferrer\">Our World in Data — Technological Change & Historical Economics (CC BY 4.0)</a> &middot; 1900–2025 &middot; US household adoption (%)",
        "chart": {
          "type": "line",
          "title": "US Household Adoption Curves Across Industrial Revolutions (%)",
          "labels": [
            "1908",
            "1909",
            "1910",
            "1911",
            "1912",
            "1913",
            "1914",
            "1915",
            "1916",
            "1917",
            "1918",
            "1919",
            "1920",
            "1921",
            "1922",
            "1923",
            "1924",
            "1925",
            "1926",
            "1927",
            "1928",
            "1929",
            "1930",
            "1931",
            "1932",
            "1933",
            "1934",
            "1935",
            "1936",
            "1937",
            "1938",
            "1939",
            "1940",
            "1941",
            "1942",
            "1943",
            "1944",
            "1945",
            "1946",
            "1947",
            "1948",
            "1949",
            "1950",
            "1951",
            "1952",
            "1953",
            "1954",
            "1955",
            "1956",
            "1957",
            "1958",
            "1959",
            "1960",
            "1961",
            "1962",
            "1963",
            "1964",
            "1965",
            "1966",
            "1967",
            "1968",
            "1969",
            "1970",
            "1971",
            "1972",
            "1973",
            "1974",
            "1975",
            "1976",
            "1977",
            "1978",
            "1979",
            "1980",
            "1981",
            "1982",
            "1983",
            "1984",
            "1985",
            "1986",
            "1987",
            "1988",
            "1989",
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019"
          ],
          "x_title": "Year",
          "y_title": "Adoption Rate (% of US Households)",
          "datasets": [
            {
              "label": "Electric Power",
              "data": [
                10.0,
                10.7,
                12.3,
                14.0,
                16.0,
                18.0,
                19.0,
                20.0,
                22.0,
                24.0,
                27.0,
                30.0,
                33.5,
                37.0,
                40.0,
                43.0,
                49.0,
                52.0,
                55.0,
                60.0,
                64.0,
                68.0,
                68.0,
                68.0,
                67.0,
                67.0,
                67.0,
                68.5,
                70.0,
                73.0,
                75.0,
                76.5,
                78.0,
                79.5,
                81.0,
                81.0,
                83.0,
                85.0,
                85.5,
                86.0,
                89.0,
                93.0,
                94.0,
                95.0,
                96.0,
                97.0,
                97.7,
                98.3,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              "borderColor": "#eab308",
              "tension": 0.25
            },
            {
              "label": "Radio",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                10.0,
                17.0,
                19.0,
                28.0,
                36.0,
                45.0,
                52.0,
                60.0,
                63.0,
                65.0,
                68.0,
                72.0,
                74.0,
                78.0,
                80.0,
                81.0,
                82.0,
                84.0,
                84.0,
                87.0,
                88.0,
                89.0,
                92.0,
                92.0,
                93.0,
                92.0,
                92.0,
                92.0,
                93.0,
                96.0,
                96.0,
                96.0,
                96.0,
                96.0,
                96.0,
                95.0,
                95.0,
                94.0,
                95.0,
                96.0,
                96.0,
                96.0,
                96.0,
                96.0,
                97.0,
                98.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                99.0,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              "borderColor": "#a855f7",
              "tension": 0.25
            },
            {
              "label": "Personal Computer",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                20.7,
                null,
                null,
                null,
                null,
                null,
                42.0,
                null,
                null,
                null,
                null,
                63.1,
                null,
                67.1,
                null,
                null,
                null,
                null,
                75.2,
                76.7,
                78.9,
                83.8,
                85.1,
                86.8,
                89.3,
                null,
                null,
                null
              ],
              "borderColor": "#06b6d4",
              "tension": 0.25
            },
            {
              "label": "Internet",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                10.0,
                11.0,
                13.0,
                16.0,
                19.0,
                25.0,
                34.0,
                42.0,
                49.0,
                52.0,
                54.0,
                57.0,
                61.0,
                62.0,
                65.0,
                68.0,
                70.0,
                74.0,
                76.0,
                81.0,
                82.0,
                83.0,
                85.0,
                88.0,
                null,
                null,
                null
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Smartphone Usage",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                35.0,
                45.0,
                54.0,
                57.0,
                68.0,
                73.0,
                73.0,
                77.0,
                81.0
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Percentage of US households or adults adopting each general-purpose technology from 1900 to the 2020s.",
          "scope": "United States, 1900–2025 (OWID / Comin & Hobijn).",
          "nuance": "Shows how diffusion speed accelerated from decades (electrification) to years (smartphones/internet)."
        }
      }
    ]
  },
  {
    "id": "topic_adoption_concentration",
    "ref": "Topic 1B · Concentration",
    "title": "Supply & Demand Concentration — Countries, Industries, Functions & Firm Sizes",
    "question": "Why is AI supply concentrated in the US and China while demand concentrates in specific countries, sectors, functions, and large firms?",
    "color": "#38bdf8",
    "charts": [
      {
        "headline": "Frontier AI supply remains overwhelmingly concentrated in the United States and China",
        "footnote": "Source: <a href=\"https://ourworldindata.org/artificial-intelligence\" target=\"_blank\" rel=\"noopener noreferrer\">Our World in Data — Artificial Intelligence (CC BY 4.0)</a> &middot; 2017–2025 &middot; 4 leading jurisdictions",
        "chart": {
          "type": "line",
          "title": "Cumulative Large-Scale AI Systems by Country (2017–2025)",
          "labels": [
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Year",
          "y_title": "Cumulative Large-Scale AI Systems (Count)",
          "datasets": [
            {
              "label": "United States",
              "data": [
                0.0,
                2.0,
                4.0,
                27.0,
                74.0,
                155.0,
                221.0
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "China",
              "data": [
                0.0,
                0.0,
                3.0,
                5.0,
                53.0,
                112.0,
                194.0
              ],
              "borderColor": "#f97316",
              "tension": 0.25
            },
            {
              "label": "United Kingdom",
              "data": [
                1.0,
                1.0,
                2.0,
                4.0,
                5.0,
                8.0,
                8.0
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            },
            {
              "label": "France",
              "data": [
                0.0,
                0.0,
                0.0,
                2.0,
                7.0,
                17.0,
                20.0
              ],
              "borderColor": "#a855f7",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Cumulative count of notable large-scale AI systems attributed to each country by publication date.",
          "scope": "Global jurisdictions, 2017–2025 (OWID / Epoch AI).",
          "nuance": "Measures model releases, not downstream adoption or productivity."
        }
      },
      {
        "headline": "Working-age generative AI demand correlates strongly with national GDP per capita",
        "footnote": "Source: <a href=\"https://ourworldindata.org/artificial-intelligence\" target=\"_blank\" rel=\"noopener noreferrer\">Our World in Data — Artificial Intelligence (CC BY 4.0)</a> &middot; Latest cross-section &middot; N=141 countries",
        "chart": {
          "type": "scatter",
          "title": "Working-Age Generative AI Usage (%) vs GDP per Capita (PPP)",
          "x_title": "GDP per Capita (USD PPP)",
          "y_title": "Working-Age Adult GenAI Usage (%)",
          "datasets": [
            {
              "label": "Country",
              "data": [
                {
                  "x": 1964.0,
                  "y": 6.1,
                  "label": "Afghanistan"
                },
                {
                  "x": 22724.0,
                  "y": 18.5,
                  "label": "Albania"
                },
                {
                  "x": 15883.0,
                  "y": 13.2,
                  "label": "Algeria"
                },
                {
                  "x": 8760.0,
                  "y": 10.9,
                  "label": "Angola"
                },
                {
                  "x": 27847.0,
                  "y": 21.9,
                  "label": "Argentina"
                },
                {
                  "x": 21153.0,
                  "y": 7.4,
                  "label": "Armenia"
                },
                {
                  "x": 60194.0,
                  "y": 39.5,
                  "label": "Australia"
                },
                {
                  "x": 63970.0,
                  "y": 34.1,
                  "label": "Austria"
                },
                {
                  "x": 22314.0,
                  "y": 17.7,
                  "label": "Azerbaijan"
                },
                {
                  "x": 8677.0,
                  "y": 7.8,
                  "label": "Bangladesh"
                },
                {
                  "x": 29666.0,
                  "y": 9.6,
                  "label": "Belarus"
                },
                {
                  "x": 63488.0,
                  "y": 39.0,
                  "label": "Belgium"
                },
                {
                  "x": 4116.0,
                  "y": 10.1,
                  "label": "Benin"
                },
                {
                  "x": 11001.0,
                  "y": 12.7,
                  "label": "Bolivia"
                },
                {
                  "x": 21178.0,
                  "y": 22.1,
                  "label": "Bosnia and Herzegovina"
                },
                {
                  "x": 17687.0,
                  "y": 14.8,
                  "label": "Botswana"
                },
                {
                  "x": 20025.0,
                  "y": 19.1,
                  "label": "Brazil"
                },
                {
                  "x": 35326.0,
                  "y": 29.7,
                  "label": "Bulgaria"
                },
                {
                  "x": 2625.0,
                  "y": 10.1,
                  "label": "Burkina Faso"
                },
                {
                  "x": 1067.0,
                  "y": 7.6,
                  "label": "Burundi"
                },
                {
                  "x": 7300.0,
                  "y": 5.7,
                  "label": "Cambodia"
                },
                {
                  "x": 4946.0,
                  "y": 8.7,
                  "label": "Cameroon"
                },
                {
                  "x": 57990.0,
                  "y": 37.3,
                  "label": "Canada"
                },
                {
                  "x": 1123.0,
                  "y": 8.7,
                  "label": "Central African Republic"
                },
                {
                  "x": 2481.0,
                  "y": 8.7,
                  "label": "Chad"
                },
                {
                  "x": 30863.0,
                  "y": 22.7,
                  "label": "Chile"
                },
                {
                  "x": 25067.0,
                  "y": 16.4,
                  "label": "China"
                },
                {
                  "x": 18779.0,
                  "y": 24.5,
                  "label": "Colombia"
                },
                {
                  "x": 6194.0,
                  "y": 8.7,
                  "label": "Congo"
                },
                {
                  "x": 28443.0,
                  "y": 28.5,
                  "label": "Costa Rica"
                },
                {
                  "x": 7015.0,
                  "y": 13.1,
                  "label": "Cote d'Ivoire"
                },
                {
                  "x": 44172.0,
                  "y": 26.1,
                  "label": "Croatia"
                },
                {
                  "x": 49292.0,
                  "y": 30.1,
                  "label": "Czechia"
                },
                {
                  "x": 1641.0,
                  "y": 8.7,
                  "label": "Democratic Republic of Congo"
                },
                {
                  "x": 72723.0,
                  "y": 31.2,
                  "label": "Denmark"
                },
                {
                  "x": 24543.0,
                  "y": 24.8,
                  "label": "Dominican Republic"
                },
                {
                  "x": 14319.0,
                  "y": 19.5,
                  "label": "Ecuador"
                },
                {
                  "x": 17265.0,
                  "y": 14.8,
                  "label": "Egypt"
                },
                {
                  "x": 12050.0,
                  "y": 18.3,
                  "label": "El Salvador"
                },
                {
                  "x": 3095.0,
                  "y": 7.6,
                  "label": "Ethiopia"
                },
                {
                  "x": 55735.0,
                  "y": 29.5,
                  "label": "Finland"
                },
                {
                  "x": 55125.0,
                  "y": 47.8,
                  "label": "France"
                },
                {
                  "x": 18986.0,
                  "y": 15.0,
                  "label": "Gabon"
                },
                {
                  "x": 3167.0,
                  "y": 11.4,
                  "label": "Gambia"
                },
                {
                  "x": 25136.0,
                  "y": 20.5,
                  "label": "Georgia"
                },
                {
                  "x": 62824.0,
                  "y": 31.1,
                  "label": "Germany"
                },
                {
                  "x": 7358.0,
                  "y": 10.1,
                  "label": "Ghana"
                },
                {
                  "x": 38219.0,
                  "y": 20.8,
                  "label": "Greece"
                },
                {
                  "x": 12987.0,
                  "y": 16.4,
                  "label": "Guatemala"
                },
                {
                  "x": 4217.0,
                  "y": 10.1,
                  "label": "Guinea"
                },
                {
                  "x": 2814.0,
                  "y": 10.1,
                  "label": "Guinea-Bissau"
                },
                {
                  "x": 83659.0,
                  "y": 10.3,
                  "label": "Guyana"
                },
                {
                  "x": 2678.0,
                  "y": 8.5,
                  "label": "Haiti"
                },
                {
                  "x": 6726.0,
                  "y": 14.0,
                  "label": "Honduras"
                },
                {
                  "x": 41161.0,
                  "y": 32.2,
                  "label": "Hungary"
                },
                {
                  "x": 10039.0,
                  "y": 17.6,
                  "label": "India"
                },
                {
                  "x": 15091.0,
                  "y": 14.1,
                  "label": "Indonesia"
                },
                {
                  "x": 16834.0,
                  "y": 12.6,
                  "label": "Iran"
                },
                {
                  "x": 12192.0,
                  "y": 12.5,
                  "label": "Iraq"
                },
                {
                  "x": 131338.0,
                  "y": 48.4,
                  "label": "Ireland"
                },
                {
                  "x": 48197.0,
                  "y": 38.1,
                  "label": "Israel"
                },
                {
                  "x": 53606.0,
                  "y": 30.2,
                  "label": "Italy"
                },
                {
                  "x": 11358.0,
                  "y": 24.0,
                  "label": "Jamaica"
                },
                {
                  "x": 48283.0,
                  "y": 22.5,
                  "label": "Japan"
                },
                {
                  "x": 10794.0,
                  "y": 29.7,
                  "label": "Jordan"
                },
                {
                  "x": 37851.0,
                  "y": 15.9,
                  "label": "Kazakhstan"
                },
                {
                  "x": 5995.0,
                  "y": 8.7,
                  "label": "Kenya"
                },
                {
                  "x": 48254.0,
                  "y": 21.1,
                  "label": "Kuwait"
                },
                {
                  "x": 7878.0,
                  "y": 9.5,
                  "label": "Kyrgyzstan"
                },
                {
                  "x": 8873.0,
                  "y": 7.8,
                  "label": "Laos"
                },
                {
                  "x": 10469.0,
                  "y": 27.3,
                  "label": "Lebanon"
                },
                {
                  "x": 2721.0,
                  "y": 9.8,
                  "label": "Lesotho"
                },
                {
                  "x": 1693.0,
                  "y": 10.1,
                  "label": "Liberia"
                },
                {
                  "x": 14118.0,
                  "y": 15.0,
                  "label": "Libya"
                },
                {
                  "x": 48840.0,
                  "y": 24.3,
                  "label": "Lithuania"
                },
                {
                  "x": 1668.0,
                  "y": 10.9,
                  "label": "Madagascar"
                },
                {
                  "x": 1623.0,
                  "y": 10.9,
                  "label": "Malawi"
                },
                {
                  "x": 35461.0,
                  "y": 21.8,
                  "label": "Malaysia"
                },
                {
                  "x": 2993.0,
                  "y": 10.1,
                  "label": "Mali"
                },
                {
                  "x": 6559.0,
                  "y": 10.1,
                  "label": "Mauritania"
                },
                {
                  "x": 21912.0,
                  "y": 20.1,
                  "label": "Mexico"
                },
                {
                  "x": 17087.0,
                  "y": 18.5,
                  "label": "Moldova"
                },
                {
                  "x": 17773.0,
                  "y": 16.7,
                  "label": "Mongolia"
                },
                {
                  "x": 9495.0,
                  "y": 11.7,
                  "label": "Morocco"
                },
                {
                  "x": 1451.0,
                  "y": 10.9,
                  "label": "Mozambique"
                },
                {
                  "x": 5137.0,
                  "y": 10.0,
                  "label": "Myanmar"
                },
                {
                  "x": 10242.0,
                  "y": 15.1,
                  "label": "Namibia"
                },
                {
                  "x": 5277.0,
                  "y": 14.2,
                  "label": "Nepal"
                },
                {
                  "x": 71378.0,
                  "y": 42.1,
                  "label": "Netherlands"
                },
                {
                  "x": 48233.0,
                  "y": 43.0,
                  "label": "New Zealand"
                },
                {
                  "x": 7933.0,
                  "y": 11.8,
                  "label": "Nicaragua"
                },
                {
                  "x": 1861.0,
                  "y": 10.1,
                  "label": "Niger"
                },
                {
                  "x": 8145.0,
                  "y": 10.1,
                  "label": "Nigeria"
                },
                {
                  "x": 95173.0,
                  "y": 48.6,
                  "label": "Norway"
                },
                {
                  "x": 36143.0,
                  "y": 26.5,
                  "label": "Oman"
                },
                {
                  "x": 5617.0,
                  "y": 11.4,
                  "label": "Pakistan"
                },
                {
                  "x": 37516.0,
                  "y": 23.3,
                  "label": "Panama"
                },
                {
                  "x": 4456.0,
                  "y": 7.7,
                  "label": "Papua New Guinea"
                },
                {
                  "x": 17246.0,
                  "y": 12.2,
                  "label": "Paraguay"
                },
                {
                  "x": 16079.0,
                  "y": 16.4,
                  "label": "Peru"
                },
                {
                  "x": 10748.0,
                  "y": 20.1,
                  "label": "Philippines"
                },
                {
                  "x": 46925.0,
                  "y": 31.0,
                  "label": "Poland"
                },
                {
                  "x": 42577.0,
                  "y": 26.4,
                  "label": "Portugal"
                },
                {
                  "x": 110136.0,
                  "y": 41.8,
                  "label": "Qatar"
                },
                {
                  "x": 40846.0,
                  "y": 17.5,
                  "label": "Romania"
                },
                {
                  "x": 42358.0,
                  "y": 9.5,
                  "label": "Russia"
                },
                {
                  "x": 3559.0,
                  "y": 7.2,
                  "label": "Rwanda"
                },
                {
                  "x": 63051.0,
                  "y": 29.4,
                  "label": "Saudi Arabia"
                },
                {
                  "x": 4669.0,
                  "y": 13.9,
                  "label": "Senegal"
                },
                {
                  "x": 27603.0,
                  "y": 24.1,
                  "label": "Serbia"
                },
                {
                  "x": 3176.0,
                  "y": 10.1,
                  "label": "Sierra Leone"
                },
                {
                  "x": 139593.0,
                  "y": 63.4,
                  "label": "Singapore"
                },
                {
                  "x": 40690.0,
                  "y": 26.1,
                  "label": "Slovakia"
                },
                {
                  "x": 49091.0,
                  "y": 29.0,
                  "label": "Slovenia"
                },
                {
                  "x": 1404.0,
                  "y": 7.6,
                  "label": "Somalia"
                },
                {
                  "x": 13592.0,
                  "y": 23.1,
                  "label": "South Africa"
                },
                {
                  "x": 55697.0,
                  "y": 37.1,
                  "label": "South Korea"
                },
                {
                  "x": 49318.0,
                  "y": 44.2,
                  "label": "Spain"
                },
                {
                  "x": 14583.0,
                  "y": 7.3,
                  "label": "Sri Lanka"
                },
                {
                  "x": 1873.0,
                  "y": 7.6,
                  "label": "Sudan"
                },
                {
                  "x": 19357.0,
                  "y": 10.3,
                  "label": "Suriname"
                },
                {
                  "x": 63362.0,
                  "y": 36.1,
                  "label": "Sweden"
                },
                {
                  "x": 85732.0,
                  "y": 37.8,
                  "label": "Switzerland"
                },
                {
                  "x": 4579.0,
                  "y": 7.5,
                  "label": "Syria"
                },
                {
                  "x": 5062.0,
                  "y": 6.1,
                  "label": "Tajikistan"
                },
                {
                  "x": 3821.0,
                  "y": 7.6,
                  "label": "Tanzania"
                },
                {
                  "x": 22432.0,
                  "y": 12.4,
                  "label": "Thailand"
                },
                {
                  "x": 3486.0,
                  "y": 10.1,
                  "label": "Togo"
                },
                {
                  "x": 13018.0,
                  "y": 13.5,
                  "label": "Tunisia"
                },
                {
                  "x": 37301.0,
                  "y": 17.4,
                  "label": "Turkey"
                },
                {
                  "x": 19314.0,
                  "y": 6.1,
                  "label": "Turkmenistan"
                },
                {
                  "x": 2980.0,
                  "y": 7.6,
                  "label": "Uganda"
                },
                {
                  "x": 16155.0,
                  "y": 9.4,
                  "label": "Ukraine"
                },
                {
                  "x": 69702.0,
                  "y": 70.1,
                  "label": "United Arab Emirates"
                },
                {
                  "x": 53993.0,
                  "y": 42.2,
                  "label": "United Kingdom"
                },
                {
                  "x": 76931.0,
                  "y": 31.3,
                  "label": "United States"
                },
                {
                  "x": 32742.0,
                  "y": 24.6,
                  "label": "Uruguay"
                },
                {
                  "x": 11623.0,
                  "y": 7.2,
                  "label": "Uzbekistan"
                },
                {
                  "x": 15457.0,
                  "y": 26.5,
                  "label": "Vietnam"
                },
                {
                  "x": 3742.0,
                  "y": 13.1,
                  "label": "Zambia"
                },
                {
                  "x": 5529.0,
                  "y": 8.5,
                  "label": "Zimbabwe"
                }
              ],
              "backgroundColor": "rgba(56, 189, 248, 0.72)",
              "pointRadius": 4.5
            }
          ]
        },
        "definition": {
          "metric": "Estimated % of working-age adults using generative AI plotted against national GDP per capita (PPP).",
          "scope": "Cross-country latest snapshot (OWID).",
          "nuance": "Reflects cross-sectional correlation, not causal GDP impact."
        }
      },
      {
        "headline": "Information and Professional Services lead US AI adoption while Construction and Hospitality trail",
        "footnote": "Source: <a href=\"https://www.census.gov/hfp/btos/\" target=\"_blank\" rel=\"noopener noreferrer\">US Census Bureau — Business Trends and Outlook Survey (BTOS)</a> &middot; Latest wave (2026-W23) &middot; N=13 NAICS sectors",
        "chart": {
          "type": "bar",
          "index_axis": "y",
          "title": "US Business AI Adoption by NAICS Industry Sector (%)",
          "labels": [
            "Information",
            "Educational Services",
            "Finance & Insurance",
            "Professional & Tech Services",
            "Real Estate & Leasing",
            "Health Care & Social Assistance",
            "Wholesale Trade",
            "Admin & Support Services",
            "Arts, Entertainment & Rec.",
            "Construction",
            "Accommodation & Food",
            "Other Services",
            "Mining, Oil & Gas"
          ],
          "x_title": "Share of US Businesses (%)",
          "y_title": "NAICS Industry Sector",
          "datasets": [
            {
              "label": "Current Use (%)",
              "data": [
                49.6,
                44.0,
                42.7,
                40.8,
                35.1,
                25.3,
                24.7,
                23.1,
                20.9,
                15.7,
                14.3,
                12.2,
                10.1
              ],
              "backgroundColor": "#22c55e"
            },
            {
              "label": "Planned Next 6 Months (%)",
              "data": [
                55.3,
                47.4,
                46.5,
                44.8,
                38.5,
                28.2,
                26.8,
                26.9,
                23.8,
                17.5,
                18.1,
                15.5,
                22.4
              ],
              "backgroundColor": "rgba(56, 189, 248, 0.55)"
            }
          ]
        },
        "definition": {
          "metric": "Share of US businesses using AI/SI in business functions vs planning 6-month adoption across 2-digit NAICS sectors.",
          "scope": "United States, latest BTOS wave (US Census Bureau).",
          "nuance": "Agriculture (11) is suppressed ('S') in some waves where sample sizes do not meet Census disclosure thresholds."
        }
      },
      {
        "headline": "Customer-facing marketing, chatbots, and text/data analytics lead functional AI deployment over robotics",
        "footnote": "Source: <a href=\"https://www.census.gov/hfp/btos/\" target=\"_blank\" rel=\"noopener noreferrer\">US Census Bureau — Business Trends and Outlook Survey (BTOS)</a> &middot; BTOS AI Supplement &middot; N=17 functional categories",
        "chart": {
          "type": "bar",
          "index_axis": "y",
          "title": "Where Businesses Deploy AI: Adoption by Business Function & Technology Type (%)",
          "labels": [
            "Marketing automation using AI",
            "Virtual agents or chat bots",
            "Natural language processing",
            "Text analytics using AI",
            "Data analytics using AI",
            "Speech/voice recognition using AI",
            "Machine learning",
            "Large language models",
            "Recommendation systems based on AI",
            "Image/pattern recognition",
            "Machine/computer vision",
            "Decision making systems based on AI",
            "Robotics process automation",
            "Biometrics",
            "Deep learning",
            "Neural networks",
            "Augmented reality"
          ],
          "x_title": "Share of All US Businesses (%)",
          "y_title": "AI Function / Application Type",
          "datasets": [
            {
              "label": "Businesses Deploying (%)",
              "data": [
                2.5,
                1.9,
                1.7,
                1.5,
                1.5,
                1.4,
                1.2,
                1.0,
                0.8,
                0.7,
                0.5,
                0.5,
                0.3,
                0.3,
                0.3,
                0.2,
                0.1
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Share of all US businesses using each specific AI application or business function in producing goods or services over the prior 6 months.",
          "scope": "United States, BTOS AI Supplement (US Census Bureau).",
          "nuance": "Measures share of all US firms deploying each function, not just among AI adopters."
        }
      },
      {
        "headline": "Large enterprises (250+ staff) adopt AI at substantially higher rates than micro and small firms",
        "footnote": "Source: <a href=\"https://www.census.gov/hfp/btos/\" target=\"_blank\" rel=\"noopener noreferrer\">US Census Bureau — Business Trends and Outlook Survey (BTOS)</a> &middot; Latest wave (2026-W23) &middot; 7 employment size classes",
        "chart": {
          "type": "bar",
          "title": "US Business AI Adoption by Employment Size Class (%)",
          "labels": [
            "1 to 4 employees",
            "Between 5 and 9 employees",
            "Between 10 and 19 employees",
            "Between 20 and 49 employees",
            "Between 50 and 99 employees",
            "Between 100 and 249 employees",
            "250 or more employees"
          ],
          "x_title": "Firm Employment Size Class",
          "y_title": "Share of US Businesses (%)",
          "datasets": [
            {
              "label": "Current Use (%)",
              "data": [
                23.4,
                25.3,
                27.8,
                28.1,
                33.1,
                35.3,
                44.0
              ],
              "backgroundColor": "#22c55e"
            },
            {
              "label": "Planned Next 6 Months (%)",
              "data": [
                26.3,
                27.9,
                31.2,
                32.2,
                39.5,
                45.0,
                51.8
              ],
              "backgroundColor": "rgba(56, 189, 248, 0.55)"
            }
          ]
        },
        "definition": {
          "metric": "Share of US businesses using AI/SI in business functions vs planning 6-month adoption by firm headcount class.",
          "scope": "United States, latest BTOS wave (US Census Bureau).",
          "nuance": "Highlights the SME-to-enterprise diffusion gap between 1–4 employee firms and 250+ employee enterprises."
        }
      }
    ]
  },
  {
    "id": "topic_benefits_compute_price",
    "ref": "Topic 2A · Benefits & Price Caveat",
    "title": "Compute Power, API Price Collapse & The Uber/Lyft/Grab Sustainability Caveat",
    "question": "Are falling AI inference prices durable technological deflation, or a temporary race-to-the-bottom subsidy war?",
    "color": "#10b981",
    "charts": [
      {
        "headline": "Frontier training compute rose by orders of magnitude across the deep learning era",
        "footnote": "Source: <a href=\"https://epoch.ai/data/ai-models\" target=\"_blank\" rel=\"noopener noreferrer\">Epoch AI Notable Models & LLM Benchmark Efficiency (CC BY 4.0)</a> &middot; 2012–2025 &middot; N=852 notable models",
        "chart": {
          "type": "line",
          "title": "Training Compute of Notable AI Models (Log10 FLOPs, 2012–2025)",
          "labels": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Publication Year",
          "y_title": "Training Compute (Log10 FLOPs)",
          "datasets": [
            {
              "label": "Max Frontier Compute (Log10 FLOPs)",
              "data": [
                17.78,
                18.42,
                20.47,
                20.58,
                21.82,
                20.93,
                21.94,
                23.03,
                23.5,
                24.31,
                24.44,
                25.7,
                25.58,
                26.7
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Median Notable Model (Log10 FLOPs)",
              "data": [
                17.47,
                16.92,
                18.01,
                18.85,
                18.72,
                18.73,
                18.24,
                20.09,
                20.79,
                22.1,
                22.17,
                22.8,
                24.48,
                24.57
              ],
              "borderColor": "#a1a1aa",
              "borderDash": [
                5,
                4
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Log10 of estimated floating-point operations (FLOPs) used to train each notable AI model.",
          "scope": "Global notable models, 2012–2025 (Epoch AI).",
          "nuance": "Log10 scale means each +1.0 step represents a 10x increase in training compute."
        }
      },
      {
        "headline": "API inference list prices per million tokens fell steeply between 2022 and 2025",
        "footnote": "Source: <a href=\"https://epoch.ai/data/ai-models\" target=\"_blank\" rel=\"noopener noreferrer\">Epoch AI Notable Models & LLM Benchmark Efficiency (CC BY 4.0)</a> &middot; 2022–2025 &middot; N=72 model releases",
        "chart": {
          "type": "line",
          "title": "LLM API Inference Price per 1M Tokens (Quarterly Median & Floor, USD)",
          "labels": [
            "2022Q3",
            "2022Q4",
            "2023Q1",
            "2023Q2",
            "2023Q3",
            "2023Q4",
            "2024Q1",
            "2024Q2",
            "2024Q3",
            "2024Q4",
            "2025Q1"
          ],
          "x_title": "Release Quarter",
          "y_title": "List Price (USD per 1M Tokens)",
          "datasets": [
            {
              "label": "Quarterly Median (USD / 1M)",
              "data": [
                40.0,
                20.0,
                19.75,
                20.375,
                0.445,
                0.75,
                6.0,
                0.26,
                1.413,
                2.3,
                0.96
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            },
            {
              "label": "Quarterly Minimum Floor (USD / 1M)",
              "data": [
                20.0,
                20.0,
                2.0,
                3.25,
                0.33,
                0.2,
                0.5,
                0.13,
                0.05,
                0.07,
                0.175
              ],
              "borderColor": "#38bdf8",
              "borderDash": [
                4,
                4
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Quarterly median and minimum list price in USD per 1 million tokens across tracked LLM endpoints.",
          "scope": "Global commercial APIs, 2022–2025 (Epoch AI).",
          "nuance": "List prices exclude unamortised frontier training CapEx and VC/hyperscaler subsidies."
        }
      },
      {
        "headline": "Case Study (Uber vs Lyft vs Grab): platforms burned billions in below-cost pricing to capture share before raising prices",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Audited 10-K (Uber, Lyft) & 20-F (Grab)",
        "chart": {
          "type": "bar",
          "title": "Ride-Hailing Subsidy War Case Study: Annual Net Income / Loss (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "Net Income / Loss (USD Billions)",
          "datasets": [
            {
              "label": "Uber Net Income/Loss",
              "data": [
                0.99,
                -8.51,
                -6.79,
                -0.57,
                -9.14,
                2.16,
                9.85,
                10.09
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Lyft Net Income/Loss",
              "data": [
                -0.91,
                -2.6,
                -1.75,
                -1.06,
                -1.58,
                -0.34,
                0.02,
                2.84
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "Grab Net Income/Loss",
              "data": [
                null,
                -3.99,
                -2.75,
                -3.56,
                -1.74,
                -0.48,
                -0.16,
                0.2
              ],
              "backgroundColor": "#10b981"
            }
          ]
        },
        "definition": {
          "metric": "Audited annual Net Income / Loss (USD billions) from SEC EDGAR 10-K (Uber, Lyft) and 20-F (Grab) filings.",
          "scope": "FY 2018–2025 (SEC EDGAR).",
          "nuance": "Demonstrates how venture-funded platforms sustained multi-billion-dollar annual losses to win market share before raising prices."
        }
      },
      {
        "headline": "Ride-hailing revenue scaled rapidly, yet profitability only arrived after market consolidation and subsidy cuts",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Audited 10-K / 20-F Annual Revenue",
        "chart": {
          "type": "line",
          "title": "Ride-Hailing Revenue Scaling During & After the Price War (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "Annual Revenue (USD Billions)",
          "datasets": [
            {
              "label": "Uber Revenue",
              "data": [
                10.43,
                13.0,
                11.14,
                17.45,
                31.88,
                37.28,
                43.98,
                52.02
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Lyft Revenue",
              "data": [
                2.16,
                3.62,
                2.36,
                3.21,
                4.1,
                4.4,
                5.79,
                6.32
              ],
              "borderColor": "#f97316",
              "tension": 0.25
            },
            {
              "label": "Grab Revenue",
              "data": [
                null,
                -0.84,
                0.47,
                0.68,
                1.43,
                2.36,
                2.8,
                3.37
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Audited annual Revenue (USD billions) for Uber, Lyft, and Grab.",
          "scope": "FY 2018–2025 (SEC EDGAR).",
          "nuance": "Shows rapid top-line adoption during below-cost pricing, followed by price normalisation once rivals consolidated."
        }
      }
    ]
  },
  {
    "id": "topic_benefits_impact",
    "ref": "Topic 2B · Real-World Impact",
    "title": "Translating Capability to Impact — Start-ups, Healthcare, Maths & Macro Productivity",
    "question": "How do cheaper tokens translate into start-up formation, clinical authorisations, scientific progress, and macro productivity?",
    "color": "#06b6d4",
    "charts": [
      {
        "headline": "US new business applications surged from 2020 onward, reflecting lower digital barriers for founders and start-ups",
        "footnote": "Source: <a href=\"https://fred.stlouisfed.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Federal Reserve Economic Data (FRED · BLS & BEA)</a> &middot; 2005–2025 &middot; FRED BABATOTALSAUS annualised monthly mean",
        "chart": {
          "type": "line",
          "title": "Democratising Access: US New Business Applications (Monthly Average, Thousands)",
          "labels": [
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Year",
          "y_title": "Monthly Business Applications (Thousands)",
          "datasets": [
            {
              "label": "Avg Monthly Business Applications (k)",
              "data": [
                208.8,
                218.4,
                221.0,
                210.1,
                202.4,
                208.1,
                214.4,
                214.6,
                217.5,
                222.2,
                235.2,
                248.0,
                266.5,
                291.6,
                293.1,
                364.9,
                450.7,
                423.7,
                457.6,
                437.5,
                472.5
              ],
              "borderColor": "#06b6d4",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Annual mean of seasonally adjusted monthly US Business Applications (BABATOTALSAUS, thousands).",
          "scope": "United States, 2005–2025 (FRED / US Census BFS).",
          "nuance": "Measures new firm formation velocity; reflects digital enablement alongside pandemic-era shifts."
        }
      },
      {
        "headline": "US FDA authorisations of AI/ML-enabled medical devices accelerated sharply after 2018",
        "footnote": "Source: <a href=\"https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices\" target=\"_blank\" rel=\"noopener noreferrer\">US FDA AI/ML-Enabled Medical Devices List</a> &middot; 2012–2025 &middot; N=1412 devices",
        "chart": {
          "type": "bar",
          "title": "US FDA AI/ML-Enabled Medical Device Authorisations per Year (2012–2025)",
          "labels": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Decision Year",
          "y_title": "Authorised Devices (Count)",
          "datasets": [
            {
              "label": "Annual Authorisations",
              "data": [
                5,
                4,
                6,
                6,
                18,
                27,
                65,
                80,
                114,
                129,
                162,
                226,
                235,
                335
              ],
              "backgroundColor": "#10b981"
            }
          ]
        },
        "definition": {
          "metric": "Annual count of AI/ML-enabled medical devices authorised via 510(k), De Novo, or PMA pathways.",
          "scope": "United States, 2012–2025 (US FDA).",
          "nuance": "Authorisation measures regulatory clearance, not hospital clinical outcomes."
        }
      },
      {
        "headline": "Regulated medical AI remains overwhelmingly concentrated in radiology and cardiovascular imaging",
        "footnote": "Source: <a href=\"https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices\" target=\"_blank\" rel=\"noopener noreferrer\">US FDA AI/ML-Enabled Medical Devices List</a> &middot; 1995–2026 &middot; Top 8 FDA panels (N=1556)",
        "chart": {
          "type": "bar",
          "index_axis": "y",
          "title": "FDA AI/ML Medical Devices by Lead Clinical Panel (Top 8)",
          "labels": [
            "Radiology",
            "Cardiovascular",
            "Neurology",
            "Anesthesiology",
            "Gastroenterology-Urology",
            "Hematology",
            "Pathology",
            "Ophthalmic"
          ],
          "x_title": "Authorised Devices (Count)",
          "y_title": "FDA Lead Clinical Panel",
          "datasets": [
            {
              "label": "Authorised Devices",
              "data": [
                1230,
                154,
                73,
                30,
                27,
                22,
                10,
                10
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Distribution of all FDA-authorised AI/ML medical devices by lead medical specialty panel.",
          "scope": "United States, 1995–2026 (US FDA).",
          "nuance": "Radiology accounts for the majority of cleared imaging algorithms."
        }
      },
      {
        "headline": "AI scores on competition maths (MATH-500) surged rapidly, with the caveat that benchmark saturation is not theorem discovery",
        "footnote": "Source: <a href=\"https://epoch.ai/data/ai-models\" target=\"_blank\" rel=\"noopener noreferrer\">Epoch AI Notable Models & LLM Benchmark Efficiency (CC BY 4.0)</a> &middot; 2023–2025 &middot; N=51 evaluated models",
        "chart": {
          "type": "line",
          "title": "AI Evolution in Maths (With Caveat): MATH-500 Benchmark Trajectory (%)",
          "labels": [
            "2023Q2",
            "2023Q4",
            "2024Q1",
            "2024Q2",
            "2024Q3",
            "2024Q4",
            "2025Q1"
          ],
          "x_title": "Release Quarter",
          "y_title": "MATH-500 Score (%)",
          "datasets": [
            {
              "label": "Quarterly Best Model (%)",
              "data": [
                44.0,
                74.0,
                64.0,
                79.0,
                94.0,
                97.0,
                97.0
              ],
              "borderColor": "#a855f7",
              "tension": 0.25
            },
            {
              "label": "Quarterly Median Model (%)",
              "data": [
                44.0,
                59.0,
                46.5,
                55.0,
                62.5,
                76.0,
                94.0
              ],
              "borderColor": "#a1a1aa",
              "borderDash": [
                5,
                4
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Quarterly maximum and median MATH-500 benchmark scores (%) across evaluated LLMs.",
          "scope": "Global releases, 2023–2025 (Epoch AI).",
          "nuance": "BIG CAVEAT: High competition-maths benchmark scores do not equate to autonomous mathematical theorem discovery or unverified proof reliability."
        }
      },
      {
        "headline": "The Solow Paradox test: economy-wide US productivity has not yet matched the late-1990s computing surge",
        "footnote": "Source: <a href=\"https://fred.stlouisfed.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Federal Reserve Economic Data (FRED · BLS & BEA)</a> &middot; 1952–2025 &middot; FRED OPHNFB 5-yr CAGR",
        "chart": {
          "type": "line",
          "title": "Overall Productivity Level: US Nonfarm Labour Productivity 5-Year Annualised Growth (%)",
          "labels": [
            "1952",
            "1953",
            "1954",
            "1955",
            "1956",
            "1957",
            "1958",
            "1959",
            "1960",
            "1961",
            "1962",
            "1963",
            "1964",
            "1965",
            "1966",
            "1967",
            "1968",
            "1969",
            "1970",
            "1971",
            "1972",
            "1973",
            "1974",
            "1975",
            "1976",
            "1977",
            "1978",
            "1979",
            "1980",
            "1981",
            "1982",
            "1983",
            "1984",
            "1985",
            "1986",
            "1987",
            "1988",
            "1989",
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Year",
          "y_title": "5-Year Rolling CAGR (%)",
          "datasets": [
            {
              "label": "Output per Hour 5-Yr CAGR (%)",
              "data": [
                3.36,
                3.35,
                3.1,
                2.63,
                1.99,
                2.12,
                2.09,
                2.41,
                1.79,
                2.56,
                2.96,
                3.18,
                3.01,
                3.41,
                3.48,
                2.95,
                2.96,
                2.46,
                2.1,
                2.16,
                2.48,
                2.4,
                2.02,
                2.27,
                2.19,
                1.84,
                1.51,
                1.82,
                1.28,
                0.88,
                0.37,
                0.89,
                1.37,
                1.73,
                2.03,
                2.31,
                1.83,
                1.55,
                1.54,
                1.28,
                2.05,
                1.74,
                1.7,
                1.59,
                1.68,
                1.18,
                1.83,
                2.47,
                2.85,
                2.95,
                3.42,
                3.49,
                3.3,
                3.14,
                2.82,
                2.28,
                1.81,
                2.02,
                2.22,
                2.01,
                1.88,
                1.74,
                1.13,
                0.76,
                0.89,
                1.0,
                1.16,
                1.38,
                2.18,
                2.52,
                1.9,
                2.04,
                2.24,
                1.68
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "5-year rolling compound annual growth rate (CAGR, %) of US Nonfarm Business Sector Output per Hour (OPHNFB).",
          "scope": "United States, 1952–2025 (FRED / US BLS).",
          "nuance": "Tests Robert Solow's 1987 observation: computing investment took decades to materialise in aggregate productivity statistics (late 1990s surge)."
        }
      }
    ]
  },
  {
    "id": "topic_cost_capital",
    "ref": "Topic 3A · Dependency & Capital Risks",
    "title": "Circular Financing, Capital Intensity, Debt vs Income & Depreciation",
    "question": "Does the circular AI capital loop expose hyperscalers to a rising debt, free-cash-flow, and depreciation squeeze?",
    "color": "#f97316",
    "charts": [
      {
        "headline": "NVIDIA's revenue expansion closely mirrors the aggregate hyperscaler CapEx surge in a circular loop",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Big-5 CapEx vs NVDA 10-K Revenue",
        "chart": {
          "type": "bar",
          "title": "Circular Capital Loop: Big-5 Hyperscaler CapEx vs NVIDIA Revenue (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "USD Billions",
          "datasets": [
            {
              "label": "Big-5 Combined CapEx",
              "data": [
                65.85,
                71.1,
                94.58,
                127.13,
                154.72,
                148.84,
                224.14,
                378.72
              ],
              "backgroundColor": "rgba(249, 115, 22, 0.78)"
            },
            {
              "label": "NVIDIA Annual Revenue",
              "data": [
                11.72,
                10.92,
                16.68,
                26.91,
                26.97,
                60.92,
                130.5,
                215.94
              ],
              "backgroundColor": "#10b981"
            }
          ]
        },
        "definition": {
          "metric": "Aggregate Big-5 hyperscaler CapEx compared side by side with NVIDIA's audited annual 10-K revenue.",
          "scope": "US SEC EDGAR 10-K filings, FY 2018–2025.",
          "nuance": "Illustrates vendor-customer capital concentration: hyperscaler CapEx directly funds GPU supplier revenue."
        }
      },
      {
        "headline": "Hyperscaler capital expenditure surged dramatically from 2023 onward across all five platforms",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Audited 10-K filings (5 firms)",
        "chart": {
          "type": "bar",
          "stacked": true,
          "title": "Annual Capital Expenditure by Hyperscaler (SEC EDGAR 10-K, USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "Capital Expenditure (USD Billions)",
          "datasets": [
            {
              "label": "Amazon",
              "data": [
                13.43,
                16.86,
                40.14,
                61.05,
                63.65,
                52.73,
                83.0,
                131.82
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "Alphabet",
              "data": [
                25.14,
                23.55,
                22.28,
                24.64,
                31.48,
                32.25,
                52.53,
                91.45
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Microsoft",
              "data": [
                11.63,
                13.93,
                15.44,
                20.62,
                23.89,
                28.11,
                44.48,
                64.55
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Meta",
              "data": [
                13.91,
                15.1,
                15.16,
                18.69,
                31.19,
                27.05,
                37.26,
                69.69
              ],
              "backgroundColor": "#a855f7"
            },
            {
              "label": "Oracle",
              "data": [
                1.74,
                1.66,
                1.56,
                2.13,
                4.51,
                8.7,
                6.87,
                21.21
              ],
              "backgroundColor": "#eab308"
            }
          ]
        },
        "definition": {
          "metric": "Audited cash outflows for Property, Plant & Equipment (PaymentsToAcquirePropertyPlantAndEquipment) per 10-K.",
          "scope": "MSFT, GOOGL, META, AMZN, ORCL; FY 2018–2025 (SEC EDGAR).",
          "nuance": "Includes both AI data-centre buildout and traditional cloud/logistics CapEx."
        }
      },
      {
        "headline": "Capital intensity as a share of total revenue climbed sharply across Meta, Microsoft, Alphabet, and Oracle",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; CapEx / Revenue (%)",
        "chart": {
          "type": "line",
          "title": "CapEx Intensity: Capital Expenditure as % of Total Revenue (2018–2025)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "CapEx / Total Revenue (%)",
          "datasets": [
            {
              "label": "Meta",
              "data": [
                24.9,
                21.4,
                17.6,
                15.8,
                26.7,
                20.1,
                22.7,
                34.7
              ],
              "borderColor": "#a855f7",
              "tension": 0.25
            },
            {
              "label": "Oracle",
              "data": [
                4.4,
                4.2,
                4.0,
                5.3,
                10.6,
                17.4,
                13.0,
                37.0
              ],
              "borderColor": "#eab308",
              "tension": 0.25
            },
            {
              "label": "Microsoft",
              "data": [
                10.5,
                11.1,
                10.8,
                12.3,
                12.0,
                13.3,
                18.1,
                22.9
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            },
            {
              "label": "Alphabet",
              "data": [
                18.4,
                14.5,
                12.2,
                9.6,
                11.1,
                10.5,
                15.0,
                22.7
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Amazon",
              "data": [
                5.8,
                6.0,
                10.4,
                13.0,
                12.4,
                9.2,
                13.0,
                18.4
              ],
              "borderColor": "#f97316",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Capital Expenditure divided by Total Revenue × 100 (%).",
          "scope": "Individual hyperscaler 10-K filings, FY 2018–2025.",
          "nuance": "Shows how much of each revenue dollar is reinvested into physical infrastructure."
        }
      },
      {
        "headline": "Big-5 long-term debt and CapEx commitments have grown alongside net income and operating cash flow",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Big-5 Long-Term Debt, Net Income & FCF",
        "chart": {
          "type": "line",
          "title": "Debt, Actual Income & Cash Flow: Big-5 Long-Term Debt, Net Income & Free Cash Flow (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "USD Billions",
          "datasets": [
            {
              "label": "Operating Cash Flow",
              "data": [
                167.23,
                196.08,
                243.74,
                288.29,
                287.3,
                362.55,
                469.73,
                577.0
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            },
            {
              "label": "Net Income (Actual Profit)",
              "data": [
                83.21,
                114.88,
                145.33,
                223.96,
                160.09,
                224.36,
                320.52,
                384.76
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Long-Term Debt",
              "data": [
                105.17,
                101.55,
                110.43,
                123.52,
                144.94,
                144.68,
                142.65,
                219.82
              ],
              "borderColor": "#ef4444",
              "tension": 0.25
            },
            {
              "label": "Free Cash Flow (OCF - CapEx)",
              "data": [
                101.39,
                124.98,
                149.14,
                161.14,
                132.59,
                213.73,
                245.59,
                198.3
              ],
              "borderColor": "#f97316",
              "borderDash": [
                5,
                4
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Big-5 aggregate Operating Cash Flow, Net Income, Long-Term Debt, and Free Cash Flow (OCF minus CapEx) in USD billions.",
          "scope": "MSFT, GOOGL, META, AMZN, ORCL; FY 2018–2025 (SEC EDGAR).",
          "nuance": "Note: Private frontier AI labs (e.g. OpenAI, Anthropic) do not file public 10-K statements, so their operating losses remain outside audited EDGAR filings."
        }
      },
      {
        "headline": "Accumulated Net PP&E and annual depreciation charges are compounding into a multi-year earnings drag",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Big-5 Net PP&E & D&A",
        "chart": {
          "type": "bar",
          "title": "The Depreciation Wall: Big-5 Net PP&E Stock vs Annual Depreciation (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "Balance / Expense (USD Billions)",
          "datasets": [
            {
              "label": "Net PP&E Balance (Year-End)",
              "data": [
                181.56,
                189.08,
                135.14,
                164.37,
                196.79,
                247.05,
                580.83,
                605.51
              ],
              "backgroundColor": "rgba(56, 189, 248, 0.72)"
            },
            {
              "label": "Annual Depreciation & Amortisation",
              "data": [
                24.69,
                31.26,
                34.71,
                51.58,
                61.46,
                66.73,
                81.0,
                106.87
              ],
              "backgroundColor": "#ef4444"
            }
          ]
        },
        "definition": {
          "metric": "Year-end Net Property, Plant & Equipment balance vs annual Depreciation & Amortisation expense.",
          "scope": "Big-5 aggregate 10-K filings, FY 2018–2025.",
          "nuance": "High CapEx today converts into unavoidable multi-year D&A charges on future income statements."
        }
      },
      {
        "headline": "Maximum estimated training compute costs for frontier models escalated into the hundreds of millions",
        "footnote": "Source: <a href=\"https://epoch.ai/data/ai-models\" target=\"_blank\" rel=\"noopener noreferrer\">Epoch AI Notable Models & LLM Benchmark Efficiency (CC BY 4.0)</a> &middot; 2012–2025 &middot; Models with estimated compute cost",
        "chart": {
          "type": "bar",
          "title": "Peak Estimated Frontier Training Compute Cost per Year (USD Millions, 2023 USD)",
          "labels": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Publication Year",
          "y_title": "Estimated Training Cost (USD Millions)",
          "datasets": [
            {
              "label": "Max Model Training Cost ($M)",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.2,
                0.47,
                0.13,
                4.33,
                2.12,
                3.85,
                4.9,
                37.33,
                52.89,
                387.8
              ],
              "backgroundColor": "#f59e0b"
            }
          ]
        },
        "definition": {
          "metric": "Log10 of estimated floating-point operations (FLOPs) used to train each notable AI model.",
          "scope": "Global notable models, 2012–2025 (Epoch AI).",
          "nuance": "Log10 scale means each +1.0 step represents a 10x increase in training compute."
        }
      }
    ]
  },
  {
    "id": "topic_cost_info_filter",
    "ref": "Topic 3B · Information Filter",
    "title": "Information Filter — Algorithmic Dependency & Media Narratives",
    "question": "How concentrated are the commercial gatekeepers shaping AI models, algorithmic feeds, and public media narratives?",
    "color": "#ef4444",
    "charts": [
      {
        "headline": "Commercial industry has steadily displaced academia as the dominant producer of notable AI models",
        "footnote": "Source: <a href=\"https://epoch.ai/data/ai-models\" target=\"_blank\" rel=\"noopener noreferrer\">Epoch AI Notable Models & LLM Benchmark Efficiency (CC BY 4.0)</a> &middot; 2012–2025 &middot; Industry vs Academia share (%)",
        "chart": {
          "type": "bar",
          "stacked": true,
          "y_min": 0,
          "y_max": 100,
          "title": "Share of Notable AI Models: Industry vs Academia (2012–2025, %)",
          "labels": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Publication Year",
          "y_title": "Share of Notable Models (%)",
          "datasets": [
            {
              "label": "Industry (%)",
              "data": [
                38.5,
                47.4,
                33.3,
                65.5,
                59.2,
                65.5,
                83.8,
                76.5,
                78.0,
                86.1,
                80.2,
                83.2,
                97.0,
                96.4
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Non-Industry / Academia (%)",
              "data": [
                61.5,
                52.6,
                66.7,
                34.5,
                40.8,
                34.5,
                16.2,
                23.5,
                22.0,
                13.9,
                19.8,
                16.8,
                3.0,
                3.6
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Annual % of notable AI models produced by Industry vs Academia/Non-Industry organisations.",
          "scope": "Global notable models, 2012–2025 (Epoch AI).",
          "nuance": "Demonstrates why independent public/academic scrutiny is essential as industry dominates frontier releases."
        }
      }
    ]
  },
  {
    "id": "topic_cost_jobs",
    "ref": "Topic 3C · Job Cost & IBM Case Study",
    "title": "Job Cost, AI Tokens vs Your Job & The IBM Computer Adaptation Case Study",
    "question": "Which functions face cost pressure, how do AI tokens compare with human wages, and how did the job market adapt when IBM introduced the computer?",
    "color": "#a855f7",
    "charts": [
      {
        "headline": "Official US median hourly wages in exposed knowledge roles range from clerical rates to high-skill tiers",
        "footnote": "Source: <a href=\"https://www.bls.gov/oes/tables.htm\" target=\"_blank\" rel=\"noopener noreferrer\">US Bureau of Labor Statistics OEWS (May 2025)</a> &middot; May 2025 &middot; N=9 benchmark occupations",
        "chart": {
          "type": "bar",
          "index_axis": "y",
          "title": "Official US Median Hourly Wage by Knowledge Occupation (BLS OEWS May 2025, USD/hr)",
          "labels": [
            "Lawyers",
            "Software Developers",
            "Data Scientists",
            "Financial Analysts",
            "Accountants & Auditors",
            "Writers & Authors",
            "Graphic Designers",
            "Paralegals & Legal Assistants",
            "Customer Service Reps"
          ],
          "x_title": "Median Hourly Wage (USD / Hour)",
          "y_title": "Occupation",
          "datasets": [
            {
              "label": "Median Hourly Wage (USD)",
              "data": [
                76.76,
                65.38,
                57.8,
                49.4,
                40.23,
                36.98,
                30.27,
                30.24,
                21.53
              ],
              "backgroundColor": "#a855f7"
            }
          ]
        },
        "definition": {
          "metric": "Official US national median hourly wage (H_MEDIAN) across cross-industry employment (NAICS 000000).",
          "scope": "United States, May 2025 (US BLS OEWS).",
          "nuance": "Measures gross wage only; employer payroll taxes and benefits add ~25–35% to total human resource cost."
        }
      },
      {
        "headline": "Cheap API token prices sit atop tens of billions in annual hyperscaler CapEx and R&D spend",
        "footnote": "Source: <a href=\"https://data.sec.gov/api/xbrl/companyfacts/\" target=\"_blank\" rel=\"noopener noreferrer\">US SEC EDGAR XBRL CompanyFacts (10-K Filings)</a> &middot; FY 2018–2025 &middot; Big-5 Annual CapEx + R&D",
        "chart": {
          "type": "bar",
          "stacked": true,
          "title": "The Hidden Subsidy Base: Big-5 Combined Annual CapEx + R&D Spend (USD Billions)",
          "labels": [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Fiscal Year",
          "y_title": "Combined CapEx + R&D (USD Billions)",
          "datasets": [
            {
              "label": "Capital Expenditure (CapEx)",
              "data": [
                65.85,
                71.1,
                94.58,
                127.13,
                154.72,
                148.84,
                224.14,
                378.72
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "R&D Expense",
              "data": [
                52.5,
                62.53,
                71.36,
                83.47,
                106.57,
                119.73,
                131.62,
                160.81
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Combined annual CapEx + R&D expense across Microsoft, Alphabet, Meta, Amazon, and Oracle.",
          "scope": "US SEC EDGAR 10-K filings, FY 2018–2025.",
          "nuance": "Highlights the capital scale underwriting commercial AI API pricing."
        }
      },
      {
        "headline": "IBM Case Study (1): Electronic computing triggered a multi-decade exponential collapse in memory and storage prices",
        "footnote": "Source: <a href=\"https://ourworldindata.org/technological-change\" target=\"_blank\" rel=\"noopener noreferrer\">Our World in Data — Technological Change & Historical Economics (CC BY 4.0)</a> &middot; 1957–2025 &middot; Log10 USD per TB",
        "chart": {
          "type": "line",
          "title": "Historical Price of Computer Memory (RAM) & Storage (Log10 USD per TB, 1957–2025)",
          "labels": [
            "1957",
            "1959",
            "1960",
            "1964",
            "1965",
            "1966",
            "1970",
            "1973",
            "1974",
            "1975",
            "1976",
            "1977",
            "1978",
            "1979",
            "1980",
            "1981",
            "1982",
            "1983",
            "1984",
            "1985",
            "1986",
            "1987",
            "1988",
            "1989",
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023"
          ],
          "x_title": "Year",
          "y_title": "Price (Log10 USD per Terabyte)",
          "datasets": [
            {
              "label": "Memory / RAM (Log10 USD/TB)",
              "data": [
                15.58,
                14.78,
                13.66,
                null,
                13.34,
                null,
                12.69,
                12.37,
                12.22,
                11.38,
                11.02,
                10.99,
                10.78,
                10.38,
                10.31,
                10.11,
                9.73,
                9.71,
                9.52,
                8.86,
                8.65,
                8.48,
                8.46,
                8.37,
                7.95,
                7.88,
                7.69,
                7.67,
                7.66,
                7.65,
                6.94,
                6.54,
                6.13,
                6.08,
                6.02,
                5.33,
                5.28,
                5.03,
                5.02,
                5.0,
                4.97,
                4.48,
                4.07,
                4.07,
                4.06,
                3.77,
                3.62,
                3.61,
                3.6,
                3.6,
                3.47,
                3.46,
                3.45,
                3.44,
                3.44,
                3.39,
                3.27,
                3.04
              ],
              "borderColor": "#06b6d4",
              "tension": 0.25
            },
            {
              "label": "Hard Disk Drive (Log10 USD/TB)",
              "data": [
                null,
                10.83,
                10.5,
                10.47,
                null,
                9.92,
                9.24,
                9.18,
                8.99,
                8.95,
                null,
                null,
                null,
                8.82,
                8.76,
                8.72,
                8.7,
                8.49,
                7.97,
                7.88,
                7.64,
                7.53,
                7.34,
                7.19,
                6.81,
                6.72,
                6.41,
                6.11,
                5.88,
                5.56,
                5.32,
                4.89,
                4.6,
                4.14,
                3.79,
                3.58,
                3.24,
                3.02,
                2.92,
                2.73,
                2.45,
                2.4,
                2.08,
                1.93,
                1.73,
                1.63,
                1.62,
                1.61,
                1.58,
                1.49,
                1.48,
                1.42,
                1.38,
                1.28,
                1.21,
                1.19,
                1.1,
                1.03
              ],
              "borderColor": "#38bdf8",
              "tension": 0.25
            },
            {
              "label": "Flash Storage (Log10 USD/TB)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                5.43,
                5.42,
                5.0,
                4.27,
                3.96,
                3.34,
                3.29,
                3.15,
                3.06,
                2.82,
                2.71,
                2.56,
                2.2,
                2.19,
                2.18,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Log10 of historical USD price per terabyte of RAM (Memory), Hard Disk Drive, and Flash storage.",
          "scope": "Global hardware benchmarks, 1957–2025 (OWID).",
          "nuance": "Provides the historical baseline for exponential hardware price deflation prior to the AI token era."
        }
      },
      {
        "headline": "IBM Case Study (2): Computerisation expanded systems design & data processing while flattening routine clerical and teller roles",
        "footnote": "Source: <a href=\"https://fred.stlouisfed.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Federal Reserve Economic Data (FRED · BLS & BEA)</a> &middot; 1990–2025 &middot; 5 US BLS CES payroll series, Index: 1990 = 100",
        "chart": {
          "type": "line",
          "title": "Post-Computer Job Divergence Across 5 Sectors (1990 = 100)",
          "labels": [
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Year",
          "y_title": "US Payroll Employment Index (1990 = 100)",
          "datasets": [
            {
              "label": "Computer Systems Design",
              "data": [
                100.0,
                102.5,
                108.5,
                118.1,
                129.4,
                148.8,
                170.6,
                200.9,
                236.7,
                275.0,
                304.4,
                314.9,
                279.9,
                271.1,
                279.0,
                290.4,
                312.1,
                333.4,
                349.7,
                345.5,
                351.9,
                373.0,
                393.8,
                413.4,
                434.8,
                463.2,
                481.9,
                496.0,
                512.2,
                530.7,
                531.1,
                558.6,
                593.3,
                597.0,
                589.8,
                580.2
              ],
              "borderColor": "#06b6d4",
              "tension": 0.25
            },
            {
              "label": "Data Processing & Hosting",
              "data": [
                100.0,
                100.7,
                103.8,
                105.6,
                107.3,
                114.7,
                119.2,
                126.9,
                133.7,
                145.3,
                149.4,
                149.9,
                143.7,
                132.5,
                126.5,
                124.2,
                124.4,
                126.5,
                123.0,
                117.5,
                114.9,
                116.2,
                120.5,
                127.5,
                132.2,
                140.1,
                143.5,
                150.4,
                156.5,
                162.3,
                171.5,
                189.9,
                220.2,
                229.5,
                227.7,
                227.0
              ],
              "borderColor": "#10b981",
              "tension": 0.25
            },
            {
              "label": "Business Support / Clerical",
              "data": [
                100.0,
                99.7,
                103.9,
                108.8,
                113.8,
                124.8,
                134.4,
                145.3,
                152.9,
                154.6,
                155.8,
                154.4,
                149.8,
                148.5,
                150.1,
                151.9,
                157.1,
                162.0,
                164.9,
                162.4,
                160.2,
                161.4,
                164.2,
                169.6,
                173.9,
                177.0,
                180.2,
                178.7,
                176.9,
                173.2,
                161.1,
                161.1,
                156.4,
                146.5,
                136.7,
                128.9
              ],
              "borderColor": "#eab308",
              "tension": 0.25
            },
            {
              "label": "Accounting & Bookkeeping",
              "data": [
                100.0,
                98.6,
                99.0,
                98.5,
                100.9,
                106.3,
                109.8,
                114.6,
                120.7,
                126.2,
                130.5,
                131.3,
                126.0,
                122.5,
                121.2,
                127.9,
                133.9,
                140.9,
                143.1,
                137.5,
                133.3,
                135.4,
                136.8,
                140.4,
                142.5,
                145.6,
                147.5,
                149.7,
                150.7,
                153.3,
                149.4,
                158.3,
                167.0,
                172.1,
                172.3,
                169.5
              ],
              "borderColor": "#a1a1aa",
              "borderDash": [
                5,
                4
              ],
              "tension": 0.25
            },
            {
              "label": "Bank Branches / Tellers",
              "data": [
                100.0,
                96.0,
                92.8,
                92.5,
                91.3,
                89.4,
                89.1,
                89.5,
                90.3,
                90.4,
                88.9,
                90.0,
                91.7,
                92.6,
                92.7,
                93.6,
                95.3,
                96.2,
                95.6,
                92.3,
                91.0,
                91.3,
                91.5,
                91.3,
                89.6,
                88.6,
                89.4,
                90.2,
                90.8,
                91.7,
                91.4,
                90.2,
                91.3,
                92.9,
                92.1,
                92.0
              ],
              "borderColor": "#ef4444",
              "borderDash": [
                3,
                3
              ],
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "Annual mean US payroll employment indexed to 1990 = 100 across 5 sectors: Computer Systems Design, Data Processing, Business Support, Accounting/Bookkeeping, and Bank Branches.",
          "scope": "United States, 1990–2025 (FRED / US BLS CES).",
          "nuance": "Illustrates how electronic computing displaced routine clerical/teller roles while expanding systems-engineering and data-processing employment."
        }
      },
      {
        "headline": "IBM Case Study (3): US IT equipment and software investment peaked during the 2000 dot-com boom before settling into a higher plateau",
        "footnote": "Source: <a href=\"https://fred.stlouisfed.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Federal Reserve Economic Data (FRED · BLS & BEA)</a> &middot; 1960–2025 &middot; BEA A679RC1Q027SBEA / GDP",
        "chart": {
          "type": "line",
          "title": "Historical CapEx Precedent: US IT Equipment & Software Investment as % of GDP (1960–2025)",
          "labels": [
            "1960",
            "1961",
            "1962",
            "1963",
            "1964",
            "1965",
            "1966",
            "1967",
            "1968",
            "1969",
            "1970",
            "1971",
            "1972",
            "1973",
            "1974",
            "1975",
            "1976",
            "1977",
            "1978",
            "1979",
            "1980",
            "1981",
            "1982",
            "1983",
            "1984",
            "1985",
            "1986",
            "1987",
            "1988",
            "1989",
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "x_title": "Year",
          "y_title": "IT & Software Investment (% of Nominal GDP)",
          "datasets": [
            {
              "label": "IT Equipment & Software (% of GDP)",
              "data": [
                0.9,
                0.94,
                0.94,
                1.02,
                1.08,
                1.15,
                1.31,
                1.31,
                1.27,
                1.44,
                1.55,
                1.49,
                1.52,
                1.62,
                1.75,
                1.69,
                1.75,
                1.88,
                2.07,
                2.23,
                2.41,
                2.54,
                2.64,
                2.75,
                3.01,
                3.0,
                2.99,
                2.91,
                2.94,
                3.04,
                2.93,
                2.89,
                2.96,
                3.07,
                3.12,
                3.32,
                3.46,
                3.69,
                3.85,
                4.12,
                4.4,
                4.0,
                3.56,
                3.47,
                3.45,
                3.42,
                3.46,
                3.57,
                3.59,
                3.46,
                3.55,
                3.61,
                3.71,
                3.73,
                3.72,
                3.71,
                3.79,
                3.92,
                4.02,
                3.96,
                4.11,
                4.11,
                4.15,
                4.02,
                4.08,
                4.55
              ],
              "borderColor": "#f97316",
              "tension": 0.25
            }
          ]
        },
        "definition": {
          "metric": "US Private Fixed Investment in Information Processing Equipment & Software divided by Nominal GDP × 100 (%).",
          "scope": "United States, 1960–2025 (FRED / US BEA).",
          "nuance": "Benchmarks today's AI CapEx boom against the 1995–2000 dot-com telecommunications and IT build-out."
        }
      }
    ]
  }
];
window.ISSUE03_CALC_DATA = {
  "occupations": [
    {
      "occupation": "Lawyers",
      "occ_code": "23-1011",
      "median_hourly_usd": 76.76,
      "median_annual_usd": 159670.0
    },
    {
      "occupation": "Software Developers",
      "occ_code": "15-1252",
      "median_hourly_usd": 65.38,
      "median_annual_usd": 135980.0
    },
    {
      "occupation": "Data Scientists",
      "occ_code": "15-2051",
      "median_hourly_usd": 57.8,
      "median_annual_usd": 120230.0
    },
    {
      "occupation": "Financial Analysts",
      "occ_code": "13-2051",
      "median_hourly_usd": 49.4,
      "median_annual_usd": 102740.0
    },
    {
      "occupation": "Accountants & Auditors",
      "occ_code": "13-2011",
      "median_hourly_usd": 40.23,
      "median_annual_usd": 83680.0
    },
    {
      "occupation": "Writers & Authors",
      "occ_code": "27-3043",
      "median_hourly_usd": 36.98,
      "median_annual_usd": 76910.0
    },
    {
      "occupation": "Graphic Designers",
      "occ_code": "27-1024",
      "median_hourly_usd": 30.27,
      "median_annual_usd": 62960.0
    },
    {
      "occupation": "Paralegals & Legal Assistants",
      "occ_code": "23-2011",
      "median_hourly_usd": 30.24,
      "median_annual_usd": 62890.0
    },
    {
      "occupation": "Customer Service Reps",
      "occ_code": "43-4051",
      "median_hourly_usd": 21.53,
      "median_annual_usd": 44770.0
    }
  ],
  "model_tiers": [
    {
      "label": "Budget / Small Tier (Epoch AI P25 · $0.25/1M)",
      "price_1m_usd": 0.253,
      "group": "Tier"
    },
    {
      "label": "Mid-Tier / Workhorse (Epoch AI P50 · $1.35/1M)",
      "price_1m_usd": 1.35,
      "group": "Tier"
    },
    {
      "label": "Frontier / High-Reasoning (Epoch AI P90 · $12.00/1M)",
      "price_1m_usd": 12.0,
      "group": "Tier"
    },
    {
      "label": "Gemini 2.0 Flash (2025-02 · $0.17/1M)",
      "price_1m_usd": 0.175,
      "group": "Model"
    },
    {
      "label": "o1-mini (2025-01 · $1.93/1M)",
      "price_1m_usd": 1.925,
      "group": "Model"
    },
    {
      "label": "o3-mini (2025-01 · $1.93/1M)",
      "price_1m_usd": 1.925,
      "group": "Model"
    },
    {
      "label": "Mistral Small 3 (2025-01 · $0.47/1M)",
      "price_1m_usd": 0.475,
      "group": "Model"
    },
    {
      "label": "DeepSeek-R1 (2025-01 · $0.96/1M)",
      "price_1m_usd": 0.96,
      "group": "Model"
    }
  ],
  "n_models_2024_plus": 58
};
