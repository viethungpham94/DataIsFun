window.ISSUE02_GRAPHS = [
  {
    "id": "ctx_flows",
    "section": "Part 1 · Overall Trends (Flow & Stock)",
    "ref": "1.1",
    "title": "Immigration in the Past & Current 'On Visa' Stock (1964–2025)",
    "question": "How has UK migration evolved over 62 years, does Non-EU+ net migration include visa expiries and departures, and what drove the 2020–2021 step-change?",
    "context_note": "<strong>Does Non-EU+ Net Migration include people leaving when visas expire or after study?</strong> <strong>Yes</strong> &mdash; Net Migration = Inflows minus Outflows (including departing students and workers whose visas expire). For Non-EU+ nationals, ONS LTIM records <strong>182k</strong> departures in 2019, dipping to <strong>88k</strong> in 2021 during COVID, then tripling to <strong>278k</strong> departures in 2025 as 2021–2023 cohorts left. <strong>Shaded chart bands</strong> show the UK governing party: <span style='color:#ef4444;font-weight:700;'>Red = Labour</span>, <span style='color:#3b82f6;font-weight:700;'>Blue = Conservative</span>, <span style='color:#818cf8;font-weight:700;'>Indigo = Coalition</span>.",
    "charts": [
      {
        "headline": "Over 62 years (1964–2025), UK net migration swung from negative outflows (1964–1982) to ~200k–300k (2004–2019), before the post-2021 spike above 900k.",
        "footnote": "*Spliced ONS long-run series: 1964–1990 IPS, 1991–2011 LTIM, 2012–2025 Admin-Based (000s). Shaded bands = UK governing party. Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a>",
        "chart": {
          "type": "line",
          "title": "62-Year UK Immigration, Emigration & Net Migration (000s · 1964–2025)",
          "labels": [
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
          "y_title": "Thousands",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "1991",
              "text": "LTIM",
              "color": "#a1a1aa"
            },
            {
              "label": "2004",
              "text": "EU8",
              "color": "#38bdf8"
            },
            {
              "label": "2012",
              "text": "Admin",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2022",
              "text": "Ukraine",
              "color": "#ef4444"
            }
          ],
          "datasets": [
            {
              "label": "Inflows (000s)",
              "data": [
                211.0,
                206.0,
                219.0,
                225.0,
                222.0,
                206.0,
                226.0,
                200.0,
                222.0,
                196.0,
                184.0,
                197.0,
                191.0,
                162.0,
                187.0,
                195.0,
                173.0,
                153.0,
                201.0,
                202.0,
                201.0,
                232.0,
                250.0,
                211.0,
                216.0,
                250.0,
                267.0,
                329.0,
                268.0,
                266.0,
                315.0,
                312.0,
                318.0,
                327.0,
                391.0,
                454.0,
                479.0,
                481.0,
                516.0,
                511.0,
                589.0,
                567.0,
                596.0,
                574.0,
                590.0,
                567.0,
                591.0,
                566.0,
                643.0,
                713.0,
                778.0,
                797.0,
                772.0,
                752.0,
                825.0,
                788.0,
                662.0,
                947.0,
                1398.0,
                1441.0,
                1012.0,
                813.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.10)"
            },
            {
              "label": "Outflows (000s)",
              "data": [
                271.0,
                284.0,
                302.0,
                309.0,
                278.0,
                293.0,
                291.0,
                240.0,
                233.0,
                246.0,
                269.0,
                238.0,
                210.0,
                208.0,
                192.0,
                189.0,
                228.0,
                232.0,
                257.0,
                184.0,
                164.0,
                174.0,
                213.0,
                209.0,
                237.0,
                205.0,
                231.0,
                285.0,
                281.0,
                266.0,
                238.0,
                236.0,
                264.0,
                279.0,
                251.0,
                291.0,
                321.0,
                309.0,
                363.0,
                363.0,
                344.0,
                361.0,
                398.0,
                341.0,
                427.0,
                368.0,
                339.0,
                351.0,
                448.0,
                469.0,
                494.0,
                494.0,
                523.0,
                544.0,
                549.0,
                605.0,
                569.0,
                480.0,
                508.0,
                593.0,
                680.0,
                642.0
              ],
              "borderColor": "#a1a1aa",
              "backgroundColor": "rgba(161,161,170,0.06)"
            },
            {
              "label": "Net Migration (000s)",
              "data": [
                -60.0,
                -78.0,
                -82.0,
                -84.0,
                -56.0,
                -87.0,
                -65.0,
                -40.0,
                -11.0,
                -50.0,
                -85.0,
                -41.0,
                -19.0,
                -46.0,
                -5.0,
                6.0,
                -55.0,
                -79.0,
                -56.0,
                17.0,
                37.0,
                58.0,
                37.0,
                2.0,
                -21.0,
                44.0,
                36.0,
                44.0,
                -13.0,
                -1.0,
                77.0,
                76.0,
                55.0,
                48.0,
                140.0,
                163.0,
                158.0,
                179.0,
                172.0,
                185.0,
                268.0,
                267.0,
                265.0,
                273.0,
                229.0,
                229.0,
                256.0,
                205.0,
                195.0,
                244.0,
                284.0,
                303.0,
                249.0,
                208.0,
                276.0,
                184.0,
                93.0,
                467.0,
                891.0,
                848.0,
                331.0,
                171.0
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.14)"
            }
          ]
        },
        "definition": {
          "metric": "Long-term Inflows, Outflows, and Net Migration (Inflows minus Outflows) in thousands of people intending to stay or leave for 12+ months.",
          "scope": "UK-wide, 1964–2025 (spliced IPS 1964–1990, LTIM 1991–2011, Admin-Based 2012–2025).",
          "nuance": "Net Migration includes people leaving when visas expire or after study/work; methodological breaks occur in 1991 and 2012."
        }
      },
      {
        "headline": "As a share of total UK population, net migration peaked at 1.32% in 2022 — roughly triple the 2004–2019 average (~0.3%–0.5%).",
        "footnote": "*Net Migration divided by ONS mid-year UK population estimate (UKPOP, 1971–2025). Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop\" target=\"_blank\" rel=\"noopener\">ONS UK Population Mid-Year Estimates (UKPOP)</a>",
        "chart": {
          "type": "line",
          "title": "UK Net Migration as % of Total UK Population (1971–2025)",
          "labels": [
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
          "y_title": "% of UK Population",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Net Migration (% of UK Pop)",
              "data": [
                -0.07,
                -0.02,
                -0.09,
                -0.15,
                -0.07,
                -0.03,
                -0.08,
                -0.01,
                0.01,
                -0.1,
                -0.14,
                -0.1,
                0.03,
                0.07,
                0.1,
                0.07,
                0.0,
                -0.04,
                0.08,
                0.06,
                0.08,
                -0.02,
                -0.0,
                0.13,
                0.13,
                0.1,
                0.08,
                0.24,
                0.28,
                0.27,
                0.3,
                0.29,
                0.31,
                0.45,
                0.44,
                0.44,
                0.45,
                0.37,
                0.37,
                0.41,
                0.32,
                0.31,
                0.38,
                0.44,
                0.47,
                0.38,
                0.32,
                0.42,
                0.28,
                0.14,
                0.7,
                1.32,
                1.24,
                0.48,
                0.25
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.14)"
            }
          ]
        },
        "definition": {
          "metric": "Annual Net Migration divided by ONS mid-year UK population estimate (UKPOP) × 100.",
          "scope": "UK-wide, 1971–2025 (earliest year of UKPOP CSV).",
          "nuance": "Expresses annual net additions relative to the resident population base (~55.9M in 1971 to ~69.5M in 2025)."
        }
      },
      {
        "headline": "Population stock test ('on visa', not expired or settled): active valid-leave holders reached 4.28M (6.16% of UK population) by end-2025, up from 2.34% in 2019 — plateauing even as annual net flows fell.",
        "footnote": "*Stock = people with Valid Leave to Remain (excluding ILR &amp; EUSS Pre-Settled Status) at year-end across 2008+ cohorts (Home Office Data_MJ_D01), divided by ONS UKPOP. 2013–2025 shown so pre-2008 cohorts have rolled off. Note: valid leave does not guarantee physical presence if an individual departed early. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop\" target=\"_blank\" rel=\"noopener\">ONS UK Population Mid-Year Estimates (UKPOP)</a>",
        "chart": {
          "type": "line",
          "title": "People Currently 'On Visa' (Valid Leave Stock) as % of Total UK Population (2013–2025)",
          "labels": [
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
          "y_title": "% of UK Population",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "All Active Valid-Leave Holders (% of UK Pop)",
              "data": [
                1.81,
                1.83,
                1.87,
                1.92,
                2.02,
                2.15,
                2.34,
                2.34,
                2.95,
                4.38,
                5.68,
                6.13,
                6.16
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.14)"
            },
            {
              "label": "Work Route Stock (% of UK Pop)",
              "data": [
                0.62,
                0.62,
                0.63,
                0.64,
                0.66,
                0.7,
                0.75,
                0.72,
                0.9,
                1.47,
                2.38,
                2.78,
                2.7
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.10)"
            },
            {
              "label": "Study Route Stock (% of UK Pop)",
              "data": [
                0.83,
                0.82,
                0.78,
                0.76,
                0.77,
                0.8,
                0.86,
                0.85,
                1.08,
                1.49,
                1.66,
                1.4,
                1.26
              ],
              "borderColor": "#818cf8",
              "backgroundColor": "rgba(129,140,248,0.10)"
            }
          ]
        },
        "definition": {
          "metric": "Annual Net Migration divided by ONS mid-year UK population estimate (UKPOP) × 100.",
          "scope": "UK-wide, 1971–2025 (earliest year of UKPOP CSV).",
          "nuance": "Expresses annual net additions relative to the resident population base (~55.9M in 1971 to ~69.5M in 2025)."
        }
      },
      {
        "headline": "Post-2021 net migration was driven overwhelmingly by non-EU+ arrivals (net = inflows minus departures) as EU+ net migration turned negative.",
        "footnote": "*Net migration = Inflows minus Outflows (incl. expiring visas & departing students/workers). Non-EU+ outflows tripled from 88k (2021) to 278k (2025). Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a>",
        "chart": {
          "type": "bar",
          "title": "UK Net Migration by Nationality Group (YE Dec, 000s · 2012–2025)",
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
          "y_title": "Net Thousands",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Non-EU+",
              "data": [
                61.0,
                63.0,
                87.0,
                88.0,
                90.0,
                114.0,
                178.0,
                186.0,
                101.0,
                522.0,
                981.0,
                1005.0,
                511.0,
                350.0
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "EU+",
              "data": [
                206.0,
                262.0,
                277.0,
                287.0,
                253.0,
                176.0,
                170.0,
                80.0,
                70.0,
                15.0,
                -9.0,
                -53.0,
                -63.0,
                -42.0
              ],
              "backgroundColor": "#a855f7"
            },
            {
              "label": "British",
              "data": [
                -72.0,
                -81.0,
                -80.0,
                -73.0,
                -94.0,
                -81.0,
                -72.0,
                -82.0,
                -78.0,
                -69.0,
                -81.0,
                -104.0,
                -117.0,
                -136.0
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "Net migration (inflows minus outflows) split into British, EU+, and Non-EU+ citizenships (000s).",
          "scope": "UK-wide, Year Ending December 2012–2025 (ONS Admin-Based series).",
          "nuance": "Admin-based series starts in mid-2012; EU+ net migration turned negative after Brexit/COVID."
        }
      },
      {
        "headline": "What drove the 2020–2021 break: Study, Health & Care (Feb 2022), and Humanitarian schemes (Ukraine / BN(O)) drove the step-change over 2019.",
        "footnote": "*Issued non-visit entry-clearance visas comparing 2019, 2021, 2022, 2023, and 2025. Four drivers: Jan 2021 PBS (RQF 6->3), Feb 2022 Care expansion, Jul 2021 Graduate Route, and 2021–22 BN(O)/Ukraine schemes (468.2k visas). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Anatomy of the Post-2020 Surge: Pre-COVID (2019) vs 2021–2025 (000s)",
          "labels": [
            "2019",
            "2021",
            "2022",
            "2023",
            "2025"
          ],
          "y_title": "Visas Issued (000s)",
          "datasets": [
            {
              "label": "Health & Care",
              "data": [
                0.0,
                63.3,
                157.6,
                348.2,
                48.5
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Other Work",
              "data": [
                192.6,
                175.9,
                263.9,
                265.5,
                211.9
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Study",
              "data": [
                404.4,
                435.1,
                623.7,
                604.3,
                427.3
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Humanitarian (Ukraine/BN(O)/Afghan)",
              "data": [
                0.0,
                75.6,
                263.4,
                68.5,
                23.8
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Family",
              "data": [
                55.6,
                42.2,
                47.1,
                80.1,
                66.0
              ],
              "backgroundColor": "#f59e0b"
            }
          ]
        },
        "definition": {
          "metric": "Issued non-visit visas decomposed into Health & Care, Other Work, Study, Humanitarian (Ukraine/BN(O)/Afghan), and Family.",
          "scope": "UK-wide, comparing 2019 pre-COVID baseline against 2021, 2022, 2023, and 2025.",
          "nuance": "Humanitarian routes sit inside Home Office 'Other' in Data_Vis_D02 and are extracted directly by subgroup."
        }
      }
    ]
  },
  {
    "id": "ctx_routes",
    "section": "Part 1 · Overall Trends (Flow & Stock)",
    "ref": "1.2",
    "title": "Breakdown by Visa Categories (Annual Flows & Active 'On Visa' Stock)",
    "question": "Which legal visa categories drove entry-clearance grants across 2006–2025, and what were each category's year-on-year increments?",
    "charts": [
      {
        "headline": "Work and Study visas (including dependants) drove the overwhelming majority of post-2021 legal grants.",
        "footnote": "*Descriptive baseline: Issued entry-clearance visas excluding Visitor visas (main applicants + dependants, 000s). Hover for exact % share. Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "toggleable_type": true,
          "title": "Entry Clearance Visas Issued by Route (ex-Visitor, 000s · 2006–2025)",
          "labels": [
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
          "y_title": "Visas Issued (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Work",
              "data": [
                249.6,
                205.8,
                184.6,
                155.6,
                160.7,
                149.3,
                145.1,
                154.8,
                167.1,
                165.9,
                163.9,
                164.9,
                175.8,
                192.6,
                114.5,
                239.2,
                421.6,
                613.6,
                368.1,
                260.4
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Study",
              "data": [
                234.3,
                246.2,
                274.2,
                341.1,
                334.7,
                323.3,
                278.1,
                296.2,
                293.6,
                272.9,
                294.5,
                330.1,
                354.9,
                404.4,
                250.1,
                435.1,
                623.7,
                604.3,
                418.9,
                427.3
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Family",
              "data": [
                70.2,
                64.4,
                53.6,
                49.2,
                52.4,
                45.0,
                40.2,
                33.1,
                34.9,
                37.7,
                37.8,
                40.1,
                43.6,
                55.6,
                37.1,
                42.2,
                47.1,
                80.1,
                85.2,
                66.0
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Humanitarian",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                75.6,
                263.4,
                68.5,
                37.0,
                23.8
              ],
              "backgroundColor": "#f59e0b"
            }
          ]
        },
        "definition": {
          "metric": "Out-of-country entry-clearance visas issued (ex-Visitor), covering both main applicants and dependants.",
          "scope": "UK-wide, 2006–2025 (Home Office Data_Vis_D02).",
          "nuance": "Visas issued are gross inflows of permissions; not every visa holder stays long-term or arrives immediately."
        }
      },
      {
        "headline": "In percentage terms, Study dominated 2009–2021 before Work expanded to roughly half of all non-visit grants in 2023–2024.",
        "footnote": "*100% stacked share of issued non-visit entry-clearance visas by route (main + dependants, 2006–2025). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "y_min": 0,
          "y_max": 100,
          "title": "Entry Clearance Visa Mix by Route (% Share · 2006–2025)",
          "labels": [
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
          "y_title": "Share of Non-Visit Grants (%)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Work (%)",
              "data": [
                45.0,
                39.9,
                36.0,
                28.5,
                29.3,
                28.8,
                31.3,
                32.0,
                33.7,
                34.8,
                33.0,
                30.8,
                30.6,
                29.5,
                28.5,
                30.2,
                31.1,
                44.9,
                40.5,
                33.5
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Study (%)",
              "data": [
                42.3,
                47.7,
                53.5,
                62.5,
                61.1,
                62.5,
                60.0,
                61.2,
                59.2,
                57.3,
                59.4,
                61.7,
                61.8,
                62.0,
                62.3,
                54.9,
                46.0,
                44.2,
                46.1,
                55.0
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Family (%)",
              "data": [
                12.7,
                12.5,
                10.5,
                9.0,
                9.6,
                8.7,
                8.7,
                6.8,
                7.0,
                7.9,
                7.6,
                7.5,
                7.6,
                8.5,
                9.2,
                5.3,
                3.5,
                5.9,
                9.4,
                8.5
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Humanitarian (%)",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                9.5,
                19.4,
                5.0,
                4.1,
                3.1
              ],
              "backgroundColor": "#f59e0b"
            }
          ]
        }
      },
      {
        "headline": "Total 'on visa' stock (not expired or settled): 4.28M people held valid leave at end-2025 — led by Work (1.88M), Study (874k), Safe &amp; Legal (432k), and Dependants Joining (402k).",
        "footnote": "*Cumulative year-end stock of people holding Valid Leave to Remain (excl. ILR &amp; EUSS Pre-Settled Status) across 2008+ cohorts, grouped by current end-of-year leave type (Home Office Data_MJ_D01, 2013–2025). Hover for exact % share. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "toggleable_type": true,
          "title": "Active 'On Visa' Stock by Current Visa Type (Valid Leave excl. ILR, 000s · 2013–2025)",
          "labels": [
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
          "y_title": "Active Visa Holders (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Work",
              "data": [
                400.4,
                400.2,
                412.0,
                421.0,
                435.4,
                465.2,
                496.8,
                479.0,
                605.8,
                997.8,
                1634.2,
                1923.2,
                1876.3
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Study",
              "data": [
                533.8,
                531.6,
                510.3,
                495.5,
                506.3,
                528.3,
                573.6,
                568.9,
                723.7,
                1011.8,
                1139.8,
                972.9,
                874.3
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Safe & Legal (Ukraine / BN(O))",
              "data": [
                0.0,
                0.0,
                0.0,
                2.6,
                1.9,
                0.7,
                0.5,
                0.4,
                91.5,
                363.9,
                447.9,
                491.7,
                431.9
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Dependants Joining / Accompanying",
              "data": [
                29.9,
                28.5,
                27.6,
                26.0,
                24.5,
                20.8,
                21.4,
                20.2,
                20.6,
                21.0,
                54.9,
                198.2,
                402.3
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "Family",
              "data": [
                101.7,
                111.8,
                135.4,
                168.5,
                204.8,
                237.4,
                273.2,
                284.8,
                286.5,
                293.9,
                332.2,
                360.4,
                312.3
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Asylum",
              "data": [
                75.9,
                85.6,
                93.7,
                101.8,
                108.7,
                116.8,
                134.0,
                140.6,
                174.3,
                209.9,
                233.7,
                251.4,
                268.2
              ],
              "backgroundColor": "#a855f7"
            },
            {
              "label": "Other / EEA",
              "data": [
                22.0,
                27.8,
                35.7,
                41.3,
                49.9,
                55.2,
                61.2,
                68.6,
                73.0,
                62.8,
                54.8,
                49.0,
                113.0
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "Cumulative year-end Valid Leave stock (excl. ILR) grouped by current end-of-year leave category (000s).",
          "scope": "UK-wide, 2013–2025 (2008+ cohorts, Home Office Data_MJ_D01).",
          "nuance": "Reflects current leave category after any in-country switches (e.g. Study → Graduate/Skilled Worker), not initial entry visa."
        }
      },
      {
        "headline": "Stock by applicant type: 66.1% of end-2025 valid-leave holders are Main Applicants vs 26.6% Dependants (plus 7.3% Family/Asylum).",
        "footnote": "*Active Valid Leave stock split by Applicant Type in Home Office Data_MJ_D01 (2013–2025). 'Unclassified / All' covers Family &amp; Asylum records where Main/Dependant is not separated. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Active 'On Visa' Stock by Applicant Type: Main Applicants vs Dependants (000s · 2013–2025)",
          "labels": [
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
          "y_title": "Active Visa Holders (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Main Applicants",
              "data": [
                852.7,
                859.7,
                872.1,
                887.5,
                922.6,
                975.3,
                1063.8,
                1052.1,
                1348.9,
                2062.0,
                2591.0,
                2811.4,
                2829.1
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Dependants",
              "data": [
                226.0,
                235.5,
                235.3,
                235.6,
                243.7,
                256.5,
                274.8,
                279.7,
                384.4,
                660.6,
                1033.1,
                1138.3,
                1136.1
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "Unclassified / All (Family & Asylum)",
              "data": [
                85.0,
                90.3,
                107.2,
                133.6,
                165.3,
                192.6,
                222.2,
                230.7,
                242.1,
                238.5,
                273.4,
                297.2,
                313.0
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "Issued Work and Study entry-clearance visas split by Main Applicant vs Dependant (000s).",
          "scope": "UK-wide, 2006–2025 (Home Office Data_Vis_D02).",
          "nuance": "Captures the 2022–2023 dependant surge and the post-2024 contraction after dependant bans."
        }
      },
      {
        "headline": "End-2025 stock by detailed route &amp; age: 3.45M (80.6%) are working-age (18–69) led by Skilled Worker (890k) and Study (874k), while 815.3k (19.1%) are under 18.",
        "footnote": "*Top 12 detailed sub-routes holding Valid Leave to Remain (excl. ILR) at end-2025 (Home Office Migrant Journey Table MJ_07), stacked by age at initial grant. Hover for exact % share. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "End-2025 Active 'On Visa' Stock by Detailed Route & Age Band (Working-Age 18–69 vs Under-18, 000s)",
          "labels": [
            "Skilled Worker",
            "Study",
            "Dependants joining or accompanying",
            "Health and Care Worker",
            "Graduate",
            "Partner",
            "Ukraine schemes",
            "BN(O) route",
            "Refugee and protection based leave",
            "Worker (Other)",
            "Other Asylum",
            "Other"
          ],
          "y_title": "Active Visa Holders (000s)",
          "datasets": [
            {
              "label": "Working Age (18–69)",
              "data": [
                767.8,
                782.9,
                234.5,
                229.8,
                309.9,
                206.8,
                153.5,
                137.9,
                120.5,
                86.0,
                71.4,
                75.5
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Under 18",
              "data": [
                121.8,
                91.4,
                167.7,
                120.4,
                8.5,
                5.9,
                53.4,
                55.5,
                42.8,
                44.1,
                17.4,
                13.7
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "70+ / Unknown",
              "data": [
                0.1,
                0.0,
                0.0,
                0.0,
                0.0,
                0.7,
                5.9,
                5.0,
                0.8,
                0.0,
                1.2,
                0.2
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "Top 12 detailed sub-routes holding Valid Leave (excl. ILR) at end-2025, stacked by Working Age (18–69), Under 18, and 70+/Unknown (000s).",
          "scope": "UK-wide, end-2025 (2008+ cohorts, Home Office Migrant Journey Table MJ_07).",
          "nuance": "Note 14: age is recorded at initial grant (or asylum claim), not current age at end-2025; excludes EUSS Pre-Settled Status."
        }
      },
      {
        "headline": "Health & Care: carved out of Tier 2 in Aug 2020 (blue), surged +149% YoY in 2022 and +121% YoY in 2023 after Care Workers became eligible (green), then fell after 2024 curbs (amber).",
        "footnote": "*Bar colours denote route regime: Slate (2018–19, pre-route in Tier 2 General) | Blue (2020–21, Aug 2020 NHS clinical carve-out) | Green (2022–23, Feb 2022 Care Worker expansion) | Amber (2024–25, post-Mar 2024 dependant ban). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Category 1 · Health & Care Visas: Volume (000s) & YoY % Change (2018–2025)",
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
          "y_title": "Visas Issued (000s)",
          "y1_title": "YoY % Change",
          "y1_suffix": "%",
          "macro_events": [
            {
              "label": "2020",
              "text": "Aug 2020 Route",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Feb 2022 Care",
              "color": "#10b981"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#f59e0b"
            }
          ],
          "datasets": [
            {
              "label": "Health & Care (000s)",
              "data": [
                0.0,
                0.0,
                1.2,
                63.3,
                157.6,
                348.2,
                110.5,
                48.5
              ],
              "backgroundColor": [
                "#64748b",
                "#64748b",
                "#38bdf8",
                "#38bdf8",
                "#10b981",
                "#10b981",
                "#f59e0b",
                "#f59e0b"
              ],
              "yAxisID": "y"
            },
            {
              "label": "YoY Change (%)",
              "type": "line",
              "data": [
                null,
                null,
                null,
                null,
                149.0,
                120.9,
                -68.3,
                -56.1
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "Issued Health & Care Worker visas (main + dependants, 000s) and YoY % change on the right axis.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Vis_D02).",
          "nuance": "Doctors and nurses entered under Tier 2 General before Aug 2020; Feb 2022 added Care Workers (SOC 6145)."
        }
      },
      {
        "headline": "Other Work: transitioned from Tier 2 General (slate, incl. NHS clinical) to RQF 3+ Skilled Worker (blue, H&C carved out), before £38.7k threshold curbs in 2024 (amber).",
        "footnote": "*Bar colours denote route regime: Slate (2018–20, Tier 2 General) | Blue (2021–23, Skilled Worker RQF 3+) | Amber (2024–25, £38.7k salary floor). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Category 2 · Other Work Visas: Volume (000s) & YoY % Change (2018–2025)",
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
          "y_title": "Visas Issued (000s)",
          "y1_title": "YoY % Change",
          "y1_suffix": "%",
          "macro_events": [
            {
              "label": "2020",
              "text": "H&C Carved Out",
              "color": "#a1a1aa"
            },
            {
              "label": "2021",
              "text": "RQF 6->3",
              "color": "#38bdf8"
            },
            {
              "label": "2024",
              "text": "£38.7k Floor",
              "color": "#f59e0b"
            }
          ],
          "datasets": [
            {
              "label": "Other Work (000s)",
              "data": [
                175.8,
                192.6,
                113.3,
                175.9,
                263.9,
                265.5,
                257.7,
                211.9
              ],
              "backgroundColor": [
                "#64748b",
                "#64748b",
                "#64748b",
                "#38bdf8",
                "#38bdf8",
                "#38bdf8",
                "#f59e0b",
                "#f59e0b"
              ],
              "yAxisID": "y"
            },
            {
              "label": "YoY Change (%)",
              "type": "line",
              "data": [
                null,
                9.6,
                -41.2,
                55.3,
                50.0,
                0.6,
                -2.9,
                -17.8
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "All issued Work visas excluding Health & Care (000s) and YoY % change on the right axis.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Vis_D02).",
          "nuance": "Reflects the Jan 2021 transition from Tier 2 (RQF 6+) to Skilled Worker (RQF 3+) with Health & Care carved out."
        }
      },
      {
        "headline": "Study: dipped in 2020 COVID, rebounded +74% in 2021 and +37% in 2022, then cooled after the Jan 2024 dependant ban.",
        "footnote": "*All issued Study visas (main applicants + dependants + short-term study). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Category 3 · Study Visas: Volume (000s) & YoY % Change (2018–2025)",
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
          "y_title": "Visas Issued (000s)",
          "y1_title": "YoY % Change",
          "y1_suffix": "%",
          "datasets": [
            {
              "label": "Study Visas (000s)",
              "data": [
                354.9,
                404.4,
                250.1,
                435.1,
                623.7,
                604.3,
                418.9,
                427.3
              ],
              "backgroundColor": "rgba(129,140,248,0.75)",
              "yAxisID": "y"
            },
            {
              "label": "YoY Change (%)",
              "type": "line",
              "data": [
                null,
                13.9,
                -38.2,
                74.0,
                43.3,
                -3.1,
                -30.7,
                2.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "All issued Study visas (main applicants + dependants + short-term study, 000s) and YoY % change.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Vis_D02).",
          "nuance": "Jan 2024 rules removed dependant rights for most taught Postgraduate students."
        }
      },
      {
        "headline": "Humanitarian: spiked to 75.6k in 2021 (HK BN(O)) and 263.4k in 2022 (Ukraine War), then tapered sharply from 2023–2025.",
        "footnote": "*Issued Ukraine Sponsorship, Ukraine Family, BN(O), and Afghan scheme visas (classified under Home Office 'Other'). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Category 4 · Humanitarian Visas (Ukraine & BN(O)): Volume (000s) & YoY % Change (2018–2025)",
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
          "y_title": "Visas Issued (000s)",
          "y1_title": "YoY % Change",
          "y1_suffix": "%",
          "datasets": [
            {
              "label": "Humanitarian (000s)",
              "data": [
                0.0,
                0.0,
                0.0,
                75.6,
                263.4,
                68.5,
                37.0,
                23.8
              ],
              "backgroundColor": "rgba(239,68,68,0.75)",
              "yAxisID": "y"
            },
            {
              "label": "YoY Change (%)",
              "type": "line",
              "data": [
                null,
                null,
                null,
                null,
                248.4,
                -74.0,
                -46.0,
                -35.7
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "Issued Ukraine Sponsorship, Ukraine Family, BN(O), and Afghan visas (000s) and YoY % change.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Vis_D02 subgroups).",
          "nuance": "Extracted from Home Office 'Other' visa group; 2021 reflects BN(O) launch and 2022 reflects Ukraine schemes."
        }
      },
      {
        "headline": "Family: remained relatively stable around 40k–85k per year, with a modest 2023–2024 bump before the £29,000 threshold rise.",
        "footnote": "*Issued Family visas (Partner, Child, Adult Dependant, and Refugee Family Reunion). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Category 5 · Family Visas: Volume (000s) & YoY % Change (2018–2025)",
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
          "y_title": "Visas Issued (000s)",
          "y1_title": "YoY % Change",
          "y1_suffix": "%",
          "datasets": [
            {
              "label": "Family Visas (000s)",
              "data": [
                43.6,
                55.6,
                37.1,
                42.2,
                47.1,
                80.1,
                85.2,
                66.0
              ],
              "backgroundColor": "rgba(245,158,11,0.75)",
              "yAxisID": "y"
            },
            {
              "label": "YoY Change (%)",
              "type": "line",
              "data": [
                null,
                27.5,
                -33.3,
                13.7,
                11.6,
                70.1,
                6.4,
                -22.5
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "Issued Family visas (Partner, Child, Adult Dependant, Refugee Family Reunion, 000s) and YoY % change.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Vis_D02).",
          "nuance": "Minimum income threshold rose from £18,600 to £29,000 in April 2024."
        }
      }
    ]
  },
  {
    "id": "hyp_illegal",
    "section": "Part 2 · Are They Causing Crime? (Legality & Custody)",
    "ref": "2.1",
    "title": "Are They Here Legally? Asylum, Small Boats, Returns & Undocumented Estimates",
    "question": "How did asylum claims, small boats, all-route irregular detections, returns, and total undocumented resident estimates evolve?",
    "charts": [
      {
        "headline": "Asylum claims climbed above 100,000 in 2024–2025 after staying under 40,000 for most of 2006–2020.",
        "footnote": "*Annual asylum claims (all applicants, 2006–2025) vs detected small-boat Channel arrivals (tracked from 2018; strictly null pre-2018). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum & Returns Datasets (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Total Asylum Claims vs Small-Boat Arrivals (000s · 2006–2025)",
          "labels": [
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
          "y_title": "Thousands",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Total Asylum Claims",
              "data": [
                28.3,
                28.3,
                31.3,
                30.7,
                22.6,
                25.9,
                28.0,
                29.9,
                32.3,
                40.0,
                39.4,
                34.4,
                38.5,
                45.5,
                37.6,
                57.9,
                95.0,
                87.4,
                104.8,
                101.9
              ],
              "backgroundColor": "#a855f7"
            },
            {
              "label": "Small-Boat Arrivals (2018+)",
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
                0.3,
                1.8,
                8.5,
                28.5,
                45.8,
                29.4,
                36.8,
                41.5
              ],
              "backgroundColor": "#ef4444"
            }
          ]
        },
        "definition": {
          "metric": "Annual asylum claims (all applicants, 2006–2025) vs detected small-boat Channel arrivals (2018–2025).",
          "scope": "UK-wide (Home Office Data_Asy_D01 & Data_IER_D01).",
          "nuance": "Small-boat detections are strictly null before 2018 when systematic tracking began."
        }
      },
      {
        "headline": "All-route irregular detections: before 2020, lorries ('In UK') and inadequately documented air arrivals dominated; after 2019, smugglers shifted to small boats.",
        "footnote": "*All detected irregular entries from Home Office Data_IER_D01 (2018–2025). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum & Returns Datasets (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Detected Irregular Entries by ALL Routes (2018–2025, 000s)",
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
          "y_title": "Detections (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Small Boat Arrivals",
              "data": [
                0.3,
                1.8,
                8.5,
                28.5,
                45.8,
                29.4,
                36.8,
                41.5
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "In-UK Clandestine / Lorry Detections",
              "data": [
                7.3,
                8.5,
                5.4,
                5.0,
                3.4,
                2.8,
                2.9,
                1.8
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "Inadequately Documented Air Arrivals",
              "data": [
                4.8,
                5.2,
                2.3,
                2.6,
                5.1,
                3.9,
                3.3,
                3.0
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "UK Port Detections",
              "data": [
                1.1,
                1.0,
                0.8,
                0.7,
                0.3,
                0.2,
                0.2,
                0.2
              ],
              "backgroundColor": "#a855f7"
            }
          ]
        },
        "definition": {
          "metric": "All detected irregular entries across Small Boats, In-UK/Lorry detections, Inadequately Documented Air, and UK Ports (000s).",
          "scope": "UK-wide, 2018–2025 (Home Office Data_IER_D01).",
          "nuance": "Shows the 2019–2020 route substitution from clandestine lorries to Channel small boats."
        }
      },
      {
        "headline": "Total returns fell sharply from ~60k in 2006–2008 while the pending initial-decision backlog ballooned after 2019.",
        "footnote": "*Cases pending initial decision as at 31 December (tracked from 2010) vs annual enforced + voluntary returns (000s · 2006–2025). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum & Returns Datasets (Jun 2026)</a>",
        "chart": {
          "type": "line",
          "title": "Asylum Pending Initial-Decision Backlog vs Total Returns (000s · 2006–2025)",
          "labels": [
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
          "y_title": "Thousands",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Pending Initial Decision (2010+)",
              "data": [
                null,
                null,
                null,
                null,
                7.2,
                8.9,
                12.8,
                18.2,
                22.9,
                22.1,
                27.9,
                29.5,
                35.9,
                51.2,
                64.9,
                100.6,
                160.9,
                128.8,
                124.8,
                64.4
              ],
              "borderColor": "#f59e0b",
              "backgroundColor": "rgba(245,158,11,0.12)"
            },
            {
              "label": "Enforced + Voluntary Returns",
              "data": [
                32.0,
                34.3,
                37.8,
                42.3,
                45.7,
                44.7,
                46.1,
                46.5,
                41.4,
                43.1,
                40.4,
                32.7,
                24.9,
                19.8,
                8.4,
                10.1,
                14.8,
                26.8,
                35.0,
                39.7
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.12)"
            }
          ]
        },
        "definition": {
          "metric": "Asylum cases pending initial decision at 31 Dec (2010–2025) vs enforced + voluntary returns (2006–2025).",
          "scope": "UK-wide (Home Office Data_Asy_D03 & Data_Ret_D01).",
          "nuance": "Shows the structural divergence between falling returns and a rising decision backlog after 2019."
        }
      },
      {
        "headline": "Published UK undocumented resident stock estimates range from 430k (2001 Home Office) to 674k (2017 GLA) and 1.0M (2017 Pew incl. pending asylum).",
        "footnote": "*Published UK undocumented resident stock studies (000s). No official ONS annual count exists; Pew (2019) includes pending asylum applicants. Source: <a href=\"https://migrationobservatory.ox.ac.uk/resources/briefings/unauthorised-migration-in-the-uk/\" target=\"_blank\" rel=\"noopener\">Migration Observatory / Home Office / LSE / GLA / Pew Undocumented Estimates</a>",
        "chart": {
          "type": "bar",
          "title": "Estimated Undocumented Resident Population in the UK (Published Studies 2001–2017, 000s)",
          "labels": [
            "Home Office (Woodbridge 2005)",
            "LSE (Gordon et al. 2009)",
            "GLA / Wolverhampton (Jolly et al. 2020)",
            "Pew Research Center (2019)"
          ],
          "y_title": "Estimated Residents (000s)",
          "datasets": [
            {
              "label": "Low Estimate (000s)",
              "data": [
                310,
                417,
                594,
                800
              ],
              "backgroundColor": "#64748b"
            },
            {
              "label": "Central Estimate (000s)",
              "data": [
                430,
                618,
                674,
                1000
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "High Estimate (000s)",
              "data": [
                570,
                863,
                745,
                1200
              ],
              "backgroundColor": "#ef4444"
            }
          ]
        },
        "definition": {
          "metric": "Published academic and official residual estimates of the UK undocumented resident stock (Low / Central / High, 000s).",
          "scope": "UK-wide studies covering 2001–2017.",
          "nuance": "No official ONS annual count exists; Pew (2019) includes pending asylum applicants unlike GLA/LSE."
        }
      }
    ]
  },
  {
    "id": "hyp_crime",
    "section": "Part 2 · Are They Causing Crime? (Legality & Custody)",
    "ref": "2.2",
    "title": "Are They Shifting Crime & Custody Rates? (Prison & Police Arrests)",
    "question": "How have foreign-national, ethnic, and religious prison custody shares and police arrest rates evolved compared with resident population shifts?",
    "context_note": "<strong>Data Boundaries:</strong> Crime is tested across both <strong>Custody (MoJ Prison 2015–2026)</strong> and <strong>Petty/All Offences (Home Office Police Arrests per 1,000)</strong>. Raw shares are unadjusted for age and sex (prison is ~96% male and heavily 18–39), and MoJ/Home Office do not publish crime rates by visa route.",
    "charts": [
      {
        "headline": "Prison population by religion (MoJ 2015–2026): Muslim share rose from ~14.6% to ~18.8% while Christian share declined from ~50% to ~43%.",
        "footnote": "*MoJ Annual Prison Population as at 30 June (2015–2026, Table 1.A.23). Unadjusted for age/sex. Source: <a href=\"https://www.gov.uk/government/collections/offender-management-statistics-quarterly\" target=\"_blank\" rel=\"noopener\">MoJ Offender Management Statistics Quarterly (Sep 2026)</a>",
        "chart": {
          "type": "line",
          "title": "Prison Population by Religion Over Time (MoJ 2015–2026, %)",
          "labels": [
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
            "2025",
            "2026"
          ],
          "y_title": "% of Prison Population",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Christian (All, %)",
              "data": [
                49.5,
                48.9,
                48.0,
                47.8,
                47.5,
                46.5,
                45.0,
                45.0,
                44.5,
                44.4,
                43.1,
                43.4
              ],
              "borderColor": "#38bdf8"
            },
            {
              "label": "No Religion (%)",
              "data": [
                30.3,
                30.5,
                30.6,
                30.5,
                30.1,
                30.2,
                31.2,
                31.2,
                31.1,
                30.7,
                30.3,
                29.5
              ],
              "borderColor": "#a1a1aa"
            },
            {
              "label": "Muslim (%)",
              "data": [
                14.6,
                14.8,
                15.4,
                15.6,
                16.1,
                16.6,
                17.5,
                17.4,
                17.8,
                18.2,
                18.4,
                18.8
              ],
              "borderColor": "#10b981"
            },
            {
              "label": "Hindu / Sikh / Other (%)",
              "data": [
                5.2,
                5.4,
                5.6,
                5.8,
                6.0,
                6.2,
                5.9,
                6.1,
                6.2,
                6.4,
                7.9,
                8.1
              ],
              "borderColor": "#f59e0b"
            }
          ]
        },
        "definition": {
          "metric": "MoJ prison population share by ethnicity (30 Sept 2026, Table 1.Q.7) vs Census 2021 E&W resident share (%).",
          "scope": "England & Wales custody & resident population.",
          "nuance": "Raw shares are unadjusted for age/sex structure; MoJ does not publish crime rates by visa route."
        }
      },
      {
        "headline": "MoJ Prison Population (Sep 2026): Foreign Nationals are 11.6% of prisoners; Black & Mixed shares exceed Census population shares (unadjusted for age/sex).",
        "footnote": "*MoJ Offender Management Statistics (30 Sept 2026, Table 1.Q.7 & 1.Q.9) vs ONS Census 2021 E&W population share. Source: <a href=\"https://www.gov.uk/government/collections/offender-management-statistics-quarterly\" target=\"_blank\" rel=\"noopener\">MoJ Offender Management Statistics Quarterly (Sep 2026)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/bulletins/ethnicgroupenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Ethnic Group (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "England & Wales Prison Population vs Resident Population by Ethnicity (MoJ Sep 2026 vs Census 2021, %)",
          "labels": [
            "White",
            "Asian",
            "Black",
            "Mixed",
            "Other"
          ],
          "y_title": "Share (%)",
          "datasets": [
            {
              "label": "Prison Population (Sep 2026, %)",
              "data": [
                72.0,
                8.4,
                12.1,
                5.0,
                2.5
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "E&W Resident Population (Census 2021, %)",
              "data": [
                81.7,
                9.3,
                4.0,
                2.9,
                2.1
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "MoJ prison population share by ethnicity (30 Sept 2026, Table 1.Q.7) vs Census 2021 E&W resident share (%).",
          "scope": "England & Wales custody & resident population.",
          "nuance": "Raw shares are unadjusted for age/sex structure; MoJ does not publish crime rates by visa route."
        }
      },
      {
        "headline": "Prison demographics over time (2015–2026): Foreign-national share stayed steady near 11%–13% while minority ethnic shares edged gradually higher.",
        "footnote": "*MoJ Annual Prison Population as at 30 June (2015–2026, Tables 1.A.22 & 1.A.24). Unadjusted for age/sex. Source: <a href=\"https://www.gov.uk/government/collections/offender-management-statistics-quarterly\" target=\"_blank\" rel=\"noopener\">MoJ Offender Management Statistics Quarterly (Sep 2026)</a>",
        "chart": {
          "type": "line",
          "title": "Prison Population Over Time: Foreign Nationals & Minority Ethnic Shares (2015–2026, %)",
          "labels": [
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
            "2025",
            "2026"
          ],
          "y_title": "% of Prison Population",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Foreign Nationals (%)",
              "data": [
                12.2,
                11.6,
                11.4,
                11.0,
                11.0,
                11.7,
                12.5,
                12.0,
                12.0,
                11.9,
                12.3,
                11.8
              ],
              "borderColor": "#fbbf24",
              "borderWidth": 2.6
            },
            {
              "label": "Black / Black British (%)",
              "data": [
                12.5,
                12.4,
                12.5,
                12.7,
                12.8,
                13.0,
                12.9,
                12.6,
                12.3,
                12.2,
                11.9,
                12.1
              ],
              "borderColor": "#ef4444"
            },
            {
              "label": "Asian / Asian British (%)",
              "data": [
                8.2,
                8.1,
                8.2,
                8.1,
                8.1,
                8.0,
                8.3,
                8.2,
                8.0,
                8.3,
                8.0,
                8.5
              ],
              "borderColor": "#38bdf8"
            },
            {
              "label": "Mixed (%)",
              "data": [
                4.1,
                4.3,
                4.5,
                4.6,
                4.7,
                4.9,
                4.9,
                5.0,
                4.9,
                4.8,
                4.9,
                5.0
              ],
              "borderColor": "#10b981"
            },
            {
              "label": "Other Ethnic Group (%)",
              "data": [
                1.1,
                1.2,
                1.2,
                1.4,
                1.6,
                1.5,
                1.5,
                1.6,
                2.0,
                2.2,
                2.5,
                2.4
              ],
              "borderColor": "#a855f7"
            }
          ]
        },
        "definition": {
          "metric": "MoJ prison population share by ethnicity (30 Sept 2026, Table 1.Q.7) vs Census 2021 E&W resident share (%).",
          "scope": "England & Wales custody & resident population.",
          "nuance": "Raw shares are unadjusted for age/sex structure; MoJ does not publish crime rates by visa route."
        }
      },
      {
        "headline": "Petty & all notifiable offences (Home Office arrests per 1,000): Black arrest rates (~21–23 per 1,000) remain roughly 2.5x White & Asian rates (~8–9 per 1,000).",
        "footnote": "*Home Office Police Arrests per 1,000 population in England & Wales (2020/21–2022/23+). Covers petty & indictable arrests by ethnicity (not visa status; unadjusted for age/sex). Source: <a href=\"https://www.ethnicity-facts-figures.service.gov.uk/crime-justice-and-the-law/policing/number-of-arrests/latest\" target=\"_blank\" rel=\"noopener\">Home Office Police Arrests by Ethnicity (England & Wales)</a>",
        "chart": {
          "type": "line",
          "title": "Petty & All Offences: Police Arrest Rate per 1,000 People by Ethnicity (England & Wales)",
          "labels": [
            "2020/21",
            "2021/22",
            "2022/23"
          ],
          "y_title": "Arrests per 1,000 Residents",
          "datasets": [
            {
              "label": "Black",
              "data": [
                22.5,
                21.3,
                20.4
              ],
              "borderColor": "#ef4444"
            },
            {
              "label": "Mixed",
              "data": [
                11.8,
                11.7,
                12.5
              ],
              "borderColor": "#10b981"
            },
            {
              "label": "All Ethnicities",
              "data": [
                10.8,
                11.0,
                11.2
              ],
              "borderColor": "#fbbf24",
              "borderDash": [
                5,
                4
              ]
            },
            {
              "label": "White",
              "data": [
                8.6,
                8.9,
                9.4
              ],
              "borderColor": "#38bdf8"
            },
            {
              "label": "Asian",
              "data": [
                8.0,
                7.7,
                8.4
              ],
              "borderColor": "#a855f7"
            }
          ]
        },
        "definition": {
          "metric": "Home Office arrests per 1,000 residents by ethnic group across all notifiable offences (England & Wales).",
          "scope": "England & Wales police force areas, 2020/21–latest.",
          "nuance": "Covers petty and indictable arrests by ethnicity, not visa status, and is unadjusted for age/sex."
        }
      },
      {
        "headline": "Prison-to-population math is NOT parallel: Black (3.2x) and Muslim (2.7x) prison shares sit well above 1.0x parity, while White (0.89x), Asian (0.89x) and Christian (0.97x) sit below 1.0x (unadjusted for age/sex).",
        "footnote": "*2021 Parity Ratio = (Prison % in Jun 2021) ÷ (Census 2021 E&W Population %). Dashed yellow line = 1.00 (exact mathematical parity). Caveat: raw ratios are unadjusted for age and sex (prison is ~96% male and heavily 18–39; minority/Muslim populations are younger on average). Source: <a href=\"https://www.gov.uk/government/collections/offender-management-statistics-quarterly\" target=\"_blank\" rel=\"noopener\">MoJ Offender Management Statistics Quarterly (Sep 2026)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/bulletins/ethnicgroupenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Ethnic Group (England & Wales)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Religion (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "2021 Prison-to-Population Parity Ratio by Ethnicity & Religion (Prison % ÷ Pop % · 1.0 = Equal Rate)",
          "labels": [
            "Ethnicity: White",
            "Ethnicity: Asian",
            "Ethnicity: Black",
            "Ethnicity: Mixed",
            "Ethnicity: Other",
            "Religion: Christian",
            "Religion: No religion",
            "Religion: Muslim",
            "Religion: Hindu/Sikh/Other"
          ],
          "y_title": "Parity Ratio (Prison % ÷ Pop %)",
          "benchmark_line": {
            "value": 1.0,
            "color": "#facc15",
            "dash": [
              6,
              4
            ]
          },
          "datasets": [
            {
              "label": "2021 Parity Ratio (x)",
              "data": [
                0.89,
                0.89,
                3.23,
                1.69,
                0.71,
                0.97,
                0.84,
                2.69,
                1.4
              ],
              "backgroundColor": [
                "#38bdf8",
                "#38bdf8",
                "#ef4444",
                "#ef4444",
                "#38bdf8",
                "#38bdf8",
                "#38bdf8",
                "#ef4444",
                "#ef4444"
              ]
            }
          ]
        },
        "definition": {
          "metric": "MoJ Prison Population % (Jun 2021) divided by ONS Census 2021 E&W Population % (1.00 = equal rate across groups).",
          "scope": "England & Wales, 2021.",
          "nuance": "Raw ratios are unadjusted for age and sex (prison is ~96% male and heavily 18–39; minority/Muslim populations are younger on average)."
        }
      },
      {
        "headline": "Change over time is also non-parallel: Asian & Black prison shares barely moved (1.04x and 0.97x) despite ~1.2x population growth, whereas Muslim (1.29x vs 1.33x) and Mixed (1.22x vs 1.32x) tracked closer.",
        "footnote": "*Compares Census 2011→2021 population share multiplier against MoJ 2015→2026 prison share multiplier. Unadjusted for age/sex or in-custody religious conversions. Source: <a href=\"https://www.gov.uk/government/collections/offender-management-statistics-quarterly\" target=\"_blank\" rel=\"noopener\">MoJ Offender Management Statistics Quarterly (Sep 2026)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/bulletins/ethnicgroupenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Ethnic Group (England & Wales)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Religion (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "Did Prison Shares Move in Parallel with Population? (Pop Shift 2011→21 vs Prison Shift 2015→26, Multiplier)",
          "labels": [
            "Ethnicity: White",
            "Ethnicity: Asian",
            "Ethnicity: Black",
            "Ethnicity: Mixed",
            "Ethnicity: Other",
            "Religion: Christian",
            "Religion: No religion",
            "Religion: Muslim",
            "Religion: Hindu/Sikh/Other"
          ],
          "y_title": "Share Multiplier (x)",
          "benchmark_line": {
            "value": 1.0,
            "color": "#a1a1aa",
            "dash": [
              4,
              4
            ]
          },
          "datasets": [
            {
              "label": "Population Share Shift (2011→2021, x)",
              "data": [
                0.95,
                1.24,
                1.21,
                1.32,
                2.1,
                0.78,
                1.48,
                1.33,
                1.17
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Prison Share Shift (2015→2026, x)",
              "data": [
                0.97,
                1.04,
                0.97,
                1.22,
                2.18,
                0.88,
                0.97,
                1.29,
                1.56
              ],
              "backgroundColor": "#ef4444"
            }
          ]
        },
        "definition": {
          "metric": "Compares Census 2011→2021 population share multiplier against MoJ 2015→2026 prison share multiplier.",
          "scope": "England & Wales, 2011–2026.",
          "nuance": "Tests whether prison shares moved proportionally with resident population shifts; unadjusted for age/sex or in-custody conversions."
        }
      }
    ]
  },
  {
    "id": "ctx_macro",
    "section": "Part 3 · Are They Causing an Economic Problem?",
    "ref": "3.1",
    "title": "Workforce Replacement, Pay Ranges & Macro Context (GDP, CPI & Rents)",
    "question": "How did UK Net Migration, Real GDP, Real GDP per Capita, CPI/wages/rents, working-age (16–64) workforce share, and immigrant pay move over the longest available timelines?",
    "context_note": "<strong>Pure Macro POV — No Causal Link Assumed Yet:</strong> Each indicator extends as far back as official ONS/HMRC series allow (Real GDP 1948+, GDP/head 1955+, Net Migration 1964+, Working-Age 16–64 Employment 1971+, CPI 1989+, AWE 2001+, Rents 2006+, HMRC Pay 2014+). <strong>% of Working-Age (16–64) Workforce</strong> is plotted separately from % of total population because students, children, and non-working dependants/asylum seekers are not all immediate workforce additions.",
    "charts": [
      {
        "headline": "Full-history macro overlay (1948–2025): aggregate Real GDP climbed continuously since 1948 while Real GDP per Head flattened after 2021 during the migration spike.",
        "footnote": "*Left axis: ONS Real GDP (ABMI, 1948–2025) & Real GDP per Head (IHXW, 1955–2025) indexed to 2019 = 100. Right axis: spliced UK Net Migration (000s, 1964–2025). Descriptive context only. Source: <a href=\"https://www.ons.gov.uk/economy/grossdomesticproductgdp\" target=\"_blank\" rel=\"noopener\">ONS UK Economic Accounts (ABMI & IHXW)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a>",
        "chart": {
          "type": "line",
          "title": "Macro Overlay: UK Net Migration (000s), Real GDP & Real GDP per Capita (2019=100 · 1948–2025)",
          "labels": [
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
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "y_title": "Index (2019 = 100)",
          "y1_title": "Net Migration (000s)",
          "y1_suffix": "k",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Real GDP (ABMI, 2019=100 · 1948+)",
              "data": [
                16.8,
                17.3,
                17.9,
                18.6,
                18.9,
                19.9,
                20.8,
                21.6,
                22.0,
                22.4,
                22.7,
                23.7,
                25.2,
                25.8,
                26.1,
                27.4,
                28.9,
                29.6,
                30.0,
                30.9,
                32.5,
                33.2,
                34.1,
                35.3,
                36.8,
                39.2,
                38.2,
                37.6,
                38.8,
                39.7,
                41.4,
                42.9,
                42.1,
                41.8,
                42.7,
                44.4,
                45.4,
                47.3,
                48.8,
                51.4,
                54.2,
                55.5,
                55.9,
                55.1,
                55.2,
                56.5,
                58.4,
                59.8,
                61.4,
                64.4,
                66.5,
                68.4,
                71.5,
                73.2,
                74.5,
                76.9,
                78.7,
                80.8,
                82.6,
                85.1,
                85.1,
                81.3,
                83.2,
                84.1,
                85.5,
                87.1,
                89.9,
                91.9,
                93.9,
                97.0,
                98.6,
                100.0,
                90.0,
                97.6,
                102.5,
                103.0,
                104.1,
                105.4
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.10)",
              "yAxisID": "y"
            },
            {
              "label": "Real GDP per Head (IHXW, 2019=100 · 1955+)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                28.3,
                28.6,
                29.0,
                29.3,
                30.4,
                32.0,
                32.6,
                32.7,
                34.0,
                35.7,
                36.2,
                36.6,
                37.4,
                39.3,
                39.8,
                40.8,
                42.0,
                43.7,
                46.5,
                45.3,
                44.6,
                46.0,
                47.1,
                49.1,
                50.9,
                49.8,
                49.5,
                50.5,
                52.6,
                53.7,
                55.7,
                57.3,
                60.3,
                63.5,
                64.8,
                65.0,
                63.9,
                63.9,
                65.2,
                67.2,
                68.7,
                70.3,
                73.5,
                75.7,
                77.7,
                80.9,
                82.5,
                83.6,
                85.9,
                87.4,
                89.1,
                90.5,
                92.4,
                91.7,
                87.0,
                88.4,
                88.6,
                89.4,
                90.5,
                92.7,
                94.1,
                95.4,
                98.0,
                99.1,
                100.0,
                89.8,
                97.1,
                100.9,
                100.0,
                100.2,
                101.0
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.10)",
              "yAxisID": "y"
            },
            {
              "label": "UK Net Migration (000s, right axis · 1964+)",
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
                -60.0,
                -78.0,
                -82.0,
                -84.0,
                -56.0,
                -87.0,
                -65.0,
                -40.0,
                -11.0,
                -50.0,
                -85.0,
                -41.0,
                -19.0,
                -46.0,
                -5.0,
                6.0,
                -55.0,
                -79.0,
                -56.0,
                17.0,
                37.0,
                58.0,
                37.0,
                2.0,
                -21.0,
                44.0,
                36.0,
                44.0,
                -13.0,
                -1.0,
                77.0,
                76.0,
                55.0,
                48.0,
                140.0,
                163.0,
                158.0,
                179.0,
                172.0,
                185.0,
                268.0,
                267.0,
                265.0,
                273.0,
                229.0,
                229.0,
                256.0,
                205.0,
                195.0,
                244.0,
                284.0,
                303.0,
                249.0,
                208.0,
                276.0,
                184.0,
                93.0,
                467.0,
                891.0,
                848.0,
                331.0,
                171.0
              ],
              "borderColor": "#fbbf24",
              "borderDash": [
                5,
                4
              ],
              "yAxisID": "y1"
            }
          ]
        }
      },
      {
        "headline": "Macro confounders (1989–2025): CPI inflation peaked first in 2022 alongside the net migration surge, while rent growth kept rising into 2024 with nominal wage growth.",
        "footnote": "*Left axis: UK CPI (D7G7, 1989–2025), Whole Economy Wage Growth (KAC3, 2001–2025), and spliced England Private Rents (IPHRP/PIPR, 2006–2025). Right axis: UK Net Migration (000s, 1989–2025). Source: <a href=\"https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics\" target=\"_blank\" rel=\"noopener\">ONS Price Index of Private Rents (PIPR & IPHRP)</a> | <a href=\"https://www.ons.gov.uk/economy/inflationandpriceindices\" target=\"_blank\" rel=\"noopener\">ONS CPI (D7G7) & Average Weekly Earnings (KAC3)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a>",
        "chart": {
          "type": "line",
          "title": "Macro Confounders: England Rent Growth, UK CPI, Wage Growth & Net Migration (1989–2025)",
          "labels": [
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
          "y_title": "Annual Growth (%)",
          "y1_title": "Net Migration (000s)",
          "y1_suffix": "k",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "England Private Rents (% · 2006+)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                2.49,
                2.66,
                3.44,
                1.64,
                -0.73,
                2.33,
                2.9,
                2.19,
                1.57,
                2.47,
                3.53,
                2.49,
                0.8,
                1.85,
                1.73,
                1.27,
                4.15,
                7.17,
                8.72,
                6.4
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.12)",
              "yAxisID": "y"
            },
            {
              "label": "UK CPI Inflation (% · 1989+)",
              "data": [
                1.2,
                1.3,
                1.4,
                1.3,
                2.1,
                2.3,
                2.3,
                3.6,
                2.2,
                3.3,
                4.5,
                2.8,
                2.6,
                1.5,
                0.0,
                0.7,
                2.7,
                2.5,
                1.8,
                0.9,
                2.6,
                9.1,
                7.3,
                2.5,
                3.4
              ],
              "borderColor": "#a1a1aa",
              "backgroundColor": "rgba(161,161,170,0.08)",
              "yAxisID": "y"
            },
            {
              "label": "UK Wage Growth (% · 2001+)",
              "data": [
                5.18,
                3.31,
                3.09,
                4.32,
                4.6,
                4.63,
                5.02,
                3.63,
                0.05,
                2.26,
                2.37,
                1.37,
                1.09,
                1.01,
                2.42,
                2.37,
                2.28,
                2.89,
                3.45,
                1.6,
                5.95,
                6.15,
                7.04,
                5.28,
                5.03
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.10)",
              "yAxisID": "y"
            },
            {
              "label": "UK Net Migration (000s, right axis)",
              "data": [
                179.0,
                172.0,
                185.0,
                268.0,
                267.0,
                265.0,
                273.0,
                229.0,
                229.0,
                256.0,
                205.0,
                195.0,
                244.0,
                284.0,
                303.0,
                249.0,
                208.0,
                276.0,
                184.0,
                93.0,
                467.0,
                891.0,
                848.0,
                331.0,
                171.0
              ],
              "borderColor": "#fbbf24",
              "borderDash": [
                5,
                4
              ],
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "Annual England private rent inflation (2006–2025) vs UK CPI (1989–2025), Wage Growth (2001–2025), and UK Net Migration (right axis, 1989–2025).",
          "scope": "UK CPI/AWE/Net Migration vs England Rents, 1989–2025.",
          "nuance": "Places inflation, nominal wage growth, rents, and net migration on the longest overlapping macro timeline."
        }
      },
      {
        "headline": "Working-age (16–64) workforce test: total net migration peaked at 2.82% of the 16–64 workforce, but filtering out Non-EU Study & Asylum drops the peak to 1.42% and Work Main Applicants alone peak at just 0.64%.",
        "footnote": "*Denominator = UK Employed Workforce Aged 16–64 (ONS LF2G, 1971–2025). Not all migration enters the labour force: Non-EU Study & Asylum (ONS Table 4b, 2019+) are excluded in the green line, and Non-EU Work Main Applicants alone are isolated in the blue line. Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a> | <a href=\"https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/timeseries/lf2g/lms\" target=\"_blank\" rel=\"noopener\">ONS UK Working-Age Employment 16–64 (LF2G)</a>",
        "chart": {
          "type": "line",
          "title": "Workforce Contribution: Net Migration (Total, Excl. Study/Asylum & Work Main) as % of UK 16–64 Workforce (1971–2025)",
          "labels": [
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
          "y_title": "% of UK 16–64 Workforce",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Total Net Migration (% of 16–64 Workforce · 1971+)",
              "data": [
                -0.17,
                -0.04,
                -0.2,
                -0.35,
                -0.17,
                -0.08,
                -0.19,
                -0.02,
                0.02,
                -0.22,
                -0.33,
                -0.24,
                0.07,
                0.15,
                0.24,
                0.15,
                0.01,
                -0.08,
                0.17,
                0.14,
                0.17,
                -0.05,
                -0.0,
                0.31,
                0.3,
                0.21,
                0.18,
                0.53,
                0.61,
                0.58,
                0.66,
                0.63,
                0.67,
                0.96,
                0.94,
                0.93,
                0.95,
                0.79,
                0.81,
                0.9,
                0.72,
                0.68,
                0.84,
                0.96,
                1.0,
                0.81,
                0.67,
                0.88,
                0.58,
                0.3,
                1.49,
                2.82,
                2.66,
                1.03,
                0.53
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.12)"
            },
            {
              "label": "Net Excl. Non-EU Study & Asylum (% of 16–64 Workforce · 2019+)",
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
                0.42,
                0.22,
                0.64,
                1.42,
                1.34,
                0.42,
                -0.14
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.14)"
            },
            {
              "label": "Non-EU Work Main Applicants Net (% of 16–64 Workforce · 2019+)",
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
                0.09,
                0.05,
                0.2,
                0.46,
                0.64,
                0.23,
                0.1
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.12)"
            }
          ]
        },
        "definition": {
          "metric": "Total Net Migration, Net Excl. Non-EU Study & Asylum, and Non-EU Work Main Applicants divided by UK Employed Workforce Aged 16–64 (ONS LF2G) × 100.",
          "scope": "UK-wide, 1971–2025 (ONS Table 4b route split from 2019).",
          "nuance": "Separates working-age (16–64) labour-market impact from % of total population, filtering out students and asylum seekers."
        }
      },
      {
        "headline": "Working-age stock test ('on visa' stock vs 16–64 workforce): active valid-leave holders equalled 13.16% of the UK 16–64 workforce in 2025 (9.64% excl. Study &amp; Asylum; 3.87% Work Main Applicants; 80.6% aged 18–69).",
        "footnote": "*Active Valid Leave Stock (2008+ cohorts, Home Office Data_MJ_D01) divided by UK Employed Workforce Aged 16–64 (ONS LF2G). By age at initial grant (MJ_07, end-2025): 3.45M (80.6%) are aged 18–69 and 815.3k (19.1%) are under 18. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a> | <a href=\"https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/timeseries/lf2g/lms\" target=\"_blank\" rel=\"noopener\">ONS UK Working-Age Employment 16–64 (LF2G)</a>",
        "chart": {
          "type": "line",
          "title": "Working-Age Stock Test: Active 'On Visa' Holders as % of UK 16–64 Workforce (2013–2025)",
          "labels": [
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
          "y_title": "% of UK 16–64 Workforce",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "All Valid-Leave Stock (% of 16–64 Workforce)",
              "data": [
                4.0,
                3.99,
                4.03,
                4.1,
                4.3,
                4.55,
                4.94,
                5.0,
                6.32,
                9.37,
                12.21,
                13.23,
                13.16
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.12)"
            },
            {
              "label": "Stock Excl. Study & Asylum (% of 16–64 Workforce)",
              "data": [
                1.91,
                1.91,
                2.02,
                2.15,
                2.31,
                2.49,
                2.7,
                2.73,
                3.45,
                5.5,
                7.91,
                9.42,
                9.64
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.14)"
            },
            {
              "label": "Work Route Stock — Main + Dependants (% of 16–64 Workforce)",
              "data": [
                1.38,
                1.35,
                1.37,
                1.38,
                1.41,
                1.49,
                1.57,
                1.53,
                1.94,
                3.16,
                5.12,
                5.99,
                5.77
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.12)"
            },
            {
              "label": "Work Main Applicants Stock (% of 16–64 Workforce)",
              "data": [
                0.93,
                0.89,
                0.91,
                0.92,
                0.93,
                0.97,
                1.01,
                0.97,
                1.25,
                2.01,
                3.1,
                3.73,
                3.87
              ],
              "borderColor": "#a855f7",
              "backgroundColor": "rgba(168,85,247,0.10)"
            }
          ]
        },
        "definition": {
          "metric": "Active Valid Leave stock (All, Excl. Study & Asylum, Work Total, Work Main Applicants) divided by UK Employed Workforce Aged 16–64 (ONS LF2G) × 100.",
          "scope": "UK-wide, 2013–2025 (Home Office Data_MJ_D01 & MJ_07).",
          "nuance": "Captures cumulative multi-year visa holders rather than single-year flows. Excludes EUSS Pre-Settled Status."
        }
      },
      {
        "headline": "Immigrant vs UK median monthly pay (2014–2025): EU and Non-EU payrolled employees overtook the UK national median after 2021.",
        "footnote": "*Annual mean of HMRC PAYE RTI monthly median pay (£/month) by nationality group (Jul 2014–Dec 2025). Note: HMRC open tables publish medians by nationality, not within-group P10/P25/P75/P90 percentiles (see Data Availability Notes at top). Source: <a href=\"https://www.gov.uk/government/statistics/uk-payrolled-employments-by-nationality-region-industry-age-and-sex-from-july-2014-to-december-2025\" target=\"_blank\" rel=\"noopener\">HMRC PAYE RTI Payrolled Employments & Median Pay by Nationality (Jul 2014–Dec 2025)</a>",
        "chart": {
          "type": "line",
          "title": "Immigrant vs UK Pay: Median Monthly Pay by Nationality Group (£/month · 2014–2025)",
          "labels": [
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
          "y_title": "Median Monthly Pay (£)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "UK Nationals (£/mo)",
              "data": [
                1621,
                1637,
                1669,
                1704,
                1759,
                1819,
                1871,
                1978,
                2105,
                2260,
                2391,
                2512
              ],
              "borderColor": "#a1a1aa",
              "borderDash": [
                5,
                4
              ]
            },
            {
              "label": "EU Nationals (£/mo)",
              "data": [
                1463,
                1474,
                1538,
                1609,
                1686,
                1759,
                1791,
                1954,
                2156,
                2316,
                2477,
                2622
              ],
              "borderColor": "#38bdf8"
            },
            {
              "label": "Non-EU Nationals (£/mo)",
              "data": [
                1623,
                1648,
                1699,
                1764,
                1832,
                1907,
                1976,
                2099,
                2187,
                2264,
                2397,
                2557
              ],
              "borderColor": "#10b981"
            }
          ]
        },
        "definition": {
          "metric": "Net migration (inflows minus outflows) split into British, EU+, and Non-EU+ citizenships (000s).",
          "scope": "UK-wide, Year Ending December 2012–2025 (ONS Admin-Based series).",
          "nuance": "Admin-based series starts in mid-2012; EU+ net migration turned negative after Brexit/COVID."
        }
      },
      {
        "headline": "2014 vs 2025 Pay Shift: Non-EU and EU group medians moved above the UK median by 2025, with Non-EU nationalities spanning a wider cross-country P25–P75 range.",
        "footnote": "*Dots show exact HMRC group median monthly pay (£/mo) in 2014 vs 2025. Vertical bars show the employment-weighted P25–P75 range across individual EU / Non-EU nationalities (HMRC open tables do not publish within-UK percentiles). Source: <a href=\"https://www.gov.uk/government/statistics/uk-payrolled-employments-by-nationality-region-industry-age-and-sex-from-july-2014-to-december-2025\" target=\"_blank\" rel=\"noopener\">HMRC PAYE RTI Payrolled Employments & Median Pay by Nationality (Jul 2014–Dec 2025)</a>",
        "chart": {
          "type": "bar",
          "title": "2014 vs 2025 Monthly Pay Comparison: Median Dot & Cross-Nationality P25–P75 Range (£/month)",
          "labels": [
            "UK (2014)",
            "EU (2014)",
            "Non-EU (2014)",
            "UK (2025)",
            "EU (2025)",
            "Non-EU (2025)"
          ],
          "y_title": "Monthly Pay (£)",
          "datasets": [
            {
              "label": "Group Median Monthly Pay (£/mo)",
              "type": "line",
              "showLine": false,
              "data": [
                1621,
                1463,
                1623,
                2512,
                2622,
                2557
              ],
              "borderColor": "#ffffff",
              "backgroundColor": "#fbbf24",
              "pointRadius": 7,
              "pointHoverRadius": 9
            },
            {
              "label": "Cross-Nationality P25–P75 Range (£/mo)",
              "data": [
                null,
                [
                  1333,
                  1588
                ],
                [
                  1308,
                  1834
                ],
                null,
                [
                  2449,
                  2869
                ],
                [
                  2259,
                  2744
                ]
              ],
              "backgroundColor": [
                "rgba(161,161,170,0.4)",
                "rgba(56,189,248,0.55)",
                "rgba(16,185,129,0.55)",
                "rgba(161,161,170,0.4)",
                "rgba(56,189,248,0.55)",
                "rgba(16,185,129,0.55)"
              ],
              "barThickness": 10,
              "borderRadius": 4
            }
          ]
        },
        "definition": {
          "metric": "Dots show exact HMRC group median monthly pay (£/mo) for UK, EU, and Non-EU payrolled employees in 2014 vs 2025; vertical bars show the employment-weighted P25–P75 range across individual EU / Non-EU nationalities.",
          "scope": "UK-wide HMRC PAYE RTI payrolled employments (2014 vs 2025).",
          "nuance": "HMRC open tables do not publish within-group percentiles for UK nationals, so UK has a median dot only while EU/Non-EU show cross-nationality P25–P75 dispersion."
        }
      },
      {
        "headline": "Wide spread across individual nationalities (Dec 2025): most top non-UK payrolled nationalities exceed the £2,576 UK median, while a few lower-wage groups sit below.",
        "footnote": "*HMRC PAYE RTI median monthly pay (£) in Dec 2025 across the 15 largest non-UK payrolled nationalities. Dashed yellow line = UK nationals median (£2,576). Green >= UK median, Amber < UK median. Source: <a href=\"https://www.gov.uk/government/statistics/uk-payrolled-employments-by-nationality-region-industry-age-and-sex-from-july-2014-to-december-2025\" target=\"_blank\" rel=\"noopener\">HMRC PAYE RTI Payrolled Employments & Median Pay by Nationality (Jul 2014–Dec 2025)</a>",
        "chart": {
          "type": "bar",
          "title": "Median Monthly Pay Across Top 15 Non-UK Nationalities vs UK Median (£/month · Dec 2025)",
          "labels": [
            "Ireland",
            "Philippines",
            "Zimbabwe",
            "Italy",
            "Spain",
            "Nigeria",
            "Ghana",
            "India",
            "Portugal",
            "Poland",
            "Romania",
            "Nepal",
            "China",
            "Pakistan",
            "Bangladesh"
          ],
          "y_title": "Median Monthly Pay (£)",
          "benchmark_line": {
            "value": 2576,
            "color": "#facc15",
            "dash": [
              6,
              4
            ]
          },
          "datasets": [
            {
              "label": "Median Monthly Pay (£, Dec 2025)",
              "data": [
                3551,
                3234,
                3052,
                3039,
                2900,
                2833,
                2829,
                2700,
                2651,
                2630,
                2427,
                2359,
                2351,
                2045,
                1759
              ],
              "backgroundColor": [
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#10b981",
                "#f59e0b",
                "#f59e0b",
                "#f59e0b",
                "#f59e0b",
                "#f59e0b"
              ]
            }
          ]
        },
        "definition": {
          "metric": "Latest monthly median pay (£) for the 15 largest non-UK payrolled nationalities compared with the UK nationals median.",
          "scope": "UK-wide payrolled employees, latest month (Dec 2025).",
          "nuance": "Shows cross-nationality spread; within-nationality income percentiles are not published in HMRC open tables."
        }
      }
    ]
  },
  {
    "id": "hyp_work",
    "section": "Part 3 · Are They Causing an Economic Problem?",
    "ref": "3.2",
    "title": "Work Visa Deeper Dive: Skill Tiers (SOC 3–6) & Dependants",
    "question": "How many newly eligible SOC 3–6 roles entered under the 2021 Points-Based System, and how did dependants compare with main applicants?",
    "charts": [
      {
        "headline": "Newly Eligible Roles (SOC 3–6) accounted for 244.2k main-applicant Skilled & Care grants across 2021–2025 — reaching 63.7% of main-applicant work grants at the 2023 peak.",
        "footnote": "*Main-applicant grants only across Skilled Worker + Health & Care Worker (Home Office Data_Occ_D02, SOC 2020). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Visas by Occupation SOC 2020 (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Volume of Newly Eligible Roles: Work Visa Main Applicants by Skill Tier (2021–2025, 000s)",
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "y_title": "Main-Applicant Grants (000s)",
          "macro_events": [
            {
              "label": "2022",
              "text": "Feb 2022 Care",
              "color": "#10b981"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#f59e0b"
            }
          ],
          "datasets": [
            {
              "label": "Graduate / Professional (SOC 1–2 · Pre-2021 Eligible)",
              "data": [
                58.0,
                88.2,
                75.1,
                47.5,
                31.8
              ],
              "backgroundColor": "#64748b"
            },
            {
              "label": "Medium-Skilled RQF 3–5 (SOC 3–5 · Jan 2021 PBS)",
              "data": [
                5.3,
                15.7,
                24.5,
                24.4,
                9.6
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Caring Services / Care Workers (SOC 6 · Feb 2022)",
              "data": [
                3.5,
                37.6,
                109.3,
                10.9,
                3.4
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Sales / Elementary / Other (SOC 7–9)",
              "data": [
                0.1,
                0.2,
                1.0,
                1.8,
                0.6
              ],
              "backgroundColor": "#a1a1aa"
            }
          ]
        },
        "definition": {
          "metric": "Main-applicant grants in Skilled Worker & Health and Care Worker grouped by SOC 2020 major skill tier (000s).",
          "scope": "UK-wide, 2021–2025 main applicants only (Home Office Data_Occ_D02).",
          "nuance": "SOC 1–2 were largely eligible pre-2021; SOC 3–5 opened via Jan 2021 PBS; SOC 6 (Care Workers) opened Feb 2022."
        }
      },
      {
        "headline": "Main applicants drove overall volume, while dependants surged sharply in 2022–2023 before 2024 restrictions reversed the ratio.",
        "footnote": "*Issued Work and Study entry-clearance visas split by Main Applicant vs Dependant (000s, 2006–2025). Hover for exact % share. Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Work & Study Visas: Main Applicants vs Dependants (000s · 2006–2025)",
          "labels": [
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
          "y_title": "Visas Issued (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Main Applicants",
              "data": [
                405.3,
                396.2,
                404.3,
                423.6,
                416.9,
                404.1,
                364.3,
                386.1,
                393.8,
                380.0,
                402.6,
                437.4,
                466.6,
                525.4,
                307.4,
                544.1,
                755.9,
                797.0,
                606.3,
                575.8
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Dependants",
              "data": [
                78.6,
                55.8,
                54.5,
                73.1,
                78.6,
                68.5,
                58.9,
                64.9,
                67.0,
                58.9,
                55.8,
                57.7,
                64.1,
                71.6,
                57.3,
                130.2,
                289.4,
                420.9,
                180.8,
                112.0
              ],
              "backgroundColor": "#f59e0b"
            }
          ]
        },
        "definition": {
          "metric": "Issued Work and Study entry-clearance visas split by Main Applicant vs Dependant (000s).",
          "scope": "UK-wide, 2006–2025 (Home Office Data_Vis_D02).",
          "nuance": "Captures the 2022–2023 dependant surge and the post-2024 contraction after dependant bans."
        }
      }
    ]
  },
  {
    "id": "hyp_study",
    "section": "Part 3 · Are They Causing an Economic Problem?",
    "ref": "3.3",
    "title": "Study Visa Deeper Dive: Course Level & University Tier",
    "question": "Which course levels and university tiers drove the post-2020 international student expansion?",
    "charts": [
      {
        "headline": "Student Supply (Level): 1-year Masters courses drove almost the entire post-2020 expansion, rising from ~121k pre-COVID to 315k in 2022.",
        "footnote": "*Sponsored Study visa grants (main applicants) by course level from Home Office Education Visas (Mar 2026, Data_Edu_D02). Hover for % share. Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Education Visas by Course Level (Mar 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Student Supply Breakdown 1 · Sponsored Study Visas by Course Level (2018–2025, 000s)",
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
          "y_title": "Sponsored Study Grants (000s)",
          "datasets": [
            {
              "label": "Masters (Postgraduate Taught)",
              "data": [
                95.6,
                120.8,
                126.1,
                225.5,
                314.9,
                291.5,
                234.5,
                246.6
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Bachelors (Undergraduate)",
              "data": [
                63.5,
                72.1,
                54.0,
                98.0,
                109.6,
                105.1,
                105.6,
                111.8
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Below Bachelors",
              "data": [
                21.1,
                22.9,
                10.9,
                17.7,
                23.5,
                22.5,
                20.4,
                18.7
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Doctorate / Pre-sessional / Other",
              "data": [
                35.0,
                38.1,
                7.5,
                14.9,
                19.5,
                20.1,
                18.1,
                17.8
              ],
              "backgroundColor": "#a1a1aa"
            }
          ]
        },
        "definition": {
          "metric": "Sponsored Study visa grants (main applicants) split into Masters, Bachelors, Below Bachelors, and Doctorate/Other.",
          "scope": "UK-wide, 2018–2025 (Home Office Data_Edu_D02).",
          "nuance": "Shows demand/supply concentration in 1-year Postgraduate Taught (Masters) courses."
        }
      },
      {
        "headline": "Student Supply (University Tier): Non-Russell Group universities absorbed the bulk of the post-2020 expansion (+187% vs 2019).",
        "footnote": "*Out-of-country Study visa applications (CAS acceptances) by institution tier (2010–2024, Home Office Study Sponsorship Dec 2024, CAS_D01). Hover for % share. Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Study Sponsorship by Institution Type (Dec 2024)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "title": "Student Supply Breakdown 2 · Study Visa Applications by University Tier (2010–2024, 000s)",
          "labels": [
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
            "2024"
          ],
          "y_title": "CAS Visa Applications (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Non-Russell Group Universities",
              "data": [
                88.7,
                94.3,
                95.2,
                99.6,
                97.6,
                90.7,
                87.2,
                90.5,
                98.3,
                104.5,
                35.3,
                185.1,
                299.6,
                279.2,
                226.9
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "Russell Group Universities",
              "data": [
                54.5,
                58.2,
                61.5,
                68.4,
                71.0,
                75.6,
                80.4,
                87.2,
                96.6,
                106.3,
                30.5,
                130.7,
                139.8,
                142.9,
                136.2
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "FE / Schools / English Lang / Other",
              "data": [
                106.0,
                118.1,
                53.5,
                42.1,
                39.9,
                35.4,
                33.3,
                34.5,
                34.6,
                31.1,
                4.9,
                33.7,
                44.9,
                45.9,
                41.7
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "Out-of-country Study visa applications (CAS acceptances) by institution tier (000s).",
          "scope": "UK-wide, 2010–2024 (Home Office Data_CAS_D01).",
          "nuance": "Separates Russell Group universities from Non-Russell Group universities and FE/English language colleges."
        }
      }
    ]
  },
  {
    "id": "hyp_housing",
    "section": "Part 3 · Are They Causing an Economic Problem?",
    "ref": "3.4",
    "title": "Housing Impact: Local Council Rents & Supply",
    "question": "Did local areas with higher population growth actually experience sharper private rent rises, and did council-level housing supply scale with population growth?",
    "charts": [
      {
        "headline": "Cross-section test across 310 England &amp; Wales councils: local population growth (2021–2025) shows virtually zero linear correlation (r = 0.00, R² = 0.00) with local rent rises.",
        "footnote": "*Tests spatial link across N=310 matched UK Local Authorities (ONS Nomis NM_2002_1 population growth 2021–2025 vs ONS PIPR cumulative rent growth 2021–2025). Source: <a href=\"https://www.nomisweb.co.uk/datasets/pestsnew\" target=\"_blank\" rel=\"noopener\">ONS Mid-Year Population Estimates (Nomis NM_2002_1)</a> | <a href=\"https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics\" target=\"_blank\" rel=\"noopener\">ONS Price Index of Private Rents (PIPR & IPHRP)</a>",
        "chart": {
          "type": "scatter",
          "title": "Local Authority Test (N=310 Councils): Pop Growth % vs Rent Rise % (2021–2025)",
          "x_title": "Council Population Growth 2021–2025 (%)",
          "y_title": "Council Private Rent Rise 2021–2025 (%)",
          "datasets": [
            {
              "label": "UK Local Authorities",
              "data": [
                {
                  "x": 7.65,
                  "y": 10.35,
                  "label": "Hartlepool"
                },
                {
                  "x": 6.15,
                  "y": 26.18,
                  "label": "Middlesbrough"
                },
                {
                  "x": 2.15,
                  "y": 26.33,
                  "label": "Redcar and Cleveland"
                },
                {
                  "x": 5.14,
                  "y": 27.71,
                  "label": "Stockton-on-Tees"
                },
                {
                  "x": 4.8,
                  "y": 27.19,
                  "label": "Darlington"
                },
                {
                  "x": 2.6,
                  "y": 24.37,
                  "label": "Halton"
                },
                {
                  "x": 2.01,
                  "y": 27.36,
                  "label": "Warrington"
                },
                {
                  "x": 5.71,
                  "y": 31.37,
                  "label": "Blackburn with Darwen"
                },
                {
                  "x": 1.78,
                  "y": 20.47,
                  "label": "Blackpool"
                },
                {
                  "x": 2.53,
                  "y": 26.16,
                  "label": "Kingston upon Hull, City of"
                },
                {
                  "x": 5.01,
                  "y": 19.9,
                  "label": "East Riding of Yorkshire"
                },
                {
                  "x": 1.85,
                  "y": 18.93,
                  "label": "North East Lincolnshire"
                },
                {
                  "x": 0.88,
                  "y": 23.0,
                  "label": "North Lincolnshire"
                },
                {
                  "x": 3.6,
                  "y": 27.07,
                  "label": "York"
                },
                {
                  "x": 5.39,
                  "y": 28.69,
                  "label": "Derby"
                },
                {
                  "x": 4.41,
                  "y": 39.71,
                  "label": "Leicester"
                },
                {
                  "x": 0.69,
                  "y": 24.86,
                  "label": "Rutland"
                },
                {
                  "x": 1.81,
                  "y": 35.69,
                  "label": "Nottingham"
                },
                {
                  "x": 2.68,
                  "y": 24.02,
                  "label": "Herefordshire, County of"
                },
                {
                  "x": 7.27,
                  "y": 25.16,
                  "label": "Telford and Wrekin"
                },
                {
                  "x": 5.49,
                  "y": 27.52,
                  "label": "Stoke-on-Trent"
                },
                {
                  "x": 4.41,
                  "y": 33.6,
                  "label": "Bath and North East Somerset"
                },
                {
                  "x": 5.09,
                  "y": 28.22,
                  "label": "Bristol, City of"
                },
                {
                  "x": 4.5,
                  "y": 35.4,
                  "label": "North Somerset"
                },
                {
                  "x": 6.15,
                  "y": 33.65,
                  "label": "South Gloucestershire"
                },
                {
                  "x": 2.49,
                  "y": 27.3,
                  "label": "Plymouth"
                },
                {
                  "x": 0.03,
                  "y": 17.77,
                  "label": "Torbay"
                },
                {
                  "x": 4.93,
                  "y": 28.02,
                  "label": "Swindon"
                },
                {
                  "x": 3.83,
                  "y": 27.89,
                  "label": "Peterborough"
                },
                {
                  "x": 5.08,
                  "y": 30.44,
                  "label": "Luton"
                },
                {
                  "x": 2.52,
                  "y": 21.71,
                  "label": "Southend-on-Sea"
                },
                {
                  "x": 3.26,
                  "y": 20.91,
                  "label": "Thurrock"
                },
                {
                  "x": 4.57,
                  "y": 33.46,
                  "label": "Medway"
                },
                {
                  "x": 5.55,
                  "y": 30.67,
                  "label": "Bracknell Forest"
                },
                {
                  "x": 2.26,
                  "y": 20.76,
                  "label": "West Berkshire"
                },
                {
                  "x": 5.99,
                  "y": 32.08,
                  "label": "Reading"
                },
                {
                  "x": 5.68,
                  "y": 35.11,
                  "label": "Slough"
                },
                {
                  "x": 3.8,
                  "y": 32.19,
                  "label": "Windsor and Maidenhead"
                },
                {
                  "x": 6.06,
                  "y": 31.86,
                  "label": "Wokingham"
                },
                {
                  "x": 7.13,
                  "y": 25.11,
                  "label": "Milton Keynes"
                },
                {
                  "x": 2.79,
                  "y": 26.83,
                  "label": "Brighton and Hove"
                },
                {
                  "x": 2.1,
                  "y": 34.38,
                  "label": "Portsmouth"
                },
                {
                  "x": 4.67,
                  "y": 31.36,
                  "label": "Southampton"
                },
                {
                  "x": -0.08,
                  "y": 24.73,
                  "label": "Isle of Wight"
                },
                {
                  "x": 3.39,
                  "y": 24.52,
                  "label": "County Durham"
                },
                {
                  "x": 6.24,
                  "y": 26.4,
                  "label": "Cheshire East"
                },
                {
                  "x": 4.53,
                  "y": 35.9,
                  "label": "Cheshire West and Chester"
                },
                {
                  "x": 2.62,
                  "y": 25.56,
                  "label": "Shropshire"
                },
                {
                  "x": 2.24,
                  "y": 25.08,
                  "label": "Cornwall"
                },
                {
                  "x": 2.56,
                  "y": 21.5,
                  "label": "Wiltshire"
                },
                {
                  "x": 5.71,
                  "y": 28.3,
                  "label": "Bedford"
                },
                {
                  "x": 8.78,
                  "y": 24.82,
                  "label": "Central Bedfordshire"
                },
                {
                  "x": 3.87,
                  "y": 25.35,
                  "label": "Northumberland"
                },
                {
                  "x": 1.42,
                  "y": 29.41,
                  "label": "Bournemouth, Christchurch and Poole"
                },
                {
                  "x": 2.57,
                  "y": 22.15,
                  "label": "Dorset"
                },
                {
                  "x": 5.25,
                  "y": 25.01,
                  "label": "Buckinghamshire"
                },
                {
                  "x": 5.31,
                  "y": 28.59,
                  "label": "North Northamptonshire"
                },
                {
                  "x": 4.1,
                  "y": 25.35,
                  "label": "West Northamptonshire"
                },
                {
                  "x": 3.34,
                  "y": 26.93,
                  "label": "Cambridge"
                },
                {
                  "x": 7.35,
                  "y": 23.56,
                  "label": "East Cambridgeshire"
                },
                {
                  "x": 3.11,
                  "y": 26.1,
                  "label": "Fenland"
                },
                {
                  "x": 5.56,
                  "y": 23.87,
                  "label": "Huntingdonshire"
                },
                {
                  "x": 7.11,
                  "y": 28.83,
                  "label": "South Cambridgeshire"
                },
                {
                  "x": 4.31,
                  "y": 31.9,
                  "label": "Amber Valley"
                },
                {
                  "x": 4.88,
                  "y": 30.73,
                  "label": "Bolsover"
                },
                {
                  "x": 2.65,
                  "y": 24.38,
                  "label": "Chesterfield"
                },
                {
                  "x": 0.51,
                  "y": 11.04,
                  "label": "Derbyshire Dales"
                },
                {
                  "x": 0.38,
                  "y": 30.55,
                  "label": "Erewash"
                },
                {
                  "x": 0.66,
                  "y": 25.71,
                  "label": "High Peak"
                },
                {
                  "x": 5.47,
                  "y": 24.09,
                  "label": "North East Derbyshire"
                },
                {
                  "x": 10.54,
                  "y": 26.43,
                  "label": "South Derbyshire"
                },
                {
                  "x": 4.98,
                  "y": 15.67,
                  "label": "East Devon"
                },
                {
                  "x": 6.46,
                  "y": 27.53,
                  "label": "Exeter"
                },
                {
                  "x": 2.91,
                  "y": 23.96,
                  "label": "Mid Devon"
                },
                {
                  "x": 1.89,
                  "y": 25.51,
                  "label": "North Devon"
                },
                {
                  "x": 4.5,
                  "y": 25.05,
                  "label": "South Hams"
                },
                {
                  "x": 2.53,
                  "y": 21.18,
                  "label": "Teignbridge"
                },
                {
                  "x": 2.83,
                  "y": 24.24,
                  "label": "Torridge"
                },
                {
                  "x": 2.61,
                  "y": 19.98,
                  "label": "West Devon"
                },
                {
                  "x": 2.26,
                  "y": 23.29,
                  "label": "Eastbourne"
                },
                {
                  "x": -0.13,
                  "y": 23.35,
                  "label": "Hastings"
                },
                {
                  "x": 2.48,
                  "y": 18.42,
                  "label": "Lewes"
                },
                {
                  "x": 2.93,
                  "y": 24.62,
                  "label": "Rother"
                },
                {
                  "x": 4.73,
                  "y": 20.67,
                  "label": "Wealden"
                },
                {
                  "x": 3.07,
                  "y": 23.19,
                  "label": "Basildon"
                },
                {
                  "x": 6.92,
                  "y": 32.43,
                  "label": "Braintree"
                },
                {
                  "x": 3.88,
                  "y": 20.65,
                  "label": "Brentwood"
                },
                {
                  "x": 1.0,
                  "y": 19.97,
                  "label": "Castle Point"
                },
                {
                  "x": 4.81,
                  "y": 28.16,
                  "label": "Chelmsford"
                },
                {
                  "x": 4.41,
                  "y": 29.2,
                  "label": "Colchester"
                },
                {
                  "x": 2.56,
                  "y": 22.49,
                  "label": "Epping Forest"
                },
                {
                  "x": 5.47,
                  "y": 26.53,
                  "label": "Harlow"
                },
                {
                  "x": 5.38,
                  "y": 20.89,
                  "label": "Maldon"
                },
                {
                  "x": 5.31,
                  "y": 18.99,
                  "label": "Rochford"
                },
                {
                  "x": 6.81,
                  "y": 29.63,
                  "label": "Tendring"
                },
                {
                  "x": 5.27,
                  "y": 25.55,
                  "label": "Uttlesford"
                },
                {
                  "x": 2.2,
                  "y": 29.39,
                  "label": "Cheltenham"
                },
                {
                  "x": 0.53,
                  "y": 22.37,
                  "label": "Cotswold"
                },
                {
                  "x": 3.49,
                  "y": 29.29,
                  "label": "Forest of Dean"
                },
                {
                  "x": 4.53,
                  "y": 34.47,
                  "label": "Gloucester"
                },
                {
                  "x": 4.05,
                  "y": 27.32,
                  "label": "Stroud"
                },
                {
                  "x": 8.76,
                  "y": 24.24,
                  "label": "Tewkesbury"
                },
                {
                  "x": 4.48,
                  "y": 27.79,
                  "label": "Basingstoke and Deane"
                },
                {
                  "x": 3.49,
                  "y": 28.55,
                  "label": "East Hampshire"
                },
                {
                  "x": 4.93,
                  "y": 26.05,
                  "label": "Eastleigh"
                },
                {
                  "x": 0.37,
                  "y": 25.23,
                  "label": "Fareham"
                },
                {
                  "x": 0.55,
                  "y": 29.63,
                  "label": "Gosport"
                },
                {
                  "x": 3.06,
                  "y": 26.02,
                  "label": "Hart"
                },
                {
                  "x": 2.33,
                  "y": 27.55,
                  "label": "Havant"
                },
                {
                  "x": -0.16,
                  "y": 26.77,
                  "label": "New Forest"
                },
                {
                  "x": 6.08,
                  "y": 26.69,
                  "label": "Rushmoor"
                },
                {
                  "x": 3.46,
                  "y": 19.84,
                  "label": "Test Valley"
                },
                {
                  "x": 6.98,
                  "y": 28.56,
                  "label": "Winchester"
                },
                {
                  "x": 4.02,
                  "y": 28.05,
                  "label": "Broxbourne"
                },
                {
                  "x": 4.58,
                  "y": 24.83,
                  "label": "Dacorum"
                },
                {
                  "x": 1.95,
                  "y": 24.13,
                  "label": "Hertsmere"
                },
                {
                  "x": 2.83,
                  "y": 33.0,
                  "label": "North Hertfordshire"
                },
                {
                  "x": 2.27,
                  "y": 27.99,
                  "label": "Three Rivers"
                },
                {
                  "x": 5.03,
                  "y": 28.34,
                  "label": "Watford"
                },
                {
                  "x": 6.98,
                  "y": 31.94,
                  "label": "Ashford"
                },
                {
                  "x": 3.82,
                  "y": 19.02,
                  "label": "Canterbury"
                },
                {
                  "x": 8.11,
                  "y": 32.23,
                  "label": "Dartford"
                },
                {
                  "x": 3.87,
                  "y": 24.88,
                  "label": "Dover"
                },
                {
                  "x": 4.06,
                  "y": 26.19,
                  "label": "Gravesham"
                },
                {
                  "x": 8.33,
                  "y": 31.85,
                  "label": "Maidstone"
                },
                {
                  "x": 1.95,
                  "y": 25.64,
                  "label": "Sevenoaks"
                },
                {
                  "x": 1.93,
                  "y": 39.02,
                  "label": "Folkestone and Hythe"
                },
                {
                  "x": 5.55,
                  "y": 24.82,
                  "label": "Swale"
                },
                {
                  "x": 2.1,
                  "y": 31.39,
                  "label": "Thanet"
                },
                {
                  "x": 4.19,
                  "y": 26.47,
                  "label": "Tonbridge and Malling"
                },
                {
                  "x": 3.85,
                  "y": 27.33,
                  "label": "Tunbridge Wells"
                },
                {
                  "x": 6.56,
                  "y": 26.54,
                  "label": "Burnley"
                },
                {
                  "x": 3.31,
                  "y": 27.45,
                  "label": "Chorley"
                },
                {
                  "x": 6.04,
                  "y": 26.48,
                  "label": "Fylde"
                },
                {
                  "x": 5.64,
                  "y": 28.8,
                  "label": "Hyndburn"
                },
                {
                  "x": 2.03,
                  "y": 22.85,
                  "label": "Lancaster"
                },
                {
                  "x": 4.58,
                  "y": 27.21,
                  "label": "Pendle"
                },
                {
                  "x": 11.31,
                  "y": 25.87,
                  "label": "Preston"
                },
                {
                  "x": 8.2,
                  "y": 22.37,
                  "label": "Ribble Valley"
                },
                {
                  "x": 3.77,
                  "y": 42.77,
                  "label": "Rossendale"
                },
                {
                  "x": 5.71,
                  "y": 26.27,
                  "label": "South Ribble"
                },
                {
                  "x": 5.52,
                  "y": 30.18,
                  "label": "West Lancashire"
                },
                {
                  "x": 7.2,
                  "y": 19.3,
                  "label": "Wyre"
                },
                {
                  "x": 4.99,
                  "y": 31.55,
                  "label": "Blaby"
                },
                {
                  "x": 3.72,
                  "y": 32.01,
                  "label": "Charnwood"
                },
                {
                  "x": 8.47,
                  "y": 29.23,
                  "label": "Harborough"
                },
                {
                  "x": 4.04,
                  "y": 31.68,
                  "label": "Hinckley and Bosworth"
                },
                {
                  "x": 5.68,
                  "y": 24.26,
                  "label": "Melton"
                },
                {
                  "x": 7.87,
                  "y": 25.99,
                  "label": "North West Leicestershire"
                },
                {
                  "x": 6.48,
                  "y": 34.14,
                  "label": "Oadby and Wigston"
                },
                {
                  "x": 1.8,
                  "y": 25.92,
                  "label": "Boston"
                },
                {
                  "x": 2.69,
                  "y": 23.78,
                  "label": "East Lindsey"
                },
                {
                  "x": 0.92,
                  "y": 27.69,
                  "label": "Lincoln"
                },
                {
                  "x": 4.02,
                  "y": 24.25,
                  "label": "North Kesteven"
                },
                {
                  "x": 5.52,
                  "y": 20.0,
                  "label": "South Holland"
                },
                {
                  "x": 3.0,
                  "y": 24.46,
                  "label": "South Kesteven"
                },
                {
                  "x": 4.35,
                  "y": 24.56,
                  "label": "West Lindsey"
                },
                {
                  "x": 4.17,
                  "y": 24.05,
                  "label": "Breckland"
                },
                {
                  "x": 5.61,
                  "y": 25.45,
                  "label": "Broadland"
                },
                {
                  "x": 0.78,
                  "y": 27.39,
                  "label": "Great Yarmouth"
                },
                {
                  "x": 1.31,
                  "y": 28.45,
                  "label": "King's Lynn and West Norfolk"
                },
                {
                  "x": 0.45,
                  "y": 23.34,
                  "label": "North Norfolk"
                },
                {
                  "x": 1.72,
                  "y": 30.22,
                  "label": "Norwich"
                },
                {
                  "x": 5.53,
                  "y": 27.74,
                  "label": "South Norfolk"
                },
                {
                  "x": 3.34,
                  "y": 31.77,
                  "label": "Ashfield"
                },
                {
                  "x": 6.87,
                  "y": 24.83,
                  "label": "Bassetlaw"
                },
                {
                  "x": 2.86,
                  "y": 31.55,
                  "label": "Broxtowe"
                },
                {
                  "x": 3.25,
                  "y": 28.55,
                  "label": "Gedling"
                },
                {
                  "x": 2.79,
                  "y": 29.78,
                  "label": "Mansfield"
                },
                {
                  "x": 4.32,
                  "y": 26.43,
                  "label": "Newark and Sherwood"
                },
                {
                  "x": 7.07,
                  "y": 27.87,
                  "label": "Rushcliffe"
                },
                {
                  "x": 6.39,
                  "y": 30.67,
                  "label": "Cherwell"
                },
                {
                  "x": 3.47,
                  "y": 27.36,
                  "label": "Oxford"
                },
                {
                  "x": 5.39,
                  "y": 23.76,
                  "label": "South Oxfordshire"
                },
                {
                  "x": 9.19,
                  "y": 23.45,
                  "label": "Vale of White Horse"
                },
                {
                  "x": 5.47,
                  "y": 24.66,
                  "label": "West Oxfordshire"
                },
                {
                  "x": 3.68,
                  "y": 26.87,
                  "label": "Cannock Chase"
                },
                {
                  "x": 5.67,
                  "y": 25.26,
                  "label": "East Staffordshire"
                },
                {
                  "x": 5.98,
                  "y": 25.81,
                  "label": "Lichfield"
                },
                {
                  "x": 4.11,
                  "y": 22.88,
                  "label": "Newcastle-under-Lyme"
                },
                {
                  "x": 3.63,
                  "y": 25.22,
                  "label": "South Staffordshire"
                },
                {
                  "x": 4.16,
                  "y": 26.62,
                  "label": "Stafford"
                },
                {
                  "x": 0.82,
                  "y": 24.8,
                  "label": "Staffordshire Moorlands"
                },
                {
                  "x": 3.23,
                  "y": 26.27,
                  "label": "Tamworth"
                },
                {
                  "x": 5.51,
                  "y": 27.59,
                  "label": "Babergh"
                },
                {
                  "x": -0.13,
                  "y": 33.65,
                  "label": "Ipswich"
                },
                {
                  "x": 9.33,
                  "y": 30.32,
                  "label": "Mid Suffolk"
                },
                {
                  "x": 2.17,
                  "y": 19.3,
                  "label": "Elmbridge"
                },
                {
                  "x": 2.92,
                  "y": 16.85,
                  "label": "Epsom and Ewell"
                },
                {
                  "x": 5.65,
                  "y": 17.58,
                  "label": "Guildford"
                },
                {
                  "x": 1.38,
                  "y": 25.39,
                  "label": "Mole Valley"
                },
                {
                  "x": 5.23,
                  "y": 27.46,
                  "label": "Reigate and Banstead"
                },
                {
                  "x": 5.9,
                  "y": 22.1,
                  "label": "Runnymede"
                },
                {
                  "x": 4.03,
                  "y": 25.62,
                  "label": "Spelthorne"
                },
                {
                  "x": 4.9,
                  "y": 30.46,
                  "label": "Surrey Heath"
                },
                {
                  "x": 2.49,
                  "y": 21.01,
                  "label": "Tandridge"
                },
                {
                  "x": 6.47,
                  "y": 25.35,
                  "label": "Waverley"
                },
                {
                  "x": 2.21,
                  "y": 25.42,
                  "label": "Woking"
                },
                {
                  "x": 3.6,
                  "y": 29.31,
                  "label": "North Warwickshire"
                },
                {
                  "x": 7.25,
                  "y": 34.43,
                  "label": "Nuneaton and Bedworth"
                },
                {
                  "x": 9.37,
                  "y": 25.85,
                  "label": "Rugby"
                },
                {
                  "x": 9.43,
                  "y": 20.63,
                  "label": "Stratford-on-Avon"
                },
                {
                  "x": 6.21,
                  "y": 25.88,
                  "label": "Warwick"
                },
                {
                  "x": 0.26,
                  "y": 31.58,
                  "label": "Adur"
                },
                {
                  "x": 4.3,
                  "y": 30.91,
                  "label": "Arun"
                },
                {
                  "x": 4.58,
                  "y": 27.86,
                  "label": "Chichester"
                },
                {
                  "x": 4.94,
                  "y": 28.62,
                  "label": "Crawley"
                },
                {
                  "x": 3.06,
                  "y": 28.73,
                  "label": "Horsham"
                },
                {
                  "x": 6.96,
                  "y": 26.74,
                  "label": "Mid Sussex"
                },
                {
                  "x": 1.96,
                  "y": 29.1,
                  "label": "Worthing"
                },
                {
                  "x": 2.54,
                  "y": 27.87,
                  "label": "Bromsgrove"
                },
                {
                  "x": 5.52,
                  "y": 23.91,
                  "label": "Malvern Hills"
                },
                {
                  "x": 0.65,
                  "y": 20.24,
                  "label": "Redditch"
                },
                {
                  "x": 3.21,
                  "y": 23.89,
                  "label": "Worcester"
                },
                {
                  "x": 4.58,
                  "y": 22.81,
                  "label": "Wychavon"
                },
                {
                  "x": 2.35,
                  "y": 29.39,
                  "label": "Wyre Forest"
                },
                {
                  "x": 1.44,
                  "y": 27.5,
                  "label": "St Albans"
                },
                {
                  "x": 1.67,
                  "y": 25.25,
                  "label": "Welwyn Hatfield"
                },
                {
                  "x": 4.89,
                  "y": 24.12,
                  "label": "East Hertfordshire"
                },
                {
                  "x": 3.04,
                  "y": 31.11,
                  "label": "Stevenage"
                },
                {
                  "x": 1.35,
                  "y": 30.26,
                  "label": "East Suffolk"
                },
                {
                  "x": 4.75,
                  "y": 22.21,
                  "label": "West Suffolk"
                },
                {
                  "x": 4.58,
                  "y": 35.7,
                  "label": "Bolton"
                },
                {
                  "x": 2.79,
                  "y": 41.24,
                  "label": "Bury"
                },
                {
                  "x": 6.83,
                  "y": 39.12,
                  "label": "Manchester"
                },
                {
                  "x": 4.1,
                  "y": 40.28,
                  "label": "Oldham"
                },
                {
                  "x": 6.03,
                  "y": 37.12,
                  "label": "Rochdale"
                },
                {
                  "x": 9.65,
                  "y": 40.77,
                  "label": "Salford"
                },
                {
                  "x": 3.26,
                  "y": 36.66,
                  "label": "Stockport"
                },
                {
                  "x": 4.15,
                  "y": 46.7,
                  "label": "Tameside"
                },
                {
                  "x": 2.29,
                  "y": 40.94,
                  "label": "Trafford"
                },
                {
                  "x": 5.24,
                  "y": 31.62,
                  "label": "Wigan"
                },
                {
                  "x": 5.64,
                  "y": 30.36,
                  "label": "Knowsley"
                },
                {
                  "x": 4.72,
                  "y": 35.79,
                  "label": "Liverpool"
                },
                {
                  "x": 3.54,
                  "y": 34.39,
                  "label": "St. Helens"
                },
                {
                  "x": 2.82,
                  "y": 33.19,
                  "label": "Sefton"
                },
                {
                  "x": 2.89,
                  "y": 27.39,
                  "label": "Wirral"
                },
                {
                  "x": 4.64,
                  "y": 21.94,
                  "label": "Doncaster"
                },
                {
                  "x": 4.88,
                  "y": 25.38,
                  "label": "Rotherham"
                },
                {
                  "x": 7.47,
                  "y": 29.72,
                  "label": "Newcastle upon Tyne"
                },
                {
                  "x": 3.0,
                  "y": 27.35,
                  "label": "North Tyneside"
                },
                {
                  "x": 2.26,
                  "y": 29.76,
                  "label": "South Tyneside"
                },
                {
                  "x": 4.63,
                  "y": 23.34,
                  "label": "Sunderland"
                },
                {
                  "x": 2.95,
                  "y": 32.28,
                  "label": "Birmingham"
                },
                {
                  "x": 5.99,
                  "y": 28.03,
                  "label": "Coventry"
                },
                {
                  "x": 3.2,
                  "y": 26.03,
                  "label": "Dudley"
                },
                {
                  "x": 3.22,
                  "y": 32.31,
                  "label": "Sandwell"
                },
                {
                  "x": 2.2,
                  "y": 31.88,
                  "label": "Solihull"
                },
                {
                  "x": 3.98,
                  "y": 29.39,
                  "label": "Walsall"
                },
                {
                  "x": 6.5,
                  "y": 32.96,
                  "label": "Wolverhampton"
                },
                {
                  "x": 2.0,
                  "y": 25.05,
                  "label": "Bradford"
                },
                {
                  "x": 1.89,
                  "y": 29.68,
                  "label": "Calderdale"
                },
                {
                  "x": 2.85,
                  "y": 22.91,
                  "label": "Kirklees"
                },
                {
                  "x": 3.84,
                  "y": 27.53,
                  "label": "Leeds"
                },
                {
                  "x": 4.42,
                  "y": 24.46,
                  "label": "Wakefield"
                },
                {
                  "x": 3.23,
                  "y": 31.09,
                  "label": "Gateshead"
                },
                {
                  "x": 8.95,
                  "y": 29.34,
                  "label": "Barking and Dagenham"
                },
                {
                  "x": 4.92,
                  "y": 27.3,
                  "label": "Barnet"
                },
                {
                  "x": 4.24,
                  "y": 32.4,
                  "label": "Bexley"
                },
                {
                  "x": 3.82,
                  "y": 36.52,
                  "label": "Brent"
                },
                {
                  "x": 1.86,
                  "y": 24.96,
                  "label": "Bromley"
                },
                {
                  "x": 2.7,
                  "y": 35.46,
                  "label": "Camden"
                },
                {
                  "x": 4.96,
                  "y": 25.79,
                  "label": "Croydon"
                },
                {
                  "x": 5.54,
                  "y": 29.71,
                  "label": "Ealing"
                },
                {
                  "x": -0.14,
                  "y": 28.73,
                  "label": "Enfield"
                },
                {
                  "x": 4.04,
                  "y": 30.23,
                  "label": "Greenwich"
                },
                {
                  "x": 2.37,
                  "y": 32.87,
                  "label": "Hackney"
                },
                {
                  "x": 3.77,
                  "y": 31.08,
                  "label": "Hammersmith and Fulham"
                },
                {
                  "x": 0.72,
                  "y": 31.33,
                  "label": "Haringey"
                },
                {
                  "x": 4.39,
                  "y": 25.82,
                  "label": "Harrow"
                },
                {
                  "x": 7.14,
                  "y": 30.0,
                  "label": "Havering"
                },
                {
                  "x": 7.07,
                  "y": 27.16,
                  "label": "Hillingdon"
                },
                {
                  "x": 3.93,
                  "y": 40.72,
                  "label": "Hounslow"
                },
                {
                  "x": 3.46,
                  "y": 36.29,
                  "label": "Islington"
                },
                {
                  "x": 1.02,
                  "y": 37.04,
                  "label": "Kensington and Chelsea"
                },
                {
                  "x": 2.84,
                  "y": 25.33,
                  "label": "Kingston upon Thames"
                },
                {
                  "x": -1.07,
                  "y": 29.3,
                  "label": "Lambeth"
                },
                {
                  "x": 0.34,
                  "y": 25.86,
                  "label": "Lewisham"
                },
                {
                  "x": 1.61,
                  "y": 27.11,
                  "label": "Merton"
                },
                {
                  "x": 7.2,
                  "y": 20.56,
                  "label": "Newham"
                },
                {
                  "x": 3.77,
                  "y": 28.04,
                  "label": "Redbridge"
                },
                {
                  "x": 0.72,
                  "y": 26.83,
                  "label": "Richmond upon Thames"
                },
                {
                  "x": 1.83,
                  "y": 28.0,
                  "label": "Southwark"
                },
                {
                  "x": 2.08,
                  "y": 30.03,
                  "label": "Sutton"
                },
                {
                  "x": 6.88,
                  "y": 31.81,
                  "label": "Tower Hamlets"
                },
                {
                  "x": 2.0,
                  "y": 24.64,
                  "label": "Waltham Forest"
                },
                {
                  "x": 3.48,
                  "y": 29.53,
                  "label": "Wandsworth"
                },
                {
                  "x": 3.21,
                  "y": 35.82,
                  "label": "Westminster"
                },
                {
                  "x": -0.48,
                  "y": 26.21,
                  "label": "Isle of Anglesey"
                },
                {
                  "x": 2.75,
                  "y": 21.95,
                  "label": "Gwynedd"
                },
                {
                  "x": -0.32,
                  "y": 30.54,
                  "label": "Conwy"
                },
                {
                  "x": 2.29,
                  "y": 24.1,
                  "label": "Denbighshire"
                },
                {
                  "x": 0.59,
                  "y": 24.09,
                  "label": "Flintshire"
                },
                {
                  "x": 2.09,
                  "y": 28.25,
                  "label": "Wrexham"
                },
                {
                  "x": 2.86,
                  "y": 19.0,
                  "label": "Ceredigion"
                },
                {
                  "x": 1.79,
                  "y": 25.55,
                  "label": "Pembrokeshire"
                },
                {
                  "x": 0.99,
                  "y": 28.64,
                  "label": "Carmarthenshire"
                },
                {
                  "x": 4.85,
                  "y": 32.91,
                  "label": "Swansea"
                },
                {
                  "x": 0.07,
                  "y": 31.65,
                  "label": "Neath Port Talbot"
                },
                {
                  "x": 0.86,
                  "y": 26.39,
                  "label": "Bridgend"
                },
                {
                  "x": 2.17,
                  "y": 35.23,
                  "label": "Vale of Glamorgan"
                },
                {
                  "x": 6.03,
                  "y": 31.34,
                  "label": "Cardiff"
                },
                {
                  "x": 1.46,
                  "y": 42.32,
                  "label": "Rhondda Cynon Taff"
                },
                {
                  "x": 0.04,
                  "y": 31.65,
                  "label": "Caerphilly"
                },
                {
                  "x": 0.9,
                  "y": 44.16,
                  "label": "Blaenau Gwent"
                },
                {
                  "x": 1.64,
                  "y": 44.94,
                  "label": "Torfaen"
                },
                {
                  "x": 2.32,
                  "y": 38.53,
                  "label": "Monmouthshire"
                },
                {
                  "x": 5.57,
                  "y": 43.19,
                  "label": "Newport"
                },
                {
                  "x": 0.99,
                  "y": 21.33,
                  "label": "Powys"
                },
                {
                  "x": -0.86,
                  "y": 43.92,
                  "label": "Merthyr Tydfil"
                }
              ],
              "backgroundColor": "rgba(56,189,248,0.55)",
              "pointRadius": 3.5
            },
            {
              "label": "OLS Trendline (r=0.00)",
              "type": "line",
              "data": [
                {
                  "x": -1.07,
                  "y": 27.81
                },
                {
                  "x": 11.31,
                  "y": 27.82
                }
              ],
              "borderColor": "#f97316",
              "borderWidth": 2,
              "pointRadius": 0
            }
          ]
        },
        "definition": {
          "metric": "Cross-sectional OLS regression of 2021–2025 council rent growth (%) against 2021–2025 council population growth (%).",
          "scope": "N=310 matched England & Wales Local Authorities (ONS Nomis NM_2002_1 & ONS PIPR).",
          "nuance": "Tests spatial correlation directly; r = 0.00 / R² = 0.00 indicates virtually zero linear cross-council relationship."
        }
      },
      {
        "headline": "Council housing supply vs population change (288 English councils): r = 0.83 (R² = 0.69), showing whether local housebuilding scaled with local growth.",
        "footnote": "*MHCLG Live Table 122 cumulative net additional dwellings (2021–22 to 2024–25, 000s) vs ONS Nomis NM_2002_1 council population change (2021–2025, 000s). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/live-tables-on-net-supply-of-housing\" target=\"_blank\" rel=\"noopener\">MHCLG Live Table 122 (LA Net Additional Dwellings)</a> | <a href=\"https://www.nomisweb.co.uk/datasets/pestsnew\" target=\"_blank\" rel=\"noopener\">ONS Mid-Year Population Estimates (Nomis NM_2002_1)</a>",
        "chart": {
          "type": "scatter",
          "title": "Council Housing Supply Test (N=288 English Councils): Net Dwellings Added vs Pop Change (000s · 2021–2025)",
          "x_title": "Council Population Change 2021–2025 (000s)",
          "y_title": "Net Additional Dwellings 2021–2025 (000s)",
          "datasets": [
            {
              "label": "English Local Authorities",
              "data": [
                {
                  "x": 7.08,
                  "y": 1.92,
                  "label": "Hartlepool"
                },
                {
                  "x": 8.85,
                  "y": 1.92,
                  "label": "Middlesbrough"
                },
                {
                  "x": 2.94,
                  "y": 1.81,
                  "label": "Redcar and Cleveland"
                },
                {
                  "x": 10.13,
                  "y": 2.36,
                  "label": "Stockton-on-Tees"
                },
                {
                  "x": 5.19,
                  "y": 1.79,
                  "label": "Darlington"
                },
                {
                  "x": 3.34,
                  "y": 1.27,
                  "label": "Halton"
                },
                {
                  "x": 4.24,
                  "y": 3.4,
                  "label": "Warrington"
                },
                {
                  "x": 8.85,
                  "y": 2.06,
                  "label": "Blackburn with Darwen"
                },
                {
                  "x": 2.52,
                  "y": 0.93,
                  "label": "Blackpool"
                },
                {
                  "x": 6.74,
                  "y": 2.35,
                  "label": "Kingston upon Hull, City of"
                },
                {
                  "x": 17.19,
                  "y": 7.89,
                  "label": "East Riding of Yorkshire"
                },
                {
                  "x": 2.91,
                  "y": 1.99,
                  "label": "North East Lincolnshire"
                },
                {
                  "x": 1.49,
                  "y": 1.91,
                  "label": "North Lincolnshire"
                },
                {
                  "x": 7.27,
                  "y": 2.04,
                  "label": "York"
                },
                {
                  "x": 14.08,
                  "y": 3.48,
                  "label": "Derby"
                },
                {
                  "x": 16.18,
                  "y": 3.75,
                  "label": "Leicester"
                },
                {
                  "x": 0.29,
                  "y": 0.44,
                  "label": "Rutland"
                },
                {
                  "x": 5.79,
                  "y": 7.58,
                  "label": "Nottingham"
                },
                {
                  "x": 5.02,
                  "y": 3.37,
                  "label": "Herefordshire, County of"
                },
                {
                  "x": 13.52,
                  "y": 6.06,
                  "label": "Telford and Wrekin"
                },
                {
                  "x": 14.18,
                  "y": 1.8,
                  "label": "Stoke-on-Trent"
                },
                {
                  "x": 8.48,
                  "y": 2.19,
                  "label": "Bath and North East Somerset"
                },
                {
                  "x": 23.98,
                  "y": 6.64,
                  "label": "Bristol, City of"
                },
                {
                  "x": 9.78,
                  "y": 3.62,
                  "label": "North Somerset"
                },
                {
                  "x": 17.9,
                  "y": 6.82,
                  "label": "South Gloucestershire"
                },
                {
                  "x": 6.59,
                  "y": 1.21,
                  "label": "Plymouth"
                },
                {
                  "x": 0.05,
                  "y": 1.04,
                  "label": "Torbay"
                },
                {
                  "x": 11.53,
                  "y": 3.72,
                  "label": "Swindon"
                },
                {
                  "x": 8.29,
                  "y": 3.84,
                  "label": "Peterborough"
                },
                {
                  "x": 11.42,
                  "y": 2.36,
                  "label": "Luton"
                },
                {
                  "x": 4.56,
                  "y": 1.19,
                  "label": "Southend-on-Sea"
                },
                {
                  "x": 5.73,
                  "y": 1.33,
                  "label": "Thurrock"
                },
                {
                  "x": 12.79,
                  "y": 4.01,
                  "label": "Medway"
                },
                {
                  "x": 6.95,
                  "y": 2.47,
                  "label": "Bracknell Forest"
                },
                {
                  "x": 3.66,
                  "y": 2.44,
                  "label": "West Berkshire"
                },
                {
                  "x": 10.39,
                  "y": 3.65,
                  "label": "Reading"
                },
                {
                  "x": 9.0,
                  "y": 1.89,
                  "label": "Slough"
                },
                {
                  "x": 5.85,
                  "y": 1.9,
                  "label": "Windsor and Maidenhead"
                },
                {
                  "x": 10.79,
                  "y": 3.79,
                  "label": "Wokingham"
                },
                {
                  "x": 20.55,
                  "y": 9.49,
                  "label": "Milton Keynes"
                },
                {
                  "x": 7.72,
                  "y": 4.65,
                  "label": "Brighton and Hove"
                },
                {
                  "x": 4.36,
                  "y": 0.43,
                  "label": "Portsmouth"
                },
                {
                  "x": 11.56,
                  "y": 1.8,
                  "label": "Southampton"
                },
                {
                  "x": -0.11,
                  "y": 1.35,
                  "label": "Isle of Wight"
                },
                {
                  "x": 17.7,
                  "y": 6.28,
                  "label": "County Durham"
                },
                {
                  "x": 24.98,
                  "y": 9.05,
                  "label": "Cheshire East"
                },
                {
                  "x": 16.22,
                  "y": 5.46,
                  "label": "Cheshire West and Chester"
                },
                {
                  "x": 8.49,
                  "y": 5.64,
                  "label": "Shropshire"
                },
                {
                  "x": 12.83,
                  "y": 10.19,
                  "label": "Cornwall"
                },
                {
                  "x": 13.15,
                  "y": 7.27,
                  "label": "Wiltshire"
                },
                {
                  "x": 10.6,
                  "y": 3.75,
                  "label": "Bedford"
                },
                {
                  "x": 25.95,
                  "y": 8.49,
                  "label": "Central Bedfordshire"
                },
                {
                  "x": 12.44,
                  "y": 6.12,
                  "label": "Northumberland"
                },
                {
                  "x": 5.67,
                  "y": 3.48,
                  "label": "Bournemouth, Christchurch and Poole"
                },
                {
                  "x": 9.79,
                  "y": 6.59,
                  "label": "Dorset"
                },
                {
                  "x": 29.14,
                  "y": 10.19,
                  "label": "Buckinghamshire"
                },
                {
                  "x": 19.15,
                  "y": 7.48,
                  "label": "North Northamptonshire"
                },
                {
                  "x": 17.51,
                  "y": 8.05,
                  "label": "West Northamptonshire"
                },
                {
                  "x": 4.85,
                  "y": 2.23,
                  "label": "Cambridge"
                },
                {
                  "x": 6.47,
                  "y": 2.64,
                  "label": "East Cambridgeshire"
                },
                {
                  "x": 3.2,
                  "y": 2.18,
                  "label": "Fenland"
                },
                {
                  "x": 10.11,
                  "y": 4.4,
                  "label": "Huntingdonshire"
                },
                {
                  "x": 11.6,
                  "y": 5.63,
                  "label": "South Cambridgeshire"
                },
                {
                  "x": 5.45,
                  "y": 2.37,
                  "label": "Amber Valley"
                },
                {
                  "x": 3.92,
                  "y": 1.8,
                  "label": "Bolsover"
                },
                {
                  "x": 2.75,
                  "y": 1.42,
                  "label": "Chesterfield"
                },
                {
                  "x": 0.37,
                  "y": 0.85,
                  "label": "Derbyshire Dales"
                },
                {
                  "x": 0.43,
                  "y": 0.79,
                  "label": "Erewash"
                },
                {
                  "x": 0.6,
                  "y": 1.29,
                  "label": "High Peak"
                },
                {
                  "x": 5.59,
                  "y": 2.43,
                  "label": "North East Derbyshire"
                },
                {
                  "x": 11.39,
                  "y": 3.96,
                  "label": "South Derbyshire"
                },
                {
                  "x": 7.57,
                  "y": 3.33,
                  "label": "East Devon"
                },
                {
                  "x": 8.37,
                  "y": 2.44,
                  "label": "Exeter"
                },
                {
                  "x": 2.42,
                  "y": 1.35,
                  "label": "Mid Devon"
                },
                {
                  "x": 1.88,
                  "y": 1.98,
                  "label": "North Devon"
                },
                {
                  "x": 4.01,
                  "y": 2.34,
                  "label": "South Hams"
                },
                {
                  "x": 3.42,
                  "y": 2.2,
                  "label": "Teignbridge"
                },
                {
                  "x": 1.93,
                  "y": 1.49,
                  "label": "Torridge"
                },
                {
                  "x": 1.5,
                  "y": 1.24,
                  "label": "West Devon"
                },
                {
                  "x": 2.29,
                  "y": 0.64,
                  "label": "Eastbourne"
                },
                {
                  "x": -0.12,
                  "y": 0.83,
                  "label": "Hastings"
                },
                {
                  "x": 2.48,
                  "y": 1.7,
                  "label": "Lewes"
                },
                {
                  "x": 2.74,
                  "y": 1.01,
                  "label": "Rother"
                },
                {
                  "x": 7.6,
                  "y": 3.9,
                  "label": "Wealden"
                },
                {
                  "x": 5.77,
                  "y": 1.21,
                  "label": "Basildon"
                },
                {
                  "x": 10.78,
                  "y": 4.25,
                  "label": "Braintree"
                },
                {
                  "x": 2.99,
                  "y": 1.51,
                  "label": "Brentwood"
                },
                {
                  "x": 0.9,
                  "y": 0.32,
                  "label": "Castle Point"
                },
                {
                  "x": 8.74,
                  "y": 3.52,
                  "label": "Chelmsford"
                },
                {
                  "x": 8.51,
                  "y": 3.5,
                  "label": "Colchester"
                },
                {
                  "x": 3.45,
                  "y": 1.33,
                  "label": "Epping Forest"
                },
                {
                  "x": 5.12,
                  "y": 1.53,
                  "label": "Harlow"
                },
                {
                  "x": 3.58,
                  "y": 1.57,
                  "label": "Maldon"
                },
                {
                  "x": 4.58,
                  "y": 1.65,
                  "label": "Rochford"
                },
                {
                  "x": 10.13,
                  "y": 3.29,
                  "label": "Tendring"
                },
                {
                  "x": 4.84,
                  "y": 2.43,
                  "label": "Uttlesford"
                },
                {
                  "x": 2.61,
                  "y": 1.01,
                  "label": "Cheltenham"
                },
                {
                  "x": 0.49,
                  "y": 1.26,
                  "label": "Cotswold"
                },
                {
                  "x": 3.04,
                  "y": 1.77,
                  "label": "Forest of Dean"
                },
                {
                  "x": 6.0,
                  "y": 1.7,
                  "label": "Gloucester"
                },
                {
                  "x": 4.92,
                  "y": 2.4,
                  "label": "Stroud"
                },
                {
                  "x": 8.35,
                  "y": 4.49,
                  "label": "Tewkesbury"
                },
                {
                  "x": 8.32,
                  "y": 3.14,
                  "label": "Basingstoke and Deane"
                },
                {
                  "x": 4.41,
                  "y": 1.98,
                  "label": "East Hampshire"
                },
                {
                  "x": 6.75,
                  "y": 2.52,
                  "label": "Eastleigh"
                },
                {
                  "x": 0.42,
                  "y": 0.83,
                  "label": "Fareham"
                },
                {
                  "x": 0.45,
                  "y": 0.28,
                  "label": "Gosport"
                },
                {
                  "x": 3.07,
                  "y": 1.76,
                  "label": "Hart"
                },
                {
                  "x": 2.9,
                  "y": 1.44,
                  "label": "Havant"
                },
                {
                  "x": -0.29,
                  "y": 0.77,
                  "label": "New Forest"
                },
                {
                  "x": 6.09,
                  "y": 1.73,
                  "label": "Rushmoor"
                },
                {
                  "x": 4.54,
                  "y": 1.82,
                  "label": "Test Valley"
                },
                {
                  "x": 8.94,
                  "y": 4.0,
                  "label": "Winchester"
                },
                {
                  "x": 3.99,
                  "y": 1.76,
                  "label": "Broxbourne"
                },
                {
                  "x": 7.11,
                  "y": 2.36,
                  "label": "Dacorum"
                },
                {
                  "x": 2.11,
                  "y": 0.79,
                  "label": "Hertsmere"
                },
                {
                  "x": 3.78,
                  "y": 1.76,
                  "label": "North Hertfordshire"
                },
                {
                  "x": 2.13,
                  "y": 0.98,
                  "label": "Three Rivers"
                },
                {
                  "x": 5.15,
                  "y": 2.98,
                  "label": "Watford"
                },
                {
                  "x": 9.3,
                  "y": 2.7,
                  "label": "Ashford"
                },
                {
                  "x": 5.98,
                  "y": 3.23,
                  "label": "Canterbury"
                },
                {
                  "x": 9.48,
                  "y": 2.73,
                  "label": "Dartford"
                },
                {
                  "x": 4.51,
                  "y": 2.52,
                  "label": "Dover"
                },
                {
                  "x": 4.34,
                  "y": 1.68,
                  "label": "Gravesham"
                },
                {
                  "x": 14.72,
                  "y": 4.41,
                  "label": "Maidstone"
                },
                {
                  "x": 2.36,
                  "y": 0.79,
                  "label": "Sevenoaks"
                },
                {
                  "x": 2.12,
                  "y": 1.61,
                  "label": "Folkestone and Hythe"
                },
                {
                  "x": 8.45,
                  "y": 3.17,
                  "label": "Swale"
                },
                {
                  "x": 2.96,
                  "y": 2.86,
                  "label": "Thanet"
                },
                {
                  "x": 5.55,
                  "y": 2.02,
                  "label": "Tonbridge and Malling"
                },
                {
                  "x": 4.45,
                  "y": 2.38,
                  "label": "Tunbridge Wells"
                },
                {
                  "x": 6.21,
                  "y": 1.09,
                  "label": "Burnley"
                },
                {
                  "x": 3.91,
                  "y": 1.21,
                  "label": "Chorley"
                },
                {
                  "x": 4.94,
                  "y": 1.67,
                  "label": "Fylde"
                },
                {
                  "x": 4.64,
                  "y": 0.83,
                  "label": "Hyndburn"
                },
                {
                  "x": 2.89,
                  "y": 1.05,
                  "label": "Lancaster"
                },
                {
                  "x": 4.38,
                  "y": 0.82,
                  "label": "Pendle"
                },
                {
                  "x": 16.71,
                  "y": 4.76,
                  "label": "Preston"
                },
                {
                  "x": 5.07,
                  "y": 2.05,
                  "label": "Ribble Valley"
                },
                {
                  "x": 2.68,
                  "y": 0.65,
                  "label": "Rossendale"
                },
                {
                  "x": 6.35,
                  "y": 2.27,
                  "label": "South Ribble"
                },
                {
                  "x": 6.46,
                  "y": 1.89,
                  "label": "West Lancashire"
                },
                {
                  "x": 8.09,
                  "y": 2.73,
                  "label": "Wyre"
                },
                {
                  "x": 5.15,
                  "y": 1.23,
                  "label": "Blaby"
                },
                {
                  "x": 6.81,
                  "y": 2.71,
                  "label": "Charnwood"
                },
                {
                  "x": 8.32,
                  "y": 3.16,
                  "label": "Harborough"
                },
                {
                  "x": 4.59,
                  "y": 2.33,
                  "label": "Hinckley and Bosworth"
                },
                {
                  "x": 2.94,
                  "y": 1.52,
                  "label": "Melton"
                },
                {
                  "x": 8.26,
                  "y": 3.0,
                  "label": "North West Leicestershire"
                },
                {
                  "x": 3.75,
                  "y": 0.9,
                  "label": "Oadby and Wigston"
                },
                {
                  "x": 1.28,
                  "y": 1.28,
                  "label": "Boston"
                },
                {
                  "x": 3.84,
                  "y": 2.29,
                  "label": "East Lindsey"
                },
                {
                  "x": 0.94,
                  "y": 0.55,
                  "label": "Lincoln"
                },
                {
                  "x": 4.76,
                  "y": 2.51,
                  "label": "North Kesteven"
                },
                {
                  "x": 5.27,
                  "y": 2.73,
                  "label": "South Holland"
                },
                {
                  "x": 4.32,
                  "y": 2.38,
                  "label": "South Kesteven"
                },
                {
                  "x": 4.16,
                  "y": 2.42,
                  "label": "West Lindsey"
                },
                {
                  "x": 5.93,
                  "y": 3.35,
                  "label": "Breckland"
                },
                {
                  "x": 7.41,
                  "y": 3.27,
                  "label": "Broadland"
                },
                {
                  "x": 0.78,
                  "y": 1.36,
                  "label": "Great Yarmouth"
                },
                {
                  "x": 2.02,
                  "y": 1.99,
                  "label": "King's Lynn and West Norfolk"
                },
                {
                  "x": 0.47,
                  "y": 1.31,
                  "label": "North Norfolk"
                },
                {
                  "x": 2.46,
                  "y": 1.23,
                  "label": "Norwich"
                },
                {
                  "x": 7.89,
                  "y": 3.92,
                  "label": "South Norfolk"
                },
                {
                  "x": 4.22,
                  "y": 1.67,
                  "label": "Ashfield"
                },
                {
                  "x": 8.13,
                  "y": 3.67,
                  "label": "Bassetlaw"
                },
                {
                  "x": 3.17,
                  "y": 1.41,
                  "label": "Broxtowe"
                },
                {
                  "x": 3.81,
                  "y": 2.12,
                  "label": "Gedling"
                },
                {
                  "x": 3.09,
                  "y": 1.43,
                  "label": "Mansfield"
                },
                {
                  "x": 5.33,
                  "y": 2.59,
                  "label": "Newark and Sherwood"
                },
                {
                  "x": 8.44,
                  "y": 4.08,
                  "label": "Rushcliffe"
                },
                {
                  "x": 10.35,
                  "y": 4.07,
                  "label": "Cherwell"
                },
                {
                  "x": 5.56,
                  "y": 1.55,
                  "label": "Oxford"
                },
                {
                  "x": 8.08,
                  "y": 4.02,
                  "label": "South Oxfordshire"
                },
                {
                  "x": 12.82,
                  "y": 4.85,
                  "label": "Vale of White Horse"
                },
                {
                  "x": 6.3,
                  "y": 2.74,
                  "label": "West Oxfordshire"
                },
                {
                  "x": 3.7,
                  "y": 1.49,
                  "label": "Cannock Chase"
                },
                {
                  "x": 7.05,
                  "y": 3.0,
                  "label": "East Staffordshire"
                },
                {
                  "x": 6.39,
                  "y": 2.92,
                  "label": "Lichfield"
                },
                {
                  "x": 5.05,
                  "y": 1.51,
                  "label": "Newcastle-under-Lyme"
                },
                {
                  "x": 4.02,
                  "y": 1.71,
                  "label": "South Staffordshire"
                },
                {
                  "x": 5.7,
                  "y": 2.17,
                  "label": "Stafford"
                },
                {
                  "x": 0.79,
                  "y": 0.99,
                  "label": "Staffordshire Moorlands"
                },
                {
                  "x": 2.55,
                  "y": 1.27,
                  "label": "Tamworth"
                },
                {
                  "x": 5.11,
                  "y": 2.57,
                  "label": "Babergh"
                },
                {
                  "x": -0.18,
                  "y": 0.86,
                  "label": "Ipswich"
                },
                {
                  "x": 9.65,
                  "y": 4.45,
                  "label": "Mid Suffolk"
                },
                {
                  "x": 3.03,
                  "y": 1.91,
                  "label": "Elmbridge"
                },
                {
                  "x": 2.36,
                  "y": 0.68,
                  "label": "Epsom and Ewell"
                },
                {
                  "x": 8.13,
                  "y": 2.63,
                  "label": "Guildford"
                },
                {
                  "x": 1.21,
                  "y": 0.97,
                  "label": "Mole Valley"
                },
                {
                  "x": 7.92,
                  "y": 2.14,
                  "label": "Reigate and Banstead"
                },
                {
                  "x": 5.18,
                  "y": 1.83,
                  "label": "Runnymede"
                },
                {
                  "x": 4.15,
                  "y": 0.96,
                  "label": "Spelthorne"
                },
                {
                  "x": 4.44,
                  "y": 1.27,
                  "label": "Surrey Heath"
                },
                {
                  "x": 2.19,
                  "y": 0.96,
                  "label": "Tandridge"
                },
                {
                  "x": 8.34,
                  "y": 3.07,
                  "label": "Waverley"
                },
                {
                  "x": 2.3,
                  "y": 1.56,
                  "label": "Woking"
                },
                {
                  "x": 2.35,
                  "y": 1.03,
                  "label": "North Warwickshire"
                },
                {
                  "x": 9.74,
                  "y": 3.67,
                  "label": "Nuneaton and Bedworth"
                },
                {
                  "x": 10.76,
                  "y": 3.78,
                  "label": "Rugby"
                },
                {
                  "x": 12.83,
                  "y": 4.93,
                  "label": "Stratford-on-Avon"
                },
                {
                  "x": 9.23,
                  "y": 3.43,
                  "label": "Warwick"
                },
                {
                  "x": 0.17,
                  "y": 0.64,
                  "label": "Adur"
                },
                {
                  "x": 7.11,
                  "y": 3.86,
                  "label": "Arun"
                },
                {
                  "x": 5.71,
                  "y": 3.0,
                  "label": "Chichester"
                },
                {
                  "x": 5.86,
                  "y": 0.75,
                  "label": "Crawley"
                },
                {
                  "x": 4.52,
                  "y": 1.87,
                  "label": "Horsham"
                },
                {
                  "x": 10.65,
                  "y": 4.22,
                  "label": "Mid Sussex"
                },
                {
                  "x": 2.19,
                  "y": 1.05,
                  "label": "Worthing"
                },
                {
                  "x": 2.52,
                  "y": 0.74,
                  "label": "Bromsgrove"
                },
                {
                  "x": 4.41,
                  "y": 1.55,
                  "label": "Malvern Hills"
                },
                {
                  "x": 0.57,
                  "y": 0.68,
                  "label": "Redditch"
                },
                {
                  "x": 3.33,
                  "y": 1.27,
                  "label": "Worcester"
                },
                {
                  "x": 6.09,
                  "y": 2.35,
                  "label": "Wychavon"
                },
                {
                  "x": 2.39,
                  "y": 1.74,
                  "label": "Wyre Forest"
                },
                {
                  "x": 2.13,
                  "y": 1.53,
                  "label": "St Albans"
                },
                {
                  "x": 2.0,
                  "y": 1.24,
                  "label": "Welwyn Hatfield"
                },
                {
                  "x": 7.37,
                  "y": 3.79,
                  "label": "East Hertfordshire"
                },
                {
                  "x": 2.72,
                  "y": 1.02,
                  "label": "Stevenage"
                },
                {
                  "x": 3.33,
                  "y": 3.24,
                  "label": "East Suffolk"
                },
                {
                  "x": 8.59,
                  "y": 2.98,
                  "label": "West Suffolk"
                },
                {
                  "x": 13.56,
                  "y": 2.63,
                  "label": "Bolton"
                },
                {
                  "x": 5.41,
                  "y": 1.12,
                  "label": "Bury"
                },
                {
                  "x": 37.63,
                  "y": 11.13,
                  "label": "Manchester"
                },
                {
                  "x": 9.91,
                  "y": 1.9,
                  "label": "Oldham"
                },
                {
                  "x": 13.51,
                  "y": 2.48,
                  "label": "Rochdale"
                },
                {
                  "x": 26.14,
                  "y": 10.4,
                  "label": "Salford"
                },
                {
                  "x": 9.61,
                  "y": 2.04,
                  "label": "Stockport"
                },
                {
                  "x": 9.6,
                  "y": 2.0,
                  "label": "Tameside"
                },
                {
                  "x": 5.39,
                  "y": 2.54,
                  "label": "Trafford"
                },
                {
                  "x": 17.29,
                  "y": 5.06,
                  "label": "Wigan"
                },
                {
                  "x": 8.74,
                  "y": 2.39,
                  "label": "Knowsley"
                },
                {
                  "x": 22.89,
                  "y": 6.92,
                  "label": "Liverpool"
                },
                {
                  "x": 6.5,
                  "y": 1.52,
                  "label": "St. Helens"
                },
                {
                  "x": 7.89,
                  "y": 3.05,
                  "label": "Sefton"
                },
                {
                  "x": 9.27,
                  "y": 2.45,
                  "label": "Wirral"
                },
                {
                  "x": 14.32,
                  "y": 4.63,
                  "label": "Doncaster"
                },
                {
                  "x": 12.99,
                  "y": 3.4,
                  "label": "Rotherham"
                },
                {
                  "x": 22.29,
                  "y": 4.23,
                  "label": "Newcastle upon Tyne"
                },
                {
                  "x": 6.27,
                  "y": 2.05,
                  "label": "North Tyneside"
                },
                {
                  "x": 3.34,
                  "y": 0.71,
                  "label": "South Tyneside"
                },
                {
                  "x": 12.69,
                  "y": 3.6,
                  "label": "Sunderland"
                },
                {
                  "x": 33.67,
                  "y": 15.24,
                  "label": "Birmingham"
                },
                {
                  "x": 20.61,
                  "y": 5.29,
                  "label": "Coventry"
                },
                {
                  "x": 10.35,
                  "y": 1.95,
                  "label": "Dudley"
                },
                {
                  "x": 11.02,
                  "y": 2.24,
                  "label": "Sandwell"
                },
                {
                  "x": 4.77,
                  "y": 2.06,
                  "label": "Solihull"
                },
                {
                  "x": 11.33,
                  "y": 2.02,
                  "label": "Walsall"
                },
                {
                  "x": 17.17,
                  "y": 3.18,
                  "label": "Wolverhampton"
                },
                {
                  "x": 10.92,
                  "y": 5.08,
                  "label": "Bradford"
                },
                {
                  "x": 3.91,
                  "y": 1.69,
                  "label": "Calderdale"
                },
                {
                  "x": 12.37,
                  "y": 3.84,
                  "label": "Kirklees"
                },
                {
                  "x": 31.07,
                  "y": 14.5,
                  "label": "Leeds"
                },
                {
                  "x": 15.65,
                  "y": 4.67,
                  "label": "Wakefield"
                },
                {
                  "x": 6.33,
                  "y": 1.74,
                  "label": "Gateshead"
                },
                {
                  "x": 19.58,
                  "y": 4.92,
                  "label": "Barking and Dagenham"
                },
                {
                  "x": 19.13,
                  "y": 8.87,
                  "label": "Barnet"
                },
                {
                  "x": 10.47,
                  "y": 2.42,
                  "label": "Bexley"
                },
                {
                  "x": 12.95,
                  "y": 7.76,
                  "label": "Brent"
                },
                {
                  "x": 6.15,
                  "y": 1.32,
                  "label": "Bromley"
                },
                {
                  "x": 5.69,
                  "y": 2.5,
                  "label": "Camden"
                },
                {
                  "x": 19.39,
                  "y": 8.01,
                  "label": "Croydon"
                },
                {
                  "x": 20.31,
                  "y": 5.89,
                  "label": "Ealing"
                },
                {
                  "x": -0.48,
                  "y": 3.45,
                  "label": "Enfield"
                },
                {
                  "x": 11.69,
                  "y": 4.88,
                  "label": "Greenwich"
                },
                {
                  "x": 6.16,
                  "y": 3.56,
                  "label": "Hackney"
                },
                {
                  "x": 6.91,
                  "y": 6.63,
                  "label": "Hammersmith and Fulham"
                },
                {
                  "x": 1.9,
                  "y": 4.88,
                  "label": "Haringey"
                },
                {
                  "x": 11.45,
                  "y": 2.81,
                  "label": "Harrow"
                },
                {
                  "x": 18.7,
                  "y": 2.79,
                  "label": "Havering"
                },
                {
                  "x": 21.56,
                  "y": 3.04,
                  "label": "Hillingdon"
                },
                {
                  "x": 11.32,
                  "y": 5.75,
                  "label": "Hounslow"
                },
                {
                  "x": 7.5,
                  "y": 2.05,
                  "label": "Islington"
                },
                {
                  "x": 1.47,
                  "y": 1.11,
                  "label": "Kensington and Chelsea"
                },
                {
                  "x": 4.77,
                  "y": 2.1,
                  "label": "Kingston upon Thames"
                },
                {
                  "x": -3.39,
                  "y": 1.88,
                  "label": "Lambeth"
                },
                {
                  "x": 1.02,
                  "y": 3.53,
                  "label": "Lewisham"
                },
                {
                  "x": 3.46,
                  "y": 1.9,
                  "label": "Merton"
                },
                {
                  "x": 25.29,
                  "y": 10.98,
                  "label": "Newham"
                },
                {
                  "x": 11.7,
                  "y": 1.44,
                  "label": "Redbridge"
                },
                {
                  "x": 1.4,
                  "y": 0.55,
                  "label": "Richmond upon Thames"
                },
                {
                  "x": 5.6,
                  "y": 5.2,
                  "label": "Southwark"
                },
                {
                  "x": 4.36,
                  "y": 1.71,
                  "label": "Sutton"
                },
                {
                  "x": 21.52,
                  "y": 9.44,
                  "label": "Tower Hamlets"
                },
                {
                  "x": 5.57,
                  "y": 4.17,
                  "label": "Waltham Forest"
                },
                {
                  "x": 11.43,
                  "y": 8.28,
                  "label": "Wandsworth"
                },
                {
                  "x": 6.61,
                  "y": 4.61,
                  "label": "Westminster"
                }
              ],
              "backgroundColor": "rgba(16,185,129,0.55)",
              "pointRadius": 3.5
            },
            {
              "label": "OLS Trendline (r=0.83)",
              "type": "line",
              "data": [
                {
                  "x": -3.39,
                  "y": -0.41
                },
                {
                  "x": 37.63,
                  "y": 12.26
                }
              ],
              "borderColor": "#f97316",
              "borderWidth": 2,
              "pointRadius": 0
            }
          ]
        },
        "definition": {
          "metric": "OLS regression of MHCLG Table 122 cumulative net additional dwellings (2021–2025) against ONS Nomis council population change.",
          "scope": "English Local Authorities matched across MHCLG Table 122 & ONS Nomis.",
          "nuance": "Tests directly whether local housing completions scaled with local population additions."
        }
      },
      {
        "headline": "National context: England added ~220k–250k housing units (dwellings, not people — ~520k–590k capacity at 2.36 persons/household) while UK net migration jumped above 900k in 2022–2023.",
        "footnote": "*Unit note: Net Dwellings counts housing units (houses/flats), NOT individual people (England & Wales Census 2021 average household size = 2.36 persons). Geography also differs: UK Net Migration (2006–2024 spliced LTIM) vs England Net Additional Dwellings. Descriptive context only. Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/datasets/longterminternationalimmigrationemigrationandnetmigrationflowsprovisional\" target=\"_blank\" rel=\"noopener\">ONS Long-Term International Migration</a> | <a href=\"https://www.gov.uk/government/statistics/housing-supply-net-additional-dwellings-england-2024-to-2025\" target=\"_blank\" rel=\"noopener\">MHCLG Housing Supply: Net Additional Dwellings (England)</a>",
        "chart": {
          "type": "line",
          "title": "Context Overlay: UK Net Migration (People) vs England Net Dwellings (Housing Units · 000s · 2006–2024)",
          "labels": [
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
            "2024"
          ],
          "y_title": "Thousands (People vs Housing Units)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "UK Net Migration (000s of people)",
              "data": [
                265.0,
                273.0,
                229.0,
                229.0,
                256.0,
                205.0,
                195.0,
                244.0,
                284.0,
                303.0,
                249.0,
                208.0,
                276.0,
                184.0,
                93.0,
                467.0,
                891.0,
                848.0,
                331.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.14)"
            },
            {
              "label": "England Net Dwellings (000s of housing units)",
              "data": [
                214.9,
                223.5,
                182.8,
                144.9,
                137.4,
                140.8,
                130.6,
                142.5,
                176.6,
                195.5,
                223.2,
                228.2,
                247.8,
                248.6,
                217.8,
                234.5,
                234.3,
                221.4,
                208.6
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.12)"
            }
          ]
        },
        "definition": {
          "metric": "Descriptive comparison of UK-wide Net Migration (000s of people, 2006–2024) and England Net Additional Dwellings (000s of housing units, NOT people).",
          "scope": "UK migration vs England housing supply (MHCLG Table 120).",
          "nuance": "1 dwelling = 1 housing unit (~2.36 persons/household in Census 2021), NOT 1 person. Geography also differs (UK vs England)."
        }
      },
      {
        "headline": "Regional context: London rents surged earliest and highest above 10% in 2024, though North East rents also rose sharply.",
        "footnote": "*Spliced regional rent inflation (IPHRP 2006–2015; PIPR 2016–2025) comparing London, England average, and North East. Source: <a href=\"https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics\" target=\"_blank\" rel=\"noopener\">ONS Price Index of Private Rents (PIPR & IPHRP)</a>",
        "chart": {
          "type": "line",
          "title": "Regional Rent Divergence: London vs England vs North East (% · 2006–2025)",
          "labels": [
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
          "y_title": "Annual Rent Growth (%)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "London (%)",
              "data": [
                2.29,
                2.96,
                4.56,
                2.3,
                -0.66,
                3.66,
                5.09,
                3.92,
                2.26,
                3.67,
                3.8,
                1.35,
                -1.08,
                1.76,
                1.68,
                -1.4,
                2.76,
                8.45,
                10.32,
                6.65
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.12)"
            },
            {
              "label": "England (%)",
              "data": [
                2.49,
                2.66,
                3.44,
                1.64,
                -0.73,
                2.33,
                2.9,
                2.19,
                1.57,
                2.47,
                3.53,
                2.49,
                0.8,
                1.85,
                1.73,
                1.27,
                4.15,
                7.17,
                8.72,
                6.4
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.08)"
            },
            {
              "label": "North East (%)",
              "data": [
                3.04,
                2.43,
                2.93,
                2.07,
                0.17,
                1.22,
                0.73,
                0.55,
                0.32,
                0.48,
                1.64,
                1.87,
                0.24,
                0.74,
                1.36,
                2.57,
                3.47,
                5.5,
                6.71,
                9.02
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.10)"
            }
          ]
        },
        "definition": {
          "metric": "Annual private rent inflation (%) across London, England average, and the North East.",
          "scope": "England regions, 2006–2025 (spliced IPHRP/PIPR).",
          "nuance": "Highlights regional rent cycles masked by national averages."
        }
      }
    ],
    "has_uk_maps": true
  },
  {
    "id": "hyp_culture",
    "section": "Part 4 · Are They Blending In or Causing Social Problems?",
    "ref": "4.1",
    "title": "Population Dynamics: Source Regions, Ethnicity & Religion",
    "question": "How have incoming visa regions, UK ethnicity (headline & sub-level), and religious composition shifted over time?",
    "context_note": "<strong>Data Boundaries:</strong> UK visas log <strong>world region/nationality</strong>, not ethnicity; overall UK resident ethnicity &amp; religion come from the decennial ONS Census (2011 vs 2021).",
    "charts": [
      {
        "headline": "South Asia (32%→42%) and Sub-Saharan Africa (8%→23%) expanded sharply at the 2023 peak as East & SE Asia fell from 27% to 12%, while Europe spiked briefly in 2022 (Ukraine).",
        "footnote": "*100% stacked share of issued non-visit entry-clearance visas by world region (2006–2025). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "y_min": 0,
          "y_max": 100,
          "title": "Incoming Non-Visit Visas by World Region (% Share · 2006–2025)",
          "labels": [
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
          "y_title": "Share of Issued Visas (%)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "South Asia (%)",
              "data": [
                36.3,
                36.6,
                36.3,
                43.6,
                41.7,
                40.1,
                34.1,
                31.4,
                32.4,
                32.5,
                31.8,
                30.7,
                31.0,
                32.3,
                37.4,
                35.2,
                36.5,
                42.2,
                40.3,
                39.1
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "Sub-Saharan Africa (%)",
              "data": [
                12.1,
                11.9,
                12.2,
                9.7,
                9.7,
                8.9,
                9.2,
                8.8,
                8.1,
                7.8,
                7.0,
                6.8,
                7.6,
                8.3,
                10.1,
                11.1,
                16.6,
                23.0,
                13.6,
                12.4
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "East & SE Asia (%)",
              "data": [
                11.2,
                11.8,
                12.6,
                12.8,
                14.6,
                16.8,
                20.3,
                20.8,
                21.2,
                23.1,
                23.9,
                25.9,
                26.7,
                27.1,
                24.3,
                25.5,
                13.5,
                12.4,
                16.5,
                15.9
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Europe (%)",
              "data": [
                11.2,
                11.6,
                8.7,
                6.8,
                7.0,
                7.8,
                8.4,
                8.9,
                7.9,
                6.7,
                8.7,
                9.9,
                9.1,
                9.0,
                8.8,
                7.4,
                17.8,
                5.7,
                5.1,
                5.2
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "MENA & Central Asia (%)",
              "data": [
                9.0,
                9.5,
                11.8,
                11.0,
                10.7,
                10.2,
                11.5,
                12.8,
                13.0,
                12.0,
                12.5,
                11.8,
                11.6,
                10.9,
                9.5,
                7.5,
                6.0,
                6.9,
                10.7,
                11.5
              ],
              "backgroundColor": "#f59e0b"
            },
            {
              "label": "Americas, Oceania & Other (%)",
              "data": [
                20.1,
                18.5,
                18.3,
                16.0,
                16.3,
                16.2,
                16.5,
                17.2,
                17.3,
                18.0,
                16.0,
                14.9,
                13.9,
                12.3,
                9.9,
                13.2,
                9.6,
                9.8,
                13.8,
                15.9
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "100% stacked share of issued non-visit entry-clearance visas by applicant world region.",
          "scope": "UK-wide, 2006–2025 (Home Office Data_Vis_D02).",
          "nuance": "Visas record nationality/region rather than ethnicity."
        }
      },
      {
        "headline": "Overall England & Wales ethnic composition shifted from 86.0% White in 2011 to 81.7% White in 2021 as Asian (9.3%) and Black (4.0%) shares grew.",
        "footnote": "*ONS Census 2011 and 2021 high-level ethnic group distribution (England & Wales, % of resident population). Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/bulletins/ethnicgroupenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Ethnic Group (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "England & Wales Ethnic Composition Over Time (ONS Census 2011 vs 2021, %)",
          "labels": [
            "White",
            "Asian",
            "Black",
            "Mixed",
            "Other"
          ],
          "y_title": "% of Resident Population",
          "datasets": [
            {
              "label": "2011 Census (%)",
              "data": [
                86.0,
                7.5,
                3.3,
                2.2,
                1.0
              ],
              "backgroundColor": "#64748b"
            },
            {
              "label": "2021 Census (%)",
              "data": [
                81.7,
                9.3,
                4.0,
                2.9,
                2.1
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Share of England & Wales usual resident population by high-level ethnic group in ONS Census 2011 and 2021 (%).",
          "scope": "England & Wales, 2011 vs 2021.",
          "nuance": "Decennial Census is the official source for UK resident ethnic composition."
        }
      },
      {
        "headline": "Sub-level Census breakdown: White: British fell from 80.5% to 74.4%, while Other White (4.4%→6.2%), Indian (2.5%→3.1%), Pakistani (2.0%→2.7%) & Black African (1.8%→2.5%) led growth.",
        "footnote": "*Top 12 non-White-British detailed ethnic groups in England & Wales (ONS Census 2011 vs 2021, %). Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/bulletins/ethnicgroupenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Ethnic Group (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "England & Wales Sub-Level Ethnic Composition (Top 12 Minority / Other-White Groups, 2011 vs 2021, %)",
          "labels": [
            "White: Other White",
            "Asian: Indian",
            "Asian: Pakistani",
            "Black: African",
            "Asian: Other Asian",
            "Other ethnic group: Any other ethnic group",
            "Asian: Bangladeshi",
            "Black: Caribbean",
            "White: Irish",
            "Mixed: White and Black Caribbean",
            "Mixed: White and Asian",
            "Mixed: Other Mixed or Multiple ethnic groups"
          ],
          "y_title": "% of Resident Population",
          "datasets": [
            {
              "label": "2011 Census (%)",
              "data": [
                4.4,
                2.5,
                2.0,
                1.8,
                1.5,
                0.6,
                0.8,
                1.1,
                0.9,
                0.8,
                0.6,
                0.5
              ],
              "backgroundColor": "#64748b"
            },
            {
              "label": "2021 Census (%)",
              "data": [
                6.2,
                3.1,
                2.7,
                2.5,
                1.6,
                1.6,
                1.1,
                1.0,
                0.9,
                0.9,
                0.8,
                0.8
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Share of England & Wales usual resident population by high-level ethnic group in ONS Census 2011 and 2021 (%).",
          "scope": "England & Wales, 2011 vs 2021.",
          "nuance": "Decennial Census is the official source for UK resident ethnic composition."
        }
      },
      {
        "headline": "Religion (ONS Census 2011 vs 2021): Christian share fell from 59.3% to 46.2% while No Religion surged from 25.2% to 37.2% and Muslim rose from 4.9% to 6.5%.",
        "footnote": "*ONS Census 2011 and 2021 religious composition (England & Wales, % of overall population). Source: <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021\" target=\"_blank\" rel=\"noopener\">ONS Census 2021 Religion (England & Wales)</a>",
        "chart": {
          "type": "bar",
          "title": "England & Wales Religion Over Time (ONS Census 2011 vs 2021, %)",
          "labels": [
            "Buddhist",
            "Christian",
            "Hindu",
            "Jewish",
            "Muslim",
            "Sikh",
            "Other religion",
            "No religion"
          ],
          "y_title": "% of Resident Population",
          "datasets": [
            {
              "label": "2011 Census (%)",
              "data": [
                0.4,
                59.3,
                1.5,
                0.5,
                4.9,
                0.8,
                0.4,
                25.2
              ],
              "backgroundColor": "#64748b"
            },
            {
              "label": "2021 Census (%)",
              "data": [
                0.5,
                46.2,
                1.7,
                0.5,
                6.5,
                0.9,
                0.6,
                37.2
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Share of England & Wales usual residents by religion in ONS Census 2011 and 2021 (%).",
          "scope": "England & Wales, 2011 vs 2021.",
          "nuance": "Christian share declined from 59.3% to 46.2% while No Religion rose from 25.2% to 37.2%."
        }
      }
    ]
  },
  {
    "id": "hyp_retention",
    "section": "Part 4 · Are They Blending In or Causing Social Problems?",
    "ref": "4.2",
    "title": "Are They Staying Long-Term & Naturalising? (5-Year Retention & Citizenship)",
    "question": "What share of visa holders actually stay 5+ years, how has cohort retention changed since 2008, and how many naturalise each year?",
    "charts": [
      {
        "headline": "Who stays long-term? After 5 years, 54.6% of the 2020 visa cohort still held valid leave or settlement — while 59.3% of Study visas had expired.",
        "footnote": "*Home Office Migrant Journey 2025 (Table MJ_03): status at end-2025 of people issued initial leave in 2020. Hover for % share. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "y_min": 0,
          "y_max": 100,
          "title": "5-Year Retention & Settlement Rate by Initial Visa Route (2020 Cohort at End-2025, %)",
          "labels": [
            "All leave types",
            "Study",
            "Work",
            "Family",
            "Asylum"
          ],
          "y_title": "Share of Cohort (%)",
          "datasets": [
            {
              "label": "Indefinite Leave to Remain (Settled, %)",
              "data": [
                14.3,
                0.2,
                30.5,
                46.5,
                2.8
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Valid Leave to Remain (Still in UK, %)",
              "data": [
                40.4,
                40.5,
                27.7,
                39.7,
                96.2
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Leave Expired (Left / Switched / Expired, %)",
              "data": [
                45.4,
                59.3,
                41.8,
                13.8,
                1.0
              ],
              "backgroundColor": "#64748b"
            }
          ]
        },
        "definition": {
          "metric": "Share of the 2020 initial-leave cohort holding Indefinite Leave to Remain (ILR), Valid Leave, or Expired Leave at end-2025 (%).",
          "scope": "All Home Office initial entry/leave grants in 2020 tracked longitudinally in Migrant Journey 2025 (Table MJ_03).",
          "nuance": "Expired leave covers departures, non-renewals, and visa expiry; Valid Leave includes Graduate Route and in-country switchers."
        }
      },
      {
        "headline": "Retention over time (2008–2020 cohorts): Study 5-year retention jumped from 17.3% (2015 cohort) to 40.7% (2020 cohort) after Graduate Route launched.",
        "footnote": "*Tracks each annual initial-leave cohort (2008–2020) exactly 5 years later (2013–2025). Dashed = individual routes; Solid = All Leave Types. Source: <a href=\"https://www.gov.uk/government/statistics/migrant-journey-2025-report\" target=\"_blank\" rel=\"noopener\">Home Office Migrant Journey 2025 Report</a>",
        "chart": {
          "type": "line",
          "title": "5-Year Retention Rate Over Time by Initial Visa Route (2008–2020 Cohorts, %)",
          "labels": [
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
            "2020"
          ],
          "y_title": "% Still Holding Leave or ILR at Year 5",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Asylum (%)",
              "data": [
                94.5,
                95.3,
                96.5,
                96.7,
                96.9,
                97.5,
                97.8,
                98.5,
                98.7,
                98.5,
                98.4,
                97.5,
                99.0
              ],
              "borderColor": "#ef4444",
              "backgroundColor": "rgba(239,68,68,0.10)",
              "borderDash": [
                5,
                4
              ]
            },
            {
              "label": "Family (%)",
              "data": [
                87.4,
                87.0,
                89.0,
                90.2,
                91.0,
                89.5,
                89.9,
                90.4,
                91.1,
                91.8,
                91.2,
                90.9,
                86.2
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.10)",
              "borderDash": [
                5,
                4
              ]
            },
            {
              "label": "Work (%)",
              "data": [
                24.9,
                31.6,
                31.1,
                26.3,
                23.5,
                24.0,
                25.4,
                25.7,
                28.3,
                32.8,
                38.5,
                45.7,
                58.2
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56,189,248,0.10)",
              "borderDash": [
                5,
                4
              ]
            },
            {
              "label": "All Leave Types (%)",
              "data": [
                35.3,
                35.1,
                34.3,
                31.5,
                30.6,
                29.2,
                30.8,
                32.6,
                34.7,
                37.6,
                40.9,
                44.5,
                54.6
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.10)",
              "borderWidth": 2.8
            },
            {
              "label": "Study (%)",
              "data": [
                23.4,
                24.6,
                23.7,
                20.5,
                18.3,
                17.9,
                17.9,
                17.3,
                18.0,
                20.6,
                22.8,
                25.4,
                40.7
              ],
              "borderColor": "#818cf8",
              "backgroundColor": "rgba(129,140,248,0.12)",
              "borderDash": [
                5,
                4
              ]
            }
          ]
        },
        "definition": {
          "metric": "Cohort retention (%) = (ILR + Valid Leave at Year 5) / Initial Cohort Total × 100, evaluated 5 years after initial grant.",
          "scope": "Annual cohorts 2008–2020 (observed at end of 2013–2025) from Home Office Data_MJ_D01.",
          "nuance": "Shows how long-term stay behaviour shifted across policy regimes (e.g. Graduate Route introduction in July 2021 for the 2020 cohort)."
        }
      },
      {
        "headline": "British citizenship grants reached 236.2k in 2025 (0.34% of UK population), below the 2009–2013 peak above 200k.",
        "footnote": "*Home Office British Citizenship grants (Data_Cit_D02, 2005–2025) divided by ONS UKPOP mid-year population. Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office British Citizenship Grants (Jun 2026)</a> | <a href=\"https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop\" target=\"_blank\" rel=\"noopener\">ONS UK Population Mid-Year Estimates (UKPOP)</a>",
        "chart": {
          "type": "bar",
          "title": "Annual British Citizenship Grants (000s) & % of UK Population (2005–2025)",
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
          "y_title": "Citizenship Grants (000s)",
          "y1_title": "% of UK Population",
          "y1_suffix": "%",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "Citizenship Grants (000s)",
              "data": [
                161.7,
                154.0,
                164.6,
                129.4,
                203.8,
                195.1,
                177.9,
                194.4,
                208.1,
                125.8,
                118.1,
                149.4,
                123.2,
                157.0,
                159.4,
                130.6,
                189.8,
                176.0,
                206.6,
                269.8,
                236.2
              ],
              "backgroundColor": "rgba(56,189,248,0.72)",
              "yAxisID": "y"
            },
            {
              "label": "% of UK Population",
              "type": "line",
              "data": [
                0.27,
                0.25,
                0.27,
                0.21,
                0.33,
                0.31,
                0.28,
                0.3,
                0.32,
                0.2,
                0.18,
                0.23,
                0.19,
                0.24,
                0.24,
                0.2,
                0.28,
                0.26,
                0.3,
                0.39,
                0.34
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.15)",
              "yAxisID": "y1"
            }
          ]
        },
        "definition": {
          "metric": "Annual grants of British citizenship (naturalisation & registration) in thousands, and as % of ONS UKPOP.",
          "scope": "UK-wide, 2005–2025 (Home Office Data_Cit_D02).",
          "nuance": "Naturalisation typically occurs 5–6+ years after arrival (after ILR), so citizenship grants lag arrival waves."
        }
      }
    ]
  },
  {
    "id": "hyp_towns",
    "section": "Part 4 · Are They Blending In or Causing Social Problems?",
    "ref": "4.3",
    "title": "What Happens in Towns With High Asylum Rates & Local Perspective?",
    "question": "How do the top 20 asylum-dispersal councils compare with the rest of the UK on population growth, rents, and 2016 Leave vote share?",
    "charts": [
      {
        "headline": "Top 20 high-asylum councils (avg 42.2 supported per 10k vs 9.5 elsewhere) saw slightly higher rent rises (29.0% vs 27.8%) and higher 2016 Leave votes (59.8% vs 53.9%), despite similar population growth.",
        "footnote": "*Compares the Top 20 Local Authorities by supported asylum seekers per 10,000 residents (Home Office Data_Asy_D11) against all other matched UK councils (ONS Nomis, ONS PIPR, Electoral Commission). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum Support by Local Authority (Jun 2026)</a> | <a href=\"https://www.nomisweb.co.uk/datasets/pestsnew\" target=\"_blank\" rel=\"noopener\">ONS Mid-Year Population Estimates (Nomis NM_2002_1)</a> | <a href=\"https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics\" target=\"_blank\" rel=\"noopener\">ONS Price Index of Private Rents (PIPR & IPHRP)</a> | <a href=\"https://www.electoralcommission.org.uk/who-we-are-and-what-we-do/elections-and-referendums/past-elections-and-referendums/eu-referendum/results-and-turnout-eu-referendum\" target=\"_blank\" rel=\"noopener\">Electoral Commission 2016 EU Referendum Results by LA</a>",
        "chart": {
          "type": "bar",
          "title": "What Happens in High-Asylum Towns? Top 20 Asylum-Dispersal Councils vs Rest of UK (%)",
          "labels": [
            "Pop Growth 2021–25 (%)",
            "Private Rent Rise 2021–25 (%)",
            "2016 Leave Vote (%)"
          ],
          "y_title": "Mean (%)",
          "datasets": [
            {
              "label": "Top 20 High-Asylum Councils",
              "data": [
                5.33,
                28.97,
                59.8
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Rest of UK Councils",
              "data": [
                3.8,
                27.77,
                53.9
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Compares the Top 20 Local Authorities by supported asylum seekers per 10,000 residents (Home Office Data_Asy_D11) against all other matched UK councils on Pop Growth (2021–25), Private Rent Rise (2021–25), and 2016 Leave Vote (%).",
          "scope": "Matched UK Local Authorities (Home Office, ONS Nomis, ONS PIPR, Electoral Commission).",
          "nuance": "Tests whether high-asylum dispersal towns experienced unusually fast population or rent growth compared with the rest of the UK."
        }
      },
      {
        "headline": "Perspective vs Exposure (1): across 303 councils, 2016 Leave vote % shows virtually zero linear correlation with 2021–2025 population growth (r = 0.07, R² = 0.01).",
        "footnote": "*Electoral Commission 2016 Leave % vs ONS Nomis 2021–2025 population growth %. Source: <a href=\"https://www.electoralcommission.org.uk/who-we-are-and-what-we-do/elections-and-referendums/past-elections-and-referendums/eu-referendum/results-and-turnout-eu-referendum\" target=\"_blank\" rel=\"noopener\">Electoral Commission 2016 EU Referendum Results by LA</a> | <a href=\"https://www.nomisweb.co.uk/datasets/pestsnew\" target=\"_blank\" rel=\"noopener\">ONS Mid-Year Population Estimates (Nomis NM_2002_1)</a>",
        "chart": {
          "type": "scatter",
          "title": "Perspective vs Exposure (1): Council Leave Vote % (2016) vs Pop Growth % (N=303 Councils)",
          "x_title": "Council Population Growth 2021–2025 (%)",
          "y_title": "2016 EU Referendum Leave Vote (%)",
          "datasets": [
            {
              "label": "Matched Councils",
              "data": [
                {
                  "x": 7.65,
                  "y": 69.6,
                  "label": "Hartlepool"
                },
                {
                  "x": 6.15,
                  "y": 65.5,
                  "label": "Middlesbrough"
                },
                {
                  "x": 2.15,
                  "y": 66.2,
                  "label": "Redcar and Cleveland"
                },
                {
                  "x": 5.14,
                  "y": 61.7,
                  "label": "Stockton-on-Tees"
                },
                {
                  "x": 4.8,
                  "y": 56.2,
                  "label": "Darlington"
                },
                {
                  "x": 2.6,
                  "y": 57.4,
                  "label": "Halton"
                },
                {
                  "x": 2.01,
                  "y": 54.3,
                  "label": "Warrington"
                },
                {
                  "x": 5.71,
                  "y": 56.3,
                  "label": "Blackburn with Darwen"
                },
                {
                  "x": 1.78,
                  "y": 67.5,
                  "label": "Blackpool"
                },
                {
                  "x": 2.53,
                  "y": 67.6,
                  "label": "Kingston upon Hull, City of"
                },
                {
                  "x": 5.01,
                  "y": 60.4,
                  "label": "East Riding of Yorkshire"
                },
                {
                  "x": 1.85,
                  "y": 69.9,
                  "label": "North East Lincolnshire"
                },
                {
                  "x": 0.88,
                  "y": 66.3,
                  "label": "North Lincolnshire"
                },
                {
                  "x": 3.6,
                  "y": 42.0,
                  "label": "York"
                },
                {
                  "x": 5.39,
                  "y": 57.2,
                  "label": "Derby"
                },
                {
                  "x": 4.41,
                  "y": 48.9,
                  "label": "Leicester"
                },
                {
                  "x": 0.69,
                  "y": 50.6,
                  "label": "Rutland"
                },
                {
                  "x": 1.81,
                  "y": 50.8,
                  "label": "Nottingham"
                },
                {
                  "x": 2.68,
                  "y": 59.2,
                  "label": "Herefordshire, County of"
                },
                {
                  "x": 7.27,
                  "y": 63.2,
                  "label": "Telford and Wrekin"
                },
                {
                  "x": 5.49,
                  "y": 69.4,
                  "label": "Stoke-on-Trent"
                },
                {
                  "x": 4.41,
                  "y": 42.1,
                  "label": "Bath and North East Somerset"
                },
                {
                  "x": 5.09,
                  "y": 38.3,
                  "label": "Bristol, City of"
                },
                {
                  "x": 4.5,
                  "y": 52.2,
                  "label": "North Somerset"
                },
                {
                  "x": 6.15,
                  "y": 52.7,
                  "label": "South Gloucestershire"
                },
                {
                  "x": 2.49,
                  "y": 59.9,
                  "label": "Plymouth"
                },
                {
                  "x": 0.03,
                  "y": 63.2,
                  "label": "Torbay"
                },
                {
                  "x": 4.93,
                  "y": 54.7,
                  "label": "Swindon"
                },
                {
                  "x": 3.83,
                  "y": 60.9,
                  "label": "Peterborough"
                },
                {
                  "x": 5.08,
                  "y": 56.5,
                  "label": "Luton"
                },
                {
                  "x": 2.52,
                  "y": 58.1,
                  "label": "Southend-on-Sea"
                },
                {
                  "x": 3.26,
                  "y": 72.3,
                  "label": "Thurrock"
                },
                {
                  "x": 4.57,
                  "y": 64.1,
                  "label": "Medway"
                },
                {
                  "x": 5.55,
                  "y": 53.9,
                  "label": "Bracknell Forest"
                },
                {
                  "x": 2.26,
                  "y": 48.2,
                  "label": "West Berkshire"
                },
                {
                  "x": 5.99,
                  "y": 42.0,
                  "label": "Reading"
                },
                {
                  "x": 5.68,
                  "y": 54.3,
                  "label": "Slough"
                },
                {
                  "x": 3.8,
                  "y": 46.1,
                  "label": "Windsor and Maidenhead"
                },
                {
                  "x": 6.06,
                  "y": 43.3,
                  "label": "Wokingham"
                },
                {
                  "x": 7.13,
                  "y": 51.4,
                  "label": "Milton Keynes"
                },
                {
                  "x": 2.79,
                  "y": 31.4,
                  "label": "Brighton and Hove"
                },
                {
                  "x": 2.1,
                  "y": 58.1,
                  "label": "Portsmouth"
                },
                {
                  "x": 4.67,
                  "y": 53.8,
                  "label": "Southampton"
                },
                {
                  "x": -0.08,
                  "y": 62.0,
                  "label": "Isle of Wight"
                },
                {
                  "x": 3.39,
                  "y": 57.5,
                  "label": "County Durham"
                },
                {
                  "x": 6.24,
                  "y": 51.2,
                  "label": "Cheshire East"
                },
                {
                  "x": 4.53,
                  "y": 50.7,
                  "label": "Cheshire West and Chester"
                },
                {
                  "x": 2.62,
                  "y": 56.9,
                  "label": "Shropshire"
                },
                {
                  "x": 2.24,
                  "y": 56.5,
                  "label": "Cornwall"
                },
                {
                  "x": 2.56,
                  "y": 52.5,
                  "label": "Wiltshire"
                },
                {
                  "x": 5.71,
                  "y": 51.8,
                  "label": "Bedford"
                },
                {
                  "x": 8.78,
                  "y": 56.1,
                  "label": "Central Bedfordshire"
                },
                {
                  "x": 3.87,
                  "y": 54.1,
                  "label": "Northumberland"
                },
                {
                  "x": 3.34,
                  "y": 26.1,
                  "label": "Cambridge"
                },
                {
                  "x": 7.35,
                  "y": 50.9,
                  "label": "East Cambridgeshire"
                },
                {
                  "x": 3.11,
                  "y": 71.4,
                  "label": "Fenland"
                },
                {
                  "x": 5.56,
                  "y": 54.2,
                  "label": "Huntingdonshire"
                },
                {
                  "x": 7.11,
                  "y": 39.8,
                  "label": "South Cambridgeshire"
                },
                {
                  "x": 4.31,
                  "y": 60.3,
                  "label": "Amber Valley"
                },
                {
                  "x": 4.88,
                  "y": 70.8,
                  "label": "Bolsover"
                },
                {
                  "x": 2.65,
                  "y": 60.0,
                  "label": "Chesterfield"
                },
                {
                  "x": 0.51,
                  "y": 51.6,
                  "label": "Derbyshire Dales"
                },
                {
                  "x": 0.38,
                  "y": 61.2,
                  "label": "Erewash"
                },
                {
                  "x": 0.66,
                  "y": 50.5,
                  "label": "High Peak"
                },
                {
                  "x": 5.47,
                  "y": 62.8,
                  "label": "North East Derbyshire"
                },
                {
                  "x": 10.54,
                  "y": 60.4,
                  "label": "South Derbyshire"
                },
                {
                  "x": 4.98,
                  "y": 54.1,
                  "label": "East Devon"
                },
                {
                  "x": 6.46,
                  "y": 44.7,
                  "label": "Exeter"
                },
                {
                  "x": 2.91,
                  "y": 53.3,
                  "label": "Mid Devon"
                },
                {
                  "x": 1.89,
                  "y": 57.0,
                  "label": "North Devon"
                },
                {
                  "x": 4.5,
                  "y": 47.1,
                  "label": "South Hams"
                },
                {
                  "x": 2.53,
                  "y": 53.9,
                  "label": "Teignbridge"
                },
                {
                  "x": 2.83,
                  "y": 60.8,
                  "label": "Torridge"
                },
                {
                  "x": 2.61,
                  "y": 53.2,
                  "label": "West Devon"
                },
                {
                  "x": 2.26,
                  "y": 57.3,
                  "label": "Eastbourne"
                },
                {
                  "x": -0.13,
                  "y": 54.9,
                  "label": "Hastings"
                },
                {
                  "x": 2.48,
                  "y": 47.9,
                  "label": "Lewes"
                },
                {
                  "x": 2.93,
                  "y": 58.5,
                  "label": "Rother"
                },
                {
                  "x": 4.73,
                  "y": 54.5,
                  "label": "Wealden"
                },
                {
                  "x": 3.07,
                  "y": 68.6,
                  "label": "Basildon"
                },
                {
                  "x": 6.92,
                  "y": 61.1,
                  "label": "Braintree"
                },
                {
                  "x": 3.88,
                  "y": 59.1,
                  "label": "Brentwood"
                },
                {
                  "x": 1.0,
                  "y": 72.7,
                  "label": "Castle Point"
                },
                {
                  "x": 4.81,
                  "y": 52.8,
                  "label": "Chelmsford"
                },
                {
                  "x": 4.41,
                  "y": 53.6,
                  "label": "Colchester"
                },
                {
                  "x": 2.56,
                  "y": 62.7,
                  "label": "Epping Forest"
                },
                {
                  "x": 5.47,
                  "y": 68.1,
                  "label": "Harlow"
                },
                {
                  "x": 5.38,
                  "y": 62.6,
                  "label": "Maldon"
                },
                {
                  "x": 5.31,
                  "y": 66.6,
                  "label": "Rochford"
                },
                {
                  "x": 6.81,
                  "y": 69.5,
                  "label": "Tendring"
                },
                {
                  "x": 5.27,
                  "y": 50.7,
                  "label": "Uttlesford"
                },
                {
                  "x": 2.2,
                  "y": 43.8,
                  "label": "Cheltenham"
                },
                {
                  "x": 0.53,
                  "y": 48.9,
                  "label": "Cotswold"
                },
                {
                  "x": 3.49,
                  "y": 58.6,
                  "label": "Forest of Dean"
                },
                {
                  "x": 4.53,
                  "y": 58.5,
                  "label": "Gloucester"
                },
                {
                  "x": 4.05,
                  "y": 45.4,
                  "label": "Stroud"
                },
                {
                  "x": 8.76,
                  "y": 53.2,
                  "label": "Tewkesbury"
                },
                {
                  "x": 4.48,
                  "y": 51.9,
                  "label": "Basingstoke and Deane"
                },
                {
                  "x": 3.49,
                  "y": 49.5,
                  "label": "East Hampshire"
                },
                {
                  "x": 4.93,
                  "y": 52.5,
                  "label": "Eastleigh"
                },
                {
                  "x": 0.37,
                  "y": 55.1,
                  "label": "Fareham"
                },
                {
                  "x": 0.55,
                  "y": 63.9,
                  "label": "Gosport"
                },
                {
                  "x": 3.06,
                  "y": 47.6,
                  "label": "Hart"
                },
                {
                  "x": 2.33,
                  "y": 62.4,
                  "label": "Havant"
                },
                {
                  "x": -0.16,
                  "y": 57.8,
                  "label": "New Forest"
                },
                {
                  "x": 6.08,
                  "y": 58.2,
                  "label": "Rushmoor"
                },
                {
                  "x": 3.46,
                  "y": 51.9,
                  "label": "Test Valley"
                },
                {
                  "x": 6.98,
                  "y": 41.1,
                  "label": "Winchester"
                },
                {
                  "x": 4.02,
                  "y": 66.3,
                  "label": "Broxbourne"
                },
                {
                  "x": 4.58,
                  "y": 50.7,
                  "label": "Dacorum"
                },
                {
                  "x": 1.95,
                  "y": 50.8,
                  "label": "Hertsmere"
                },
                {
                  "x": 2.83,
                  "y": 45.6,
                  "label": "North Hertfordshire"
                },
                {
                  "x": 2.27,
                  "y": 51.3,
                  "label": "Three Rivers"
                },
                {
                  "x": 5.03,
                  "y": 50.3,
                  "label": "Watford"
                },
                {
                  "x": 6.98,
                  "y": 59.4,
                  "label": "Ashford"
                },
                {
                  "x": 3.82,
                  "y": 51.0,
                  "label": "Canterbury"
                },
                {
                  "x": 8.11,
                  "y": 64.2,
                  "label": "Dartford"
                },
                {
                  "x": 3.87,
                  "y": 62.1,
                  "label": "Dover"
                },
                {
                  "x": 4.06,
                  "y": 65.4,
                  "label": "Gravesham"
                },
                {
                  "x": 8.33,
                  "y": 58.8,
                  "label": "Maidstone"
                },
                {
                  "x": 1.95,
                  "y": 54.4,
                  "label": "Sevenoaks"
                },
                {
                  "x": 1.93,
                  "y": 62.2,
                  "label": "Folkestone and Hythe"
                },
                {
                  "x": 5.55,
                  "y": 62.5,
                  "label": "Swale"
                },
                {
                  "x": 2.1,
                  "y": 63.9,
                  "label": "Thanet"
                },
                {
                  "x": 4.19,
                  "y": 55.7,
                  "label": "Tonbridge and Malling"
                },
                {
                  "x": 3.85,
                  "y": 45.1,
                  "label": "Tunbridge Wells"
                },
                {
                  "x": 6.56,
                  "y": 66.6,
                  "label": "Burnley"
                },
                {
                  "x": 3.31,
                  "y": 56.8,
                  "label": "Chorley"
                },
                {
                  "x": 6.04,
                  "y": 57.0,
                  "label": "Fylde"
                },
                {
                  "x": 5.64,
                  "y": 66.2,
                  "label": "Hyndburn"
                },
                {
                  "x": 2.03,
                  "y": 51.1,
                  "label": "Lancaster"
                },
                {
                  "x": 4.58,
                  "y": 63.1,
                  "label": "Pendle"
                },
                {
                  "x": 11.31,
                  "y": 53.3,
                  "label": "Preston"
                },
                {
                  "x": 8.2,
                  "y": 56.4,
                  "label": "Ribble Valley"
                },
                {
                  "x": 3.77,
                  "y": 60.7,
                  "label": "Rossendale"
                },
                {
                  "x": 5.71,
                  "y": 58.6,
                  "label": "South Ribble"
                },
                {
                  "x": 5.52,
                  "y": 55.3,
                  "label": "West Lancashire"
                },
                {
                  "x": 7.2,
                  "y": 63.8,
                  "label": "Wyre"
                },
                {
                  "x": 4.99,
                  "y": 59.5,
                  "label": "Blaby"
                },
                {
                  "x": 3.72,
                  "y": 53.8,
                  "label": "Charnwood"
                },
                {
                  "x": 8.47,
                  "y": 50.8,
                  "label": "Harborough"
                },
                {
                  "x": 4.04,
                  "y": 60.3,
                  "label": "Hinckley and Bosworth"
                },
                {
                  "x": 5.68,
                  "y": 58.1,
                  "label": "Melton"
                },
                {
                  "x": 7.87,
                  "y": 60.7,
                  "label": "North West Leicestershire"
                },
                {
                  "x": 6.48,
                  "y": 54.6,
                  "label": "Oadby and Wigston"
                },
                {
                  "x": 1.8,
                  "y": 75.6,
                  "label": "Boston"
                },
                {
                  "x": 2.69,
                  "y": 70.7,
                  "label": "East Lindsey"
                },
                {
                  "x": 0.92,
                  "y": 56.9,
                  "label": "Lincoln"
                },
                {
                  "x": 4.02,
                  "y": 62.3,
                  "label": "North Kesteven"
                },
                {
                  "x": 5.52,
                  "y": 73.6,
                  "label": "South Holland"
                },
                {
                  "x": 3.0,
                  "y": 59.9,
                  "label": "South Kesteven"
                },
                {
                  "x": 4.35,
                  "y": 61.8,
                  "label": "West Lindsey"
                },
                {
                  "x": 4.17,
                  "y": 64.2,
                  "label": "Breckland"
                },
                {
                  "x": 5.61,
                  "y": 54.4,
                  "label": "Broadland"
                },
                {
                  "x": 0.78,
                  "y": 71.5,
                  "label": "Great Yarmouth"
                },
                {
                  "x": 1.31,
                  "y": 66.4,
                  "label": "King's Lynn and West Norfolk"
                },
                {
                  "x": 0.45,
                  "y": 58.9,
                  "label": "North Norfolk"
                },
                {
                  "x": 1.72,
                  "y": 43.8,
                  "label": "Norwich"
                },
                {
                  "x": 5.53,
                  "y": 51.7,
                  "label": "South Norfolk"
                },
                {
                  "x": 3.34,
                  "y": 69.8,
                  "label": "Ashfield"
                },
                {
                  "x": 6.87,
                  "y": 67.8,
                  "label": "Bassetlaw"
                },
                {
                  "x": 2.86,
                  "y": 54.6,
                  "label": "Broxtowe"
                },
                {
                  "x": 3.25,
                  "y": 55.5,
                  "label": "Gedling"
                },
                {
                  "x": 2.79,
                  "y": 70.9,
                  "label": "Mansfield"
                },
                {
                  "x": 4.32,
                  "y": 60.4,
                  "label": "Newark and Sherwood"
                },
                {
                  "x": 7.07,
                  "y": 42.5,
                  "label": "Rushcliffe"
                },
                {
                  "x": 6.39,
                  "y": 50.3,
                  "label": "Cherwell"
                },
                {
                  "x": 3.47,
                  "y": 29.7,
                  "label": "Oxford"
                },
                {
                  "x": 5.39,
                  "y": 45.0,
                  "label": "South Oxfordshire"
                },
                {
                  "x": 9.19,
                  "y": 43.3,
                  "label": "Vale of White Horse"
                },
                {
                  "x": 5.47,
                  "y": 46.3,
                  "label": "West Oxfordshire"
                },
                {
                  "x": 3.68,
                  "y": 68.9,
                  "label": "Cannock Chase"
                },
                {
                  "x": 5.67,
                  "y": 63.2,
                  "label": "East Staffordshire"
                },
                {
                  "x": 5.98,
                  "y": 58.8,
                  "label": "Lichfield"
                },
                {
                  "x": 4.11,
                  "y": 63.0,
                  "label": "Newcastle-under-Lyme"
                },
                {
                  "x": 3.63,
                  "y": 64.8,
                  "label": "South Staffordshire"
                },
                {
                  "x": 4.16,
                  "y": 56.0,
                  "label": "Stafford"
                },
                {
                  "x": 0.82,
                  "y": 64.7,
                  "label": "Staffordshire Moorlands"
                },
                {
                  "x": 3.23,
                  "y": 67.5,
                  "label": "Tamworth"
                },
                {
                  "x": 5.51,
                  "y": 54.2,
                  "label": "Babergh"
                },
                {
                  "x": -0.13,
                  "y": 58.3,
                  "label": "Ipswich"
                },
                {
                  "x": 9.33,
                  "y": 55.2,
                  "label": "Mid Suffolk"
                },
                {
                  "x": 2.17,
                  "y": 40.5,
                  "label": "Elmbridge"
                },
                {
                  "x": 2.92,
                  "y": 47.9,
                  "label": "Epsom and Ewell"
                },
                {
                  "x": 5.65,
                  "y": 43.8,
                  "label": "Guildford"
                },
                {
                  "x": 1.38,
                  "y": 46.9,
                  "label": "Mole Valley"
                },
                {
                  "x": 5.23,
                  "y": 50.5,
                  "label": "Reigate and Banstead"
                },
                {
                  "x": 5.9,
                  "y": 54.3,
                  "label": "Runnymede"
                },
                {
                  "x": 4.03,
                  "y": 60.3,
                  "label": "Spelthorne"
                },
                {
                  "x": 4.9,
                  "y": 51.0,
                  "label": "Surrey Heath"
                },
                {
                  "x": 2.49,
                  "y": 52.8,
                  "label": "Tandridge"
                },
                {
                  "x": 6.47,
                  "y": 41.6,
                  "label": "Waverley"
                },
                {
                  "x": 2.21,
                  "y": 43.9,
                  "label": "Woking"
                },
                {
                  "x": 3.6,
                  "y": 66.9,
                  "label": "North Warwickshire"
                },
                {
                  "x": 7.25,
                  "y": 66.0,
                  "label": "Nuneaton and Bedworth"
                },
                {
                  "x": 9.37,
                  "y": 56.7,
                  "label": "Rugby"
                },
                {
                  "x": 9.43,
                  "y": 51.6,
                  "label": "Stratford-on-Avon"
                },
                {
                  "x": 6.21,
                  "y": 41.2,
                  "label": "Warwick"
                },
                {
                  "x": 0.26,
                  "y": 54.6,
                  "label": "Adur"
                },
                {
                  "x": 4.3,
                  "y": 62.5,
                  "label": "Arun"
                },
                {
                  "x": 4.58,
                  "y": 50.9,
                  "label": "Chichester"
                },
                {
                  "x": 4.94,
                  "y": 58.4,
                  "label": "Crawley"
                },
                {
                  "x": 3.06,
                  "y": 48.5,
                  "label": "Horsham"
                },
                {
                  "x": 6.96,
                  "y": 46.9,
                  "label": "Mid Sussex"
                },
                {
                  "x": 1.96,
                  "y": 53.0,
                  "label": "Worthing"
                },
                {
                  "x": 2.54,
                  "y": 55.4,
                  "label": "Bromsgrove"
                },
                {
                  "x": 5.52,
                  "y": 52.2,
                  "label": "Malvern Hills"
                },
                {
                  "x": 0.65,
                  "y": 62.3,
                  "label": "Redditch"
                },
                {
                  "x": 3.21,
                  "y": 53.7,
                  "label": "Worcester"
                },
                {
                  "x": 4.58,
                  "y": 57.9,
                  "label": "Wychavon"
                },
                {
                  "x": 2.35,
                  "y": 63.1,
                  "label": "Wyre Forest"
                },
                {
                  "x": 1.44,
                  "y": 37.3,
                  "label": "St Albans"
                },
                {
                  "x": 1.67,
                  "y": 53.0,
                  "label": "Welwyn Hatfield"
                },
                {
                  "x": 4.89,
                  "y": 50.4,
                  "label": "East Hertfordshire"
                },
                {
                  "x": 3.04,
                  "y": 59.2,
                  "label": "Stevenage"
                },
                {
                  "x": 4.58,
                  "y": 58.3,
                  "label": "Bolton"
                },
                {
                  "x": 2.79,
                  "y": 54.1,
                  "label": "Bury"
                },
                {
                  "x": 6.83,
                  "y": 39.6,
                  "label": "Manchester"
                },
                {
                  "x": 4.1,
                  "y": 60.9,
                  "label": "Oldham"
                },
                {
                  "x": 6.03,
                  "y": 60.1,
                  "label": "Rochdale"
                },
                {
                  "x": 9.65,
                  "y": 56.8,
                  "label": "Salford"
                },
                {
                  "x": 3.26,
                  "y": 47.7,
                  "label": "Stockport"
                },
                {
                  "x": 4.15,
                  "y": 61.1,
                  "label": "Tameside"
                },
                {
                  "x": 2.29,
                  "y": 42.3,
                  "label": "Trafford"
                },
                {
                  "x": 5.24,
                  "y": 63.9,
                  "label": "Wigan"
                },
                {
                  "x": 5.64,
                  "y": 51.6,
                  "label": "Knowsley"
                },
                {
                  "x": 4.72,
                  "y": 41.8,
                  "label": "Liverpool"
                },
                {
                  "x": 3.54,
                  "y": 58.0,
                  "label": "St. Helens"
                },
                {
                  "x": 2.82,
                  "y": 48.1,
                  "label": "Sefton"
                },
                {
                  "x": 2.89,
                  "y": 48.3,
                  "label": "Wirral"
                },
                {
                  "x": 4.64,
                  "y": 69.0,
                  "label": "Doncaster"
                },
                {
                  "x": 4.88,
                  "y": 67.9,
                  "label": "Rotherham"
                },
                {
                  "x": 7.47,
                  "y": 49.3,
                  "label": "Newcastle upon Tyne"
                },
                {
                  "x": 3.0,
                  "y": 53.4,
                  "label": "North Tyneside"
                },
                {
                  "x": 2.26,
                  "y": 62.0,
                  "label": "South Tyneside"
                },
                {
                  "x": 4.63,
                  "y": 61.3,
                  "label": "Sunderland"
                },
                {
                  "x": 2.95,
                  "y": 50.4,
                  "label": "Birmingham"
                },
                {
                  "x": 5.99,
                  "y": 55.6,
                  "label": "Coventry"
                },
                {
                  "x": 3.2,
                  "y": 67.6,
                  "label": "Dudley"
                },
                {
                  "x": 3.22,
                  "y": 66.7,
                  "label": "Sandwell"
                },
                {
                  "x": 2.2,
                  "y": 56.2,
                  "label": "Solihull"
                },
                {
                  "x": 3.98,
                  "y": 67.9,
                  "label": "Walsall"
                },
                {
                  "x": 6.5,
                  "y": 62.6,
                  "label": "Wolverhampton"
                },
                {
                  "x": 2.0,
                  "y": 54.2,
                  "label": "Bradford"
                },
                {
                  "x": 1.89,
                  "y": 55.7,
                  "label": "Calderdale"
                },
                {
                  "x": 2.85,
                  "y": 54.7,
                  "label": "Kirklees"
                },
                {
                  "x": 3.84,
                  "y": 49.7,
                  "label": "Leeds"
                },
                {
                  "x": 4.42,
                  "y": 66.4,
                  "label": "Wakefield"
                },
                {
                  "x": 3.23,
                  "y": 56.9,
                  "label": "Gateshead"
                },
                {
                  "x": 8.95,
                  "y": 62.4,
                  "label": "Barking and Dagenham"
                },
                {
                  "x": 4.92,
                  "y": 37.8,
                  "label": "Barnet"
                },
                {
                  "x": 4.24,
                  "y": 63.0,
                  "label": "Bexley"
                },
                {
                  "x": 3.82,
                  "y": 40.3,
                  "label": "Brent"
                },
                {
                  "x": 1.86,
                  "y": 49.4,
                  "label": "Bromley"
                },
                {
                  "x": 2.7,
                  "y": 25.1,
                  "label": "Camden"
                },
                {
                  "x": 4.96,
                  "y": 45.7,
                  "label": "Croydon"
                },
                {
                  "x": 5.54,
                  "y": 39.6,
                  "label": "Ealing"
                },
                {
                  "x": -0.14,
                  "y": 44.2,
                  "label": "Enfield"
                },
                {
                  "x": 4.04,
                  "y": 44.4,
                  "label": "Greenwich"
                },
                {
                  "x": 2.37,
                  "y": 21.5,
                  "label": "Hackney"
                },
                {
                  "x": 3.77,
                  "y": 30.0,
                  "label": "Hammersmith and Fulham"
                },
                {
                  "x": 0.72,
                  "y": 24.4,
                  "label": "Haringey"
                },
                {
                  "x": 4.39,
                  "y": 45.4,
                  "label": "Harrow"
                },
                {
                  "x": 7.14,
                  "y": 69.7,
                  "label": "Havering"
                },
                {
                  "x": 7.07,
                  "y": 56.4,
                  "label": "Hillingdon"
                },
                {
                  "x": 3.93,
                  "y": 48.9,
                  "label": "Hounslow"
                },
                {
                  "x": 3.46,
                  "y": 24.8,
                  "label": "Islington"
                },
                {
                  "x": 1.02,
                  "y": 31.3,
                  "label": "Kensington and Chelsea"
                },
                {
                  "x": 2.84,
                  "y": 38.4,
                  "label": "Kingston upon Thames"
                },
                {
                  "x": -1.07,
                  "y": 21.4,
                  "label": "Lambeth"
                },
                {
                  "x": 0.34,
                  "y": 30.1,
                  "label": "Lewisham"
                },
                {
                  "x": 1.61,
                  "y": 37.1,
                  "label": "Merton"
                },
                {
                  "x": 7.2,
                  "y": 47.2,
                  "label": "Newham"
                },
                {
                  "x": 3.77,
                  "y": 46.0,
                  "label": "Redbridge"
                },
                {
                  "x": 0.72,
                  "y": 30.7,
                  "label": "Richmond upon Thames"
                },
                {
                  "x": 1.83,
                  "y": 27.2,
                  "label": "Southwark"
                },
                {
                  "x": 2.08,
                  "y": 53.7,
                  "label": "Sutton"
                },
                {
                  "x": 6.88,
                  "y": 32.5,
                  "label": "Tower Hamlets"
                },
                {
                  "x": 2.0,
                  "y": 40.9,
                  "label": "Waltham Forest"
                },
                {
                  "x": 3.48,
                  "y": 25.0,
                  "label": "Wandsworth"
                },
                {
                  "x": 3.21,
                  "y": 31.0,
                  "label": "Westminster"
                },
                {
                  "x": -0.48,
                  "y": 50.9,
                  "label": "Isle of Anglesey"
                },
                {
                  "x": 2.75,
                  "y": 42.0,
                  "label": "Gwynedd"
                },
                {
                  "x": -0.32,
                  "y": 54.0,
                  "label": "Conwy"
                },
                {
                  "x": 2.29,
                  "y": 54.0,
                  "label": "Denbighshire"
                },
                {
                  "x": 0.59,
                  "y": 56.4,
                  "label": "Flintshire"
                },
                {
                  "x": 2.09,
                  "y": 59.0,
                  "label": "Wrexham"
                },
                {
                  "x": 2.86,
                  "y": 45.4,
                  "label": "Ceredigion"
                },
                {
                  "x": 1.79,
                  "y": 57.1,
                  "label": "Pembrokeshire"
                },
                {
                  "x": 0.99,
                  "y": 53.8,
                  "label": "Carmarthenshire"
                },
                {
                  "x": 4.85,
                  "y": 51.5,
                  "label": "Swansea"
                },
                {
                  "x": 0.07,
                  "y": 56.8,
                  "label": "Neath Port Talbot"
                },
                {
                  "x": 0.86,
                  "y": 54.6,
                  "label": "Bridgend"
                },
                {
                  "x": 2.17,
                  "y": 49.3,
                  "label": "Vale of Glamorgan"
                },
                {
                  "x": 6.03,
                  "y": 40.0,
                  "label": "Cardiff"
                },
                {
                  "x": 1.46,
                  "y": 53.7,
                  "label": "Rhondda Cynon Taff"
                },
                {
                  "x": 0.04,
                  "y": 57.6,
                  "label": "Caerphilly"
                },
                {
                  "x": 0.9,
                  "y": 62.0,
                  "label": "Blaenau Gwent"
                },
                {
                  "x": 1.64,
                  "y": 59.8,
                  "label": "Torfaen"
                },
                {
                  "x": 2.32,
                  "y": 49.6,
                  "label": "Monmouthshire"
                },
                {
                  "x": 5.57,
                  "y": 56.0,
                  "label": "Newport"
                },
                {
                  "x": 0.99,
                  "y": 53.7,
                  "label": "Powys"
                },
                {
                  "x": -0.86,
                  "y": 56.4,
                  "label": "Merthyr Tydfil"
                }
              ],
              "backgroundColor": "rgba(56,189,248,0.55)",
              "pointRadius": 3.5
            },
            {
              "label": "OLS Trendline (r=0.07)",
              "type": "line",
              "data": [
                {
                  "x": -1.07,
                  "y": 52.6
                },
                {
                  "x": 11.31,
                  "y": 56.7
                }
              ],
              "borderColor": "#f97316",
              "borderWidth": 2,
              "pointRadius": 0
            }
          ]
        },
        "definition": {
          "metric": "Council-level 2016 EU Referendum Leave Vote % (Electoral Commission) vs local population growth or asylum support per 10k residents.",
          "scope": "Matched UK Local Authorities.",
          "nuance": "Tests whether restrictionist vote share correlates positively or negatively with local migration exposure."
        }
      },
      {
        "headline": "Perspective vs Exposure (2): 2016 Leave vote % shows r = 0.15 (R² = 0.02) against local asylum dispersal per 10k residents.",
        "footnote": "*Electoral Commission 2016 Leave % vs latest Home Office supported asylum seekers per 10,000 residents (Data_Asy_D11). Source: <a href=\"https://www.electoralcommission.org.uk/who-we-are-and-what-we-do/elections-and-referendums/past-elections-and-referendums/eu-referendum/results-and-turnout-eu-referendum\" target=\"_blank\" rel=\"noopener\">Electoral Commission 2016 EU Referendum Results by LA</a> | <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum Support by Local Authority (Jun 2026)</a>",
        "chart": {
          "type": "scatter",
          "title": "Perspective vs Exposure (2): Council Leave Vote % (2016) vs Asylum Support per 10k (N=303 Councils)",
          "x_title": "Supported Asylum Seekers per 10,000 Residents",
          "y_title": "2016 EU Referendum Leave Vote (%)",
          "datasets": [
            {
              "label": "Matched Councils",
              "data": [
                {
                  "x": 38.0,
                  "y": 69.6,
                  "label": "Hartlepool"
                },
                {
                  "x": 43.9,
                  "y": 65.5,
                  "label": "Middlesbrough"
                },
                {
                  "x": 17.4,
                  "y": 66.2,
                  "label": "Redcar and Cleveland"
                },
                {
                  "x": 39.7,
                  "y": 61.7,
                  "label": "Stockton-on-Tees"
                },
                {
                  "x": 18.9,
                  "y": 56.2,
                  "label": "Darlington"
                },
                {
                  "x": 45.8,
                  "y": 57.4,
                  "label": "Halton"
                },
                {
                  "x": 18.4,
                  "y": 54.3,
                  "label": "Warrington"
                },
                {
                  "x": 46.4,
                  "y": 56.3,
                  "label": "Blackburn with Darwen"
                },
                {
                  "x": 16.4,
                  "y": 67.5,
                  "label": "Blackpool"
                },
                {
                  "x": 19.1,
                  "y": 67.6,
                  "label": "Kingston upon Hull, City of"
                },
                {
                  "x": 1.5,
                  "y": 60.4,
                  "label": "East Riding of Yorkshire"
                },
                {
                  "x": 16.7,
                  "y": 69.9,
                  "label": "North East Lincolnshire"
                },
                {
                  "x": 5.1,
                  "y": 66.3,
                  "label": "North Lincolnshire"
                },
                {
                  "x": 17.5,
                  "y": 42.0,
                  "label": "York"
                },
                {
                  "x": 40.9,
                  "y": 57.2,
                  "label": "Derby"
                },
                {
                  "x": 34.8,
                  "y": 48.9,
                  "label": "Leicester"
                },
                {
                  "x": 1.9,
                  "y": 50.6,
                  "label": "Rutland"
                },
                {
                  "x": 41.5,
                  "y": 50.8,
                  "label": "Nottingham"
                },
                {
                  "x": 1.3,
                  "y": 59.2,
                  "label": "Herefordshire, County of"
                },
                {
                  "x": 28.2,
                  "y": 63.2,
                  "label": "Telford and Wrekin"
                },
                {
                  "x": 37.5,
                  "y": 69.4,
                  "label": "Stoke-on-Trent"
                },
                {
                  "x": 0.2,
                  "y": 42.1,
                  "label": "Bath and North East Somerset"
                },
                {
                  "x": 13.9,
                  "y": 38.3,
                  "label": "Bristol, City of"
                },
                {
                  "x": 3.6,
                  "y": 52.2,
                  "label": "North Somerset"
                },
                {
                  "x": 4.9,
                  "y": 52.7,
                  "label": "South Gloucestershire"
                },
                {
                  "x": 18.1,
                  "y": 59.9,
                  "label": "Plymouth"
                },
                {
                  "x": 2.2,
                  "y": 63.2,
                  "label": "Torbay"
                },
                {
                  "x": 20.8,
                  "y": 54.7,
                  "label": "Swindon"
                },
                {
                  "x": 19.9,
                  "y": 60.9,
                  "label": "Peterborough"
                },
                {
                  "x": 15.9,
                  "y": 56.5,
                  "label": "Luton"
                },
                {
                  "x": 14.2,
                  "y": 58.1,
                  "label": "Southend-on-Sea"
                },
                {
                  "x": 8.5,
                  "y": 72.3,
                  "label": "Thurrock"
                },
                {
                  "x": 11.8,
                  "y": 64.1,
                  "label": "Medway"
                },
                {
                  "x": 0.9,
                  "y": 53.9,
                  "label": "Bracknell Forest"
                },
                {
                  "x": 2.6,
                  "y": 48.2,
                  "label": "West Berkshire"
                },
                {
                  "x": 28.5,
                  "y": 42.0,
                  "label": "Reading"
                },
                {
                  "x": 19.0,
                  "y": 54.3,
                  "label": "Slough"
                },
                {
                  "x": 23.0,
                  "y": 46.1,
                  "label": "Windsor and Maidenhead"
                },
                {
                  "x": 6.6,
                  "y": 43.3,
                  "label": "Wokingham"
                },
                {
                  "x": 14.3,
                  "y": 51.4,
                  "label": "Milton Keynes"
                },
                {
                  "x": 6.6,
                  "y": 31.4,
                  "label": "Brighton and Hove"
                },
                {
                  "x": 31.2,
                  "y": 58.1,
                  "label": "Portsmouth"
                },
                {
                  "x": 12.2,
                  "y": 53.8,
                  "label": "Southampton"
                },
                {
                  "x": 0.0,
                  "y": 62.0,
                  "label": "Isle of Wight"
                },
                {
                  "x": 11.8,
                  "y": 57.5,
                  "label": "County Durham"
                },
                {
                  "x": 8.4,
                  "y": 51.2,
                  "label": "Cheshire East"
                },
                {
                  "x": 17.5,
                  "y": 50.7,
                  "label": "Cheshire West and Chester"
                },
                {
                  "x": 3.3,
                  "y": 56.9,
                  "label": "Shropshire"
                },
                {
                  "x": 0.3,
                  "y": 56.5,
                  "label": "Cornwall"
                },
                {
                  "x": 3.7,
                  "y": 52.5,
                  "label": "Wiltshire"
                },
                {
                  "x": 7.1,
                  "y": 51.8,
                  "label": "Bedford"
                },
                {
                  "x": 2.3,
                  "y": 56.1,
                  "label": "Central Bedfordshire"
                },
                {
                  "x": 20.3,
                  "y": 54.1,
                  "label": "Northumberland"
                },
                {
                  "x": 0.9,
                  "y": 26.1,
                  "label": "Cambridge"
                },
                {
                  "x": 2.1,
                  "y": 50.9,
                  "label": "East Cambridgeshire"
                },
                {
                  "x": 0.3,
                  "y": 71.4,
                  "label": "Fenland"
                },
                {
                  "x": 1.2,
                  "y": 54.2,
                  "label": "Huntingdonshire"
                },
                {
                  "x": 0.1,
                  "y": 39.8,
                  "label": "South Cambridgeshire"
                },
                {
                  "x": 9.4,
                  "y": 60.3,
                  "label": "Amber Valley"
                },
                {
                  "x": 16.4,
                  "y": 70.8,
                  "label": "Bolsover"
                },
                {
                  "x": 4.6,
                  "y": 60.0,
                  "label": "Chesterfield"
                },
                {
                  "x": 0.0,
                  "y": 51.6,
                  "label": "Derbyshire Dales"
                },
                {
                  "x": 7.9,
                  "y": 61.2,
                  "label": "Erewash"
                },
                {
                  "x": 1.0,
                  "y": 50.5,
                  "label": "High Peak"
                },
                {
                  "x": 5.6,
                  "y": 62.8,
                  "label": "North East Derbyshire"
                },
                {
                  "x": 3.0,
                  "y": 60.4,
                  "label": "South Derbyshire"
                },
                {
                  "x": 7.8,
                  "y": 54.1,
                  "label": "East Devon"
                },
                {
                  "x": 1.9,
                  "y": 44.7,
                  "label": "Exeter"
                },
                {
                  "x": 0.0,
                  "y": 53.3,
                  "label": "Mid Devon"
                },
                {
                  "x": 0.6,
                  "y": 57.0,
                  "label": "North Devon"
                },
                {
                  "x": 1.9,
                  "y": 47.1,
                  "label": "South Hams"
                },
                {
                  "x": 3.0,
                  "y": 53.9,
                  "label": "Teignbridge"
                },
                {
                  "x": 0.8,
                  "y": 60.8,
                  "label": "Torridge"
                },
                {
                  "x": 0.2,
                  "y": 53.2,
                  "label": "West Devon"
                },
                {
                  "x": 3.9,
                  "y": 57.3,
                  "label": "Eastbourne"
                },
                {
                  "x": 10.9,
                  "y": 54.9,
                  "label": "Hastings"
                },
                {
                  "x": 0.0,
                  "y": 47.9,
                  "label": "Lewes"
                },
                {
                  "x": 0.6,
                  "y": 58.5,
                  "label": "Rother"
                },
                {
                  "x": 24.9,
                  "y": 54.5,
                  "label": "Wealden"
                },
                {
                  "x": 18.2,
                  "y": 68.6,
                  "label": "Basildon"
                },
                {
                  "x": 47.5,
                  "y": 61.1,
                  "label": "Braintree"
                },
                {
                  "x": 2.8,
                  "y": 59.1,
                  "label": "Brentwood"
                },
                {
                  "x": 2.8,
                  "y": 72.7,
                  "label": "Castle Point"
                },
                {
                  "x": 7.5,
                  "y": 52.8,
                  "label": "Chelmsford"
                },
                {
                  "x": 15.0,
                  "y": 53.6,
                  "label": "Colchester"
                },
                {
                  "x": 5.8,
                  "y": 62.7,
                  "label": "Epping Forest"
                },
                {
                  "x": 5.7,
                  "y": 68.1,
                  "label": "Harlow"
                },
                {
                  "x": 0.1,
                  "y": 62.6,
                  "label": "Maldon"
                },
                {
                  "x": 15.5,
                  "y": 66.6,
                  "label": "Rochford"
                },
                {
                  "x": 13.4,
                  "y": 69.5,
                  "label": "Tendring"
                },
                {
                  "x": 2.2,
                  "y": 50.7,
                  "label": "Uttlesford"
                },
                {
                  "x": 11.8,
                  "y": 43.8,
                  "label": "Cheltenham"
                },
                {
                  "x": 0.0,
                  "y": 48.9,
                  "label": "Cotswold"
                },
                {
                  "x": 0.7,
                  "y": 58.6,
                  "label": "Forest of Dean"
                },
                {
                  "x": 20.9,
                  "y": 58.5,
                  "label": "Gloucester"
                },
                {
                  "x": 1.0,
                  "y": 45.4,
                  "label": "Stroud"
                },
                {
                  "x": 0.4,
                  "y": 53.2,
                  "label": "Tewkesbury"
                },
                {
                  "x": 1.0,
                  "y": 51.9,
                  "label": "Basingstoke and Deane"
                },
                {
                  "x": 0.6,
                  "y": 49.5,
                  "label": "East Hampshire"
                },
                {
                  "x": 0.7,
                  "y": 52.5,
                  "label": "Eastleigh"
                },
                {
                  "x": 2.1,
                  "y": 55.1,
                  "label": "Fareham"
                },
                {
                  "x": 2.8,
                  "y": 63.9,
                  "label": "Gosport"
                },
                {
                  "x": 0.0,
                  "y": 47.6,
                  "label": "Hart"
                },
                {
                  "x": 1.2,
                  "y": 62.4,
                  "label": "Havant"
                },
                {
                  "x": 0.4,
                  "y": 57.8,
                  "label": "New Forest"
                },
                {
                  "x": 7.2,
                  "y": 58.2,
                  "label": "Rushmoor"
                },
                {
                  "x": 1.6,
                  "y": 51.9,
                  "label": "Test Valley"
                },
                {
                  "x": 4.9,
                  "y": 41.1,
                  "label": "Winchester"
                },
                {
                  "x": 4.2,
                  "y": 66.3,
                  "label": "Broxbourne"
                },
                {
                  "x": 16.9,
                  "y": 50.7,
                  "label": "Dacorum"
                },
                {
                  "x": 5.3,
                  "y": 50.8,
                  "label": "Hertsmere"
                },
                {
                  "x": 0.6,
                  "y": 45.6,
                  "label": "North Hertfordshire"
                },
                {
                  "x": 0.5,
                  "y": 51.3,
                  "label": "Three Rivers"
                },
                {
                  "x": 2.2,
                  "y": 50.3,
                  "label": "Watford"
                },
                {
                  "x": 2.7,
                  "y": 59.4,
                  "label": "Ashford"
                },
                {
                  "x": 12.6,
                  "y": 51.0,
                  "label": "Canterbury"
                },
                {
                  "x": 3.2,
                  "y": 64.2,
                  "label": "Dartford"
                },
                {
                  "x": 6.9,
                  "y": 62.1,
                  "label": "Dover"
                },
                {
                  "x": 6.4,
                  "y": 65.4,
                  "label": "Gravesham"
                },
                {
                  "x": 2.4,
                  "y": 58.8,
                  "label": "Maidstone"
                },
                {
                  "x": 0.3,
                  "y": 54.4,
                  "label": "Sevenoaks"
                },
                {
                  "x": 4.0,
                  "y": 62.2,
                  "label": "Folkestone and Hythe"
                },
                {
                  "x": 4.8,
                  "y": 62.5,
                  "label": "Swale"
                },
                {
                  "x": 6.5,
                  "y": 63.9,
                  "label": "Thanet"
                },
                {
                  "x": 0.7,
                  "y": 55.7,
                  "label": "Tonbridge and Malling"
                },
                {
                  "x": 0.1,
                  "y": 45.1,
                  "label": "Tunbridge Wells"
                },
                {
                  "x": 46.7,
                  "y": 66.6,
                  "label": "Burnley"
                },
                {
                  "x": 19.6,
                  "y": 56.8,
                  "label": "Chorley"
                },
                {
                  "x": 10.2,
                  "y": 57.0,
                  "label": "Fylde"
                },
                {
                  "x": 49.0,
                  "y": 66.2,
                  "label": "Hyndburn"
                },
                {
                  "x": 16.4,
                  "y": 51.1,
                  "label": "Lancaster"
                },
                {
                  "x": 44.0,
                  "y": 63.1,
                  "label": "Pendle"
                },
                {
                  "x": 24.7,
                  "y": 53.3,
                  "label": "Preston"
                },
                {
                  "x": 3.6,
                  "y": 56.4,
                  "label": "Ribble Valley"
                },
                {
                  "x": 32.3,
                  "y": 60.7,
                  "label": "Rossendale"
                },
                {
                  "x": 32.8,
                  "y": 58.6,
                  "label": "South Ribble"
                },
                {
                  "x": 34.0,
                  "y": 55.3,
                  "label": "West Lancashire"
                },
                {
                  "x": 29.9,
                  "y": 63.8,
                  "label": "Wyre"
                },
                {
                  "x": 3.1,
                  "y": 59.5,
                  "label": "Blaby"
                },
                {
                  "x": 5.4,
                  "y": 53.8,
                  "label": "Charnwood"
                },
                {
                  "x": 0.1,
                  "y": 50.8,
                  "label": "Harborough"
                },
                {
                  "x": 12.1,
                  "y": 60.3,
                  "label": "Hinckley and Bosworth"
                },
                {
                  "x": 2.9,
                  "y": 58.1,
                  "label": "Melton"
                },
                {
                  "x": 8.9,
                  "y": 60.7,
                  "label": "North West Leicestershire"
                },
                {
                  "x": 5.2,
                  "y": 54.6,
                  "label": "Oadby and Wigston"
                },
                {
                  "x": 15.0,
                  "y": 75.6,
                  "label": "Boston"
                },
                {
                  "x": 7.5,
                  "y": 70.7,
                  "label": "East Lindsey"
                },
                {
                  "x": 2.9,
                  "y": 56.9,
                  "label": "Lincoln"
                },
                {
                  "x": 2.8,
                  "y": 62.3,
                  "label": "North Kesteven"
                },
                {
                  "x": 7.5,
                  "y": 73.6,
                  "label": "South Holland"
                },
                {
                  "x": 19.1,
                  "y": 59.9,
                  "label": "South Kesteven"
                },
                {
                  "x": 6.4,
                  "y": 61.8,
                  "label": "West Lindsey"
                },
                {
                  "x": 3.8,
                  "y": 64.2,
                  "label": "Breckland"
                },
                {
                  "x": 0.9,
                  "y": 54.4,
                  "label": "Broadland"
                },
                {
                  "x": 1.2,
                  "y": 71.5,
                  "label": "Great Yarmouth"
                },
                {
                  "x": 4.1,
                  "y": 66.4,
                  "label": "King's Lynn and West Norfolk"
                },
                {
                  "x": 0.8,
                  "y": 58.9,
                  "label": "North Norfolk"
                },
                {
                  "x": 14.5,
                  "y": 43.8,
                  "label": "Norwich"
                },
                {
                  "x": 1.3,
                  "y": 51.7,
                  "label": "South Norfolk"
                },
                {
                  "x": 14.2,
                  "y": 69.8,
                  "label": "Ashfield"
                },
                {
                  "x": 15.6,
                  "y": 67.8,
                  "label": "Bassetlaw"
                },
                {
                  "x": 23.2,
                  "y": 54.6,
                  "label": "Broxtowe"
                },
                {
                  "x": 10.0,
                  "y": 55.5,
                  "label": "Gedling"
                },
                {
                  "x": 16.9,
                  "y": 70.9,
                  "label": "Mansfield"
                },
                {
                  "x": 8.6,
                  "y": 60.4,
                  "label": "Newark and Sherwood"
                },
                {
                  "x": 4.7,
                  "y": 42.5,
                  "label": "Rushcliffe"
                },
                {
                  "x": 6.2,
                  "y": 50.3,
                  "label": "Cherwell"
                },
                {
                  "x": 11.1,
                  "y": 29.7,
                  "label": "Oxford"
                },
                {
                  "x": 1.4,
                  "y": 45.0,
                  "label": "South Oxfordshire"
                },
                {
                  "x": 5.6,
                  "y": 43.3,
                  "label": "Vale of White Horse"
                },
                {
                  "x": 0.5,
                  "y": 46.3,
                  "label": "West Oxfordshire"
                },
                {
                  "x": 2.8,
                  "y": 68.9,
                  "label": "Cannock Chase"
                },
                {
                  "x": 11.3,
                  "y": 63.2,
                  "label": "East Staffordshire"
                },
                {
                  "x": 0.4,
                  "y": 58.8,
                  "label": "Lichfield"
                },
                {
                  "x": 15.0,
                  "y": 63.0,
                  "label": "Newcastle-under-Lyme"
                },
                {
                  "x": 1.9,
                  "y": 64.8,
                  "label": "South Staffordshire"
                },
                {
                  "x": 5.3,
                  "y": 56.0,
                  "label": "Stafford"
                },
                {
                  "x": 3.7,
                  "y": 64.7,
                  "label": "Staffordshire Moorlands"
                },
                {
                  "x": 16.3,
                  "y": 67.5,
                  "label": "Tamworth"
                },
                {
                  "x": 0.6,
                  "y": 54.2,
                  "label": "Babergh"
                },
                {
                  "x": 8.1,
                  "y": 58.3,
                  "label": "Ipswich"
                },
                {
                  "x": 2.3,
                  "y": 55.2,
                  "label": "Mid Suffolk"
                },
                {
                  "x": 0.9,
                  "y": 40.5,
                  "label": "Elmbridge"
                },
                {
                  "x": 0.4,
                  "y": 47.9,
                  "label": "Epsom and Ewell"
                },
                {
                  "x": 0.1,
                  "y": 43.8,
                  "label": "Guildford"
                },
                {
                  "x": 0.1,
                  "y": 46.9,
                  "label": "Mole Valley"
                },
                {
                  "x": 15.6,
                  "y": 50.5,
                  "label": "Reigate and Banstead"
                },
                {
                  "x": 3.0,
                  "y": 54.3,
                  "label": "Runnymede"
                },
                {
                  "x": 6.5,
                  "y": 60.3,
                  "label": "Spelthorne"
                },
                {
                  "x": 3.9,
                  "y": 51.0,
                  "label": "Surrey Heath"
                },
                {
                  "x": 1.8,
                  "y": 52.8,
                  "label": "Tandridge"
                },
                {
                  "x": 0.4,
                  "y": 41.6,
                  "label": "Waverley"
                },
                {
                  "x": 0.7,
                  "y": 43.9,
                  "label": "Woking"
                },
                {
                  "x": 9.9,
                  "y": 66.9,
                  "label": "North Warwickshire"
                },
                {
                  "x": 22.1,
                  "y": 66.0,
                  "label": "Nuneaton and Bedworth"
                },
                {
                  "x": 45.1,
                  "y": 56.7,
                  "label": "Rugby"
                },
                {
                  "x": 4.2,
                  "y": 51.6,
                  "label": "Stratford-on-Avon"
                },
                {
                  "x": 24.1,
                  "y": 41.2,
                  "label": "Warwick"
                },
                {
                  "x": 0.1,
                  "y": 54.6,
                  "label": "Adur"
                },
                {
                  "x": 0.2,
                  "y": 62.5,
                  "label": "Arun"
                },
                {
                  "x": 6.6,
                  "y": 50.9,
                  "label": "Chichester"
                },
                {
                  "x": 24.2,
                  "y": 58.4,
                  "label": "Crawley"
                },
                {
                  "x": 0.3,
                  "y": 48.5,
                  "label": "Horsham"
                },
                {
                  "x": 19.9,
                  "y": 46.9,
                  "label": "Mid Sussex"
                },
                {
                  "x": 1.7,
                  "y": 53.0,
                  "label": "Worthing"
                },
                {
                  "x": 0.4,
                  "y": 55.4,
                  "label": "Bromsgrove"
                },
                {
                  "x": 0.8,
                  "y": 52.2,
                  "label": "Malvern Hills"
                },
                {
                  "x": 1.5,
                  "y": 62.3,
                  "label": "Redditch"
                },
                {
                  "x": 7.3,
                  "y": 53.7,
                  "label": "Worcester"
                },
                {
                  "x": 3.0,
                  "y": 57.9,
                  "label": "Wychavon"
                },
                {
                  "x": 5.4,
                  "y": 63.1,
                  "label": "Wyre Forest"
                },
                {
                  "x": 1.6,
                  "y": 37.3,
                  "label": "St Albans"
                },
                {
                  "x": 10.8,
                  "y": 53.0,
                  "label": "Welwyn Hatfield"
                },
                {
                  "x": 0.1,
                  "y": 50.4,
                  "label": "East Hertfordshire"
                },
                {
                  "x": 29.0,
                  "y": 59.2,
                  "label": "Stevenage"
                },
                {
                  "x": 33.5,
                  "y": 58.3,
                  "label": "Bolton"
                },
                {
                  "x": 18.5,
                  "y": 54.1,
                  "label": "Bury"
                },
                {
                  "x": 25.6,
                  "y": 39.6,
                  "label": "Manchester"
                },
                {
                  "x": 29.1,
                  "y": 60.9,
                  "label": "Oldham"
                },
                {
                  "x": 30.6,
                  "y": 60.1,
                  "label": "Rochdale"
                },
                {
                  "x": 22.1,
                  "y": 56.8,
                  "label": "Salford"
                },
                {
                  "x": 21.8,
                  "y": 47.7,
                  "label": "Stockport"
                },
                {
                  "x": 20.3,
                  "y": 61.1,
                  "label": "Tameside"
                },
                {
                  "x": 6.8,
                  "y": 42.3,
                  "label": "Trafford"
                },
                {
                  "x": 34.4,
                  "y": 63.9,
                  "label": "Wigan"
                },
                {
                  "x": 18.9,
                  "y": 51.6,
                  "label": "Knowsley"
                },
                {
                  "x": 38.6,
                  "y": 41.8,
                  "label": "Liverpool"
                },
                {
                  "x": 29.5,
                  "y": 58.0,
                  "label": "St. Helens"
                },
                {
                  "x": 14.3,
                  "y": 48.1,
                  "label": "Sefton"
                },
                {
                  "x": 21.2,
                  "y": 48.3,
                  "label": "Wirral"
                },
                {
                  "x": 16.7,
                  "y": 69.0,
                  "label": "Doncaster"
                },
                {
                  "x": 13.9,
                  "y": 67.9,
                  "label": "Rotherham"
                },
                {
                  "x": 28.5,
                  "y": 49.3,
                  "label": "Newcastle upon Tyne"
                },
                {
                  "x": 20.2,
                  "y": 53.4,
                  "label": "North Tyneside"
                },
                {
                  "x": 41.5,
                  "y": 62.0,
                  "label": "South Tyneside"
                },
                {
                  "x": 28.7,
                  "y": 61.3,
                  "label": "Sunderland"
                },
                {
                  "x": 18.1,
                  "y": 50.4,
                  "label": "Birmingham"
                },
                {
                  "x": 46.6,
                  "y": 55.6,
                  "label": "Coventry"
                },
                {
                  "x": 18.3,
                  "y": 67.6,
                  "label": "Dudley"
                },
                {
                  "x": 41.6,
                  "y": 66.7,
                  "label": "Sandwell"
                },
                {
                  "x": 9.3,
                  "y": 56.2,
                  "label": "Solihull"
                },
                {
                  "x": 22.4,
                  "y": 67.9,
                  "label": "Walsall"
                },
                {
                  "x": 36.2,
                  "y": 62.6,
                  "label": "Wolverhampton"
                },
                {
                  "x": 19.7,
                  "y": 54.2,
                  "label": "Bradford"
                },
                {
                  "x": 21.4,
                  "y": 55.7,
                  "label": "Calderdale"
                },
                {
                  "x": 15.0,
                  "y": 54.7,
                  "label": "Kirklees"
                },
                {
                  "x": 16.2,
                  "y": 49.7,
                  "label": "Leeds"
                },
                {
                  "x": 19.6,
                  "y": 66.4,
                  "label": "Wakefield"
                },
                {
                  "x": 29.9,
                  "y": 56.9,
                  "label": "Gateshead"
                },
                {
                  "x": 11.4,
                  "y": 62.4,
                  "label": "Barking and Dagenham"
                },
                {
                  "x": 21.5,
                  "y": 37.8,
                  "label": "Barnet"
                },
                {
                  "x": 4.5,
                  "y": 63.0,
                  "label": "Bexley"
                },
                {
                  "x": 22.4,
                  "y": 40.3,
                  "label": "Brent"
                },
                {
                  "x": 4.3,
                  "y": 49.4,
                  "label": "Bromley"
                },
                {
                  "x": 7.8,
                  "y": 25.1,
                  "label": "Camden"
                },
                {
                  "x": 24.6,
                  "y": 45.7,
                  "label": "Croydon"
                },
                {
                  "x": 27.7,
                  "y": 39.6,
                  "label": "Ealing"
                },
                {
                  "x": 10.7,
                  "y": 44.2,
                  "label": "Enfield"
                },
                {
                  "x": 5.1,
                  "y": 44.4,
                  "label": "Greenwich"
                },
                {
                  "x": 14.0,
                  "y": 21.5,
                  "label": "Hackney"
                },
                {
                  "x": 11.8,
                  "y": 30.0,
                  "label": "Hammersmith and Fulham"
                },
                {
                  "x": 5.8,
                  "y": 24.4,
                  "label": "Haringey"
                },
                {
                  "x": 12.6,
                  "y": 45.4,
                  "label": "Harrow"
                },
                {
                  "x": 6.6,
                  "y": 69.7,
                  "label": "Havering"
                },
                {
                  "x": 36.4,
                  "y": 56.4,
                  "label": "Hillingdon"
                },
                {
                  "x": 38.0,
                  "y": 48.9,
                  "label": "Hounslow"
                },
                {
                  "x": 2.9,
                  "y": 24.8,
                  "label": "Islington"
                },
                {
                  "x": 12.3,
                  "y": 31.3,
                  "label": "Kensington and Chelsea"
                },
                {
                  "x": 3.6,
                  "y": 38.4,
                  "label": "Kingston upon Thames"
                },
                {
                  "x": 9.1,
                  "y": 21.4,
                  "label": "Lambeth"
                },
                {
                  "x": 7.0,
                  "y": 30.1,
                  "label": "Lewisham"
                },
                {
                  "x": 9.6,
                  "y": 37.1,
                  "label": "Merton"
                },
                {
                  "x": 23.0,
                  "y": 47.2,
                  "label": "Newham"
                },
                {
                  "x": 12.8,
                  "y": 46.0,
                  "label": "Redbridge"
                },
                {
                  "x": 0.8,
                  "y": 30.7,
                  "label": "Richmond upon Thames"
                },
                {
                  "x": 15.9,
                  "y": 27.2,
                  "label": "Southwark"
                },
                {
                  "x": 1.3,
                  "y": 53.7,
                  "label": "Sutton"
                },
                {
                  "x": 14.2,
                  "y": 32.5,
                  "label": "Tower Hamlets"
                },
                {
                  "x": 5.7,
                  "y": 40.9,
                  "label": "Waltham Forest"
                },
                {
                  "x": 2.1,
                  "y": 25.0,
                  "label": "Wandsworth"
                },
                {
                  "x": 2.0,
                  "y": 31.0,
                  "label": "Westminster"
                },
                {
                  "x": 3.8,
                  "y": 50.9,
                  "label": "Isle of Anglesey"
                },
                {
                  "x": 7.6,
                  "y": 42.0,
                  "label": "Gwynedd"
                },
                {
                  "x": 1.9,
                  "y": 54.0,
                  "label": "Conwy"
                },
                {
                  "x": 6.7,
                  "y": 54.0,
                  "label": "Denbighshire"
                },
                {
                  "x": 5.0,
                  "y": 56.4,
                  "label": "Flintshire"
                },
                {
                  "x": 8.5,
                  "y": 59.0,
                  "label": "Wrexham"
                },
                {
                  "x": 0.0,
                  "y": 45.4,
                  "label": "Ceredigion"
                },
                {
                  "x": 1.3,
                  "y": 57.1,
                  "label": "Pembrokeshire"
                },
                {
                  "x": 3.2,
                  "y": 53.8,
                  "label": "Carmarthenshire"
                },
                {
                  "x": 24.8,
                  "y": 51.5,
                  "label": "Swansea"
                },
                {
                  "x": 4.5,
                  "y": 56.8,
                  "label": "Neath Port Talbot"
                },
                {
                  "x": 2.8,
                  "y": 54.6,
                  "label": "Bridgend"
                },
                {
                  "x": 1.6,
                  "y": 49.3,
                  "label": "Vale of Glamorgan"
                },
                {
                  "x": 34.4,
                  "y": 40.0,
                  "label": "Cardiff"
                },
                {
                  "x": 7.8,
                  "y": 53.7,
                  "label": "Rhondda Cynon Taff"
                },
                {
                  "x": 4.8,
                  "y": 57.6,
                  "label": "Caerphilly"
                },
                {
                  "x": 6.2,
                  "y": 62.0,
                  "label": "Blaenau Gwent"
                },
                {
                  "x": 1.1,
                  "y": 59.8,
                  "label": "Torfaen"
                },
                {
                  "x": 0.1,
                  "y": 49.6,
                  "label": "Monmouthshire"
                },
                {
                  "x": 18.1,
                  "y": 56.0,
                  "label": "Newport"
                },
                {
                  "x": 0.4,
                  "y": 53.7,
                  "label": "Powys"
                },
                {
                  "x": 9.2,
                  "y": 56.4,
                  "label": "Merthyr Tydfil"
                }
              ],
              "backgroundColor": "rgba(239,68,68,0.55)",
              "pointRadius": 3.5
            },
            {
              "label": "OLS Trendline (r=0.15)",
              "type": "line",
              "data": [
                {
                  "x": 0.0,
                  "y": 52.7
                },
                {
                  "x": 49.0,
                  "y": 59.1
                }
              ],
              "borderColor": "#f97316",
              "borderWidth": 2,
              "pointRadius": 0
            }
          ]
        },
        "definition": {
          "metric": "Council-level 2016 EU Referendum Leave Vote % (Electoral Commission) vs local population growth or asylum support per 10k residents.",
          "scope": "Matched UK Local Authorities.",
          "nuance": "Tests whether restrictionist vote share correlates positively or negatively with local migration exposure."
        }
      }
    ]
  },
  {
    "id": "hyp_media",
    "section": "Part 4 · Are They Blending In or Causing Social Problems?",
    "ref": "4.4",
    "title": "Media Narratives vs Reality (Headlines, Framing & Hansard)",
    "question": "Which immigration stories do major UK news outlets tell, how does coverage compare with actual arrival volumes, and how do framing biases differ?",
    "context_note": "Auditing <strong>900 recent headlines across 9 major UK outlets</strong> (100 per outlet via Google News UK RSS) alongside <strong>20 years of UK Parliament Hansard debates (2006–2025)</strong> reveals a sharp salience gap: <strong>Small Boats &amp; Asylum</strong> account for <strong>38.8%</strong> of UK press headlines despite representing <strong>8.4%</strong> of combined Home Office arrivals &amp; claims (2023–2025).",
    "charts": [
      {
        "headline": "Salience distortion: Small Boats & Asylum generate 38.8% of UK news headlines vs 8.4% of actual inflows.",
        "footnote": "*Compares topic share across 900 recent UK news headlines (9 outlets x 100) vs 2023–2025 Home Office Small Boat detections, non-boat Asylum claims, and non-visit Legal Visas. Source: <a href=\"https://news.google.com/?hl=en-GB&gl=GB&ceid=GB:en\" target=\"_blank\" rel=\"noopener\">Google News UK RSS Corpus (9 Outlets · 900 Headlines)</a> | <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a> | <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Asylum & Returns Datasets (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Media Salience vs Official Reality: Headline Share (%) vs Actual Arrivals Share (%)",
          "labels": [
            "Small Boats / Irregular",
            "Asylum Claims (excl. Small Boats)",
            "Legal Visas & Policy (Work/Study/Family)"
          ],
          "y_title": "Share (%)",
          "datasets": [
            {
              "label": "UK News Media Coverage (%)",
              "data": [
                10.1,
                28.7,
                61.2
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Actual Home Office Volumes 2023–2025 (%)",
              "data": [
                3.1,
                5.3,
                91.6
              ],
              "backgroundColor": "#38bdf8"
            }
          ]
        },
        "definition": {
          "metric": "Share of 900 recent UK headlines across 9 outlets vs share of 2023–2025 Home Office inflows & asylum claims (%).",
          "scope": "9 UK news outlets (100 headlines each via Google News UK RSS) vs Home Office 2023–2025 arrivals.",
          "nuance": "Measures topic salience distortion between press coverage and official arrival volumes."
        }
      },
      {
        "headline": "Outlet agenda: tabloid & right-leaning outlets concentrate heavily on Small Boats & Asylum, while FT/BBC/Guardian cover broader labour, university & policy angles.",
        "footnote": "*100% stacked topic classification across 900 recent UK headlines (100 per outlet). Ordered by combined Small Boats + Asylum share. Source: <a href=\"https://news.google.com/?hl=en-GB&gl=GB&ceid=GB:en\" target=\"_blank\" rel=\"noopener\">Google News UK RSS Corpus (9 Outlets · 900 Headlines)</a>",
        "chart": {
          "type": "bar",
          "stacked": true,
          "show_pct_tooltip": true,
          "y_min": 0,
          "y_max": 100,
          "title": "Topic Mix by Major UK News Outlet (% of Headlines · 9 Outlets)",
          "labels": [
            "GB News",
            "Sky News",
            "Daily Express",
            "Daily Mail",
            "BBC News",
            "The Sun",
            "Financial Times",
            "The Telegraph",
            "The Guardian"
          ],
          "y_title": "Share of Outlet Headlines (%)",
          "datasets": [
            {
              "label": "Small Boats / Irregular (%)",
              "data": [
                19.0,
                14.0,
                18.0,
                13.2,
                7.0,
                11.0,
                3.0,
                4.0,
                2.0
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Asylum / Hotels / Deportation (%)",
              "data": [
                48.0,
                48.0,
                44.0,
                43.4,
                23.0,
                18.0,
                17.0,
                11.0,
                6.0
              ],
              "backgroundColor": "#f97316"
            },
            {
              "label": "Legal Work / Care / Skills (%)",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                1.0,
                0.0,
                1.0
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Students / Universities (%)",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                1.0
              ],
              "backgroundColor": "#818cf8"
            },
            {
              "label": "Net Migration / General Policy (%)",
              "data": [
                33.0,
                38.0,
                38.0,
                43.4,
                69.0,
                70.0,
                79.0,
                85.0,
                90.0
              ],
              "backgroundColor": "#71717a"
            }
          ]
        },
        "definition": {
          "metric": "100% stacked classification of 100 recent headlines per outlet across 5 immigration topics.",
          "scope": "9 major UK outlets (900 headlines total).",
          "nuance": "Keywords classify each headline into its primary topic; ordered by combined Small Boats + Asylum share."
        }
      },
      {
        "headline": "Framing bias: Threat/Crisis/Enforcement language dominates tabloid headlines, while Economic/Skills/Rights language is higher in FT and Guardian.",
        "footnote": "*Lexicon audit of 900 headlines: % containing Threat/Enforcement terms vs Economic/Rights terms. Source: <a href=\"https://news.google.com/?hl=en-GB&gl=GB&ceid=GB:en\" target=\"_blank\" rel=\"noopener\">Google News UK RSS Corpus (9 Outlets · 900 Headlines)</a>",
        "chart": {
          "type": "bar",
          "title": "Headline Framing Bias by UK Outlet: Threat/Crisis (%) vs Economic/Rights (%)",
          "labels": [
            "GB News",
            "Sky News",
            "Daily Express",
            "Daily Mail",
            "BBC News",
            "The Sun",
            "Financial Times",
            "The Telegraph",
            "The Guardian"
          ],
          "y_title": "% of Headlines",
          "datasets": [
            {
              "label": "Threat / Crisis / Enforcement Frame (%)",
              "data": [
                38.0,
                33.0,
                29.0,
                17.0,
                13.0,
                28.0,
                4.0,
                7.0,
                6.0
              ],
              "backgroundColor": "#ef4444"
            },
            {
              "label": "Economic / Skills / Rights Frame (%)",
              "data": [
                7.0,
                5.0,
                3.0,
                3.8,
                14.0,
                3.0,
                10.0,
                4.0,
                10.0
              ],
              "backgroundColor": "#10b981"
            }
          ]
        },
        "definition": {
          "metric": "Percentage of each outlet's headlines containing Threat/Crisis/Enforcement lexicon vs Economic/Skills/Rights lexicon.",
          "scope": "9 major UK outlets (100 headlines each).",
          "nuance": "A single headline may match neither or both lexicons; measures framing emphasis rather than editorial quality."
        }
      },
      {
        "headline": "Westminster agenda (Hansard): Parliamentary mentions of 'small boats' exploded from near-zero pre-2020 to rival 'asylum' and 'net migration'.",
        "footnote": "*Annual spoken contributions in UK Parliament matching exact phrases (Hansard API, 2006–2025). Source: <a href=\"https://hansard.parliament.uk/\" target=\"_blank\" rel=\"noopener\">UK Parliament Hansard API (2006–2025)</a>",
        "chart": {
          "type": "line",
          "title": "UK Parliament Spoken Mentions by Immigration Frame (Hansard · 2006–2025)",
          "labels": [
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
          "y_title": "Parliamentary Mentions",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "'Asylum'",
              "data": [
                564,
                897,
                462,
                390,
                295,
                280,
                257,
                301,
                523,
                795,
                1066,
                379,
                440,
                477,
                839,
                1405,
                1894,
                2076,
                1379,
                2202
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249,115,22,0.10)"
            },
            {
              "label": "'Small Boats'",
              "data": [
                3,
                3,
                7,
                7,
                3,
                4,
                3,
                9,
                2,
                2,
                3,
                2,
                17,
                18,
                59,
                105,
                228,
                464,
                234,
                307
              ],
              "borderColor": "#ef4444",
              "backgroundColor": "rgba(239,68,68,0.12)"
            },
            {
              "label": "'Net Migration'",
              "data": [
                10,
                20,
                19,
                9,
                62,
                81,
                62,
                181,
                131,
                128,
                160,
                106,
                92,
                73,
                28,
                10,
                27,
                164,
                130,
                187
              ],
              "borderColor": "#fbbf24",
              "backgroundColor": "rgba(251,191,36,0.10)"
            },
            {
              "label": "'Care Workers'",
              "data": [
                37,
                41,
                45,
                48,
                33,
                50,
                84,
                114,
                134,
                73,
                94,
                94,
                75,
                69,
                604,
                478,
                247,
                195,
                189,
                209
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16,185,129,0.10)"
            },
            {
              "label": "'Student Visas'",
              "data": [
                0,
                1,
                6,
                33,
                27,
                63,
                30,
                35,
                20,
                10,
                25,
                4,
                6,
                11,
                4,
                5,
                10,
                17,
                10,
                52
              ],
              "borderColor": "#818cf8",
              "backgroundColor": "rgba(129,140,248,0.10)"
            }
          ]
        },
        "definition": {
          "metric": "Annual count of spoken contributions in the UK Parliament matching exact immigration phrases.",
          "scope": "House of Commons & House of Lords, 2006–2025 (UK Parliament Hansard API).",
          "nuance": "Tracks Westminster political attention across governing party eras."
        }
      }
    ]
  },
  {
    "id": "sol_curbs",
    "section": "Part 5 · Do the Solutions Work?",
    "ref": "5.1",
    "title": "Observed Impact of 2024–2025 Policy Curbs",
    "question": "How sharply did Health & Care, Work, and Study visa grants fall after the 2024–2025 rule changes?",
    "charts": [
      {
        "headline": "Health & Care and overall Work visa grants contracted sharply in 2024–2025 following dependant bans and salary threshold rises.",
        "footnote": "*Issued Work, Health & Care subgroup, and Study entry-clearance visas (000s, main + dependants, 2019–2025). Source: <a href=\"https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables\" target=\"_blank\" rel=\"noopener\">Home Office Entry Clearance Visas (Jun 2026)</a>",
        "chart": {
          "type": "bar",
          "title": "Post-2024 Contraction: Work, Health & Care, and Study Visas (000s · 2019–2025)",
          "labels": [
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
          ],
          "y_title": "Visas Issued (000s)",
          "political_eras": [
            {
              "start": 1945,
              "end": 1951,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1951,
              "end": 1964,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1964,
              "end": 1970,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1970,
              "end": 1974,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1974,
              "end": 1979,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 1979,
              "end": 1997,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 1997,
              "end": 2010,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            },
            {
              "start": 2010,
              "end": 2015,
              "party": "Coalition",
              "short": "COAL",
              "color": "#818cf8",
              "bg": "rgba(129,140,248,0.065)"
            },
            {
              "start": 2015,
              "end": 2024,
              "party": "Conservative",
              "short": "CON",
              "color": "#3b82f6",
              "bg": "rgba(59,130,246,0.055)"
            },
            {
              "start": 2024,
              "end": 2026,
              "party": "Labour",
              "short": "LAB",
              "color": "#ef4444",
              "bg": "rgba(239,68,68,0.055)"
            }
          ],
          "macro_events": [
            {
              "label": "2008",
              "text": "GFC",
              "color": "#a1a1aa"
            },
            {
              "label": "2016",
              "text": "Brexit",
              "color": "#a855f7"
            },
            {
              "label": "2020",
              "text": "COVID",
              "color": "#f59e0b"
            },
            {
              "label": "2021",
              "text": "2021 Rules",
              "color": "#38bdf8"
            },
            {
              "label": "2022",
              "text": "Ukraine War",
              "color": "#ef4444"
            },
            {
              "label": "2024",
              "text": "2024 Curbs",
              "color": "#10b981"
            }
          ],
          "datasets": [
            {
              "label": "All Work Visas",
              "data": [
                192.6,
                114.5,
                239.2,
                421.6,
                613.6,
                368.1,
                260.4
              ],
              "backgroundColor": "#38bdf8"
            },
            {
              "label": "Health & Care Subgroup",
              "data": [
                0.0,
                1.2,
                63.3,
                157.6,
                348.2,
                110.5,
                48.5
              ],
              "backgroundColor": "#10b981"
            },
            {
              "label": "Study Visas",
              "data": [
                404.4,
                250.1,
                435.1,
                623.7,
                604.3,
                418.9,
                427.3
              ],
              "backgroundColor": "#818cf8"
            }
          ]
        },
        "definition": {
          "metric": "Issued Work, Health & Care subgroup, and Study visas across 2019–2025 (000s).",
          "scope": "UK-wide, 2019–2025 (Home Office Data_Vis_D02).",
          "nuance": "Measures observed volume contraction following the 2024 dependant bans and salary threshold increases."
        }
      }
    ]
  }
];
