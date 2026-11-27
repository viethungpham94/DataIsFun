window.INSIGHTS_DATA = [
  {
    "id": "q0_1",
    "chapter": 0,
    "question": "Who operated in which pitch zones and starting roles over their careers?",
    "myth": "Both were simply forwards judged by the same positional baseline throughout their careers.",
    "insight_badge": "Messi: 569 RW / 578 CF+False 9 / 64 AM \u00b7 Ronaldo: 519 LW / 504 CF / 292 RW",
    "summary": "Across 1,229 Messi and 1,363 Ronaldo senior appearances with tactical role logs, Messi split his career between Right Wing (569 apps), Centre-Forward (365), Second Striker / False 9 (213), and Attacking/Central Midfield (64), with his average on-ball position migrating deeper into the right-central playmaking pocket. Ronaldo evolved from a touchline Right Winger (292 apps) and inside-left forward (519 LW apps) into a dedicated Centre-Forward (504 CF apps, 100% of appearances from 2022/23 onward).",
    "insights": [
      {
        "headline": "Messi stayed deeper and central; Ronaldo shifted from wide flank to central box.",
        "footnote": "*Static on-ball baseline mapping each instrumented season's mean normalised on-ball event coordinates (centroid_x, centroid_y) cropped to the opponent half (50% halfway line to 100% goal line, 105m \u00d7 68m FIFA pitch). Reflects on-ball event telemetry only (all on-ball events in StatsBomb; shots in Understat & FotMob \u2014 no off-ball optical tracking). Hover over any point for player, season, and exact coordinates. Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "type": "spatial_baseline",
          "title": "Average On-Ball Position Migration (Opponent Half: 50%\u2013100%)"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo played across all three front roles; Messi mainly split RW and CF/SS.",
        "footnote": "*Extracted from Transfermarkt match performance logs (1,229 Messi and 1,363 Ronaldo played appearances). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "type": "dual_pie",
          "title": "Career Appearances by Starting Tactical Role",
          "unit": "appearances",
          "messi": {
            "title": "Lionel Messi",
            "subtitle": "1,229 Played Appearances",
            "labels": [
              "RW (46.6%)",
              "CF (29.9%)",
              "SS/F9 (17.4%)",
              "AM (5.2%)",
              "LW (0.8%)"
            ],
            "full_labels": [
              "Right Wing",
              "Centre-Forward",
              "Second Striker / False 9",
              "Attacking / Central Midfield",
              "Left Wing"
            ],
            "data": [
              569,
              365,
              213,
              64,
              10
            ],
            "colors": [
              "#38bdf8",
              "#f97316",
              "#10b981",
              "#eab308",
              "#a855f7"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo",
            "subtitle": "1,363 Played Appearances",
            "labels": [
              "LW (38.6%)",
              "CF (37.4%)",
              "RW (21.7%)",
              "SS/F9 (2.3%)",
              "AM (0.0%)"
            ],
            "full_labels": [
              "Left Wing",
              "Centre-Forward",
              "Right Wing",
              "Second Striker / False 9",
              "Attacking / Central Midfield"
            ],
            "data": [
              519,
              504,
              292,
              31,
              0
            ],
            "colors": [
              "#a855f7",
              "#f97316",
              "#38bdf8",
              "#10b981",
              "#eab308"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "25 seasons of Transfermarkt starting tactical role logs.",
          "why": "Full-career coverage (\u226566% threshold met) of starting XI positions."
        },
        "hero": true
      },
      {
        "headline": "Messi: Right Wing to False Nine, then flexible between both.",
        "footnote": "*Stacked 100% area chart of Messi's starting tactical role share across all seasons with >=5 played appearances. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Messi: 5-Position Tactical Role Share (%) by Season",
          "type": "line",
          "stacked": true,
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Right Wing (RW)",
              "data": [
                null,
                42.9,
                11.9,
                62.9,
                65.2,
                74.0,
                83.1,
                62.5,
                27.3,
                7.2,
                3.2,
                5.3,
                70.1,
                93.2,
                89.5,
                25.0,
                65.5,
                65.9,
                22.6,
                41.3,
                27.3,
                53.8,
                37.0,
                18.4,
                95.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56, 189, 248, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Centre-Forward (CF)",
              "data": [
                null,
                0.0,
                9.5,
                8.6,
                13.0,
                2.0,
                4.6,
                18.8,
                69.7,
                79.7,
                80.6,
                77.2,
                23.9,
                3.4,
                0.0,
                15.6,
                13.8,
                18.2,
                53.2,
                43.5,
                16.4,
                25.6,
                28.3,
                24.5,
                0.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249, 115, 22, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Left Wing (LW)",
              "data": [
                null,
                0.0,
                11.9,
                2.9,
                4.3,
                4.0,
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
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "borderColor": "#a855f7",
              "backgroundColor": "rgba(168, 85, 247, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Second Striker / False 9",
              "data": [
                null,
                28.6,
                16.7,
                17.1,
                15.2,
                12.0,
                7.7,
                9.4,
                3.0,
                11.6,
                9.7,
                8.8,
                6.0,
                1.7,
                7.0,
                57.8,
                17.2,
                11.4,
                22.6,
                15.2,
                47.3,
                20.5,
                32.6,
                44.9,
                0.0
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16, 185, 129, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Attacking / Central Midfield",
              "data": [
                null,
                28.6,
                38.1,
                8.6,
                2.2,
                8.0,
                4.6,
                9.4,
                0.0,
                1.4,
                6.5,
                8.8,
                0.0,
                1.7,
                3.5,
                1.6,
                3.4,
                4.5,
                1.6,
                0.0,
                9.1,
                0.0,
                0.0,
                10.2,
                0.0
              ],
              "borderColor": "#eab308",
              "backgroundColor": "rgba(234, 179, 8, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            }
          ],
          "y_min": 0,
          "y_max": 100,
          "x_title": "Season",
          "y_title": "Share of Appearances (%)",
          "hide_axes": false,
          "show_labels": false,
          "context_strip": [
            {
              "season": "02-03",
              "club": "\u2014",
              "color": "#52525b",
              "manager": ""
            },
            {
              "season": "03-04",
              "club": "\u2014",
              "color": "#52525b",
              "manager": "Pere Gratac\u00f3s"
            },
            {
              "season": "04-05",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Pere Gratac\u00f3s / Frank Rijkaard"
            },
            {
              "season": "05-06",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Frank Rijkaard"
            },
            {
              "season": "06-07",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Frank Rijkaard"
            },
            {
              "season": "07-08",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Frank Rijkaard"
            },
            {
              "season": "08-09",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Pep Guardiola"
            },
            {
              "season": "09-10",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Pep Guardiola"
            },
            {
              "season": "10-11",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Pep Guardiola"
            },
            {
              "season": "11-12",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Pep Guardiola"
            },
            {
              "season": "12-13",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Tito Vilanova / Jordi Roura"
            },
            {
              "season": "13-14",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Tata Martino"
            },
            {
              "season": "14-15",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Luis Enrique"
            },
            {
              "season": "15-16",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Luis Enrique"
            },
            {
              "season": "16-17",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Luis Enrique"
            },
            {
              "season": "17-18",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Ernesto Valverde"
            },
            {
              "season": "18-19",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Ernesto Valverde"
            },
            {
              "season": "19-20",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Quique Seti\u00e9n / Ernesto Valverde"
            },
            {
              "season": "20-21",
              "club": "FC Barcelona",
              "color": "#0ea5e9",
              "manager": "Ronald Koeman / Quique Seti\u00e9n"
            },
            {
              "season": "21-22",
              "club": "PSG",
              "color": "#a855f7",
              "manager": "Mauricio Pochettino / Christophe Galtier"
            },
            {
              "season": "22-23",
              "club": "PSG",
              "color": "#a855f7",
              "manager": "Christophe Galtier / Tata Martino"
            },
            {
              "season": "23-24",
              "club": "Inter Miami",
              "color": "#ec4899",
              "manager": "Tata Martino"
            },
            {
              "season": "24-25",
              "club": "Inter Miami",
              "color": "#ec4899",
              "manager": "Javier Mascherano / Tata Martino"
            },
            {
              "season": "25-26",
              "club": "Inter Miami",
              "color": "#ec4899",
              "manager": "Javier Mascherano / Guillermo Hoyos"
            },
            {
              "season": "26-27*",
              "club": "Inter Miami",
              "color": "#ec4899",
              "manager": "Kily Gonz\u00e1lez / Guillermo Hoyos"
            }
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "25 seasons of Transfermarkt starting tactical role logs.",
          "why": "Full-career coverage (\u226566% threshold met) of starting XI positions."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo: three distinct eras \u2014 Right Wing, Left Wing Forward, then Central Striker.",
        "footnote": "*Stacked 100% area chart of Ronaldo's starting tactical role share across all seasons with >=5 played appearances. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Ronaldo: 5-Position Tactical Role Share (%) by Season",
          "type": "line",
          "stacked": true,
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Right Wing (RW)",
              "data": [
                19.0,
                61.4,
                84.1,
                59.7,
                77.0,
                80.3,
                75.0,
                13.0,
                3.4,
                1.4,
                1.6,
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
                0.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "rgba(56, 189, 248, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Centre-Forward (CF)",
              "data": [
                4.8,
                0.0,
                0.0,
                0.0,
                0.0,
                4.9,
                5.0,
                56.5,
                11.9,
                1.4,
                4.7,
                1.8,
                38.3,
                39.3,
                28.6,
                74.5,
                31.9,
                47.1,
                93.3,
                91.8,
                100.0,
                100.0,
                100.0,
                100.0,
                92.3
              ],
              "borderColor": "#f97316",
              "backgroundColor": "rgba(249, 115, 22, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Left Wing (LW)",
              "data": [
                54.8,
                35.1,
                15.9,
                40.3,
                14.8,
                8.2,
                16.7,
                19.6,
                83.1,
                97.1,
                93.8,
                94.7,
                48.3,
                60.7,
                64.3,
                23.6,
                59.6,
                52.9,
                6.7,
                8.2,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "borderColor": "#a855f7",
              "backgroundColor": "rgba(168, 85, 247, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Second Striker / False 9",
              "data": [
                2.4,
                1.8,
                0.0,
                0.0,
                4.9,
                1.6,
                1.7,
                10.9,
                0.0,
                0.0,
                0.0,
                3.5,
                13.3,
                0.0,
                7.1,
                1.8,
                8.5,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "borderColor": "#10b981",
              "backgroundColor": "rgba(16, 185, 129, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            },
            {
              "label": "Attacking / Central Midfield",
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
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "borderColor": "#eab308",
              "backgroundColor": "rgba(234, 179, 8, 0.55)",
              "fill": true,
              "tension": 0.25,
              "borderWidth": 1.5,
              "pointRadius": 1.5
            }
          ],
          "y_min": 0,
          "y_max": 100,
          "x_title": "Season",
          "y_title": "Share of Appearances (%)",
          "hide_axes": false,
          "show_labels": false,
          "context_strip": [
            {
              "season": "02-03",
              "club": "Sporting CP",
              "color": "#10b981",
              "manager": "Ladislau B\u00f6l\u00f6ni"
            },
            {
              "season": "03-04",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "04-05",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "05-06",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "06-07",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "07-08",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "08-09",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Alex Ferguson"
            },
            {
              "season": "09-10",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Manuel Pellegrini"
            },
            {
              "season": "10-11",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Jos\u00e9 Mourinho"
            },
            {
              "season": "11-12",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Jos\u00e9 Mourinho"
            },
            {
              "season": "12-13",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Jos\u00e9 Mourinho"
            },
            {
              "season": "13-14",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Carlo Ancelotti"
            },
            {
              "season": "14-15",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Carlo Ancelotti"
            },
            {
              "season": "15-16",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Zin\u00e9dine Zidane / Rafael Ben\u00edtez"
            },
            {
              "season": "16-17",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Zin\u00e9dine Zidane"
            },
            {
              "season": "17-18",
              "club": "Real Madrid",
              "color": "#f59e0b",
              "manager": "Zin\u00e9dine Zidane"
            },
            {
              "season": "18-19",
              "club": "Juventus",
              "color": "#e4e4e7",
              "manager": "Massimiliano Allegri"
            },
            {
              "season": "19-20",
              "club": "Juventus",
              "color": "#e4e4e7",
              "manager": "Maurizio Sarri"
            },
            {
              "season": "20-21",
              "club": "Juventus",
              "color": "#e4e4e7",
              "manager": "Andrea Pirlo / Maurizio Sarri"
            },
            {
              "season": "21-22",
              "club": "Man Utd",
              "color": "#ef4444",
              "manager": "Ralf Rangnick / Ole Gunnar Solskjaer"
            },
            {
              "season": "22-23",
              "club": "Al-Nassr",
              "color": "#eab308",
              "manager": "Erik ten Hag / Rudi Garcia"
            },
            {
              "season": "23-24",
              "club": "Al-Nassr",
              "color": "#eab308",
              "manager": "Lu\u00eds Castro / V\u00edtor Severino"
            },
            {
              "season": "24-25",
              "club": "Al-Nassr",
              "color": "#eab308",
              "manager": "Stefano Pioli / Lu\u00eds Castro"
            },
            {
              "season": "25-26",
              "club": "Al-Nassr",
              "color": "#eab308",
              "manager": "Jorge Jesus"
            },
            {
              "season": "26-27*",
              "club": "Al-Nassr",
              "color": "#eab308",
              "manager": "Ange Postecoglou"
            }
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "25 seasons of Transfermarkt starting tactical role logs.",
          "why": "Full-career coverage (\u226566% threshold met) of starting XI positions."
        },
        "hero": false
      }
    ],
    "leader": "split",
    "leader_badge": "Split Tactical Zones",
    "answer": "Messi: right wing to central False Nine & playmaker vs Ronaldo: flank winger to penalty-box striker.",
    "metric_tags": [
      [
        "messi",
        "Messi +277 RW Starts"
      ],
      [
        "ronaldo",
        "Ronaldo +139 CF Starts"
      ],
      [
        "tied",
        "2004-2024 Pitch Shift"
      ]
    ],
    "ref": "0.0.1",
    "cat_num": "0.0",
    "cat_title": "Context Setting: Operating Zones, Tactical Roles & Team Style",
    "pillar_num": "0.0",
    "pillar_title": "Context Setting (Tactical Baseline)",
    "who_is": "Operated in which pitch zones and starting roles over their careers?",
    "define_by": "Seasonal average normalised on-ball coordinates (centroid_x, centroid_y) and match-by-match tactical role indicated.",
    "metrics": "On-ball centroid trajectory (50%\u2013100%), career appearances by tactical role, by season.",
    "reliability": {
      "level": "High",
      "score": 2.75,
      "coverage": "Full 25-season Transfermarkt starting XI role logs + Understat/FotMob/StatsBomb shot coordinates (2014\u20132024).",
      "why": "Starting positions cover 100% of both careers, while on-ball pitch-centroid heatmaps cover tracked 2014\u20132024 leagues (StatsBomb has asymmetric club coverage)."
    }
  },
  {
    "id": "q0_2",
    "chapter": 0,
    "question": "Who played in more possession-dominant or direct counter-attacking teams?",
    "myth": "Both played in identical ultra-dominant teams with the same possession, pass volume, and defensive cushion.",
    "insight_badge": "Team Pass Share: Messi teams 63.7% (713.6 vs 405.9 opp) vs Ronaldo teams 56.6% (593.5 vs 455.1 opp)",
    "summary": "In 195 Messi and 165 Ronaldo league matches with paired team-vs-opponent passing telemetry (2017/18\u20132024/25), Messi's teams averaged 713.6 passes/match vs opponents' 405.9 (63.7% pass share), whereas Ronaldo's teams averaged 593.5 vs opponents' 455.1 (56.6% pass share). Across all 25 career seasons (1,229 Messi, 1,363 Ronaldo matches), Messi's teams averaged 2.39 goals scored vs 0.96 conceded (+1.43 GD/match), compared to Ronaldo's 2.26 scored vs 0.97 conceded (+1.29 GD/match). Counter-attacking vs possession indicators show Messi's teams held higher pass dominance (63.7% vs 56.6%), while Ronaldo generated nearly double the share of shots from fast-break counter-attacks (4.3% vs 2.4%).",
    "insights": [
      {
        "headline": "Both played for dominant sides; Messi's teams held higher average possession.",
        "footnote": "*Combines European Soccer Database match possession (2008/09\u20132015/16; Barcelona, Man Utd 08/09, Real Madrid 09/10\u201315/16; 2012/13 & 2013/14 unavailable) and FBref/Opta paired touches (2017/18\u20132022/23; 2016/17 unavailable). Total N=422 Messi team matches, N=395 Ronaldo team matches. Source: <a href=\"https://huggingface.co/datasets/julien-c/kaggle-hugomathien-soccer\" target=\"_blank\" rel=\"noopener noreferrer\">European Soccer Database Match Possession Telemetry (2008/09\u20132015/16)</a> (Open Data Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release)",
        "chart": {
          "type": "dual_bar",
          "title": "Team vs Opponent Possession Share (%) (2008/09\u20132022/23)",
          "unit": "% possession",
          "y_min": 0,
          "y_max": 72.0,
          "y_title": "Possession Share (%)",
          "messi": {
            "title": "Lionel Messi's Teams",
            "subtitle": "N=422 League Fixtures (64.2% Possession)",
            "labels": [
              "Messi's Team",
              "Messi's Opponent"
            ],
            "data": [
              64.2,
              35.8
            ],
            "colors": [
              "#38bdf8",
              "#475569"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo's Teams",
            "subtitle": "N=395 League Fixtures (56.4% Possession)",
            "labels": [
              "Ronaldo's Team",
              "Ronaldo's Opponent"
            ],
            "data": [
              56.4,
              43.6
            ],
            "colors": [
              "#f97316",
              "#475569"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201325 seasons of team goal / possession records (2002/03\u20132026/27 or 2008/09\u20132022/23).",
          "why": "Meets the 15+ season / \u226566% coverage threshold across shared European and career seasons."
        },
        "hero": true
      },
      {
        "headline": "Messi's clubs led seasonal possession; both dipped after leaving La Liga.",
        "footnote": "*2008/09\u20132015/16 from European Soccer Database (Barcelona, Man Utd 08/09, Real Madrid 09/10\u201315/16); 2017/18\u20132022/23 from FBref/Opta paired touches. Coverage gaps in 2012/13, 2013/14, and 2016/17 are left blank. Source: <a href=\"https://huggingface.co/datasets/julien-c/kaggle-hugomathien-soccer\" target=\"_blank\" rel=\"noopener noreferrer\">European Soccer Database Match Possession Telemetry (2008/09\u20132015/16)</a> (Open Data Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release)",
        "chart": {
          "title": "Team Possession Share (%) by Season (2008/09\u20132022/23)",
          "type": "line",
          "labels": [
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi's Team",
              "data": [
                64.7,
                66.1,
                68.8,
                67.8,
                null,
                null,
                68.4,
                64.6,
                null,
                59.9,
                61.9,
                63.5,
                62.8,
                60.8,
                58.8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo's Team",
              "data": [
                56.0,
                56.3,
                56.4,
                59.1,
                null,
                null,
                58.6,
                57.3,
                null,
                58.0,
                55.5,
                56.2,
                55.6,
                52.8,
                52.3
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 78.0,
          "x_title": "Season",
          "y_title": "Possession Share (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201325 seasons of team goal / possession records (2002/03\u20132026/27 or 2008/09\u20132022/23).",
          "why": "Meets the 15+ season / \u226566% coverage threshold across shared European and career seasons."
        },
        "hero": false
      },
      {
        "headline": "Messi's teams circulated more passes per match.",
        "footnote": "*Mean team passes attempted per match in shared league seasons (2017/18\u20132022/23). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release)",
        "chart": {
          "title": "Player's Team Total Passes per Match by Season (2017/18\u20132022/23)",
          "type": "line",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi's Team",
              "data": [
                674.2,
                706.5,
                745.8,
                751.4,
                701.7,
                700.4
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo's Team",
              "data": [
                646.1,
                584.6,
                607.5,
                606.9,
                553.4,
                512.8
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 850.0,
          "x_title": "Season",
          "y_title": "Team Passes / Match",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Pass-range splits are nearly identical; Barcelona leaned marginally shorter.",
        "footnote": "*Percentage share of team pass attempts by distance range (Short <15y, Medium 15\u201330y, Long >=30y). Barcelona (N=102 La Liga matches, 2018/19\u20132020/21) comes from StatsBomb Open Data; Juventus (N=98 Serie A matches, 2018/19\u20132021/22) comes from FBref / Opta. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample)) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release)",
        "chart": {
          "type": "dual_pie",
          "title": "Team Passing Range Mix (% of Team Passes)",
          "unit": "%",
          "messi": {
            "title": "Messi's Team (Barcelona \u00b7 StatsBomb)",
            "subtitle": "N=102 La Liga Matches (2018/19\u20132020/21)",
            "labels": [
              "Short (<15y) (47.9%)",
              "Medium (15\u201330y) (39.6%)",
              "Long (>=30y) (12.4%)"
            ],
            "full_labels": [
              "Short (<15y)",
              "Medium (15\u201330y)",
              "Long (>=30y)"
            ],
            "data": [
              47.9,
              39.6,
              12.4
            ],
            "colors": [
              "#38bdf8",
              "#a855f7",
              "#f97316"
            ]
          },
          "ronaldo": {
            "title": "Ronaldo's Team (Juventus \u00b7 FBref/Opta)",
            "subtitle": "N=98 Serie A Matches (2018/19\u20132021/22)",
            "labels": [
              "Short (<15y) (44.2%)",
              "Medium (15\u201330y) (42.0%)",
              "Long (>=30y) (13.9%)"
            ],
            "full_labels": [
              "Short (<15y)",
              "Medium (15\u201330y)",
              "Long (>=30y)"
            ],
            "data": [
              44.2,
              42.0,
              13.9
            ],
            "colors": [
              "#38bdf8",
              "#a855f7",
              "#f97316"
            ]
          }
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": false
      },
      {
        "headline": "Across 25 seasons, team scoring and defence averages are nearly identical.",
        "footnote": "*Computed across all 1,229 Messi (2,943 GF, 1,181 GA) and 1,363 Ronaldo (3,075 GF, 1,316 GA) appearances. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Career Team Goals Scored vs Conceded per Match (2002/03\u20132026/27*)",
          "type": "bar",
          "labels": [
            [
              "Goals Scored",
              "/ Match"
            ],
            [
              "Goals Conceded",
              "/ Match"
            ],
            [
              "Net Goal Diff",
              "/ Match"
            ]
          ],
          "datasets": [
            {
              "label": "Messi's Team",
              "data": [
                2.39,
                0.96,
                1.43
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo's Team",
              "data": [
                2.26,
                0.97,
                1.29
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 2.7,
          "x_title": "Team Metric",
          "y_title": "Goals per Match",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201325 seasons of team goal / possession records (2002/03\u20132026/27 or 2008/09\u20132022/23).",
          "why": "Meets the 15+ season / \u226566% coverage threshold across shared European and career seasons."
        },
        "hero": true
      },
      {
        "headline": "Season by season, their teams stayed closely matched in goals and defence.",
        "footnote": "*Season-by-season team goals scored per match in matches played by Messi and Ronaldo. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Team Goals Scored per Match by Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi's Team",
              "data": [
                null,
                2.14,
                1.69,
                2.29,
                2.02,
                1.82,
                2.48,
                2.23,
                2.42,
                2.83,
                2.48,
                2.28,
                2.75,
                2.92,
                2.72,
                2.2,
                2.31,
                2.05,
                2.21,
                2.3,
                2.67,
                2.79,
                1.96,
                2.86,
                2.25
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo's Team",
              "data": [
                1.9,
                1.93,
                1.79,
                1.85,
                2.07,
                2.11,
                1.8,
                2.5,
                2.59,
                2.77,
                2.38,
                2.65,
                2.57,
                2.69,
                2.7,
                2.35,
                1.68,
                2.1,
                2.1,
                1.84,
                1.93,
                2.72,
                2.34,
                2.59,
                2.23
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 3.3,
          "x_title": "Season",
          "y_title": "Team GF / Match",
          "hide_axes": false,
          "show_labels": false,
          "context_strips": [
            {
              "label": "Messi's Team",
              "color": "#38bdf8",
              "strip": [
                {
                  "season": "02-03",
                  "club": "\u2014",
                  "color": "#52525b",
                  "manager": ""
                },
                {
                  "season": "03-04",
                  "club": "\u2014",
                  "color": "#52525b",
                  "manager": "Pere Gratac\u00f3s"
                },
                {
                  "season": "04-05",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Pere Gratac\u00f3s / Frank Rijkaard"
                },
                {
                  "season": "05-06",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Frank Rijkaard"
                },
                {
                  "season": "06-07",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Frank Rijkaard"
                },
                {
                  "season": "07-08",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Frank Rijkaard"
                },
                {
                  "season": "08-09",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Pep Guardiola"
                },
                {
                  "season": "09-10",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Pep Guardiola"
                },
                {
                  "season": "10-11",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Pep Guardiola"
                },
                {
                  "season": "11-12",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Pep Guardiola"
                },
                {
                  "season": "12-13",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Tito Vilanova / Jordi Roura"
                },
                {
                  "season": "13-14",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Tata Martino"
                },
                {
                  "season": "14-15",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Luis Enrique"
                },
                {
                  "season": "15-16",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Luis Enrique"
                },
                {
                  "season": "16-17",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Luis Enrique"
                },
                {
                  "season": "17-18",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Ernesto Valverde"
                },
                {
                  "season": "18-19",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Ernesto Valverde"
                },
                {
                  "season": "19-20",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Quique Seti\u00e9n / Ernesto Valverde"
                },
                {
                  "season": "20-21",
                  "club": "FC Barcelona",
                  "color": "#0ea5e9",
                  "manager": "Ronald Koeman / Quique Seti\u00e9n"
                },
                {
                  "season": "21-22",
                  "club": "PSG",
                  "color": "#a855f7",
                  "manager": "Mauricio Pochettino / Christophe Galtier"
                },
                {
                  "season": "22-23",
                  "club": "PSG",
                  "color": "#a855f7",
                  "manager": "Christophe Galtier / Tata Martino"
                },
                {
                  "season": "23-24",
                  "club": "Inter Miami",
                  "color": "#ec4899",
                  "manager": "Tata Martino"
                },
                {
                  "season": "24-25",
                  "club": "Inter Miami",
                  "color": "#ec4899",
                  "manager": "Javier Mascherano / Tata Martino"
                },
                {
                  "season": "25-26",
                  "club": "Inter Miami",
                  "color": "#ec4899",
                  "manager": "Javier Mascherano / Guillermo Hoyos"
                },
                {
                  "season": "26-27*",
                  "club": "Inter Miami",
                  "color": "#ec4899",
                  "manager": "Kily Gonz\u00e1lez / Guillermo Hoyos"
                }
              ]
            },
            {
              "label": "Ronaldo's Team",
              "color": "#f97316",
              "strip": [
                {
                  "season": "02-03",
                  "club": "Sporting CP",
                  "color": "#10b981",
                  "manager": "Ladislau B\u00f6l\u00f6ni"
                },
                {
                  "season": "03-04",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "04-05",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "05-06",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "06-07",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "07-08",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "08-09",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Alex Ferguson"
                },
                {
                  "season": "09-10",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Manuel Pellegrini"
                },
                {
                  "season": "10-11",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Jos\u00e9 Mourinho"
                },
                {
                  "season": "11-12",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Jos\u00e9 Mourinho"
                },
                {
                  "season": "12-13",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Jos\u00e9 Mourinho"
                },
                {
                  "season": "13-14",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Carlo Ancelotti"
                },
                {
                  "season": "14-15",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Carlo Ancelotti"
                },
                {
                  "season": "15-16",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Zin\u00e9dine Zidane / Rafael Ben\u00edtez"
                },
                {
                  "season": "16-17",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Zin\u00e9dine Zidane"
                },
                {
                  "season": "17-18",
                  "club": "Real Madrid",
                  "color": "#f59e0b",
                  "manager": "Zin\u00e9dine Zidane"
                },
                {
                  "season": "18-19",
                  "club": "Juventus",
                  "color": "#e4e4e7",
                  "manager": "Massimiliano Allegri"
                },
                {
                  "season": "19-20",
                  "club": "Juventus",
                  "color": "#e4e4e7",
                  "manager": "Maurizio Sarri"
                },
                {
                  "season": "20-21",
                  "club": "Juventus",
                  "color": "#e4e4e7",
                  "manager": "Andrea Pirlo / Maurizio Sarri"
                },
                {
                  "season": "21-22",
                  "club": "Man Utd",
                  "color": "#ef4444",
                  "manager": "Ralf Rangnick / Ole Gunnar Solskjaer"
                },
                {
                  "season": "22-23",
                  "club": "Al-Nassr",
                  "color": "#eab308",
                  "manager": "Erik ten Hag / Rudi Garcia"
                },
                {
                  "season": "23-24",
                  "club": "Al-Nassr",
                  "color": "#eab308",
                  "manager": "Lu\u00eds Castro / V\u00edtor Severino"
                },
                {
                  "season": "24-25",
                  "club": "Al-Nassr",
                  "color": "#eab308",
                  "manager": "Stefano Pioli / Lu\u00eds Castro"
                },
                {
                  "season": "25-26",
                  "club": "Al-Nassr",
                  "color": "#eab308",
                  "manager": "Jorge Jesus"
                },
                {
                  "season": "26-27*",
                  "club": "Al-Nassr",
                  "color": "#eab308",
                  "manager": "Ange Postecoglou"
                }
              ]
            }
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201325 seasons of team goal / possession records (2002/03\u20132026/27 or 2008/09\u20132022/23).",
          "why": "Meets the 15+ season / \u226566% coverage threshold across shared European and career seasons."
        },
        "hero": false
      },
      {
        "headline": "Modest tactical split: Messi teams slightly more possession-based; Ronaldo teams slightly faster on the break.",
        "footnote": "*Indicators 1\u20135 (Possession Share %, Team Pass Dominance %, Vertical Carry Directness %, Attacking-3rd Touch Share %, Progressive Pass Directness %) come from FBref / Opta league matches over 2017/18\u20132022/23 (Messi N=195 matches; Ronaldo N=165 matches). Indicator 6 (Fast-Break Counter Shot Share %) comes from FotMob shot telemetry over 2020\u20132024 (Messi N=582 shots across 130 matches; Ronaldo N=464 shots across 106 matches). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release)",
        "chart": {
          "title": "Possession vs Counter-Attacking Style Indicators (%)",
          "type": "bar",
          "labels": [
            [
              "Possession",
              "Share (%)"
            ],
            [
              "Team Pass",
              "Dominance (%)"
            ],
            [
              "Vertical Carry",
              "Directness (%)"
            ],
            [
              "Attacking-3rd",
              "Touch Share (%)"
            ],
            [
              "Progressive Pass",
              "Directness (%)"
            ],
            [
              "Fast-Break",
              "Shot Share (%)"
            ]
          ],
          "datasets": [
            {
              "label": "Messi's Team",
              "data": [
                61.3,
                63.7,
                52.8,
                27.8,
                7.7,
                2.4
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo's Team",
              "data": [
                55.4,
                56.6,
                53.2,
                26.6,
                8.1,
                4.3
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 72.0,
          "x_title": "Tactical Style Indicator",
          "y_title": "Share (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      }
    ],
    "leader": "split",
    "leader_badge": "Messi +7.1% Pass Share",
    "answer": "Both led dominant sides; Messi: slightly more possession-oriented vs Ronaldo: slightly more vertical & counter-attacking.",
    "metric_tags": [
      [
        "messi",
        "Messi +7.1% Pass Share"
      ],
      [
        "messi",
        "Messi +0.14 Team GD/Game"
      ],
      [
        "ronaldo",
        "Ronaldo +1.9% Fast-Break Shots"
      ]
    ],
    "ref": "0.0.2",
    "cat_num": "0.0",
    "cat_title": "Context Setting: Operating Zones, Tactical Roles & Team Style",
    "pillar_num": "0.0",
    "pillar_title": "Context Setting (Tactical Baseline)",
    "who_is": "Played in more possession-dominant or direct counter-attacking teams?",
    "define_by": "Team passing volume relative to opponents, team goals scored versus conceded per match across 25 seasons, and tactical style indicators distinguishing possession control from vertical counter-attacking transitions.",
    "metrics": "Team vs opponent passes per match, team pass share (%), team goals scored vs conceded per match, vertical carry directness (%), progressive pass ratio (%), attacking-third touch share (%), and fast-break shot share (%).",
    "reliability": {
      "level": "Medium",
      "score": 2.29,
      "coverage": "Full 25-season Transfermarkt team goals + FBref/ESDB possession & passing telemetry (2008/09\u20132022/23 shared).",
      "why": "Team scoring/conceding spans all 25 seasons, but possession share and pass-distance ranges only cover shared European seasons (2008/09\u20132022/23)."
    }
  },
  {
    "id": "q0_3",
    "chapter": 0,
    "question": "Who played alongside higher-valued teammates and against stronger squads?",
    "myth": "One superstar carried an ordinary squad while the other played in a vastly superior galactico team.",
    "insight_badge": "Excl. Self: Messi \u20ac37.5M vs Ronaldo \u20ac33.2M \u00b7 Own Share: 20.7% vs 17.8%",
    "summary": "Excluding Messi and Ronaldo themselves, on-pitch teammates averaged \u20ac37.5M contemporary value for Messi vs \u20ac33.2M for Ronaldo across shared European club seasons (Best XI teammates: \u20ac45.2M vs \u20ac39.6M), while Messi accounted for 20.7% of his on-pitch club squad value vs 17.8% for Ronaldo.",
    "insights": [
      {
        "headline": "Excl. self: Messi played with slightly higher-valued teammates on pitch and in Best XI.",
        "footnote": "*Contemporary market valuation of teammates sharing the pitch on match day (strictly excluding Messi & Ronaldo) plus each season's most-played positional Best XI supporting cast (1 GK, 4 DEF, 3 MID, 2 ATT) from Transfermarkt player valuations & appearances. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Contemporary Teammate Valuation at Match Date (Excl. Self)",
          "type": "bar",
          "labels": [
            "Average Value on Pitch (\u20acM)",
            "Best XI Starters (\u20acM)",
            "Teammates \u2265\u20ac70M Share (%)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                37.5,
                45.2,
                15.0
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                33.2,
                39.6,
                9.5
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 51.0,
          "x_title": "Metric",
          "y_title": "Value / Share (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": true
      },
      {
        "headline": "Both represented a large share of club squad value, Messi slightly higher.",
        "footnote": "*Player's own contemporary Transfermarkt market value divided by total contemporary value of the player plus his on-pitch (or Best XI) teammates across shared European club seasons (2012/13\u20132022/23). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Player's Own Contribution to Club Squad Market Value (%)",
          "type": "bar",
          "labels": [
            "On-Pitch Squad Share (%)",
            "Best XI Squad Share (%)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                20.7,
                21.7
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                17.8,
                18.1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 25.0,
          "x_title": "Scope",
          "y_title": "Share of Squad Value (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": true
      },
      {
        "headline": "Messi's squad-value share peaked in late Barcelona years; Ronaldo's surged at Juventus.",
        "footnote": "*Mean matchday ratio of player's own contemporary Transfermarkt valuation to total on-pitch starting/appearing squad valuation (self + teammates) by European season (2012/13\u20132022/23). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Own Contribution to On-Pitch Club Squad Value by Season (% \u00b7 Europe 2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                24.8,
                26.8,
                26.9,
                23.3,
                21.0,
                23.4,
                18.6,
                17.6,
                20.4,
                10.3,
                7.4
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                23.1,
                23.4,
                22.6,
                22.3,
                19.2,
                18.4,
                17.5,
                14.2,
                11.8,
                7.1,
                4.6
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 31.0,
          "x_title": "Season",
          "y_title": "Player Share of Squad Value (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading Own Squad Value Share (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "y_min": -1,
          "y_max": 12,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Peak teammate values (excl. self) are close, tilting slightly to Messi.",
        "footnote": "*Peak career market value of each teammate (excluding Messi & Ronaldo) with \u226510 shared matches. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Contemporary Player Valuations</a> (Open Data Release Download)",
        "chart": {
          "title": "Teammate Peak Market Value (Excl. Self \u00b7 \u20acM)",
          "type": "bar",
          "labels": [
            "Average (\u226510 shared matches)",
            "Weighted by Shared Matches"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                52.4,
                62.4
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                49.7,
                53.4
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 70.0,
          "x_title": "Measure",
          "y_title": "\u20acM",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Incl. self: on-pitch team values climbed across European eras before converging.",
        "footnote": "*Mean contemporary Transfermarkt market value (\u20acM) of all on-pitch club players including Messi and Ronaldo themselves across shared European club seasons (2012/13\u20132022/23). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Average On-Pitch Team Market Value by Season (Incl. Self \u00b7 \u20acM)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                35.3,
                33.2,
                32.7,
                39.9,
                43.2,
                47.1,
                65.4,
                57.1,
                35.5,
                47.0,
                45.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                31.5,
                30.9,
                37.4,
                37.9,
                39.5,
                44.7,
                42.1,
                40.2,
                33.8,
                39.4,
                36.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 74.0,
          "x_title": "Season",
          "y_title": "Avg Team Value Incl. Self (\u20acM)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Excl. self: teammate values rose across European eras before converging.",
        "footnote": "*Mean contemporary Transfermarkt market value (\u20acM) of on-pitch club teammates (excluding Messi & Ronaldo) across shared European club seasons (2012/13\u20132022/23; excludes national-team fixtures and post-Europe MLS / Saudi Pro League moves). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Average On-Pitch Teammate Market Value by Season (Excl. Self \u00b7 \u20acM)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                28.7,
                26.4,
                25.9,
                33.5,
                37.1,
                39.0,
                57.4,
                50.8,
                30.8,
                45.3,
                44.8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                26.2,
                25.6,
                31.4,
                31.9,
                34.5,
                39.5,
                37.6,
                37.1,
                32.1,
                39.4,
                36.8
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 65.0,
          "x_title": "Season",
          "y_title": "Avg Teammate Value (\u20acM)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Elite Best XI casts: Messi with Neymar, Su\u00e1rez, Mbapp\u00e9; Ronaldo with Bale, Modri\u0107, Benzema.",
        "footnote": "*Top 3 highest-valued teammates (excluding Messi & Ronaldo) selected from each season's most-played positional Best XI (1 GK, 4 DEF, 3 MID, 2 ATT) by minutes played in Transfermarkt appearances. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "type": "table",
          "title": "Top 3 Most-Valued Teammates in Best XI Played With Each Season (Excl. Self \u00b7 2012/13\u20132022/23)",
          "columns": [
            "Season",
            "Lionel Messi \u2014 Top 3 Best XI Teammates",
            "Cristiano Ronaldo \u2014 Top 3 Best XI Teammates"
          ],
          "rows": [
            [
              "12-13",
              "Andr\u00e9s Iniesta (\u20ac70.0M), Sergio Busquets (\u20ac42.0M), Gerard Piqu\u00e9 (\u20ac39.1M)",
              "Sergio Ramos (\u20ac40.0M), \u00c1ngel Di Mar\u00eda (\u20ac40.0M), Mesut \u00d6zil (\u20ac40.0M)"
            ],
            [
              "13-14",
              "Sergio Busquets (\u20ac45.0M), Gerard Piqu\u00e9 (\u20ac36.0M), Alexis S\u00e1nchez (\u20ac28.4M)",
              "Sergio Ramos (\u20ac40.0M), Luka Modri\u0107 (\u20ac37.0M), Isco (\u20ac34.5M)"
            ],
            [
              "14-15",
              "Neymar (\u20ac75.5M), Luis Su\u00e1rez (\u20ac60.0M), Sergio Busquets (\u20ac37.4M)",
              "Gareth Bale (\u20ac80.0M), James Rodr\u00edguez (\u20ac60.0M), Toni Kroos (\u20ac47.2M)"
            ],
            [
              "15-16",
              "Neymar (\u20ac96.4M), Luis Su\u00e1rez (\u20ac87.7M), Sergio Busquets (\u20ac48.8M)",
              "Gareth Bale (\u20ac80.0M), Karim Benzema (\u20ac52.9M), Toni Kroos (\u20ac50.0M)"
            ],
            [
              "16-17",
              "Neymar (\u20ac100.0M), Luis Su\u00e1rez (\u20ac90.0M), Sergio Busquets (\u20ac60.0M)",
              "Gareth Bale (\u20ac90.0M), Karim Benzema (\u20ac60.0M), Toni Kroos (\u20ac58.8M)"
            ],
            [
              "17-18",
              "Luis Su\u00e1rez (\u20ac87.2M), Ousmane Demb\u00e9l\u00e9 (\u20ac73.0M), Sergio Busquets (\u20ac69.8M)",
              "Toni Kroos (\u20ac75.3M), Gareth Bale (\u20ac74.8M), Karim Benzema (\u20ac54.2M)"
            ],
            [
              "18-19",
              "Philippe Coutinho (\u20ac122.3M), Ousmane Demb\u00e9l\u00e9 (\u20ac89.1M), Sergio Busquets (\u20ac77.0M)",
              "Paulo Dybala (\u20ac108.3M), Miralem Pjani\u0107 (\u20ac69.0M), Alex Sandro (\u20ac47.4M)"
            ],
            [
              "19-20",
              "Antoine Griezmann (\u20ac120.4M), Marc-Andr\u00e9 ter Stegen (\u20ac86.9M), Frenkie de Jong (\u20ac86.7M)",
              "Paulo Dybala (\u20ac80.3M), Matthijs de Ligt (\u20ac73.7M), Miralem Pjani\u0107 (\u20ac67.3M)"
            ],
            [
              "20-21",
              "Antoine Griezmann (\u20ac71.6M), Ousmane Demb\u00e9l\u00e9 (\u20ac50.2M), Pedri (\u20ac42.6M)",
              "Matthijs de Ligt (\u20ac72.5M), Federico Chiesa (\u20ac50.3M), \u00c1lvaro Morata (\u20ac46.6M)"
            ],
            [
              "21-22",
              "Kylian Mbapp\u00e9 (\u20ac160.0M), Neymar (\u20ac94.3M), Marquinhos (\u20ac75.0M)",
              "Bruno Fernandes (\u20ac90.0M), Jadon Sancho (\u20ac88.7M), Marcus Rashford (\u20ac82.9M)"
            ],
            [
              "22-23",
              "Kylian Mbapp\u00e9 (\u20ac170.6M), Neymar (\u20ac75.0M), Marquinhos (\u20ac70.0M)",
              "Bruno Fernandes (\u20ac84.3M), Jadon Sancho (\u20ac75.0M), Marcus Rashford (\u20ac59.3M)"
            ]
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Both faced nearly identical average opponent squad values across Europe.",
        "footnote": "*Mean contemporary Transfermarkt market value (\u20acM) of opposing on-pitch players faced across European club fixtures (2012/13\u20132022/23; Messi N=516 fixtures, Ronaldo N=461 fixtures). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Average Opponent On-Pitch Squad Market Value Faced by Season (Europe \u00b7 \u20acM)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8.9,
                7.8,
                8.6,
                8.4,
                10.8,
                12.7,
                17.4,
                16.3,
                13.1,
                12.9,
                9.8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                9.9,
                8.3,
                6.5,
                8.8,
                12.3,
                17.8,
                16.4,
                16.4,
                12.9,
                19.9,
                20.4
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 23.0,
          "x_title": "Season",
          "y_title": "Avg Opponent Squad Value (\u20acM)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +\u20ac4.3M Teammate Value",
    "answer": "Excl. self: Messi had slightly higher-valued teammates & accounted for a slightly larger share of club squad value.",
    "metric_tags": [
      [
        "messi",
        "Messi +\u20ac4.3M Cast (Excl. Self)"
      ],
      [
        "messi",
        "Messi +2.9% Own Squad Share"
      ]
    ],
    "ref": "0.0.3",
    "cat_num": "0.0",
    "cat_title": "Context Setting: Operating Zones, Tactical Roles & Team Style",
    "pillar_num": "0.0",
    "pillar_title": "Context Setting (Tactical Baseline)",
    "who_is": "Played alongside higher-valued teammates and against stronger squads?",
    "define_by": "Contemporary match-date market value of the overall on-pitch team (including self) and supporting cast (excluding Messi and Ronaldo), each player's % contribution to squad value, the Top 3 most-valued Best XI teammates played with each season, and average opponent on-pitch squad market value faced by season.",
    "metrics": "Overall team value incl. self (\u20acM), supporting cast market value excl. self (\u20acM), player % contribution to squad value, seasonal Top 3 Best XI teammates table, and average opponent squad value faced (\u20acM).",
    "reliability": {
      "level": "Medium",
      "score": 2.0,
      "coverage": "Transfermarkt matchday squad & Best XI market valuations across shared European club seasons (2012/13\u20132022/23).",
      "why": "Covers 11 shared European prime seasons only; Transfermarkt valuations are contemporary market estimates rather than on-pitch statistics."
    }
  },
  {
    "id": "q1",
    "chapter": 1,
    "question": "Who scores more goals across career volume and matched ages?",
    "myth": "Ronaldo has the most career goals, so he is the outright higher-volume goalscorer.",
    "insight_badge": "Ronaldo 979 vs Messi 936 gross; Messi ahead at 22 of 22 shared age marks",
    "summary": "Ronaldo leads gross senior goals 979-936 and official goals 957-881. He out-scored Messi in 16 of 25 charted campaigns (Messi 9; 2 campaigns pre-date Messi's debut). Aligned by age, Messi's cumulative tally was ahead at 22 of 22 age marks from 18 to 39 (936 vs 917 by age 39).",
    "insights": [
      {
        "headline": "Ronaldo leads gross and official senior goals by a narrow career margin.",
        "footnote": "*Gross = all senior goals incl. international friendlies; Official = excludes friendlies (D-001). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Gross Senior Goals vs Official Competitive",
          "type": "bar",
          "labels": [
            "Gross Senior Goals",
            "Official Competitive"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                936,
                881
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                979,
                957
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1100.0,
          "x_title": "Career Goal Scope",
          "y_title": "Senior Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi hit the higher single-season peak; both cleared Top-10 forwards for a decade.",
        "footnote": "*Senior goals per season (Aug-Jul), club + country. 2026-27* is in progress. Dashed benchmarks (2012/13\u20132025/26): Transfermarkt Top-10 attackers mean & 90th percentile across European club competitions (N=909\u20131,066 attackers/season with >=900 mins). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive) Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Senior Goals per Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                0,
                1,
                9,
                21,
                18,
                41,
                47,
                54,
                84,
                65,
                48,
                65,
                47,
                57,
                54,
                54,
                34,
                45,
                22,
                34,
                22,
                29,
                53,
                32
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                5,
                8,
                16,
                13,
                28,
                46,
                26,
                34,
                55,
                68,
                58,
                61,
                67,
                57,
                55,
                58,
                31,
                46,
                48,
                32,
                23,
                54,
                43,
                38,
                9
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Forwards Avg (Club)",
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
                38.7,
                33.4,
                34.6,
                41.7,
                40.3,
                39.0,
                35.3,
                34.3,
                35.0,
                35.2,
                33.5,
                34.1,
                36.4,
                35.6,
                null
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Forwards (N=909\u20131,066/yr)",
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
                15.0,
                16.0,
                14.0,
                14.0,
                14.7,
                14.0,
                15.0,
                14.0,
                14.0,
                14.0,
                14.0,
                15.0,
                14.0,
                13.5,
                null
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 95.0,
          "x_title": "Season",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo out-scored Messi in more seasons, aided by earlier debut and late-career volume.",
        "footnote": "*Bar = Messi goals - Ronaldo goals in that season. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Season Goal Difference (Messi - Ronaldo)",
          "type": "bar",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "stacked": true,
          "datasets": [
            {
              "label": "Messi Leads (+)",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                15,
                13,
                0,
                16,
                7,
                0,
                0,
                0,
                2,
                0,
                23,
                0,
                0,
                0,
                11,
                0,
                0,
                15,
                23
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo Leads (-)",
              "data": [
                -5,
                -8,
                -15,
                -4,
                -7,
                -28,
                0,
                0,
                -1,
                0,
                0,
                -13,
                -2,
                -10,
                0,
                -4,
                0,
                -12,
                -3,
                -10,
                0,
                -32,
                -14,
                0,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": -36.0,
          "y_max": 26.0,
          "x_title": "Season",
          "y_title": "Goal Difference",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Led (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            6,
            6,
            6,
            6,
            7,
            7,
            7,
            8,
            9
          ],
          "r_data": [
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -6,
            -6,
            -7,
            -7,
            -7,
            -8,
            -9,
            -10,
            -10,
            -11,
            -11,
            -12,
            -13,
            -14,
            -14,
            -15,
            -16,
            -16,
            -16
          ],
          "y_min": -17,
          "y_max": 10,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "By biological age, Messi peaked earlier and higher; Ronaldo peaked slightly later.",
        "footnote": "*Goals scored while the player was each integer age (age at match date). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Goals Scored at Each Biological Age",
          "type": "line",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9,
                19,
                20,
                41,
                47,
                54,
                84,
                65,
                46,
                67,
                47,
                57,
                53,
                55,
                30,
                46,
                24,
                35,
                33,
                28,
                50,
                25,
                null,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1,
                17,
                11,
                26,
                40,
                30,
                27,
                53,
                57,
                67,
                62,
                61,
                59,
                53,
                54,
                51,
                45,
                40,
                41,
                17,
                47,
                53,
                38,
                24
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 95.0,
          "x_title": "Age",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Ages Scored More (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "m_data": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            8,
            8,
            8,
            8,
            9,
            9,
            9,
            9,
            9,
            9,
            10,
            11,
            11,
            11,
            11
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -4,
            -4,
            -5,
            -6,
            -7,
            -8,
            -9,
            -9,
            -9,
            -10,
            -10,
            -10
          ],
          "y_min": -11,
          "y_max": 12,
          "unit": "Ages Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi led cumulative goals at every shared age; Ronaldo closed the gap later.",
        "footnote": "*Cumulative senior goals scored up to and including each age. Messi has not yet played beyond age 39. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Cumulative Goals by Biological Age",
          "type": "line",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                10,
                29,
                49,
                90,
                137,
                191,
                275,
                340,
                386,
                453,
                500,
                557,
                610,
                665,
                695,
                741,
                765,
                800,
                833,
                861,
                911,
                936,
                null,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6,
                23,
                34,
                60,
                100,
                130,
                157,
                210,
                267,
                334,
                396,
                457,
                516,
                569,
                623,
                674,
                719,
                759,
                800,
                817,
                864,
                917,
                955,
                979
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 1100.0,
          "x_title": "Age",
          "y_title": "Cumulative Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "ronaldo",
    "leader_badge": "Ronaldo +43 Goals",
    "answer": "Ronaldo: higher gross & official goal totals across more seasons vs Messi: ahead at every shared biological age.",
    "metric_tags": [
      [
        "ronaldo",
        "Ronaldo +43 Goals"
      ],
      [
        "ronaldo",
        "Ronaldo +76 Official Goals"
      ],
      [
        "messi",
        "Messi +19 Goals (Age 39)"
      ]
    ],
    "ref": "1.1.1",
    "cat_num": "1.1",
    "cat_title": "Goalscoring Mastery (Volume, Efficiency, Variety & Team Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Scores more goals across career volume and matched ages?",
    "define_by": "Total career senior goals (gross and official FIFA-aligned competitions), peak seasonal output, and cumulative goals at identical biological ages.",
    "metrics": "Gross senior goals, official FIFA goals, seasonal peaks, and same-age cumulative goal pace.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete senior career match & goal logs across club and country (25 seasons; 1,915 goals via Transfermarkt + martj42).",
      "why": "100% full-career coverage across gross, official, seasonal, and age-matched scoring with zero sampling gaps."
    }
  },
  {
    "id": "q2",
    "chapter": 1,
    "question": "Who finishes more efficiently relative to shot difficulty and hat-tricks?",
    "myth": "High goal tallies are just a matter of taking more shots.",
    "insight_badge": "Career shot conversion: Messi 18.35% vs Ronaldo 15.55% (6586 shots)",
    "summary": "Across 6,586 all-time shots tracked by Opta in European league and Champions League matches, Messi converted 18.35% (576 goals / 3139 shots) vs Ronaldo's 15.55% (536 goals / 3447 shots) \u2014 scoring once every 5.45 shots compared to Ronaldo's 6.43. Across 814 shot-telemetry goals combining Understat, FBref/Opta, FotMob, and StatsBomb (19 instrumented Messi seasons vs 9 Ronaldo seasons), Messi's goals came from lower-probability chances (0.334 vs 0.427 mean xG/goal), while their missed-shot quality was virtually identical (0.104 xG across 2,317 Messi misses vs 0.104 across 1,475 Ronaldo misses). Across Opta's 13-season league xG model (2014/15\u20132026/27), Messi outperformed xG by +52.74 goals vs Ronaldo's +14.79.",
    "insights": [
      {
        "headline": "Messi converted a higher share of shots across European club play.",
        "footnote": "*Opta / WhoScored all-time European League & Champions League shot records (Messi: 576 goals / 3139 shots; Ronaldo: 536 goals / 3447 shots). Dashed benchmark (14.83%) = empirical mean conversion across 730 Big-5 league high-volume forward seasons (>=75 shots/season, 2014\u20132023) in Understat. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/shot-conversion/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Shot Conversion Telemetry</a> (Opta Telemetry Scrape) | <a href=\"https://huggingface.co/datasets/aloobun/fbref_understat_combined\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Predictive Shot & Assist Models (2014\u20132023)</a> (Verified Open Mirror)",
        "chart": {
          "title": "All-Time Career Shot Conversion (%) \u2014 Opta Telemetry",
          "type": "bar",
          "labels": [
            "Domestic League",
            "Champions League",
            "Combined Career"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                18.41,
                18.1,
                18.35
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                15.47,
                15.85,
                15.55
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            },
            {
              "label": "Big-5 Forwards Benchmark (14.83%)",
              "type": "line",
              "data": [],
              "borderColor": "#facc15",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.5,
              "pointRadius": 0,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 21.0,
          "x_title": "Competition Tier",
          "y_title": "Conversion (%)",
          "hide_axes": false,
          "show_labels": true,
          "benchmark_line": {
            "value": 14.83,
            "color": "#facc15",
            "dash": [
              6,
              4
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "20+ seasons of Opta conversion / full-career match logs (2005/06\u20132024/25+).",
          "why": "Covers \u226515 seasons (\u226566% of career span) with verified match & shot totals."
        },
        "hero": true
      },
      {
        "headline": "Messi routinely matched or beat Top-10 shooters in seasonal conversion (%).",
        "footnote": "*Seasonal shot conversion (%) = Goals \u00f7 Shots \u00d7 100 across the deduplicated shot-level database (>=25 tracked shots/season). Dashed benchmarks (2015/16\u20132024/25): Top-10 mean & 90th percentile among Big-5 league high-volume shooters (N=189\u2013260 players/season with >=50 shots in Understat). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://huggingface.co/datasets/aloobun/fbref_understat_combined\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Predictive Shot & Assist Models (2014\u20132023)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Shot Conversion Rate (%) by Season (2005/06\u20132024/25)",
          "type": "line",
          "labels": [
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                15.8,
                22.2,
                12.3,
                21.2,
                21.1,
                21.2,
                25.3,
                29.1,
                17.3,
                22.6,
                16.5,
                20.7,
                16.4,
                21.2,
                15.7,
                15.0,
                9.6,
                14.7,
                16.5,
                19.6
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
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
                21.3,
                15.0,
                16.1,
                14.8,
                12.0,
                14.9,
                18.4,
                18.0,
                11.4,
                8.8,
                null
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 High-Vol Shooters Avg",
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
                25.19,
                27.49,
                26.63,
                27.78,
                26.47,
                27.38,
                27.31,
                25.09,
                27.49,
                26.54
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Shooters (N=189\u2013260/yr)",
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
                21.13,
                22.0,
                21.05,
                20.21,
                20.58,
                23.57,
                21.57,
                19.46,
                20.97,
                22.32
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 33.0,
          "x_title": "Season",
          "y_title": "Shot Conversion (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "20+ seasons of Opta conversion / full-career match logs (2005/06\u20132024/25+).",
          "why": "Covers \u226515 seasons (\u226566% of career span) with verified match & shot totals."
        },
        "hero": false
      },
      {
        "headline": "Career G/90 is a near dead heat, both above Top-10 strikers for a decade.",
        "footnote": "*Senior club & international matches with exact minutes from Transfermarkt match logs (N=3,260 senior appearances; >=400 mins). Benchmarks (2012/13\u20132025/26): Transfermarkt Top-10 attackers & 90th percentile G/90 (N=909\u20131,066 attackers/season with >=900 mins). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Goals per 90 Minutes by Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                0.55,
                0.57,
                0.49,
                0.53,
                0.45,
                0.75,
                0.8,
                0.92,
                1.22,
                1.24,
                0.91,
                0.95,
                0.91,
                1.05,
                0.87,
                1.05,
                0.76,
                0.73,
                0.51,
                0.74,
                0.79,
                0.86,
                0.97,
                0.98
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.32,
                0.24,
                0.34,
                0.3,
                0.5,
                0.8,
                0.5,
                0.82,
                1.01,
                1.02,
                0.99,
                1.14,
                1.16,
                0.96,
                1.01,
                1.06,
                0.71,
                0.92,
                0.85,
                0.72,
                0.58,
                0.91,
                0.9,
                0.84,
                0.79
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Forwards G/90",
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
                1.08,
                0.97,
                0.92,
                1.02,
                0.99,
                0.98,
                0.96,
                1.02,
                0.99,
                0.98,
                0.95,
                1.03,
                1.04,
                0.98,
                null
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Forwards G/90 (N=909\u20131,066/yr)",
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
                0.57,
                0.57,
                0.55,
                0.56,
                0.57,
                0.56,
                0.56,
                0.57,
                0.56,
                0.56,
                0.58,
                0.58,
                0.55,
                0.56,
                null
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 1.4,
          "x_title": "Season",
          "y_title": "G/90",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading G/90 (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            1,
            2,
            3,
            4,
            4,
            5,
            5,
            5,
            6,
            7,
            7,
            7,
            7,
            8,
            8,
            9,
            9,
            9,
            9,
            10,
            10,
            10,
            11,
            12
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -3,
            -3,
            -4,
            -5,
            -6,
            -6,
            -7,
            -7,
            -8,
            -9,
            -10,
            -10,
            -11,
            -12,
            -12,
            -12
          ],
          "y_min": -13,
          "y_max": 13,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "20+ seasons of Opta conversion / full-career match logs (2005/06\u20132024/25+).",
          "why": "Covers \u226515 seasons (\u226566% of career span) with verified match & shot totals."
        },
        "hero": false
      },
      {
        "headline": "Messi's scored goals came from harder chances (lower avg xG) than Ronaldo's.",
        "footnote": "*Season-by-season average xG per goal across verified shot-level telemetry (Understat 2014\u201319 + FBref/Opta 2017\u201324 + FotMob 2020\u201324 + StatsBomb 2004\u201324). Seasons with <33% goal-level telemetry coverage, <5 telemetry goals, or <3 non-penalty telemetry goals are omitted as NaN (full seasonal coverage breakdown in Appendix 1). 167 external IFAB Law 14 penalties at 0.7564 xG and 934 uninstrumented goals excluded. Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_match_shooting\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Match Shooting Logs (2017\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Sample)) | <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Average xG per Scored Goal by Season (Lower = Harder Chances)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.366,
                0.376,
                0.329,
                0.339,
                0.317,
                0.316,
                0.369,
                0.416,
                0.344
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.415,
                0.388,
                0.395,
                0.398,
                0.423,
                0.458,
                0.467,
                0.398,
                0.536
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 0.61,
          "x_title": "Season",
          "y_title": "Avg xG per Goal",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Instrumented Seasons Finishing Harder Chances (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            8
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -1,
            -1
          ],
          "y_min": -2,
          "y_max": 9,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Both missed shots of virtually identical difficulty.",
        "footnote": "*Computed from the fixture-deduplicated shot-level database (4,609 total shots: 3,792 missed/saved/blocked non-goal shots and 817 goals; priority Understat > FBref/Opta > FotMob > StatsBomb; shoot-outs excluded). Seasons with <33% telemetry coverage or <25 tracked missed shots omitted as NaN. Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_match_shooting\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Match Shooting Logs (2017\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Sample))",
        "chart": {
          "title": "Average xG of Missed (Non-Goal) Shots by Season (Lower = More Speculative)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.138,
                0.131,
                0.103,
                0.106,
                0.109,
                0.09,
                0.085,
                0.104,
                0.095
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.11,
                0.114,
                0.11,
                0.105,
                0.094,
                0.082,
                0.117,
                0.107,
                0.104
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 0.16,
          "x_title": "Season",
          "y_title": "Avg xG per Missed Shot",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Taking More Speculative Missed Shots (Lower Avg Miss xG)",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            3,
            4
          ],
          "r_data": [
            -1,
            -2,
            -2,
            -3,
            -4,
            -5,
            -5,
            -5,
            -5
          ],
          "y_min": -6,
          "y_max": 5,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi far outperformed xG and hit more low-xG screamers; Ronaldo finished near expectation.",
        "footnote": "*Understat predictive shot-quality model across all European league appearances (2014\u20132023; Messi: 253.0 goals from 219.91 xG; Ronaldo: 234.0 goals from 229.38 xG). Low-xG Screamers (xG <= 0.08) reflect instrumented shot-telemetry sample sizes (540 Messi / 274 Ronaldo telemetry goals). Source: <a href=\"https://huggingface.co/datasets/aloobun/fbref_understat_combined\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Predictive Shot & Assist Models (2014\u20132023)</a> (Verified Open Mirror) | <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_match_shooting\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Match Shooting Logs (2017\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Sample))",
        "chart": {
          "title": "9-Season Expected Goals (xG), Actual Goals & Low-xG Screamers",
          "type": "bar",
          "labels": [
            [
              "Expected Goals",
              "(xG)"
            ],
            [
              "Actual Goals",
              "Scored"
            ],
            [
              "Net Outperformance",
              "(G \u2212 xG)"
            ],
            [
              "Low-xG Screamers",
              "(xG <= 0.08)"
            ]
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                219.91,
                253.0,
                33.09,
                119
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                229.38,
                234.0,
                4.62,
                45
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 290.0,
          "x_title": "Model Metric / Finish Type",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi consistently beat seasonal xG by a wide margin; Ronaldo tracked near expectation.",
        "footnote": "*Season-by-season Opta domestic league xG outperformance (Actual Goals minus Expected Goals) across the 13 non-overlapping Aug\u2013Jul seasons since xG tracking began in 2014/15 (La Liga, Ligue 1, MLS; Serie A, Premier League, Saudi Pro League). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/xg-expected-goals/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored 13-Season League Expected Goals Model (2014\u20132027)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "League xG Outperformance per Season (Actual Goals - xG, 2014/15\u20132026/27)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                7.11,
                -1.11,
                10.06,
                5.06,
                10.03,
                4.14,
                3.34,
                -3.88,
                -1.66,
                1.92,
                10.3,
                3.55,
                3.88
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                8.67,
                -0.56,
                -0.41,
                -0.97,
                -2.33,
                1.56,
                -0.84,
                0.58,
                -1.08,
                5.68,
                0.69,
                2.64,
                1.16
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": -4.4,
          "y_max": 12.0,
          "x_title": "Season",
          "y_title": "Goals Above Expected (G - xG)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons with Higher xG Outperformance (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            5,
            5,
            5,
            6,
            7,
            8
          ],
          "r_data": [
            -1,
            -2,
            -2,
            -2,
            -2,
            -2,
            -2,
            -3,
            -4,
            -5,
            -5,
            -5,
            -5
          ],
          "y_min": -6,
          "y_max": 9,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Per shot and per goal, Messi's xG outperformance far exceeds Ronaldo's.",
        "footnote": "*Removes shot-volume bias by dividing net (Goals - xG) by total tracked shots (scored + missed) and by total goals in the deduplicated shot-level database (Messi: 2,860 shots, 543 goals, net +120.23; Ronaldo: 1,749 shots, 274 goals, net +3.84). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_match_shooting\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Match Shooting Logs (2017\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Sample))",
        "chart": {
          "title": "Volume-Normalised xG Outperformance: Per Shot & Per Goal",
          "type": "bar",
          "labels": [
            "Avg (G - xG) per Shot (All Shots)",
            "Avg (G - xG) per Goal"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.042,
                0.221
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.0022,
                0.014
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 0.25,
          "x_title": "Normalisation Basis",
          "y_title": "Net (G - xG)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo: slight edge in total hat-tricks; Messi: clear lead in non-penalty hat-tricks.",
        "footnote": "*All senior official and friendly appearances. Matches with 3+ goals and zero-penalty hat-tricks evaluated from verified match logs. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & Match Reports</a> (Direct Web Scrape)",
        "chart": {
          "title": "Multi-Goal Match Feats (Hat-tricks, Pokers, Manitas)",
          "type": "bar",
          "labels": [
            [
              "Exact Hat-tricks",
              "(3 Goals)"
            ],
            [
              "Exact Pokers",
              "(4 Goals)"
            ],
            [
              "5+ Goals",
              "(Manitas)"
            ],
            [
              "Total Matches",
              "(>=3 Goals)"
            ],
            [
              "Non-Penalty Hat-tricks",
              "(0 Pens)"
            ]
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                51,
                7,
                4,
                62,
                45
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                56,
                9,
                2,
                67,
                34
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 76.0,
          "x_title": "Feat Category",
          "y_title": "Matches",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "20+ seasons of Opta conversion / full-career match logs (2005/06\u20132024/25+).",
          "why": "Covers \u226515 seasons (\u226566% of career span) with verified match & shot totals."
        },
        "hero": false
      },
      {
        "headline": "Both scored at elite rates across clubs; Ronaldo peaked at Real Madrid, Messi at Barcelona & Inter Miami.",
        "footnote": "*Senior goals divided by played appearances per club and national team from Transfermarkt match performance logs. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "type": "dual_bar",
          "title": "Goals per Match by Club & Country",
          "unit": "goals/match",
          "y_min": 0,
          "y_max": 1.2,
          "y_title": "Goals per Match",
          "messi": {
            "title": "Lionel Messi (Teams)",
            "subtitle": "Club & Argentina Stints",
            "labels": [
              "Barcelona",
              "Paris Saint-Germain",
              "Inter Miami",
              "Argentina"
            ],
            "data": [
              0.86,
              0.43,
              0.87,
              0.61
            ],
            "colors": [
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo (Teams)",
            "subtitle": "Club & Portugal Stints",
            "labels": [
              "Sporting CP",
              "Man Utd",
              "Real Madrid",
              "Juventus",
              "Al-Nassr",
              "Portugal"
            ],
            "data": [
              0.16,
              0.42,
              1.03,
              0.75,
              0.86,
              0.62
            ],
            "colors": [
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "20+ seasons of Opta conversion / full-career match logs (2005/06\u20132024/25+).",
          "why": "Covers \u226515 seasons (\u226566% of career span) with verified match & shot totals."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +2.80% Shot Conv",
    "answer": "Messi: higher shot conversion & xG outperformance vs Ronaldo: more hat-trick matches (Messi leads non-penalty hat-tricks).",
    "metric_tags": [
      [
        "messi",
        "Messi +2.80% Shot Conv"
      ],
      [
        "messi",
        "Messi +37.95 Goals vs xG"
      ],
      [
        "ronaldo",
        "Ronaldo +308 Shots"
      ]
    ],
    "ref": "1.1.2",
    "cat_num": "1.1",
    "cat_title": "Goalscoring Mastery (Volume, Efficiency, Variety & Team Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Finishes more efficiently relative to shot difficulty and hat-tricks?",
    "define_by": "Converting scoring opportunities into goals above Expected Goals (xG) benchmarks, minimising shots required per goal scored, and producing multi-goal outbursts (hat-tricks, pokers, manitas).",
    "metrics": "Cumulative xG outperformance, shot conversion rate, club & country goals/match, low-xG screamers, and multi-goal match feats.",
    "reliability": {
      "level": "High",
      "score": 2.5,
      "coverage": "Opta shot conversion (20 European seasons, 2005/06\u20132024/25) + Understat/FBref/FotMob xG (9\u201313 tracked seasons).",
      "why": "Opta conversion covers 20 seasons (High), whereas shot-level xG only begins in 2014/15 and omits early-career peaks such as 2011/12."
    }
  },
  {
    "id": "q3",
    "chapter": 1,
    "question": "Who scores a wider variety of goals across body parts, zones, and set pieces?",
    "myth": "Ronaldo is the more complete all-round scorer.",
    "insight_badge": "Ronaldo: 134 headers, 186 penalties; Messi: 65 free kicks vs 55",
    "summary": "Ronaldo scored 134 headers (Messi 31) and 186 penalties (Messi 119). Messi scored 65 direct free kicks (Ronaldo 55), a higher share of non-penalty inside-box goals (80.2% vs 74.5%), and averaged greater shooting distance on telemetry-tracked goals (13.12m across 540 goals vs Ronaldo's 11.77m across 274 goals).",
    "insights": [
      {
        "headline": "Ronaldo: more headers and weak-foot goals; Messi: heavily concentrated on his left foot.",
        "footnote": "*Goals with a recorded body part only (855 Messi, 827 Ronaldo; 233 without a tag excluded). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Goals by Body Part",
          "type": "bar",
          "labels": [
            "Strong Foot",
            "Weak Foot",
            "Headers",
            "Other Body Parts"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                725,
                97,
                31,
                2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                549,
                144,
                134,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 820.0,
          "x_title": "Body Part",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": true
      },
      {
        "headline": "Both scored mostly inside the box; Ronaldo leads penalties, Messi edges free kicks.",
        "footnote": "*Tactical zones determined from verified shot coordinates, penalty spot, and free-kick telemetry. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Goals by Scoring Zone",
          "type": "bar",
          "labels": [
            [
              "Inside",
              "Six-Yard Box"
            ],
            [
              "Inside Penalty Box",
              "(Open Play)"
            ],
            [
              "Penalties",
              "(11m)"
            ],
            [
              "Direct",
              "Free Kicks"
            ],
            [
              "Outside Box",
              "(Open Play)"
            ]
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                12,
                739,
                119,
                65,
                1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                14,
                715,
                186,
                55,
                9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 830.0,
          "x_title": "Scoring Zone",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": true
      },
      {
        "headline": "Majority of goals for both are non-penalty inside the box, Messi slightly higher.",
        "footnote": "*Non-penalty, non-free-kick goals from inside the box as % of all season goals. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Non-Penalty Inside-Box Goal Share (%) per Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                100.0,
                100.0,
                95.2,
                72.2,
                85.4,
                91.5,
                88.9,
                77.4,
                84.6,
                70.8,
                81.5,
                74.5,
                75.4,
                77.8,
                74.1,
                67.6,
                68.9,
                86.4,
                76.5,
                86.4,
                89.7,
                88.7,
                75.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                100.0,
                87.5,
                100.0,
                76.9,
                75.0,
                76.1,
                53.8,
                70.6,
                74.5,
                69.1,
                81.0,
                72.1,
                74.6,
                77.2,
                78.2,
                81.0,
                80.6,
                60.9,
                70.8,
                81.2,
                60.9,
                72.2,
                72.1,
                73.7,
                100.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 120.0,
          "x_title": "Season",
          "y_title": "Share (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Across tracked shots, Messi scored from slightly further out on average.",
        "footnote": "*Mean goal distance in metres computed exclusively from verified shot-level coordinates & Opta yardage (Understat + FBref/Opta*0.9144 + FotMob + StatsBomb; N=814 telemetry goals). Seasons with <5 telemetry goals or <3 non-penalty telemetry goals are omitted, and only paired seasons with data for both players are shown. Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_match_shooting\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Match Shooting Logs (2017\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fotmob_match_details\" target=\"_blank\" rel=\"noopener noreferrer\">FotMob Shot Coordinate Telemetry (2020\u20132024)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Sample)) | <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Average Goal Distance (m) per Telemetry-Tracked Season",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                12.73,
                14.07,
                13.97,
                14.43,
                15.02,
                15.72,
                13.34,
                13.68,
                12.87
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                12.54,
                12.36,
                12.79,
                10.8,
                11.98,
                12.24,
                10.17,
                11.6,
                9.98
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 18.0,
          "x_title": "Season",
          "y_title": "Metres",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Instrumented Seasons with Greater Distance (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "y_min": -1,
          "y_max": 10,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo led free kicks early; Messi overtook him mid-to-late career.",
        "footnote": "*Senior matches only. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Cumulative Direct Free-Kick Goals",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                3,
                4,
                7,
                11,
                14,
                16,
                23,
                27,
                34,
                42,
                47,
                50,
                50,
                54,
                56,
                57,
                59,
                65
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                1,
                1,
                2,
                3,
                8,
                14,
                20,
                25,
                29,
                32,
                37,
                39,
                43,
                46,
                47,
                47,
                48,
                48,
                49,
                50,
                53,
                54,
                55,
                55
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 73.0,
          "x_title": "Season",
          "y_title": "Free-Kick Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Ahead (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "r_data": [
            0,
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -7,
            -8,
            -9,
            -10,
            -11,
            -12,
            -13,
            -14,
            -15,
            -16,
            -17,
            -17,
            -17,
            -17,
            -17,
            -17,
            -17,
            -17
          ],
          "y_min": -18,
          "y_max": 8,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Messi took consistently more direct free-kick attempts per season.",
        "footnote": "*Direct free-kick attempts in European league matches from Understat shot-level telemetry (2014/15\u20132018/19; Messi: 201 attempts; Ronaldo: 105 attempts). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror)",
        "chart": {
          "title": "Direct Free-Kick Attempts by Season (2014/15\u20132018/19)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                37,
                38,
                37,
                48,
                41
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                33,
                26,
                15,
                15,
                16
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 54.0,
          "x_title": "Season",
          "y_title": "Attempts",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Crucially, Messi's free-kick conversion rose while Ronaldo's declined.",
        "footnote": "*Direct free-kick conversion (%) = Goals \u00f7 Attempts \u00d7 100 in European league matches from Understat shot-level telemetry (2014/15\u20132018/19; Messi: 20/201; Ronaldo: 4/105). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror)",
        "chart": {
          "title": "Direct Free-Kick Conversion Rate (%) by Season (2014/15\u20132018/19)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                5.4,
                10.5,
                5.4,
                12.5,
                14.6
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6.1,
                3.8,
                6.7,
                0.0,
                0.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 17.0,
          "x_title": "Season",
          "y_title": "Conversion (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo scored substantially more career penalties than Messi.",
        "footnote": "*Excludes shoot-outs. Transfermarkt penalty records. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/elfmetertore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Penalty Record (2002\u20132026; N=377 penalties)</a> (Direct Web Scrape)",
        "chart": {
          "title": "Cumulative Penalty Goals",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                0,
                0,
                0,
                1,
                6,
                11,
                13,
                18,
                34,
                40,
                51,
                61,
                66,
                76,
                81,
                87,
                93,
                103,
                106,
                110,
                111,
                113,
                117,
                119
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                0,
                0,
                2,
                8,
                14,
                19,
                23,
                32,
                47,
                54,
                64,
                78,
                86,
                95,
                105,
                111,
                127,
                141,
                146,
                154,
                166,
                177,
                186,
                186
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 210.0,
          "x_title": "Season",
          "y_title": "Penalty Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Ahead (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "r_data": [
            0,
            0,
            0,
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -7,
            -8,
            -9,
            -10,
            -11,
            -12,
            -13,
            -14,
            -15,
            -16,
            -17,
            -18,
            -19,
            -20,
            -21,
            -22
          ],
          "y_min": -23,
          "y_max": 1,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo averaged slightly more league penalty attempts per season.",
        "footnote": "*Penalty attempts in European league matches from Understat shot-level telemetry (2014/15\u20132018/19; Messi: 29 attempts; Ronaldo: 39 attempts). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror)",
        "chart": {
          "title": "Penalty Attempts by Season (2014/15\u20132018/19)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                6,
                7,
                7,
                4,
                5
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                12,
                9,
                8,
                4,
                6
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 14.0,
          "x_title": "Season",
          "y_title": "Attempts",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo's league penalty conversion stayed steadier across tracked seasons.",
        "footnote": "*Seasonal penalty conversion (%) = Goals \u00f7 Attempts \u00d7 100 in European league matches from Understat shot-level telemetry (2014/15\u20132018/19; Messi: 20/29; Ronaldo: 30/39). Source: <a href=\"https://github.com/sharmaabhishekk/undershot_backup\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Shot-Level Archive (2014\u20132019)</a> (Verified Open Mirror)",
        "chart": {
          "title": "Penalty Conversion Rate (%) by Season (2014/15\u20132018/19)",
          "type": "line",
          "labels": [
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                83.3,
                42.9,
                85.7,
                50.0,
                80.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                83.3,
                66.7,
                75.0,
                75.0,
                83.3
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 96.0,
          "x_title": "Season",
          "y_title": "Conversion (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Messi edges non-penalty goals; Ronaldo's overall goal lead comes from penalties.",
        "footnote": "Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Non-Penalty vs Penalty Goals",
          "type": "bar",
          "labels": [
            "Non-Penalty Goals",
            "Penalty Goals"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                817,
                119
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                793,
                186
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 920.0,
          "x_title": "Goal Type",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": true
      },
      {
        "headline": "Messi's goals came consistently from ground build-up throughout his career.",
        "footnote": "*Goal creation mechanism from verified match telemetry; penalties and direct set pieces separated. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Messi Goal Creation Mix by Season (%)",
          "type": "line",
          "stacked": true,
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Ground Combinations & Passes",
              "data": [
                0.0,
                0.0,
                100.0,
                66.7,
                66.7,
                50.0,
                61.0,
                78.7,
                72.2,
                56.0,
                64.6,
                50.0,
                53.8,
                55.3,
                57.9,
                59.3,
                57.4,
                55.9,
                53.3,
                31.8,
                52.9,
                0.0,
                0.0,
                47.2,
                21.9
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf873",
              "fill": "origin",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Crosses & Aerials",
              "data": [
                0.0,
                0.0,
                0.0,
                11.1,
                0.0,
                0.0,
                4.9,
                6.4,
                1.9,
                3.6,
                6.2,
                8.3,
                10.8,
                8.5,
                8.8,
                5.6,
                5.6,
                2.9,
                4.4,
                4.5,
                0.0,
                0.0,
                6.9,
                7.5,
                9.4
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f9731673",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Solo Runs & Rebounds",
              "data": [
                0.0,
                0.0,
                0.0,
                22.2,
                28.6,
                22.2,
                19.5,
                6.4,
                14.8,
                17.9,
                13.8,
                12.5,
                16.9,
                10.6,
                8.8,
                13.0,
                11.1,
                8.8,
                13.3,
                50.0,
                23.5,
                86.4,
                82.8,
                34.0,
                43.8
              ],
              "borderColor": "#10b981",
              "backgroundColor": "#10b98173",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Direct Free Kicks & Set-Pieces",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                2.4,
                4.3,
                1.9,
                3.6,
                6.2,
                6.2,
                3.1,
                14.9,
                7.0,
                13.0,
                14.8,
                14.7,
                6.7,
                0.0,
                11.8,
                9.1,
                3.4,
                3.8,
                18.8
              ],
              "borderColor": "#a855f7",
              "backgroundColor": "#a855f773",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Penalties",
              "data": [
                0.0,
                0.0,
                0.0,
                0.0,
                4.7,
                27.8,
                12.2,
                4.2,
                9.2,
                18.9,
                9.2,
                23.0,
                15.4,
                10.7,
                17.5,
                9.1,
                11.1,
                17.7,
                22.3,
                13.7,
                11.8,
                4.5,
                6.9,
                7.5,
                6.1
              ],
              "borderColor": "#ec4899",
              "backgroundColor": "#ec489973",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            }
          ],
          "y_min": 0,
          "y_max": 100,
          "x_title": "Season",
          "y_title": "Share of Season Goals (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo's goals rely more on crosses and penalties, rising over time.",
        "footnote": "*Goal creation mechanism from verified match telemetry; penalties and direct set pieces separated. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Ronaldo Goal Creation Mix by Season (%)",
          "type": "line",
          "stacked": true,
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Ground Combinations & Passes",
              "data": [
                40.0,
                0.0,
                56.2,
                53.8,
                35.7,
                34.8,
                34.6,
                41.2,
                58.2,
                48.5,
                51.7,
                39.3,
                35.8,
                29.8,
                34.5,
                39.7,
                29.0,
                28.3,
                35.4,
                37.5,
                21.7,
                0.0,
                23.3,
                47.4,
                0.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf873",
              "fill": "origin",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Crosses & Aerials",
              "data": [
                20.0,
                25.0,
                0.0,
                7.7,
                7.1,
                19.6,
                23.1,
                8.8,
                9.1,
                11.8,
                20.7,
                18.0,
                29.9,
                43.9,
                23.6,
                29.3,
                32.3,
                13.0,
                20.8,
                15.6,
                4.3,
                9.3,
                14.0,
                7.9,
                33.3
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f9731673",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Solo Runs & Rebounds",
              "data": [
                40.0,
                62.5,
                43.8,
                15.4,
                32.1,
                21.7,
                0.0,
                20.6,
                7.3,
                11.8,
                10.3,
                18.0,
                10.4,
                5.3,
                20.0,
                12.1,
                19.4,
                21.7,
                14.6,
                28.1,
                34.8,
                63.0,
                34.9,
                18.4,
                66.7
              ],
              "borderColor": "#10b981",
              "backgroundColor": "#10b98173",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Direct Free Kicks & Set-Pieces",
              "data": [
                0.0,
                12.5,
                0.0,
                7.7,
                3.6,
                10.9,
                23.1,
                17.6,
                9.1,
                5.9,
                5.2,
                8.2,
                3.0,
                7.0,
                5.5,
                1.7,
                0.0,
                2.2,
                0.0,
                3.1,
                4.3,
                5.6,
                2.3,
                2.6,
                0.0
              ],
              "borderColor": "#a855f7",
              "backgroundColor": "#a855f773",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            },
            {
              "label": "Penalties",
              "data": [
                0.0,
                0.0,
                0.0,
                15.4,
                21.5,
                13.0,
                19.2,
                11.8,
                16.3,
                22.0,
                12.1,
                16.5,
                20.9,
                14.0,
                16.4,
                17.2,
                19.3,
                34.8,
                29.2,
                15.7,
                34.9,
                22.1,
                25.5,
                23.7,
                0.0
              ],
              "borderColor": "#ec4899",
              "backgroundColor": "#ec489973",
              "fill": "-1",
              "tension": 0.3,
              "borderWidth": 1.5,
              "pointRadius": 0
            }
          ],
          "y_min": 0,
          "y_max": 100,
          "x_title": "Season",
          "y_title": "Share of Season Goals (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Messi: ground passes & solo play vs Ronaldo: crosses & penalties.",
        "footnote": "*All senior goals (Messi N=936, Ronaldo N=979) classified into five mutually exclusive creation mechanisms. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "type": "dual_pie",
          "title": "Career Goal Creation Mix (Volume & % Share)",
          "unit": "goals",
          "show_val_and_pct": true,
          "messi": {
            "title": "Lionel Messi",
            "subtitle": "936 Career Senior Goals",
            "labels": [
              "Ground Passes & Combos",
              "Crosses & Aerials",
              "Solo Runs & Rebounds",
              "Direct Free Kicks",
              "Penalties"
            ],
            "full_labels": [
              "Ground Combinations & Passes",
              "Crosses & Aerials",
              "Solo Runs & Rebounds",
              "Direct Free Kicks & Set-Pieces",
              "Penalties"
            ],
            "data": [
              501,
              53,
              198,
              65,
              119
            ],
            "colors": [
              "#38bdf8",
              "#f97316",
              "#10b981",
              "#a855f7",
              "#eab308"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo",
            "subtitle": "979 Career Senior Goals",
            "labels": [
              "Ground Passes & Combos",
              "Crosses & Aerials",
              "Solo Runs & Rebounds",
              "Direct Free Kicks",
              "Penalties"
            ],
            "full_labels": [
              "Ground Combinations & Passes",
              "Crosses & Aerials",
              "Solo Runs & Rebounds",
              "Direct Free Kicks & Set-Pieces",
              "Penalties"
            ],
            "data": [
              353,
              184,
              201,
              55,
              186
            ],
            "colors": [
              "#38bdf8",
              "#f97316",
              "#10b981",
              "#a855f7",
              "#eab308"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      },
      {
        "headline": "Messi's assists came from fewer core partners; Ronaldo's from a wider cast.",
        "footnote": "*Named assists only (575 Messi, 571 Ronaldo). Rows where the scorer is listed as his own 'assister' (penalties he won) are counted as unassisted. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Top 10 Assist Partners",
          "type": "dual_pie",
          "messi": {
            "title": "Messi (106 assisters)",
            "subtitle": "Top 10 = 320 goals (55.7% of assisted)",
            "labels": [
              "Luis Suarez (48)",
              "Dani Alves (42)",
              "Neymar (40)",
              "Andres Iniesta (39)",
              "Xavi (34)",
              "Pedro (31)",
              "Jordi Alba (28)",
              "Sergio Busquets (25)",
              "Ivan Rakitic (19)",
              "Cesc Fabregas (14)",
              "Other 96 Assistors (255)",
              "Unassisted / Set-Pieces (361)"
            ],
            "data": [
              48,
              42,
              40,
              39,
              34,
              31,
              28,
              25,
              19,
              14,
              255,
              361
            ],
            "colors": [
              "#0284c7",
              "#0ea5e9",
              "#38bdf8",
              "#7dd3fc",
              "#bae6fd",
              "#0d9488",
              "#14b8a6",
              "#2dd4bf",
              "#5eead4",
              "#99f6e4",
              "#475569",
              "#334155"
            ]
          },
          "ronaldo": {
            "title": "Ronaldo (147 assisters)",
            "subtitle": "Top 10 = 226 goals (39.6% of assisted)",
            "labels": [
              "Karim Benzema (45)",
              "Gareth Bale (31)",
              "Mesut Ozil (26)",
              "Marcelo (24)",
              "Angel Di Maria (22)",
              "Ryan Giggs (18)",
              "Isco (17)",
              "Gonzalo Higuain (16)",
              "Luka Modric (14)",
              "Sergio Ramos (13)",
              "Other 137 Assistors (345)",
              "Unassisted / Set-Pieces (408)"
            ],
            "data": [
              45,
              31,
              26,
              24,
              22,
              18,
              17,
              16,
              14,
              13,
              345,
              408
            ],
            "colors": [
              "#c2410c",
              "#ea580c",
              "#f97316",
              "#fb923c",
              "#fdba74",
              "#d97706",
              "#f59e0b",
              "#fbbf24",
              "#fcd34d",
              "#fde68a",
              "#475569",
              "#334155"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career goal logs (1,915 goals across 25 seasons).",
          "why": "Complete career coverage across body parts, zones, penalties, free kicks, and goal creation."
        },
        "hero": false
      }
    ],
    "leader": "ronaldo",
    "leader_badge": "Ronaldo +103 Headers",
    "answer": "Ronaldo: headers, weak foot & penalties vs Messi: strong foot, direct free kicks & open-play outside-box strikes.",
    "metric_tags": [
      [
        "ronaldo",
        "Ronaldo +103 Headers"
      ],
      [
        "ronaldo",
        "Ronaldo +47 Weak Foot"
      ],
      [
        "messi",
        "Messi +10 Free Kicks"
      ],
      [
        "ronaldo",
        "Ronaldo +67 Penalties"
      ]
    ],
    "ref": "1.1.3",
    "cat_num": "1.1",
    "cat_title": "Goalscoring Mastery (Volume, Efficiency, Variety & Team Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Scores a wider variety of goals across body parts, zones, and set pieces?",
    "define_by": "Distribution of goals across left foot, right foot, headers, inside vs outside the box, direct free kicks, and penalties.",
    "metrics": "Body parts, scoring zones, non-penalty vs penalty totals, goal creation mix, top assister concentration, and set-piece conversion.",
    "reliability": {
      "level": "High",
      "score": 2.4,
      "coverage": "Full 25-season career body-part, penalty & free-kick goal logs + 2014/15\u20132018/19 Understat shot-attempt rates.",
      "why": "Career totals for NPG, penalties, headers, weak-foot, and free kicks are 100% complete; only attempt-rate sub-charts use the 5-season Understat window."
    }
  },
  {
    "id": "q1_4_team",
    "chapter": 1,
    "question": "Who delivers more decisive goals in wins, knockouts, and vs top opponents?",
    "myth": "Both carried identical shares of their team's scoring and match-winning outcomes.",
    "insight_badge": "Peak Team Goal Share: 38.7% vs 38.7%",
    "summary": "Measures each player's share of full-season team goals and the percentage of team victories decided by their game-winning goal.",
    "insights": [
      {
        "headline": "Equal peak team goal share; Ronaldo led slightly more seasons.",
        "footnote": "*Player goals \u00c3\u00b7 all goals scored by his teams (club + country) in every match in his Transfermarkt match log that season, including matches he missed. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Share of Team's Full-Season Goals (%)",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                1.5,
                6.8,
                14.9,
                15.7,
                23.6,
                27.7,
                30.6,
                38.7,
                37.3,
                26.8,
                29.1,
                23.9,
                30.5,
                32.3,
                33.1,
                26.7,
                29.2,
                15.4,
                23.7,
                17.9,
                29.5,
                29.2,
                31.6
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6.8,
                5.8,
                12.1,
                10.6,
                19.7,
                33.3,
                18.5,
                23.0,
                33.5,
                33.7,
                34.3,
                32.8,
                38.4,
                32.0,
                26.0,
                30.9,
                30.7,
                38.7,
                32.7,
                31.4,
                20.9,
                26.7,
                31.2,
                22.4,
                20.5
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 44.0,
          "x_title": "Season",
          "y_title": "Share (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            3,
            4,
            4,
            4,
            4,
            5,
            6,
            7,
            7,
            7,
            7,
            8,
            8,
            8,
            9,
            10
          ],
          "r_data": [
            0,
            0,
            -1,
            -2,
            -3,
            -4,
            -4,
            -4,
            -5,
            -5,
            -5,
            -6,
            -7,
            -8,
            -8,
            -8,
            -8,
            -9,
            -10,
            -11,
            -11,
            -12,
            -13,
            -13,
            -13
          ],
          "y_min": -14,
          "y_max": 11,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo leads total game-winning goals; seasonal leads split evenly.",
        "footnote": "*Game-winning goals per season since 2004-05 (Messi 287 vs Ronaldo 346). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Game-Winning Goals per Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                0,
                2,
                3,
                6,
                16,
                18,
                18,
                29,
                17,
                18,
                18,
                13,
                24,
                17,
                14,
                7,
                9,
                6,
                12,
                8,
                8,
                17,
                7
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1,
                3,
                7,
                0,
                12,
                21,
                11,
                14,
                14,
                25,
                16,
                27,
                21,
                17,
                18,
                19,
                12,
                18,
                16,
                18,
                10,
                19,
                14,
                13,
                4
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 33.0,
          "x_title": "Season",
          "y_title": "GWG",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading in GWG (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            1,
            1,
            1,
            2,
            3,
            4,
            5,
            6,
            6,
            6,
            6,
            7,
            7,
            8,
            8,
            8,
            8,
            9,
            9,
            9,
            10,
            11
          ],
          "r_data": [
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -3,
            -3,
            -3,
            -3,
            -3,
            -4,
            -5,
            -6,
            -6,
            -7,
            -7,
            -8,
            -9,
            -10,
            -10,
            -11,
            -12,
            -12,
            -12
          ],
          "y_min": -13,
          "y_max": 12,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo's goals decided a higher share of his teams' victories.",
        "footnote": "*Metric: of all matches the player appeared in that his team won, the share where he scored the game-winning goal. Sample: European club & continental matches with appearance data (529 Messi, 485 Ronaldo). Higher = team relied more on him to decide wins; lower can also mean more teammates scored winners. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download) | <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Team Wins Decided by the Player's Winner (%)",
          "type": "bar",
          "labels": [
            "Winners as % of Team Wins"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                35.5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                47.2
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 53.0,
          "x_title": "European Club Sample",
          "y_title": "Percent",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      },
      {
        "headline": "Messi holds a modest lead in total knockout goals.",
        "footnote": "*Senior knockout rounds from the stage column of Transfermarkt goal logs; youth/Olympic/friendlies excluded. Source: <a href=\"https://www.transfermarkt.com/cristiano-ronaldo/alletore/spieler/8198\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Knockout Match Log</a> (Direct Web Scrape)",
        "chart": {
          "title": "Knockout Goals by Round",
          "type": "bar",
          "labels": [
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                59,
                31,
                26,
                36
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                38,
                37,
                35,
                23
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 67.0,
          "x_title": "Round",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": true
      },
      {
        "headline": "Neck-and-neck in Round of 16; Ronaldo scores faster from Quarter-Finals onward.",
        "footnote": "*Knockout rounds in European club & continental matches with minutes recorded. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Knockout Goals per 90 by Round",
          "type": "bar",
          "labels": [
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.97,
                0.33,
                0.53,
                0.68
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.96,
                0.9,
                0.79,
                0.81
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1.09,
          "x_title": "Round",
          "y_title": "G/90",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      },
      {
        "headline": "Both produced knockout bursts; Ronaldo peaked in Real Madrid UCL runs.",
        "footnote": "*Senior knockout-round goals per season across European club and cup ties in Transfermarkt datasets (2012/13\u20132022/23). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Knockout-Stage Goals per Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9,
                7,
                7,
                12,
                7,
                8,
                9,
                4,
                5,
                0,
                1
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                15,
                11,
                8,
                5,
                15,
                9,
                6,
                4,
                3,
                0,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 17.0,
          "x_title": "Season",
          "y_title": "Knockout Goals",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo carried a larger team goal share in QF & SF; dead even in R16 & Finals.",
        "footnote": "*Player goals divided by total team goals scored in appearances played across those stages (2012/13\u20132024/25, Transfermarkt club & cup logs). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Share of Team Goals Scored (%) in Knockouts & vs Top-4 Opponents",
          "type": "bar",
          "labels": [
            "All Knockouts",
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals",
            "vs Eventual Top-4",
            "vs Eventual Bottom-4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                30.7,
                42.9,
                15.8,
                26.8,
                32.0,
                36.7,
                33.2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                42.9,
                43.1,
                54.3,
                43.6,
                33.3,
                40.0,
                31.1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 61.0,
          "x_title": "Competition / Stage",
          "y_title": "% of Team Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Exact dead heat in career knockout game-winning goals.",
        "footnote": "*Game-winning goals in knockout rounds. Source: <a href=\"https://www.transfermarkt.com/cristiano-ronaldo/alletore/spieler/8198\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Knockout Match Log</a> (Direct Web Scrape)",
        "chart": {
          "title": "Knockout Game-Winning Goals by Round",
          "type": "bar",
          "labels": [
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                15,
                8,
                6,
                15
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                12,
                13,
                10,
                9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 17.0,
          "x_title": "Round",
          "y_title": "GWG",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": true
      },
      {
        "headline": "Virtually tied in league Top-6 winners; Ronaldo leads in the Champions League.",
        "footnote": "*Decisive game-winning goals scored against opponents that finished in the Top 6 of England, Spain, Italy, Germany, France, or Portugal in that season. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European League Records (2004\u20132026; N=138 Top-6 GWGs)</a> (Open Data Release Download) | <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "Game-Winning Goals vs Top-6 European Clubs by Competition",
          "type": "bar",
          "labels": [
            "UEFA Champions League",
            "Domestic League",
            "Domestic & Super Cups"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                21,
                36,
                6
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                31,
                35,
                9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 41.0,
          "x_title": "Competition Category",
          "y_title": "Game-Winning Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      },
      {
        "headline": "Identical league goal totals vs Top-4 clubs; Messi slightly ahead vs Bottom-4.",
        "footnote": "*Goals vs clubs finishing in that season's eventual Top 4 (Messi N=61, Ronaldo N=57 matches) and eventual Bottom 4 (Messi N=71, Ronaldo N=64 matches) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Goals vs Eventual Season Top-4 & Bottom-4 Clubs (2012/13\u20132024/25)",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                36,
                78
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                36,
                61
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 88.0,
          "x_title": "Opponent Tier",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Per match: Ronaldo edges Top-4 scoring rate; Messi leads vs Bottom-4.",
        "footnote": "*Goals per match vs eventual Top-4 (Messi N=61, Ronaldo N=57) and eventual Bottom-4 league clubs (Messi N=71, Ronaldo N=64) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Goals per Match vs Eventual Season Top-4 & Bottom-4 Clubs",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.59,
                1.1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.63,
                0.95
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1.3,
          "x_title": "Opponent Tier",
          "y_title": "Goals / Match",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Seasonal goals vs eventual Top-4 clubs tracked closely across matched campaigns.",
        "footnote": "*Goals per season vs clubs finishing in that season's eventual Top 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Goals vs Eventual Season Top-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8,
                4,
                3,
                2,
                6,
                3,
                4,
                3,
                1,
                0,
                2
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                5,
                3,
                4,
                1,
                6,
                4,
                2,
                5,
                1,
                5,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 9.0,
          "x_title": "Season",
          "y_title": "Goals vs Top 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Both scored heavily against eventual Bottom-4 clubs across matched seasons.",
        "footnote": "*Goals per season vs clubs finishing in that season's eventual Bottom 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Goals vs Eventual Season Bottom-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9,
                7,
                13,
                9,
                9,
                9,
                6,
                8,
                5,
                0,
                3
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                10,
                4,
                12,
                6,
                5,
                3,
                5,
                5,
                5,
                5,
                1
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 15.0,
          "x_title": "Season",
          "y_title": "Goals vs Bottom 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi: more goals vs FIFA Top-20 nations; Ronaldo: nearly 2\u00d7 vs Rank 101+.",
        "footnote": "*Senior international goals mapped to historical FIFA World Rankings at match date. Source: <a href=\"https://github.com/martj42/international_results\" target=\"_blank\" rel=\"noopener noreferrer\">martj42 International Football Results</a> (Public Git Archive Download) | <a href=\"https://www.fifa.com/fifa-world-ranking/men\" target=\"_blank\" rel=\"noopener noreferrer\">Historical FIFA Men's World Rankings (1992\u20132026)</a> (Official Release Download)",
        "chart": {
          "type": "dual_pie",
          "title": "International Goals by Opponent FIFA Rank (Volume & % Share)",
          "unit": "goals",
          "show_val_and_pct": true,
          "messi": {
            "title": "Lionel Messi",
            "subtitle": "N=126 Ranked Intl Goals",
            "labels": [
              "Top 20 (Elite)",
              "Rank 21\u201350 (Strong)",
              "Rank 51\u2013100 (Mid-tier)",
              "Rank 101+ (Minnows)"
            ],
            "data": [
              34,
              35,
              40,
              17
            ],
            "colors": [
              "#38bdf8",
              "#818cf8",
              "#f97316",
              "#64748b"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo",
            "subtitle": "N=146 Ranked Intl Goals",
            "labels": [
              "Top 20 (Elite)",
              "Rank 21\u201350 (Strong)",
              "Rank 51\u2013100 (Mid-tier)",
              "Rank 101+ (Minnows)"
            ],
            "data": [
              29,
              42,
              43,
              32
            ],
            "colors": [
              "#38bdf8",
              "#818cf8",
              "#f97316",
              "#64748b"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      },
      {
        "headline": "Equal per-90 rate vs FIFA Top-20; Messi faster vs lower-ranked sides.",
        "footnote": "*Senior international goals per 90 minutes played across matched caps with exact minutes and FIFA ranking at match date (Messi N=208 caps, 17,210 mins; Ronaldo N=234 caps, 18,604 mins). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint) | <a href=\"https://github.com/martj42/international_results\" target=\"_blank\" rel=\"noopener noreferrer\">martj42 International Football Results</a> (Public Git Archive Download) | <a href=\"https://www.fifa.com/fifa-world-ranking/men\" target=\"_blank\" rel=\"noopener noreferrer\">Historical FIFA Men's World Rankings (1992\u20132026)</a> (Official Release Download)",
        "chart": {
          "title": "International Goals per 90 Minutes by Opponent FIFA Rank",
          "type": "bar",
          "labels": [
            "Top 20 (Elite)",
            "Rank 21\u201350 (Strong)",
            "Rank 51\u2013100 (Mid-tier)",
            "Rank 101+ (Minnows)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.43,
                0.58,
                0.97,
                1.68
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.45,
                0.7,
                0.77,
                1.26
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1.9,
          "x_title": "Opponent FIFA Rank Tier",
          "y_title": "Goals / 90",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career match logs & tournament-date FIFA rankings (25 seasons).",
          "why": "Complete career coverage for team goal share, GWGs, knockouts, and international FIFA tiers."
        },
        "hero": false
      }
    ],
    "leader": "tied",
    "leader_badge": "Tied 44-44 KO GWG",
    "answer": "Both peaked at equal team goal share & tie in knockout winners; Ronaldo: more total GWGs vs Messi: more total knockout goals.",
    "metric_tags": [
      [
        "tied",
        "Tied 38.7% Peak Share"
      ],
      [
        "ronaldo",
        "Ronaldo +59 GWG"
      ],
      [
        "ronaldo",
        "Ronaldo +11.7% Win Share"
      ],
      [
        "messi",
        "Messi +19 KO Goals"
      ],
      [
        "tied",
        "Tied 44-44 KO GWG"
      ]
    ],
    "ref": "1.1.4",
    "cat_num": "1.1",
    "cat_title": "Goalscoring Mastery (Volume, Efficiency, Variety & Team Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Delivers more decisive goals in wins, knockouts, and vs top opponents?",
    "define_by": "Share of team's full-season goals, seasonal and career game-winning goals, knockout-round scoring and winners, and opponent strength across league (eventual Top-4 and Bottom-4) and international tiers.",
    "metrics": "Team goal share %, GWGs, knockout goals, G/90 & % of team goals by round, Top-6 GWGs, eventual Top-4 & Bottom-4 league goals, and international goals (% share & G/90) by FIFA rank.",
    "reliability": {
      "level": "High",
      "score": 2.6,
      "coverage": "Complete 25-season career match logs (2,521 appearances), knockout GWGs, and historical FIFA rankings + 2012/13\u20132024/25 Top-4/Bottom-4 splits.",
      "why": "Career GWGs, knockouts, and international FIFA rank tiers cover 100% of both careers; league Top-4/Bottom-4 opponent splits cover 2012/13\u20132024/25."
    }
  },
  {
    "id": "q2_1",
    "chapter": 2,
    "question": "Who produces more total career assists and multi-assist match feats?",
    "myth": "Ronaldo matches Messi's creative output once longevity is accounted for.",
    "insight_badge": "Assists: Messi 467 vs Ronaldo 307",
    "summary": "Messi has 467 senior assists (444 official) vs Ronaldo's 307 (295 official). Messi out-assisted Ronaldo in 18 charted seasons, Ronaldo in 5. Peaks: 36 (2011-12) vs 24 (2006-07).",
    "insights": [
      {
        "headline": "Messi holds a decisive lead in gross and official career assists.",
        "footnote": "*Official excludes friendlies. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Senior Assists: Gross vs Official",
          "type": "bar",
          "labels": [
            "Gross Senior Assists",
            "Official Competitive"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                467,
                444
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                307,
                295
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 530.0,
          "x_title": "Scope",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi led most shared seasons and routinely cleared Top-10 European creators.",
        "footnote": "*Season = Aug-Jul. Dashed benchmarks (2012/13\u20132025/26): Transfermarkt Top-10 attackers/midfielders avg & 90th percentile assists in club competitions (N=2,070\u20132,278 players/season with >=900 mins). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint) Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Senior Assists per Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                0,
                9,
                5,
                19,
                21,
                13,
                33,
                36,
                20,
                17,
                35,
                28,
                22,
                23,
                23,
                27,
                20,
                17,
                26,
                17,
                15,
                30,
                11
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6,
                11,
                15,
                10,
                24,
                10,
                12,
                14,
                20,
                18,
                16,
                20,
                23,
                17,
                14,
                11,
                14,
                9,
                7,
                5,
                5,
                16,
                5,
                5,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Att/Mid Avg (Club)",
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
                22.7,
                19.3,
                22.2,
                22.7,
                21.8,
                19.6,
                20.0,
                22.2,
                19.0,
                20.3,
                20.1,
                18.9,
                20.2,
                21.6,
                null
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Att/Mid (N=2,070\u20132,278/yr)",
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
                8.0,
                8.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                null
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 41.0,
          "x_title": "Season",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            3,
            4,
            5,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18
          ],
          "r_data": [
            0,
            0,
            -1,
            -2,
            -3,
            -3,
            -3,
            -4,
            -4,
            -4,
            -4,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5
          ],
          "y_min": -6,
          "y_max": 19,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi pulled away in cumulative assists from early in their careers.",
        "footnote": "Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Cumulative Senior Assists",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                0,
                9,
                14,
                33,
                54,
                67,
                100,
                136,
                156,
                173,
                208,
                236,
                258,
                281,
                304,
                331,
                351,
                368,
                394,
                411,
                426,
                456,
                467
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6,
                17,
                32,
                42,
                66,
                76,
                88,
                102,
                122,
                140,
                156,
                176,
                199,
                216,
                230,
                241,
                255,
                264,
                271,
                276,
                281,
                297,
                302,
                307,
                307
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 530.0,
          "x_title": "Season",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi dominates league assists; Ronaldo edges Champions League assists.",
        "footnote": "*Official competitions; friendlies excluded from the international column. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Assists by Competition",
          "type": "bar",
          "labels": [
            "League",
            "Champions League",
            "Domestic & Other Cups",
            "International (official)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                289,
                45,
                64,
                46
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                187,
                50,
                25,
                33
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 330.0,
          "x_title": "Competition",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi: 2\u00d7+ multi-assist matches and 3\u00d7 assist hat-tricks.",
        "footnote": "*Senior club and international matches with assist tracking from Transfermarkt match performance logs. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta Playmaking Archive & Transfermarkt Logs (2004\u20132026; N=774 career assists)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Multi-Assist Matches & Single-Game Feats",
          "type": "bar",
          "labels": [
            "Matches with >=2 Assists",
            "Hat-tricks of Assists (>=3)",
            "Max Assists in Single Game"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                85,
                12,
                5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                37,
                4,
                4
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 96.0,
          "x_title": "Metric",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +160 Assists",
    "answer": "Messi leads decisively in career assists, assist rate & seasons out-assisting Ronaldo.",
    "metric_tags": [
      [
        "messi",
        "Messi +160 Assists"
      ],
      [
        "messi",
        "Messi +149 Official Assists"
      ],
      [
        "messi",
        "Messi +13 Assist Seasons"
      ]
    ],
    "ref": "1.2.1",
    "cat_num": "1.2",
    "cat_title": "Playmaking & Passing (Volume, Efficiency, Variety & Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Produces more total career assists and multi-assist match feats?",
    "define_by": "All-time career assists across gross senior fixtures and official competitions, seasonal assist totals, competition splits, and multi-assist match outbursts.",
    "metrics": "Gross & official career assists, seasonal assists, competition splits (League, UCL, International), and 2+ / 3+ assist matches.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete 25-season senior career assist logs (774 assists across Transfermarkt & official competition records).",
      "why": "100% full-career coverage across gross, official, competition, and multi-assist match records."
    }
  },
  {
    "id": "q2_3",
    "chapter": 2,
    "leader": "messi",
    "leader_badge": "Messi +77.78 xA",
    "question": "Who generates higher chance-creation efficiency and creative pass quality?",
    "myth": "Ronaldo creates as many chances as Messi.",
    "insight_badge": "Expected Assists (xA): Messi 129.86 vs Ronaldo 52.08",
    "summary": "In Understat's 9-season predictive xA model (2014-2023), Messi generated 129.86 expected assists (delivering 128.0 actual assists) vs Ronaldo's 52.08 xA (57.0 actual assists) \u2014 producing 2.5x more creative expected assists. In Opta telemetry since 2009/10, Messi created 419 big chances vs 179 (2.3x) and delivered 505 defence-splitting throughballs vs 81 (6.2x).",
    "insights": [
      {
        "headline": "Messi averages nearly double Ronaldo's assists per 90 minutes.",
        "footnote": "*European club & continental appearances with minutes (529 Messi, 485 Ronaldo). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Assists per 90 (European Club Sample)",
          "type": "bar",
          "labels": [
            "Assists per 90"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.45
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.25
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 0.51,
          "x_title": "Sample",
          "y_title": "A/90",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi generated 2\u00d7+ Ronaldo's Expected Assists (xA); both matched xA.",
        "footnote": "*Understat predictive shot-assist model across European league campaigns (2014-2023). Source: <a href=\"https://huggingface.co/datasets/aloobun/fbref_understat_combined\" target=\"_blank\" rel=\"noopener noreferrer\">Understat Predictive Shot & Assist Models (2014\u20132023)</a> (Verified Open Mirror)",
        "chart": {
          "title": "9-Season Expected Assists (xA) & Actual Assists \u2014 Understat Model",
          "type": "bar",
          "labels": [
            "Expected Assists (xA)",
            "Actual Assists Delivered"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                129.86,
                128.0
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                52.08,
                57.0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 150.0,
          "x_title": "Playmaking Metric",
          "y_title": "Assists / xA",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi: 2\u00d7+ Big Chances and 6\u00d7+ accurate throughballs.",
        "footnote": "*Opta event telemetry across European League & UEFA Champions League fixtures. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta Playmaking Archive & Transfermarkt Logs (2004\u20132026; N=774 career assists)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Creative Quality Metrics (Opta All-Time)",
          "type": "bar",
          "labels": [
            "Big Chances Created",
            "Defence-Splitting Throughballs"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                419,
                505
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                179,
                81
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 570.0,
          "x_title": "Playmaking Metric",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15+ European seasons of Opta chance-creation tracking.",
          "why": "Meets the 15+ season threshold for Big Chances, throughballs, and key passes."
        },
        "hero": true
      },
      {
        "headline": "Messi delivered 6\u00d7+ more accurate throughballs across Europe.",
        "footnote": "*Opta event telemetry across European league and UEFA Champions League fixtures since 2009/10. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta Playmaking Archive & Transfermarkt Logs (2004\u20132026; N=774 career assists)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Accurate Defence-Splitting Throughballs (Opta)",
          "type": "bar",
          "labels": [
            "Combined (League + UCL)",
            "Domestic Leagues",
            "UEFA Champions League"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                505,
                413,
                92
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                81,
                67,
                14
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 570.0,
          "x_title": "Competition Tier",
          "y_title": "Throughballs",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15+ European seasons of Opta chance-creation tracking.",
          "why": "Meets the 15+ season threshold for Big Chances, throughballs, and key passes."
        },
        "hero": false
      },
      {
        "headline": "Messi created 2\u00d7+ more Big Chances in European club play.",
        "footnote": "*Opta definition: clear-cut opportunity where a player is reasonably expected to score. Tracked since 2010/11. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta Playmaking Archive & Transfermarkt Logs (2004\u20132026; N=774 career assists)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Big Chances Created (Opta)",
          "type": "bar",
          "labels": [
            "Combined (League + UCL)",
            "Domestic Leagues",
            "UEFA Champions League"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                419,
                342,
                77
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                179,
                134,
                45
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 470.0,
          "x_title": "Competition Tier",
          "y_title": "Big Chances Created",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15+ European seasons of Opta chance-creation tracking.",
          "why": "Meets the 15+ season threshold for Big Chances, throughballs, and key passes."
        },
        "hero": false
      },
      {
        "headline": "Messi delivered far more key passes across European competition.",
        "footnote": "*Final pass leading directly to a teammate shot attempt. Opta telemetry since 2009/10. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta Playmaking Archive & Transfermarkt Logs (2004\u20132026; N=774 career assists)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Key Passes Delivered (Opta)",
          "type": "bar",
          "labels": [
            "Combined (League + UCL)",
            "Domestic Leagues",
            "UEFA Champions League"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1544,
                1253,
                291
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                890,
                677,
                213
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1800.0,
          "x_title": "Competition Tier",
          "y_title": "Key Passes",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15+ European seasons of Opta chance-creation tracking.",
          "why": "Meets the 15+ season threshold for Big Chances, throughballs, and key passes."
        },
        "hero": false
      }
    ],
    "answer": "Messi generates far higher Expected Assists (xA), key passes & big chances created.",
    "metric_tags": [
      [
        "messi",
        "Messi +77.78 xA"
      ],
      [
        "messi",
        "Messi +240 Big Chances"
      ],
      [
        "messi",
        "Messi +424 Throughballs"
      ]
    ],
    "ref": "1.2.2",
    "cat_num": "1.2",
    "cat_title": "Playmaking & Passing (Volume, Efficiency, Variety & Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Generates higher chance-creation efficiency and creative pass quality?",
    "define_by": "Per-90 assist rate, Expected Assists (xA), defence-splitting throughballs, Big Chances Created, and Key Passes delivered.",
    "metrics": "Assists per 90, Expected Assists (xA), accurate throughballs, Big Chances Created, and Key Passes.",
    "reliability": {
      "level": "High",
      "score": 2.67,
      "coverage": "Opta all-time European Big Chances, throughballs & key passes (15+ seasons) + 9-season Understat xA model.",
      "why": "Opta chance-creation totals span 15+ European seasons, while Understat xA covers 9 tracked seasons (2014/15 onwards)."
    }
  },
  {
    "id": "q2_2",
    "chapter": 2,
    "question": "Who exhibits broader passing mechanics and progressive range?",
    "myth": "Messi only plays short passes; Ronaldo is just as involved in build-up.",
    "insight_badge": "Passes/match: Messi 52.5 vs Ronaldo 27.4",
    "summary": "Across Transfermarkt matches with passing data (412 Messi, 404 Ronaldo), Messi attempted 52.5 passes per match (83.3% completed) vs Ronaldo's 27.4 (83.3%). In StatsBomb's tournament sample, Messi was more accurate at every range.",
    "insights": [
      {
        "headline": "Messi attempts and completes nearly 2\u00d7 as many passes per match.",
        "footnote": "*Transfermarkt matches with passing data (412 Messi, 404 Ronaldo); StatsBomb = 14 Messi / 14 Ronaldo matches in supplementary StatsBomb H2H/tournament sample. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "Passing Volume per Match",
          "type": "bar",
          "labels": [
            "TM Completed",
            "TM Attempted",
            "StatsBomb Completed"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                43.7,
                52.5,
                48.4
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                22.8,
                27.4,
                21.9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 59.0,
          "x_title": "Metric",
          "y_title": "Passes per Match",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": true
      },
      {
        "headline": "Messi leads pass completion (%) across every distance range.",
        "footnote": "*StatsBomb pass length in yards: short <15, medium 15-30, long >=30. 14 Messi / 14 Ronaldo matches in supplementary StatsBomb H2H/tournament sample. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "Pass Completion by Range (%)",
          "type": "bar",
          "labels": [
            "Short (<15y)",
            "Medium (15-30y)",
            "Long (>=30y)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                87.9,
                85.0,
                67.0
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                83.5,
                74.8,
                62.5
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 99.0,
          "x_title": "Range",
          "y_title": "Completion (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": true
      },
      {
        "headline": "Messi completes far more long passes and switches of play.",
        "footnote": "*Totals in the StatsBomb sample (14 Messi / 14 Ronaldo matches in supplementary StatsBomb H2H/tournament sample). Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "Long Passes & Switches (Totals)",
          "type": "bar",
          "labels": [
            "Completed Long Passes (>=30y)",
            "Switches of Play"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                69,
                17
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                10,
                5
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 78.0,
          "x_title": "Metric",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": false
      },
      {
        "headline": "Both favour ground passes, Messi slightly more often.",
        "footnote": "*Share of all passes by height. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised H2H Sample))",
        "chart": {
          "title": "Pass Delivery Height Profile (%)",
          "type": "bar",
          "labels": [
            "Ground Passes",
            "Low Passes",
            "High Passes"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                80.6,
                8.6,
                10.8
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                77.3,
                11.2,
                11.5
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 91.0,
          "x_title": "Height Category",
          "y_title": "Share of Passes (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": false
      },
      {
        "headline": "Messi completes roughly 5\u00d7 more progressive passes.",
        "footnote": "*StatsBomb event telemetry across 27 shared head-to-head fixtures. Progressive pass definition: completed forward pass moving ball >=10 yards closer to goal from outside own defensive 40%. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Event Telemetry (2009\u20132018; N=32 H2H matches)</a> (Official Open Data Git Repository)",
        "chart": {
          "title": "Passing Volume & Progressive Counts (StatsBomb Sample)",
          "type": "bar",
          "labels": [
            "Total Passes Attempted",
            "Completed Passes",
            "Progressive Passes (>=10 yds)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                805,
                678,
                105
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                384,
                307,
                21
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 910.0,
          "x_title": "Passing Category",
          "y_title": "Passes",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": false
      },
      {
        "headline": "A far larger share of Messi's passes progress the ball upfield.",
        "footnote": "*Share of passes that successfully advance play towards the opponent's goal line. StatsBomb sample. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Event Telemetry (2009\u20132018; N=32 H2H matches)</a> (Official Open Data Git Repository)",
        "chart": {
          "title": "Passing Accuracy & Progressive Share (%)",
          "type": "bar",
          "labels": [
            "Pass Completion Rate (%)",
            "Progressive % of Total Passes",
            "Progressive % of Completed Passes"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                84.2,
                13.0,
                15.5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                79.9,
                5.5,
                6.8
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 95.0,
          "x_title": "Metric",
          "y_title": "Percent",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "StatsBomb Open Data sample (asymmetric club coverage between players).",
          "why": "StatsBomb open event data covers many more Messi Barcelona seasons than Ronaldo seasons."
        },
        "hero": true
      },
      {
        "headline": "Messi cleared the Big-5 90th percentile for passes/90; Ronaldo sat below playmakers.",
        "footnote": "*FBref Big-5 league match logs (2017/18\u20132024/25, >=5 matches & >=270 mins/season). Dashed lines: Top-10 & 90th percentile among all Big-5 attackers and midfielders (N=896\u2013980 players/season with >=900 mins). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Completed Passes per 90 Minutes by Season (2017/18\u20132024/25)",
          "type": "line",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                46.3,
                49.9,
                52.3,
                57.7,
                58.1,
                51.2,
                41.0,
                41.9
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                24.2,
                29.4,
                31.6,
                26.0,
                26.6,
                20.7,
                null,
                null
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Big-5 Att/Mid",
              "data": [
                86.07,
                82.47,
                81.43,
                85.62,
                79.11,
                80.25,
                88.28,
                89.36
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Big-5 Att/Mid (N=896\u2013980/yr)",
              "data": [
                51.31,
                51.92,
                50.95,
                52.97,
                50.85,
                50.63,
                52.14,
                51.11
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 101.0,
          "x_title": "Season",
          "y_title": "Completed Passes / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi matched or beat Big-5 Top-10 progressive passers every European season.",
        "footnote": "*Progressive passes per 90 minutes across FBref Big-5 league match logs (2017/18\u20132024/25). Dashed lines: Top-10 & 90th percentile Big-5 attackers/midfielders (N=896\u2013980 players/season with >=900 mins). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Progressive Passes per 90 Minutes by Season (2017/18\u20132024/25)",
          "type": "line",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9.99,
                10.88,
                10.09,
                5.98,
                0.0,
                0.0,
                9.78,
                9.75
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                3.9,
                0.0,
                0.0,
                0.0,
                2.32,
                2.06,
                null,
                null
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Big-5 Att/Mid",
              "data": [
                10.18,
                9.56,
                9.3,
                8.84,
                8.21,
                10.5,
                10.44,
                10.34
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Big-5 Att/Mid (N=896\u2013980/yr)",
              "data": [
                5.72,
                5.59,
                5.4,
                5.36,
                5.15,
                6.52,
                6.34,
                6.29
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 13.0,
          "x_title": "Season",
          "y_title": "Progressive Passes / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +25.1 Passes/Match",
    "answer": "Messi attempts & completes far more passes per match across every range.",
    "metric_tags": [
      [
        "messi",
        "Messi +25.1 Passes/Match"
      ],
      [
        "messi",
        "Messi +4.4% Short Pass Acc"
      ],
      [
        "messi",
        "Messi +59 Long Passes"
      ]
    ],
    "ref": "1.2.3",
    "cat_num": "1.2",
    "cat_title": "Playmaking & Passing (Volume, Efficiency, Variety & Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Exhibits broader passing mechanics and progressive range?",
    "define_by": "Passing volume, completion rates across short/medium/long ranges, switches of play, and progressive passing rates.",
    "metrics": "Passes/match, completion % by distance range, completed long passes & switches, and progressive pass volume & share.",
    "reliability": {
      "level": "Low",
      "score": 1.25,
      "coverage": "Transfermarkt match passes + FBref/Opta seasonal passing (2017/18\u20132024/25) + StatsBomb Open Data progressive sample.",
      "why": "Only 5\u20138 recent seasons have uniform FBref progressive/range tracking, and StatsBomb Open Data has asymmetric club coverage (19 Messi vs 9 Ronaldo seasons)."
    }
  },
  {
    "id": "q2_team",
    "chapter": 2,
    "question": "Who carries a larger share of team build-up and big-game assists?",
    "myth": "Both accounted for similar shares of their team's on-ball progression.",
    "insight_badge": "Messi leads team passing, dribbling, and carry-distance share",
    "summary": "Measures the share of total team passes, completed dribbles, and ball-carrying distance executed by each player.",
    "insights": [
      {
        "headline": "Messi accounts for a larger share of his team's total passes.",
        "footnote": "*Player passes attempted divided by total team passes attempted in the same matches (Messi N=195, Ronaldo N=165). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release) | <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Player Passes as % of Team Total Passes by Season (2017/18\u20132024/25)",
          "type": "line",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8.1,
                8.1,
                8.7,
                8.9,
                8.8,
                8.7
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                4.5,
                5.7,
                6.0,
                4.9,
                5.3,
                3.2
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 10.0,
          "x_title": "Season",
          "y_title": "% of Team Total Passes",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading in % of Team Passes (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "y_min": -1,
          "y_max": 7,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi accounts for a vastly larger share of team dribbles and carry distance.",
        "footnote": "*Player share of total team completed dribbles, total ball-carrying distance, and progressive ball-carrying distance in matched fixtures (Messi N=195, Ronaldo N=67). Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_advanced_match_stats\" target=\"_blank\" rel=\"noopener noreferrer\">FBref / Opta Advanced Team & Player Match Telemetry (2017\u20132025)</a> (Open Data Release) | <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "Player Share of Team Dribbles & Carry Distance (%)",
          "type": "bar",
          "labels": [
            "Successful Dribbles (% of Team)",
            "Total Carry Distance (% of Team)",
            "Progressive Carry Distance (% of Team)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                30.9,
                12.8,
                13.4
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                7.6,
                5.7,
                6.1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 35.0,
          "x_title": "Contribution Metric",
          "y_title": "% of Team Total",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi assisted a broader set of teammates across Europe.",
        "footnote": "*Computed from Transfermarkt European club match events, excluding self-won penalties (player_id == player_assist_id). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Unique Teammates Assisted (European Club Sample)",
          "type": "bar",
          "labels": [
            "Unique Teammates Assisted",
            "Total Assists in Sample"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                73,
                256
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                52,
                129
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 290.0,
          "x_title": "Metric",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi's top assist partnerships produced higher volume, led by Luis Su\u00e1rez.",
        "footnote": "*Top 10 teammates assisted by each player in Transfermarkt European club match events (excluding self-won penalties). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "type": "dual_bar",
          "index_axis": "y",
          "title": "Top 10 Most-Assisted Teammates (European Club Sample)",
          "unit": "assists",
          "x_min": 0,
          "x_max": 52.0,
          "messi": {
            "title": "Lionel Messi (73 Unique Teammates)",
            "subtitle": "Top 10 of 256 European Club Assists",
            "labels": [
              "Luis Su\u00e1rez",
              "Neymar",
              "Kylian Mbapp\u00e9",
              "Jordi Alba",
              "Gerard Piqu\u00e9",
              "Ousmane Demb\u00e9l\u00e9",
              "Ivan Rakitic",
              "Cristian Tello",
              "Alexis S\u00e1nchez",
              "Pedro"
            ],
            "data": [
              46,
              27,
              20,
              14,
              10,
              10,
              8,
              6,
              6,
              6
            ],
            "colors": [
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8",
              "#38bdf8"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo (52 Unique Teammates)",
            "subtitle": "Top 10 of 129 European Club Assists",
            "labels": [
              "Karim Benzema",
              "Gareth Bale",
              "Isco",
              "James Rodr\u00edguez",
              "Marcelo",
              "Gonzalo Higua\u00edn",
              "Jes\u00e9",
              "\u00c1lvaro Morata",
              "Toni Kroos",
              "Mesut \u00d6zil"
            ],
            "data": [
              20,
              9,
              8,
              7,
              6,
              5,
              4,
              4,
              4,
              3
            ],
            "colors": [
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316",
              "#f97316"
            ]
          }
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi produced far more knockout assists, especially from QF to Finals.",
        "footnote": "*Senior knockout-stage assists (R16, Quarter-Finals, Semi-Finals, Final) across European club & cup matches from Transfermarkt datasets (2012/13\u20132024/25; Messi N=40 assists; Ronaldo N=15 assists). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Knockout-Stage Assists by Round (2012/13\u20132024/25)",
          "type": "bar",
          "labels": [
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Final"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                13,
                10,
                6,
                11
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                10,
                2,
                2,
                1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 15.0,
          "x_title": "Knockout Round",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi's knockout assist rate per 90 rises sharply from QF to Finals.",
        "footnote": "*Knockout-stage assists per 90 minutes played across Round of 16, Quarter-Finals, Semi-Finals, and Finals (2012/13\u20132024/25). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Knockout-Stage Assists per 90 by Round (2012/13\u20132024/25)",
          "type": "bar",
          "labels": [
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Final"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.38,
                0.37,
                0.29,
                0.47
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.38,
                0.09,
                0.09,
                0.05
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 0.53,
          "x_title": "Knockout Round",
          "y_title": "Assists / 90",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi recorded ~2\u00d7 more league assists vs both Top-4 and Bottom-4 clubs.",
        "footnote": "*Assists vs clubs finishing in that season's eventual Top 4 (Messi N=61, Ronaldo N=57) and eventual Bottom 4 (Messi N=71, Ronaldo N=64) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Assists vs Eventual Season Top-4 & Bottom-4 Clubs (2012/13\u20132024/25)",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                14,
                42
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                7,
                18
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 48.0,
          "x_title": "Opponent Tier",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Per match vs Top-4 and Bottom-4 clubs, Messi's assist rate is nearly double.",
        "footnote": "*Assists per match vs eventual Top-4 (Messi N=61, Ronaldo N=57) and eventual Bottom-4 league clubs (Messi N=71, Ronaldo N=64) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Assists per Match vs Eventual Season Top-4 & Bottom-4 Clubs",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.23,
                0.59
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.12,
                0.28
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 0.67,
          "x_title": "Opponent Tier",
          "y_title": "Assists / Match",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi delivered knockout assists steadily; Ronaldo's output was more sporadic.",
        "footnote": "*Senior knockout-round assists per season across European club and cup ties in Transfermarkt datasets (2012/13\u20132022/23). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Knockout-Stage Assists per Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1,
                3,
                8,
                7,
                6,
                5,
                7,
                2,
                1,
                0,
                0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1,
                4,
                4,
                1,
                2,
                2,
                0,
                0,
                1,
                0,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 9.0,
          "x_title": "Season",
          "y_title": "Knockout Assists",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi supplied more seasonal assists vs eventual Top-4 clubs.",
        "footnote": "*Assists per season vs clubs finishing in that season's eventual Top 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Assists vs Eventual Season Top-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                2,
                3,
                0,
                1,
                2,
                1,
                1,
                1,
                1,
                2
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1,
                2,
                0,
                0,
                0,
                0,
                2,
                1,
                0,
                1,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 3.4,
          "x_title": "Season",
          "y_title": "Assists vs Top 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi also supplied more seasonal assists vs eventual Bottom-4 clubs.",
        "footnote": "*Assists per season vs clubs finishing in that season's eventual Bottom 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Assists vs Eventual Season Bottom-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                3,
                1,
                3,
                5,
                2,
                3,
                3,
                5,
                3,
                9,
                5
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                2,
                2,
                3,
                4,
                0,
                2,
                1,
                2,
                0,
                2,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 10.1,
          "x_title": "Season",
          "y_title": "Assists vs Bottom 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi assisted 2\u00d7+ Ronaldo's team-goal share in knockouts, Finals & vs Top-4.",
        "footnote": "*Player assists divided by total team goals scored in matches played across each knockout round and eventual Top-4 league fixtures (2012/13\u20132024/25). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Share of Team Goals Directly Assisted (%) in Knockouts & vs Top-4 Opponents",
          "type": "bar",
          "labels": [
            "All Knockouts",
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals",
            "vs Eventual Top-4",
            "vs Eventual Bottom-4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                17.8,
                16.9,
                17.5,
                14.6,
                22.0,
                14.3,
                17.9
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                8.5,
                17.2,
                5.7,
                5.1,
                2.2,
                7.8,
                9.2
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 25.0,
          "x_title": "Competition / Stage",
          "y_title": "% of Team Goals Assisted",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +23.3% Team Dribbles",
    "answer": "Messi carried far more of his team's passes, dribbles & carry distance, and assisted a wider set of teammates.",
    "metric_tags": [
      [
        "messi",
        "Messi +3.3% Pass Share"
      ],
      [
        "messi",
        "Messi +23.3% Dribble Share"
      ],
      [
        "messi",
        "Messi +21 Assisted Mates"
      ],
      [
        "messi",
        "Messi +25 KO Assists"
      ]
    ],
    "ref": "1.2.4",
    "cat_num": "1.2",
    "cat_title": "Playmaking & Passing (Volume, Efficiency, Variety & Importance)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Carries a larger share of team build-up and big-game assists?",
    "define_by": "Proportion of team total passes, dribbles, and carry distance executed, breadth of teammates assisted, knockout-round assists, and assists vs eventual Top-4 and Bottom-4 clubs.",
    "metrics": "Player % of team passes/dribbles/carry distance, unique teammates assisted, knockout assists (total & per 90), and assists vs eventual Top-4 & Bottom-4 clubs.",
    "reliability": {
      "level": "Medium",
      "score": 2.0,
      "coverage": "Transfermarkt game-events assist recipients + 2012/13\u20132024/25 knockout/Top-4 splits + 2017/18\u20132024/25 FBref team pass share.",
      "why": "Knockout and Top-4/Bottom-4 assist splits cover 11\u201313 European seasons, while team pass/dribble share relies on modern FBref/StatsBomb windows."
    }
  },
  {
    "id": "q4_1",
    "chapter": 1,
    "question": "Who dribbles more across career volume and per-90 frequency?",
    "myth": "Both operated with similar dribbling frequency and take-on volume.",
    "insight_badge": "Opta European Dribbles: Messi 3,093 (4.58/90) vs Ronaldo 1,655 (2.22/90)",
    "summary": "Messi completed 3,093 successful European dribbles (4.58 per 90) vs Ronaldo's 1,655 (2.22 per 90), and led in every tracked Opta season from 2009/10 to 2023/24.",
    "insights": [
      {
        "headline": "Messi completed nearly 2\u00d7 as many European dribbles.",
        "footnote": "*Opta / WhoScored all-time European League & UEFA Champions League records. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "All-Time Successful Dribbles (Opta)",
          "type": "bar",
          "labels": [
            "Domestic League",
            "UEFA Champions League",
            "Combined Career"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                2406,
                687,
                3093
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                1219,
                436,
                1655
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 3500.0,
          "x_title": "Competition Tier",
          "y_title": "Successful Dribbles",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": true
      },
      {
        "headline": "Messi averages 2\u00d7+ Ronaldo's successful dribbles per 90.",
        "footnote": "*Dribbles per 90 minutes across all instrumented European club minutes. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Successful Dribbles per 90 Minutes (Opta)",
          "type": "bar",
          "labels": [
            "Domestic League",
            "UEFA Champions League",
            "Combined Career"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                4.59,
                4.55,
                4.58
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                2.1,
                2.46,
                2.22
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 5.2,
          "x_title": "Competition Tier",
          "y_title": "Dribbles / 90m",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": true
      },
      {
        "headline": "Messi led dribbles in every Opta season, clearing the Big-5 Top-10 average.",
        "footnote": "*Season-by-season successful take-ons across domestic league and European competition from Opta telemetry (2009/10\u20132023/24). Dashed lines (2017/18\u20132023/24): Big-5 domestic league Top-10 & 90th percentile among attackers/midfielders (N=923\u2013970 players/season with >=900 mins). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Successful Dribbles per Season (2009/10\u20132023/24)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                206,
                265,
                222,
                143,
                169,
                266,
                151,
                154,
                222,
                169,
                239,
                188,
                87,
                116,
                62
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                105,
                107,
                102,
                81,
                92,
                79,
                60,
                40,
                53,
                63,
                67,
                68,
                30,
                27,
                17
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Big-5 Att/Mid (League)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                124.7,
                120.4,
                124.9,
                111.5,
                99.5,
                89.2,
                96.7
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Big-5 (N=923\u2013970/yr)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                55.0,
                49.0,
                53.0,
                50.0,
                46.0,
                45.6,
                42.0
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 300.0,
          "x_title": "Season",
          "y_title": "Successful Dribbles",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      },
      {
        "headline": "Messi stayed well above Big-5 Top-10 dribbles/90; Ronaldo sat below the 90th pct.",
        "footnote": "*Opta seasonal successful dribbles normalised by official Transfermarkt minutes played per season (2009/10\u20132023/24). Dashed benchmarks (2017/18\u20132023/24): Big-5 Top-10 & 90th percentile dribbles/90 (N=923\u2013970 players/season with >=900 mins). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download) | <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Successful Dribbles per 90 Minutes by Season (2009/10\u20132023/24)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                4.21,
                5.21,
                3.83,
                3.16,
                4.06,
                4.73,
                3.21,
                3.11,
                4.47,
                3.78,
                5.64,
                4.04,
                2.73,
                2.21,
                2.81
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                3.24,
                2.09,
                1.87,
                1.57,
                2.05,
                1.53,
                1.26,
                0.87,
                1.3,
                1.56,
                1.48,
                1.63,
                0.84,
                0.88,
                0.39
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Big-5 Drib/90",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                5.15,
                4.96,
                5.0,
                4.61,
                4.3,
                4.19,
                4.09
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Big-5 Drib/90 (N=923\u2013970/yr)",
              "data": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                2.36,
                2.11,
                2.42,
                2.21,
                2.07,
                1.97,
                2.01
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 6.4,
          "x_title": "Season",
          "y_title": "Dribbles / 90",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +1,438 Dribbles",
    "answer": "Messi completed nearly twice as many European dribbles and led per-ninety take-ons in every tracked season.",
    "metric_tags": [
      [
        "messi",
        "Messi +1,438 Dribbles"
      ],
      [
        "messi",
        "Messi +2.36 Dribbles/90"
      ]
    ],
    "ref": "1.3.1",
    "cat_num": "1.3",
    "cat_title": "Dribbling & 1v1 Ball Progression (Opta European Telemetry)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Dribbles more across career volume and per-90 frequency?",
    "define_by": "Career successful take-ons, seasonal dribble totals, and dribbles per 90 minutes across European competition.",
    "metrics": "Opta career successful dribbles, dribbles per 90 minutes, and seasonal dribble volume & per-90 trajectories (2009/10\u20132023/24).",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Opta European league & UCL dribbling telemetry across 15 consecutive seasons (2009/10\u20132023/24).",
      "why": "Covers 15 consecutive European prime seasons (\u226566% threshold) with consistent Opta take-on definitions for both players."
    }
  },
  {
    "id": "q3_1",
    "chapter": 3,
    "question": "Who produces more combined Goals + Assists across career, seasons, and ages?",
    "myth": "Ronaldo's goal lead makes him the bigger overall contributor.",
    "insight_badge": "G+A: Messi 1404 vs Ronaldo 1286",
    "summary": "Messi has 1404 goal contributions in 1184 matches (1.19 per match, 1.3 per 90) vs Ronaldo's 1286 in 1337 (0.96, 1.06).",
    "insights": [
      {
        "headline": "Messi leads combined Goals + Assists; Ronaldo's goals keep the gap relatively close.",
        "footnote": "*G+A = goals + assists per Transfermarkt match records. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Career Goals + Assists",
          "type": "bar",
          "labels": [
            "Gross G+A",
            "Official G+A"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1404,
                1326
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                1286,
                1252
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1600.0,
          "x_title": "Scope",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi leads domestic league G+A; Ronaldo leads UCL and international G+A.",
        "footnote": "*Official competitions. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "G+A by Competition",
          "type": "bar",
          "labels": [
            "League",
            "Champions League",
            "Domestic & Other Cups",
            "International (official)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                861,
                174,
                174,
                117
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                795,
                190,
                110,
                157
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 970.0,
          "x_title": "Competition",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi posts a higher G+A rate per match and per 90 minutes.",
        "footnote": "*Played matches: 1184 Messi (97440 min), 1337 Ronaldo (109271 min). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "G+A Rate",
          "type": "bar",
          "labels": [
            "Per Match",
            "Per 90 Minutes"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1.19,
                1.3
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.96,
                1.06
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1.5,
          "x_title": "Rate",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi hit the higher G+A peak; both towered above Top-10 European attackers.",
        "footnote": "*Season = Aug-Jul, club + country. Dashed benchmarks (2012/13\u20132025/26): Transfermarkt Top-10 attackers & 90th percentile G+A across club competitions (N=909\u20131,066 attackers/season with >=900 mins). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint) Source: <a href=\"https://github.com/JaseZiv/worldfootballR_data/releases/tag/fb_big5_advanced_season_stats\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt European Attackers & FBref Big-5 Peer Benchmarks (2012\u20132026)</a> (Peer Benchmark Audit)",
        "chart": {
          "title": "Goals + Assists per Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                1,
                19,
                26,
                38,
                62,
                61,
                90,
                118,
                89,
                65,
                97,
                78,
                79,
                75,
                77,
                59,
                65,
                39,
                66,
                45,
                51,
                75,
                29
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                11,
                19,
                31,
                25,
                52,
                56,
                39,
                48,
                76,
                87,
                75,
                82,
                89,
                74,
                70,
                65,
                45,
                55,
                55,
                37,
                28,
                67,
                48,
                43,
                9
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Top 10 Forwards G+A (Club)",
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
                50.1,
                47.0,
                49.6,
                56.8,
                52.0,
                50.1,
                48.7,
                46.4,
                46.3,
                47.6,
                44.2,
                43.7,
                49.0,
                51.7,
                null
              ],
              "borderColor": "#facc15",
              "backgroundColor": "transparent",
              "borderDash": [
                6,
                4
              ],
              "borderWidth": 2.0,
              "pointRadius": 2.0,
              "tension": 0.25,
              "fill": false
            },
            {
              "label": "90th Pct Forwards (N=909\u20131,066/yr)",
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
                22.2,
                22.0,
                20.0,
                21.0,
                21.0,
                22.0,
                21.0,
                20.8,
                20.0,
                20.6,
                20.0,
                21.0,
                21.0,
                19.0,
                null
              ],
              "borderColor": "#94a3b8",
              "backgroundColor": "transparent",
              "borderDash": [
                3,
                3
              ],
              "borderWidth": 1.8,
              "pointRadius": 1.5,
              "tension": 0.25,
              "fill": false
            }
          ],
          "y_min": 0,
          "y_max": 140.0,
          "x_title": "Season",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi out-produced Ronaldo in G+A across most shared seasons.",
        "footnote": "*Bar = Messi G+A - Ronaldo G+A. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Season G+A Difference (Messi - Ronaldo)",
          "type": "bar",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "stacked": true,
          "datasets": [
            {
              "label": "Messi Leads (+)",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                23,
                13,
                14,
                31,
                14,
                0,
                8,
                4,
                9,
                10,
                32,
                4,
                10,
                2,
                38,
                0,
                3,
                32,
                20
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo Leads (-)",
              "data": [
                -11,
                -19,
                -30,
                -6,
                -26,
                -18,
                0,
                0,
                0,
                0,
                0,
                -17,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                -22,
                0,
                0,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": -34.0,
          "y_max": 43.0,
          "x_title": "Season",
          "y_title": "Difference",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Led (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            14,
            15,
            16,
            17
          ],
          "r_data": [
            0,
            0,
            -1,
            -2,
            -3,
            -4,
            -4,
            -4,
            -4,
            -4,
            -4,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -6,
            -6,
            -6,
            -6
          ],
          "y_min": -7,
          "y_max": 18,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi led G+A across most biological ages; Ronaldo led at earliest & latest ages.",
        "footnote": "*G+A in matches played at each integer age. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "G+A at Each Biological Age",
          "type": "line",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                19,
                23,
                41,
                62,
                60,
                88,
                121,
                89,
                62,
                97,
                81,
                79,
                72,
                79,
                49,
                69,
                45,
                63,
                48,
                40,
                80,
                36,
                null,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                7,
                34,
                24,
                42,
                54,
                46,
                34,
                76,
                77,
                83,
                83,
                82,
                78,
                68,
                66,
                64,
                53,
                49,
                47,
                22,
                62,
                58,
                41,
                26
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 140.0,
          "x_title": "Age",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Ages Led (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "m_data": [
            1,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            8,
            8,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            12,
            13,
            14,
            14,
            14,
            14
          ],
          "r_data": [
            0,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -2,
            -2,
            -3,
            -4,
            -5,
            -5,
            -6,
            -6,
            -7,
            -7,
            -7,
            -7,
            -7,
            -8,
            -8,
            -8
          ],
          "y_min": -9,
          "y_max": 15,
          "unit": "Ages Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Messi held a clear cumulative G+A lead at every shared biological age.",
        "footnote": "Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Cumulative G+A by Biological Age",
          "type": "line",
          "labels": [
            "Age 18",
            "Age 19",
            "Age 20",
            "Age 21",
            "Age 22",
            "Age 23",
            "Age 24",
            "Age 25",
            "Age 26",
            "Age 27",
            "Age 28",
            "Age 29",
            "Age 30",
            "Age 31",
            "Age 32",
            "Age 33",
            "Age 34",
            "Age 35",
            "Age 36",
            "Age 37",
            "Age 38",
            "Age 39",
            "Age 40",
            "Age 41"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                20,
                43,
                84,
                146,
                206,
                294,
                415,
                504,
                566,
                663,
                744,
                823,
                895,
                974,
                1023,
                1092,
                1137,
                1200,
                1248,
                1288,
                1368,
                1404,
                null,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                17,
                51,
                75,
                117,
                171,
                217,
                251,
                327,
                404,
                487,
                570,
                652,
                730,
                798,
                864,
                928,
                981,
                1030,
                1077,
                1099,
                1161,
                1219,
                1260,
                1286
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 1600.0,
          "x_title": "Age",
          "y_title": "Cumulative G+A",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +118 G+A",
    "answer": "Messi leads combined Goals + Assists across gross & official play in fewer appearances.",
    "metric_tags": [
      [
        "messi",
        "Messi +118 G+A"
      ],
      [
        "messi",
        "Messi +0.24 G+A/90"
      ],
      [
        "messi",
        "Messi +0.23 G+A/Match"
      ]
    ],
    "ref": "1.4.1",
    "cat_num": "1.4",
    "cat_title": "Combined Attacking Output (G+A Aggregator of 1.1 & 1.2)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Produces more combined Goals + Assists across career, seasons, and ages?",
    "define_by": "Total direct goal contributions (Goals + Assists) across all senior levels, competitions, seasonal timelines, and biological ages.",
    "metrics": "Gross & official G+A, League/UCL/International G+A, G+A per match & per 90, seasonal G+A difference, and same-age cumulative G+A.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete 25-season senior career Goals + Assists across all club and international competitions.",
      "why": "100% full-career coverage combining verified goal and assist logs across seasons, competitions, and matched ages."
    }
  },
  {
    "id": "q3_team",
    "chapter": 3,
    "question": "Who accounts for a higher share of team goals while on the pitch?",
    "myth": "Both were involved in roughly the same share of team goals while on the pitch.",
    "insight_badge": "Messi led on-pitch goal involvement in 17 seasons vs Ronaldo's 6",
    "summary": "Measures the percentage of team goals scored while on the pitch that were directly scored or assisted by the player.",
    "insights": [
      {
        "headline": "Messi led on-pitch team goal involvement share in most seasons.",
        "footnote": "*(Goals + assists) \u00c3\u00b7 team goals scored while the player was on the pitch. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Share of Team Goals Involved In While On Pitch (%)",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                25.0,
                35.8,
                32.9,
                46.9,
                43.1,
                45.5,
                60.4,
                62.1,
                60.5,
                56.5,
                56.1,
                51.3,
                54.5,
                54.7,
                63.1,
                65.6,
                48.9,
                41.9,
                49.3,
                59.2,
                62.2,
                60.0,
                69.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                44.0,
                30.2,
                38.3,
                27.8,
                46.0,
                50.5,
                41.9,
                45.3,
                55.1,
                47.0,
                51.0,
                57.3,
                60.1,
                49.7,
                47.3,
                52.8,
                61.6,
                53.9,
                48.2,
                50.7,
                37.3,
                49.3,
                47.1,
                38.7,
                39.1
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 78.0,
          "x_title": "Season",
          "y_title": "Share (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            0,
            1,
            1,
            1,
            2,
            3,
            4,
            5,
            6,
            6,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            12,
            13,
            14,
            15,
            16,
            17
          ],
          "r_data": [
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -3,
            -3,
            -3,
            -3,
            -3,
            -4,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5,
            -6,
            -6,
            -6,
            -6,
            -6,
            -6
          ],
          "y_min": -7,
          "y_max": 18,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career team scoring & on-pitch involvement logs (25 seasons).",
          "why": "Complete career match-by-match goal and assist share coverage."
        },
        "hero": true
      },
      {
        "headline": "Combined G+A: Messi edges Top-4 clubs and leads clearly vs Bottom-4.",
        "footnote": "*Combined G+A vs clubs finishing in that season's eventual Top 4 (Messi N=61, Ronaldo N=57) and eventual Bottom 4 (Messi N=71, Ronaldo N=64) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "G+A vs Eventual Season Top-4 & Bottom-4 Clubs (2012/13\u20132024/25)",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                50,
                120
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                43,
                79
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 140.0,
          "x_title": "Opponent Tier",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Per match, Messi leads G+A against both Top-4 and Bottom-4 clubs.",
        "footnote": "*Combined G+A per match vs eventual Top-4 (Messi N=61, Ronaldo N=57) and eventual Bottom-4 league clubs (Messi N=71, Ronaldo N=64) across 2012/13\u20132024/25. Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "G+A per Match vs Eventual Season Top-4 & Bottom-4 Clubs",
          "type": "bar",
          "labels": [
            "vs Eventual Top 4",
            "vs Eventual Bottom 4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.82,
                1.69
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.75,
                1.23
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1.9,
          "x_title": "Opponent Tier",
          "y_title": "G+A / Match",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Seasonal G+A vs Top-4 clubs tracks closely; Messi edges via assists.",
        "footnote": "*Combined G+A per season vs clubs finishing in that season's eventual Top 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "G+A vs Eventual Season Top-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8,
                6,
                6,
                2,
                7,
                5,
                5,
                4,
                2,
                1,
                4
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                6,
                5,
                4,
                1,
                6,
                4,
                4,
                6,
                1,
                6,
                0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 9.0,
          "x_title": "Season",
          "y_title": "G+A vs Top 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Both sustained high seasonal G+A against eventual Bottom-4 clubs.",
        "footnote": "*Combined G+A per season vs clubs finishing in that season's eventual Bottom 4 (2012/13\u20132022/23 paired European seasons). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "G+A vs Eventual Season Bottom-4 Clubs by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                12,
                8,
                16,
                14,
                11,
                12,
                9,
                13,
                8,
                9,
                8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                12,
                6,
                15,
                10,
                5,
                5,
                6,
                7,
                5,
                7,
                1
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 18.0,
          "x_title": "Season",
          "y_title": "G+A vs Bottom 4",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Team G+A share: Ronaldo edges QF/SF; Messi leads Finals & Top-4 league matches.",
        "footnote": "*Combined player (Goals + Assists) divided by total team goals scored in matches played across each knockout round and eventual Top-4 league fixtures (2012/13\u20132024/25). Source: <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match-Level Datasets (dcaribou)</a> (Open Data Release Download)",
        "chart": {
          "title": "Share of Team Goals Involved In (G+A %) in Knockouts & vs Top-4 Opponents",
          "type": "bar",
          "labels": [
            "All Knockouts",
            "Round of 16",
            "Quarter-Finals",
            "Semi-Finals",
            "Finals",
            "vs Eventual Top-4",
            "vs Eventual Bottom-4"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                48.4,
                59.7,
                33.3,
                41.5,
                54.0,
                51.0,
                51.1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                51.4,
                60.3,
                60.0,
                48.7,
                35.6,
                47.8,
                40.3
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 68.0,
          "x_title": "Competition / Stage",
          "y_title": "% of Team Goals (G+A Share)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +11 Team Share Seasons",
    "answer": "Messi accounted for a higher share of on-pitch team goals across most shared seasons.",
    "metric_tags": [
      [
        "messi",
        "Messi +11 Team Share Seasons"
      ],
      [
        "messi",
        "Messi +7 Top-4 G+A"
      ]
    ],
    "ref": "1.4.2",
    "cat_num": "1.4",
    "cat_title": "Combined Attacking Output (G+A Aggregator of 1.1 & 1.2)",
    "pillar_num": "1.0",
    "pillar_title": "Contribution to Attack (In Possession)",
    "who_is": "Accounts for a higher share of team goals while on the pitch?",
    "define_by": "Percentage of team goals scored while the player was on the pitch that were directly scored or assisted by the player.",
    "metrics": "On-pitch team goal involvement share (%) and combined G+A vs eventual season Top-4 and Bottom-4 clubs.",
    "reliability": {
      "level": "Medium",
      "score": 2.17,
      "coverage": "Full-career team goal involvement (%) + 2012/13\u20132024/25 league Top-4/Bottom-4 and knockout G+A splits.",
      "why": "Full-season team goal involvement spans all 25 seasons; opponent-tier G+A splits cover 2012/13\u20132024/25."
    }
  },
  {
    "id": "q4_2",
    "chapter": 4,
    "leader": "messi",
    "leader_badge": "Messi +2.10 Pressures/90",
    "question": "Who works harder off the ball in pressures, tackles, and interceptions?",
    "myth": "Messi walks and never contributes defensively; Ronaldo presses continuously.",
    "insight_badge": "Pressures/90: Messi 10.04 vs Ronaldo 7.94; Tackles/90: Messi 0.65 vs Ronaldo 0.38",
    "summary": "In Opta's defensive tracking per 90 minutes across European club football, Messi leads in active ground pressing (10.04 pressures vs 7.94 per 90) and tackles (0.65 vs 0.38 per 90), while Ronaldo provides defensive clearance height inside the box (0.65 clearances vs 0.01 per 90).",
    "insights": [
      {
        "headline": "Messi leads tackles & pressures/90; Ronaldo leads set-piece clearances/90.",
        "footnote": "*Opta / WhoScored defensive action telemetry across European league and continental competitions. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Defensive Actions per 90 Minutes (Opta)",
          "type": "bar",
          "labels": [
            "Tackles / 90m",
            "Interceptions / 90m",
            "Passes Blocked / 90m",
            "Clearances / 90m",
            "Pressures / 90m"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.65,
                0.35,
                0.25,
                0.01,
                10.04
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.38,
                0.3,
                0.17,
                0.65,
                7.94
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 12.0,
          "x_title": "Defensive Metric",
          "y_title": "Per 90 Minutes",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "14 seasons of Opta European defensive tracking (2009/10\u20132022/23).",
          "why": "Strong 14-season European sample, just below the 15-season High threshold."
        },
        "hero": true
      },
      {
        "headline": "Messi recorded higher European tackling rates/90 across seasons.",
        "footnote": "*Opta / WhoScored seasonal total tackles per 90 minutes across League and UEFA Champions League fixtures (2009/10\u20132022/23). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Total Tackles per 90 Minutes by Season (2009/10\u20132022/23)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.87,
                0.74,
                0.63,
                0.57,
                0.49,
                0.82,
                0.43,
                0.82,
                0.62,
                0.56,
                0.58,
                0.58,
                0.42,
                0.78
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.49,
                0.5,
                0.57,
                0.45,
                0.59,
                0.24,
                0.29,
                0.22,
                0.31,
                0.34,
                0.37,
                0.16,
                0.35,
                0.35
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 0.98,
          "x_title": "Season",
          "y_title": "Tackles / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "14 seasons of Opta European defensive tracking (2009/10\u20132022/23).",
          "why": "Strong 14-season European sample, just below the 15-season High threshold."
        },
        "hero": false
      },
      {
        "headline": "In recent seasons, Messi continued winning more tackles per 90.",
        "footnote": "*Transfermarkt match logs with recorded duel statistics (all senior club & country fixtures tracked, 2018/19\u20132025/26; seasons with \u226510 tracked games). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Tackles Won per 90 Minutes by Season (2018/19\u20132025/26)",
          "type": "line",
          "labels": [
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.49,
                0.25,
                0.4,
                0.12,
                0.51,
                0.4,
                0.6,
                0.47
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.26,
                0.26,
                0.15,
                0.2,
                0.15,
                0.15,
                0.09,
                0.07
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 0.68,
          "x_title": "Season",
          "y_title": "Tackles Won / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      },
      {
        "headline": "Messi intercepted more passes in early Barcelona years before converging in their 30s.",
        "footnote": "*Opta / WhoScored seasonal interceptions per 90 minutes across League and UEFA Champions League fixtures (2009/10\u20132022/23). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Interceptions per 90 Minutes by Season (2009/10\u20132022/23)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1.2,
                0.69,
                0.55,
                0.39,
                0.17,
                0.28,
                0.19,
                0.17,
                0.24,
                0.15,
                0.23,
                0.2,
                0.13,
                0.13
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.52,
                0.73,
                0.55,
                0.38,
                0.13,
                0.04,
                0.23,
                0.29,
                0.23,
                0.24,
                0.25,
                0.19,
                0.06,
                0.17
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 1.4,
          "x_title": "Season",
          "y_title": "Interceptions / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "14 seasons of Opta European defensive tracking (2009/10\u20132022/23).",
          "why": "Strong 14-season European sample, just below the 15-season High threshold."
        },
        "hero": false
      },
      {
        "headline": "Messi applied more defensive pressures/90 in every tracked season.",
        "footnote": "*Opta / StatsPerform domestic league defensive pressures per 90 minutes (2017/18\u20132021/22). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Defensive Pressures per 90 Minutes by Season (2017/18\u20132021/22)",
          "type": "line",
          "labels": [
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                12.4,
                10.76,
                8.97,
                8.67,
                9.21
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                8.85,
                9.4,
                7.65,
                7.22,
                6.66
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 14.0,
          "x_title": "Season",
          "y_title": "Pressures / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "5\u20136 season European league telemetry window.",
          "why": "Covers fewer than 7 seasons (<35% of career span) due to provider availability."
        },
        "hero": false
      },
      {
        "headline": "Messi blocked slightly more passes/90 across most European campaigns.",
        "footnote": "*Opta / WhoScored seasonal passes blocked per 90 minutes across League and UEFA Champions League fixtures (2013/14\u20132022/23). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Passes Blocked per 90 Minutes by Season (2013/14\u20132022/23)",
          "type": "line",
          "labels": [
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.23,
                0.72,
                0.19,
                0.22,
                0.33,
                0.41,
                0.3,
                0.35,
                0.29,
                0.37
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.28,
                0.37,
                0.13,
                0.26,
                0.31,
                0.16,
                0.2,
                0.21,
                0.41,
                0.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 0.81,
          "x_title": "Season",
          "y_title": "Passes Blocked / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      }
    ],
    "answer": "Messi logs more pressures, tackles, interceptions & pass blocks per ninety.",
    "metric_tags": [
      [
        "messi",
        "Messi +0.27 Tackles/90"
      ],
      [
        "messi",
        "Messi +2.10 Pressures/90"
      ],
      [
        "ronaldo",
        "Ronaldo +0.64 Clearances/90"
      ]
    ],
    "ref": "2.1.1",
    "cat_num": "2.1",
    "cat_title": "Active Ground Defending & Pressing Disruptions",
    "pillar_num": "2.0",
    "pillar_title": "Contribution to Defence (Out of Possession)",
    "who_is": "Works harder off the ball in pressures, tackles, and interceptions?",
    "define_by": "Out-of-possession work rate measured by Opta defensive actions per 90 minutes and seasonal trajectories across European & senior competition.",
    "metrics": "Tackles/90m, interceptions/90m, pressures/90m, passes blocked/90m, and Transfermarkt tackles won/90m by season.",
    "reliability": {
      "level": "Medium",
      "score": 1.83,
      "coverage": "Opta European tackles/interceptions/blocks (2009/10\u20132022/23) + FBref pressures (2017/18\u20132021/22) + Transfermarkt tackles (2018/19\u20132025/26).",
      "why": "Tackles and interceptions cover 14 European seasons (just under 15), while defensive pressures only exist in a 5-season FBref window."
    }
  },
  {
    "id": "q4_3",
    "chapter": 2,
    "leader": "ronaldo",
    "leader_badge": "Ronaldo +616 Aerials Won",
    "question": "Who wins more aerial duels, box clearances, and physical contests?",
    "myth": "Both players contest and win individual duels in identical areas of the pitch.",
    "insight_badge": "Aerial duels won: Ronaldo 737 (1.38/90m) vs Messi 121 (0.2/90m)",
    "summary": "The statistical contrast reveals two distinct physical profiles: Messi dominates ground take-ons (3093 vs 1655 dribbles), while Ronaldo dominates the aerial battleground, winning 737 aerial duels (1.38 per 90) vs Messi's 121 (0.2 per 90) \u2014 a 6.9x margin for Ronaldo in the air.",
    "insights": [
      {
        "headline": "Sharp physical contrast: Messi dominates ground take-ons vs Ronaldo in the air.",
        "footnote": "*Opta / WhoScored European League & Champions League records. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape) | <a href=\"https://www.messivsronaldo.app/detailed-stats/aerial-duels/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Aerial Duels Telemetry (2004\u20132023; N=858 aerials)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Ground Take-Ons vs Aerial Duels Won (Opta)",
          "type": "bar",
          "labels": [
            "Ground Dribbles Won",
            "Aerial Duels Won"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                3093,
                121
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                1655,
                737
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 3500.0,
          "x_title": "Duel Type",
          "y_title": "Total Duels Won",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": true
      },
      {
        "headline": "Per 90: Messi wins 2\u00d7+ ground take-ons vs Ronaldo's aerial dominance.",
        "footnote": "*Duels per 90 minutes across instrumented European club minutes. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/successful-dribbles/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Dribbling Telemetry (2004\u20132023; N=4,748 dribbles)</a> (Opta Telemetry Scrape) | <a href=\"https://www.messivsronaldo.app/detailed-stats/aerial-duels/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Aerial Duels Telemetry (2004\u20132023; N=858 aerials)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Duels Won per 90 Minutes (Opta)",
          "type": "bar",
          "labels": [
            "Ground Dribbles / 90m",
            "Aerial Duels / 90m"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                4.58,
                0.2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                2.22,
                1.38
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 5.2,
          "x_title": "Duel Type",
          "y_title": "Duels / 90m",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo won far more aerial duels in every tracked season.",
        "footnote": "*Opta seasonal aerial duels won across domestic leagues and continental competition (2009/10\u20132024/25). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/aerial-duels/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Aerial Duels Telemetry (2004\u20132023; N=858 aerials)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Aerial Duels Won per Season (2009/10\u20132024/25)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9,
                5,
                4,
                8,
                7,
                19,
                8,
                7,
                10,
                8,
                13,
                8,
                7,
                2,
                4,
                3
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                37,
                68,
                40,
                74,
                71,
                75,
                71,
                54,
                56,
                51,
                47,
                27,
                51,
                39,
                33,
                28
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 85.0,
          "x_title": "Season",
          "y_title": "Aerial Duels Won",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo's aerial duels/90 cleared Messi's rate several times over.",
        "footnote": "*Opta seasonal aerial duels won normalised by official Transfermarkt league + Champions League minutes played (2009/10\u20132024/25). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/aerial-duels/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Aerial Duels Telemetry (2004\u20132023; N=858 aerials)</a> (Opta Telemetry Scrape) | <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Aerial Duels Won per 90 Minutes by Season (2009/10\u20132024/25)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.21,
                0.12,
                0.08,
                0.21,
                0.2,
                0.38,
                0.21,
                0.17,
                0.24,
                0.2,
                0.35,
                0.19,
                0.23,
                0.05,
                0.26,
                0.13
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1.14,
                1.56,
                0.84,
                1.75,
                1.81,
                1.62,
                1.49,
                1.3,
                1.45,
                1.34,
                1.19,
                0.7,
                1.48,
                1.8,
                1.12,
                0.96
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 2.1,
          "x_title": "Season",
          "y_title": "Aerial Duels / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      },
      {
        "headline": "Ronaldo contributed steady box clearances; Messi rarely dropped to clear.",
        "footnote": "*Opta / WhoScored seasonal defensive clearances per 90 minutes across League and UEFA Champions League fixtures (2009/10\u20132022/23). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/defensive-stats/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored European Defensive Telemetry (2004\u20132023)</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Defensive Clearances per 90 Minutes by Season (2009/10\u20132022/23)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0.0,
                0.0,
                0.04,
                0.03,
                0.0,
                0.02,
                0.0,
                0.02,
                0.0,
                0.0,
                0.03,
                0.0,
                0.0,
                0.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0.25,
                0.71,
                0.57,
                0.73,
                0.56,
                0.82,
                0.44,
                0.48,
                0.62,
                0.94,
                0.62,
                0.53,
                1.05,
                1.38
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 1.6,
          "x_title": "Season",
          "y_title": "Clearances / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      },
      {
        "headline": "Messi consistently drew more fouls per 90 in recent seasons.",
        "footnote": "*Transfermarkt match logs with recorded fouls gained (all senior club & country fixtures tracked, 2018/19\u20132025/26; seasons with \u226510 tracked games). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Fouls Drawn per 90 Minutes by Season (2018/19\u20132025/26)",
          "type": "line",
          "labels": [
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                2.36,
                2.28,
                2.97,
                1.78,
                1.57,
                2.04,
                2.03,
                1.69
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1.82,
                1.65,
                1.4,
                0.82,
                1.24,
                0.94,
                1.03,
                0.63
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 3.4,
          "x_title": "Season",
          "y_title": "Fouls Drawn / 90m",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "15\u201316 European seasons of Opta tracking (2009/10\u20132024/25).",
          "why": "Exceeds the 15-season / \u226566% threshold across consistent Opta European league telemetry."
        },
        "hero": false
      }
    ],
    "answer": "Ronaldo dominates aerial duels & box clearances; Messi draws more ground fouls.",
    "metric_tags": [
      [
        "ronaldo",
        "Ronaldo +616 Aerials"
      ],
      [
        "ronaldo",
        "Ronaldo +1.18 Aerials/90"
      ],
      [
        "ronaldo",
        "Ronaldo +0.64 Clearances/90"
      ]
    ],
    "ref": "2.2.1",
    "cat_num": "2.2",
    "cat_title": "Physical Contests & Aerial Box Defending",
    "pillar_num": "2.0",
    "pillar_title": "Contribution to Defence (Out of Possession)",
    "who_is": "Wins more aerial duels, box clearances, and physical contests?",
    "define_by": "Seasonal Opta aerial duels won (total & per 90m), Opta defensive clearances per 90m, and Transfermarkt fouls won per 90m.",
    "metrics": "Aerial duels won/90m (2009\u20132025), clearances/90m (2009\u20132023), and fouls drawn/90m (2018\u20132026).",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Opta European aerial duels won & clearances (2009/10\u20132024/25, 16 seasons) + Transfermarkt fouls drawn.",
      "why": "Covers 16 European seasons (\u226566% threshold) with uniform Opta aerial and box-clearance tracking."
    }
  },
  {
    "id": "q4_4",
    "chapter": 4,
    "question": "Who provides greater on-pitch win rate lift and points-per-game impact?",
    "myth": "Their teams would win just as much without them.",
    "insight_badge": "PPG with vs without: Messi +0.18, Ronaldo +0.02",
    "summary": "Messi's club teams averaged 2.22 points per game when he played (976 matches) vs 2.04 without him (265). Ronaldo's: 2.19 (1103) vs 2.17 (225).",
    "insights": [
      {
        "headline": "Near-identical team PPG when playing; Messi's absence causes a larger drop.",
        "footnote": "*Club matches only. 'Without' = injured, not in squad, absent or unused. Not adjusted for opponent or rotation. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club Points per Game: With vs Without",
          "type": "bar",
          "labels": [
            "With Player",
            "Without Player"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                2.22,
                2.04
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                2.19,
                2.17
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 2.5,
          "x_title": "Scenario",
          "y_title": "PPG",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Seasonal on-pitch team PPG tracks closely; Ronaldo edges campaigns led.",
        "footnote": "*Senior club fixtures where the player featured on pitch from Transfermarkt match logs (N=2,521 senior club matches). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club Points per Game by Season (When Played)",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                2.33,
                2.52,
                1.94,
                1.95,
                2.39,
                2.43,
                2.31,
                2.37,
                2.22,
                2.13,
                2.54,
                2.35,
                2.33,
                2.33,
                2.32,
                2.07,
                1.98,
                2.03,
                2.24,
                2.19,
                1.82,
                2.14,
                1.47
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                1.52,
                1.98,
                1.86,
                1.98,
                2.15,
                2.43,
                2.34,
                2.49,
                2.5,
                2.42,
                2.04,
                2.45,
                2.28,
                2.4,
                2.24,
                2.14,
                2.26,
                2.09,
                2.29,
                1.56,
                2.03,
                2.36,
                2.1,
                2.32,
                2.33
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 2.9,
          "x_title": "Season",
          "y_title": "PPG",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading Club PPG (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            7,
            8,
            8,
            8,
            9,
            10,
            10,
            10,
            10,
            10
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            -1,
            -2,
            -2,
            -3,
            -4,
            -5,
            -5,
            -6,
            -6,
            -7,
            -7,
            -7,
            -7,
            -8,
            -9,
            -9,
            -9,
            -10,
            -11,
            -12,
            -13
          ],
          "y_min": -14,
          "y_max": 11,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Cup rotation creates noisy single-season gaps; injury spells show sharp positive lifts.",
        "footnote": "*Club Points per Game when played minus Points per Game when absent per season (Transfermarkt match logs; seasons with \u22655 played and \u22653 absent club fixtures charted; * indicates <3 absent or <5 played sample excluded from curve). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club PPG Difference (With \u2212 Without) by Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                0.49,
                0.58,
                -0.1,
                0.45,
                0.85,
                -0.23,
                -0.41,
                -0.63,
                -0.48,
                -0.41,
                -0.46,
                -0.11,
                0.33,
                0.33,
                0.62,
                -0.21,
                -0.73,
                -0.26,
                0.54,
                0.59,
                -0.07,
                0.14,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                -0.65,
                -0.38,
                -0.59,
                -0.8,
                -0.56,
                0.8,
                0.34,
                0.49,
                1.3,
                -0.58,
                -0.3,
                0.06,
                -0.12,
                -0.1,
                -0.62,
                0.08,
                0.38,
                -0.51,
                0.96,
                0.9,
                -0.1,
                0.52,
                0.54,
                -0.68,
                -0.17
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": -0.9,
          "y_max": 1.5,
          "x_title": "Season",
          "y_title": "PPG Difference (With \u2212 Without)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading PPG Lift (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            6,
            7,
            8,
            8,
            8,
            9,
            10,
            10,
            11,
            11
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -7,
            -8,
            -8,
            -8,
            -8,
            -8,
            -9,
            -10,
            -10,
            -10,
            -11,
            -11,
            -11
          ],
          "y_min": -12,
          "y_max": 12,
          "unit": "Seasons Led"
        },
        "sample_table": {
          "title": "Sample Size per Season (Matches With / Absent)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_row": [
            "\u2014",
            "\u2014",
            "9/25",
            "25/32",
            "36/23",
            "40/18",
            "51/11",
            "53/6",
            "55/7",
            "60/4",
            "50/10",
            "46/13",
            "57/3",
            "49/13",
            "52/7",
            "54/5",
            "50/10",
            "42/7",
            "49/7",
            "35/14",
            "42/10",
            "27/22",
            "40/10",
            "35/7",
            "19/1*"
          ],
          "r_row": [
            "31/12",
            "40/14",
            "50/11",
            "47/9",
            "53/7",
            "49/8",
            "53/13",
            "35/13",
            "54/5",
            "55/3",
            "55/6",
            "47/13",
            "54/5",
            "48/4",
            "46/14",
            "44/18",
            "43/8",
            "45/5",
            "45/9",
            "39/9",
            "35/8",
            "45/6",
            "41/9",
            "37/12",
            "12/4"
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Equal win rate when playing; Messi's absence coincides with a steeper drop.",
        "footnote": "Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club Win Rate: With vs Without (%)",
          "type": "bar",
          "labels": [
            "With Player",
            "Without Player"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                67.8,
                61.5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                67.6,
                66.7
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 76.0,
          "x_title": "Scenario",
          "y_title": "Win Rate (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Seasonal club win rates match closely; Ronaldo edges campaigns led.",
        "footnote": "*Senior club fixtures win percentage where the player featured on pitch from Transfermarkt match logs. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club Win Rate (%) by Season (When Played)",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                77.8,
                80.0,
                58.3,
                55.0,
                72.5,
                75.5,
                70.9,
                71.7,
                68.0,
                63.0,
                82.5,
                73.5,
                73.1,
                70.4,
                70.0,
                61.9,
                61.2,
                60.0,
                71.4,
                66.7,
                52.5,
                65.7,
                36.8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                41.9,
                62.5,
                52.0,
                57.4,
                67.9,
                75.5,
                71.7,
                80.0,
                77.8,
                76.4,
                61.8,
                76.6,
                72.2,
                75.0,
                67.4,
                63.6,
                69.8,
                64.4,
                71.1,
                43.6,
                62.9,
                75.6,
                65.9,
                75.7,
                75.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 93.0,
          "x_title": "Season",
          "y_title": "Win Rate (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading Club Win Rate (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            7,
            8,
            8,
            8,
            9,
            10,
            10,
            10,
            10,
            10
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            -1,
            -2,
            -2,
            -3,
            -4,
            -5,
            -5,
            -6,
            -6,
            -7,
            -7,
            -7,
            -7,
            -8,
            -9,
            -9,
            -9,
            -10,
            -11,
            -12,
            -13
          ],
          "y_min": -14,
          "y_max": 11,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      },
      {
        "headline": "Seasonal win-rate gaps mirror cup rotation and injury absences.",
        "footnote": "*Club win rate (%) when played minus win rate (%) when absent per season (percentage points; seasons with \u22655 played and \u22653 absent club fixtures charted; * indicates <3 absent or <5 played sample excluded from curve). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Club Win Rate Difference (With \u2212 Without, pp) by Season",
          "type": "line",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                null,
                null,
                25.8,
                23.8,
                -2.5,
                16.1,
                27.1,
                -7.9,
                -14.8,
                -28.3,
                -22.0,
                -21.6,
                -17.5,
                -3.5,
                15.9,
                10.4,
                20.0,
                -9.5,
                -24.5,
                -11.4,
                21.4,
                21.2,
                -7.5,
                8.6,
                null
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                -24.7,
                -8.9,
                -29.8,
                -31.4,
                -17.8,
                25.5,
                10.2,
                18.5,
                37.8,
                -23.6,
                -4.8,
                -0.3,
                -7.8,
                0.0,
                -25.5,
                2.5,
                7.3,
                -15.6,
                37.8,
                32.5,
                0.4,
                25.6,
                32.5,
                -24.3,
                0.0
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": -36.0,
          "y_max": 43.0,
          "x_title": "Season",
          "y_title": "Win Rate Diff (pp)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Seasons Leading Win-Rate Lift (Top: Messi | Bottom: Ronaldo)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            6,
            7,
            8,
            8,
            8,
            9,
            9,
            9,
            10,
            10
          ],
          "r_data": [
            0,
            0,
            0,
            0,
            0,
            -1,
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -7,
            -8,
            -8,
            -8,
            -8,
            -8,
            -9,
            -10,
            -10,
            -11,
            -12,
            -12,
            -12
          ],
          "y_min": -13,
          "y_max": 11,
          "unit": "Seasons Led"
        },
        "sample_table": {
          "title": "Sample Size per Season (Matches With / Absent)",
          "labels": [
            "02-03",
            "03-04",
            "04-05",
            "05-06",
            "06-07",
            "07-08",
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25",
            "25-26",
            "26-27*"
          ],
          "m_row": [
            "\u2014",
            "\u2014",
            "9/25",
            "25/32",
            "36/23",
            "40/18",
            "51/11",
            "53/6",
            "55/7",
            "60/4",
            "50/10",
            "46/13",
            "57/3",
            "49/13",
            "52/7",
            "54/5",
            "50/10",
            "42/7",
            "49/7",
            "35/14",
            "42/10",
            "27/22",
            "40/10",
            "35/7",
            "19/1*"
          ],
          "r_row": [
            "31/12",
            "40/14",
            "50/11",
            "47/9",
            "53/7",
            "49/8",
            "53/13",
            "35/13",
            "54/5",
            "55/3",
            "55/6",
            "47/13",
            "54/5",
            "48/4",
            "46/14",
            "44/18",
            "43/8",
            "45/5",
            "45/9",
            "39/9",
            "35/8",
            "45/6",
            "41/9",
            "37/12",
            "12/4"
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +0.16 PPG Lift",
    "answer": "Messi's teams suffer a larger PPG & win-rate drop when he is absent.",
    "metric_tags": [
      [
        "messi",
        "Messi +0.16 PPG Lift"
      ],
      [
        "messi",
        "Messi +5.4% Win Lift"
      ]
    ],
    "ref": "3.1.1",
    "cat_num": "3.1",
    "cat_title": "Net Two-Way Pitch Impact, Win Lift & Holistic Match Dominance",
    "pillar_num": "3.0",
    "pillar_title": "Overall On-Pitch Impact",
    "who_is": "Provides greater on-pitch win rate lift and points-per-game impact?",
    "define_by": "Team performance differential comparing team points-per-game (PPG) and win percentage with the player on the pitch versus off the pitch.",
    "metrics": "Team PPG & win rate (with vs without), when-played seasonal curves, and seasonal With \u2212 Without PPG & win-rate differences.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Full 25-season club & international match-by-match fixture logs comparing team PPG & win % with vs without player.",
      "why": "100% career fixture coverage (with sample-size tables shown so small-absence seasons are transparent)."
    }
  },
  {
    "id": "q4_5",
    "chapter": 4,
    "question": "Who commands higher holistic match dominance and match rating supremacy?",
    "myth": "Algorithmic ratings and Man of the Match awards are subjective and favour one particular playstyle.",
    "insight_badge": "Match Ratings: Messi 8.43 vs Ronaldo 7.81; MOTM Awards: Messi 333 (51.0%) vs Ronaldo 168 (30.0%)",
    "summary": "Across 18 tracked European league and Champions League seasons (2009/10 to 2026/27) compiled from Opta, WhoScored, and SofaScore algorithms, Messi averaged 8.43 vs Ronaldo's 7.81. Messi finished with the higher average match rating in 18 of 18 campaigns (100%). Peak seasons reached 8.88 (2011/12 Messi) vs 8.52 (2009/10 Ronaldo). In official Man of the Match (MOTM) awards across League and Champions League fixtures since 2009/10, Messi leads 333 to 168 (named MOTM in 51.0% of appearances vs 30.0% for Ronaldo).",
    "insights": [
      {
        "headline": "Messi holds the higher average match rating in every shared season.",
        "footnote": "*Algorithmic match ratings from Opta, WhoScored, and SofaScore across European league & Champions League fixtures. Pre-2009 uninstrumented. Note: Peer 90th-percentile league-wide seasonal ratings across all players (2009\u20132026) are unavailable because WhoScored/Opta rating archives are proprietary and omitted per zero-estimation policy. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/average-match-ratings/\" target=\"_blank\" rel=\"noopener noreferrer\">Opta / WhoScored / SofaScore Algorithmic Ratings (2009\u20132026; N=18 shared seasons)</a> (Algorithmic Rating Archive)",
        "chart": {
          "title": "Average Match Rating by Season (2009/10\u20132026/27)",
          "type": "line",
          "labels": [
            "2009/10",
            "2010/11",
            "2011/12",
            "2012/13",
            "2013/14",
            "2014/15",
            "2015/16",
            "2016/17",
            "2017/18",
            "2018/19",
            "2019/20",
            "2020/21",
            "2021/22",
            "2022/23",
            "2023/24",
            "2024/25",
            "2025/26",
            "2026/27"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8.59,
                8.79,
                8.88,
                8.55,
                8.42,
                8.86,
                8.43,
                8.42,
                8.54,
                8.55,
                8.65,
                8.53,
                7.76,
                8.21,
                8.05,
                8.11,
                8.54,
                7.78
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                8.52,
                8.22,
                8.3,
                8.1,
                8.41,
                8.32,
                8.03,
                7.75,
                8.0,
                7.63,
                7.71,
                7.63,
                7.16,
                7.12,
                7.74,
                7.6,
                7.11,
                7.2
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 10.0,
          "x_title": "Season",
          "y_title": "Average Match Rating (0\u201310)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "18 consecutive seasons of match ratings & official MOTM records (2009/10\u20132026/27).",
          "why": "Exceeds 15+ seasons (\u226566% of career span) across independent rating aggregators."
        },
        "hero": true
      },
      {
        "headline": "Messi won nearly 2\u00d7 as many Man of the Match awards.",
        "footnote": "*Official Man of the Match awards recorded by WhoScored and Opta across European League and Champions League fixtures since 2009/10. Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/man-of-the-match-awards/\" target=\"_blank\" rel=\"noopener noreferrer\">WhoScored & Opta Official Man of the Match Awards</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Official Man of the Match (MOTM) Awards Since 2009/10",
          "type": "bar",
          "labels": [
            "League + Champions League Combined",
            "Domestic League Only",
            "UEFA Champions League Only"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                333,
                266,
                67
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                168,
                128,
                40
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 380.0,
          "x_title": "Competition Scope",
          "y_title": "MOTM Awards",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "18 consecutive seasons of match ratings & official MOTM records (2009/10\u20132026/27).",
          "why": "Exceeds 15+ seasons (\u226566% of career span) across independent rating aggregators."
        },
        "hero": true
      },
      {
        "headline": "Messi won MOTM in over half of his league and UCL appearances.",
        "footnote": "*Share (%) of tracked appearances in which the player was awarded Official Man of the Match (Opta / WhoScored since 2009/10). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/man-of-the-match-awards/\" target=\"_blank\" rel=\"noopener noreferrer\">WhoScored & Opta Official Man of the Match Awards</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Official MOTM Win Rate (% of Appearances) Since 2009/10",
          "type": "bar",
          "labels": [
            "League + Champions League Combined",
            "Domestic League Only",
            "UEFA Champions League Only"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                51.0,
                50.0,
                52.0
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                30.0,
                30.0,
                31.0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 59.0,
          "x_title": "Competition Scope",
          "y_title": "MOTM Rate (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "18 consecutive seasons of match ratings & official MOTM records (2009/10\u20132026/27).",
          "why": "Exceeds 15+ seasons (\u226566% of career span) across independent rating aggregators."
        },
        "hero": true
      },
      {
        "headline": "Messi collected more MOTM awards in almost every season since 2009/10.",
        "footnote": "*Opta / WhoScored seasonal Man of the Match awards across domestic leagues and UEFA Champions League (2009/10\u20132024/25). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/man-of-the-match-awards/\" target=\"_blank\" rel=\"noopener noreferrer\">WhoScored & Opta Official Man of the Match Awards</a> (Opta Telemetry Scrape)",
        "chart": {
          "title": "Official MOTM Awards per Season (2009/10\u20132024/25)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                18,
                29,
                32,
                24,
                19,
                34,
                14,
                18,
                28,
                24,
                26,
                24,
                7,
                17,
                8,
                15
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                17,
                15,
                14,
                15,
                14,
                19,
                15,
                7,
                11,
                12,
                12,
                9,
                7,
                6,
                11,
                5
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 39.0,
          "x_title": "Season",
          "y_title": "MOTM Awards",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "18 consecutive seasons of match ratings & official MOTM records (2009/10\u20132026/27).",
          "why": "Exceeds 15+ seasons (\u226566% of career span) across independent rating aggregators."
        },
        "hero": false
      },
      {
        "headline": "Messi claimed MOTM honours at roughly 2\u00d7 Ronaldo's rate in prime seasons.",
        "footnote": "*Seasonal MOTM awards divided by Transfermarkt domestic league + continental appearances per season (2009/10\u20132024/25). Source: <a href=\"https://www.messivsronaldo.app/detailed-stats/man-of-the-match-awards/\" target=\"_blank\" rel=\"noopener noreferrer\">WhoScored & Opta Official Man of the Match Awards</a> (Opta Telemetry Scrape) | <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "Official MOTM Rate (% of Matches) by Season (2009/10\u20132024/25)",
          "type": "line",
          "labels": [
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23",
            "23-24",
            "24-25"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                39.1,
                63.0,
                66.7,
                55.8,
                50.0,
                66.7,
                35.0,
                41.9,
                60.9,
                54.5,
                66.7,
                55.8,
                21.2,
                43.6,
                44.4,
                60.0
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                48.6,
                32.6,
                29.2,
                32.6,
                34.1,
                40.4,
                31.2,
                16.7,
                27.5,
                30.0,
                30.0,
                22.5,
                18.4,
                23.1,
                35.5,
                16.7
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 75.0,
          "x_title": "Season",
          "y_title": "MOTM Rate (%)",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "18 consecutive seasons of match ratings & official MOTM records (2009/10\u20132026/27).",
          "why": "Exceeds 15+ seasons (\u226566% of career span) across independent rating aggregators."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +0.62 Match Rating",
    "answer": "Messi holds higher algorithmic match ratings every season & nearly double the MOTM awards.",
    "metric_tags": [
      [
        "messi",
        "Messi +0.62 Match Rating"
      ],
      [
        "messi",
        "Messi +165 MOTMs"
      ],
      [
        "messi",
        "Messi +21.0% MOTM Rate"
      ]
    ],
    "ref": "3.1.2",
    "cat_num": "3.1",
    "cat_title": "Net Two-Way Pitch Impact, Win Lift & Holistic Match Dominance",
    "pillar_num": "3.0",
    "pillar_title": "Overall On-Pitch Impact",
    "who_is": "Commands higher holistic match dominance and match rating supremacy?",
    "define_by": "Algorithmic composite match ratings aggregating every on-ball action (shots, key passes, dribbles, tackles, duels, turnovers) across 18 seasons of Opta / WhoScored / SofaScore data.",
    "metrics": "Algorithmic career average match ratings by season, Man-of-the-Match totals, MOTM % rate by competition, and seasonal MOTM totals & rates.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "SofaScore/WhoScored/FotMob match ratings (18 seasons, 2009/10\u20132026/27) + official MOTM records.",
      "why": "Exceeds 15+ seasons (18 consecutive campaigns) across independent algorithmic match-rating aggregators."
    }
  },
  {
    "id": "q8_1",
    "chapter": 8,
    "title": "Ballon d'Or, World Player Voting & Universal Tournament MVPs",
    "desc": "Combined analysis of Ballon d'Or / FIFA World Player voting consensus alongside Laureus multi-sport and major tournament MVP honours.",
    "insights": [
      {
        "headline": "Messi leads Ballon d'Or & World Player wins; podiums are nearly even.",
        "footnote": "*Audited from France Football official voting records and FIFA The Best / World Player archives (1991\u20132024). Source: <a href=\"https://www.fifa.com/the-best-fifa-football-awards\" target=\"_blank\" rel=\"noopener noreferrer\">France Football Ballon d'Or & FIFA The Best Official Records (2007\u20132024; N=13 Ballon d'Or wins)</a> (Official Award Archive)",
        "chart": {
          "title": "Individual Voting Awards: Wins & Podiums",
          "type": "bar",
          "labels": [
            "Ballon d'Or Wins",
            "Ballon d'Or Top 3 Podiums",
            "FIFA The Best / World Player"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8,
                14,
                8
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                5,
                12,
                5
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 16.0,
          "x_title": "Award Category",
          "y_title": "Honours Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi holds exclusive leads in Laureus, World Cup Golden Ball & Copa MVP honours.",
        "footnote": "*Laureus World Sports Awards (voted by 71 members of Laureus World Sports Academy), FIFA World Cup Golden Ball, and CONMEBOL Copa Am\u00e9rica Best Player awards. Source: <a href=\"https://www.fifa.com/the-best-fifa-football-awards\" target=\"_blank\" rel=\"noopener noreferrer\">France Football Ballon d'Or & FIFA The Best Official Records (2007\u20132024; N=13 Ballon d'Or wins)</a> (Official Award Archive)",
        "chart": {
          "title": "Universal Multi-Sport & Tournament MVP Honours",
          "type": "bar",
          "labels": [
            "Laureus World Sportsman",
            "FIFA World Cup Golden Balls",
            "Continental Tournament MVPs"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                2,
                2,
                2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                0,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 2.3,
          "x_title": "Award Benchmark",
          "y_title": "Honours Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "They traded Ballons d'Or for a decade before Messi pulled away.",
        "footnote": "*Cumulative career Ballon d'Or wins tracked across each official award edition from 2007 to 2024. Source: <a href=\"https://www.fifa.com/the-best-fifa-football-awards\" target=\"_blank\" rel=\"noopener noreferrer\">France Football Ballon d'Or & FIFA The Best Official Records (2007\u20132024; N=13 Ballon d'Or wins)</a> (Official Award Archive)",
        "chart": {
          "title": "Cumulative Ballon d'Or Wins Evolution (2007\u20132024)",
          "type": "line",
          "labels": [
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
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                0,
                1,
                2,
                3,
                4,
                4,
                4,
                5,
                5,
                5,
                5,
                6,
                6,
                7,
                7,
                8,
                8
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                1,
                1,
                1,
                1,
                1,
                2,
                3,
                3,
                4,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 9.0,
          "x_title": "Year",
          "y_title": "Cumulative Wins",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +3 Ballons d'Or",
    "answer": "Messi leads Ballons d'Or, podiums, FIFA World Player, Laureus & World Cup Golden Balls.",
    "metric_tags": [
      [
        "messi",
        "Messi +3 Ballons d'Or"
      ],
      [
        "messi",
        "Messi +2 Laureus Awards"
      ],
      [
        "messi",
        "Messi +2 WC Golden Balls"
      ]
    ],
    "ref": "4.1.1",
    "cat_num": "4.1",
    "cat_title": "Institutional Accolades & Scoring Crowns",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Commands higher recognition in individual voting awards and universal tournament MVP honours?",
    "define_by": "Official global voting awards honouring single-season excellence alongside FIFA tournament MVP awards and multi-sport Laureus honours.",
    "metrics": "Ballon d'Or wins, Top-3 podiums, FIFA World Player / The Best wins, Laureus World Sportsman awards, FIFA World Cup Golden Balls, and Continental MVPs.",
    "question": "Who commands higher recognition in individual voting awards and universal tournament MVP honours?",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete official Ballon d'Or, FIFA World Player/The Best, Golden Shoe, Laureus, and World Cup/Copa MVP archives.",
      "why": "100% deterministic official award records with zero sampling gaps."
    }
  },
  {
    "id": "q8_2",
    "chapter": 8,
    "title": "European Golden Shoes & League Top-Scorer Timeline",
    "desc": "Evaluation of official scoring crowns across Europe and a club-highlighted timeline of when each icon finished as national league top scorer.",
    "insights": [
      {
        "headline": "Messi leads Golden Shoes & domestic crowns; Ronaldo edges UCL scoring titles.",
        "footnote": "*European Golden Shoe audited from ESM / UEFA; League Top Scorer includes Pichichi, Capocannoniere, Premier League Golden Boot, and Saudi Pro League Golden Boot. Source: <a href=\"https://www.fifa.com/the-best-fifa-football-awards\" target=\"_blank\" rel=\"noopener noreferrer\">France Football Ballon d'Or & FIFA The Best Official Records (2007\u20132024; N=13 Ballon d'Or wins)</a> (Official Award Archive)",
        "chart": {
          "title": "Continental & League Scoring Titles",
          "type": "bar",
          "labels": [
            "European Golden Shoes",
            "Domestic League Top Scorer",
            "UCL Top Scorer Titles"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                6,
                8,
                6
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                4,
                6,
                7
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 9.0,
          "x_title": "Title Category",
          "y_title": "Titles Won",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo's Golden Boots span four leagues & clubs; Messi's eight came in La Liga.",
        "footnote": "*Timeline highlights each calendar year the player won their domestic league's official Golden Boot, color-coded by club and league. Hover any block for the exact award. Source: <a href=\"https://www.fifa.com/the-best-fifa-football-awards\" target=\"_blank\" rel=\"noopener noreferrer\">France Football Ballon d'Or & FIFA The Best Official Records (2007\u20132024; N=13 Ballon d'Or wins)</a> (Official Award Archive)",
        "chart": {
          "type": "bar",
          "title": "National League Top-Scorer Crowns Timeline Highlighted by Club (2008\u20132024)",
          "is_timeline": true,
          "index_axis": "y",
          "labels": [
            "Lionel Messi",
            "Cristiano Ronaldo"
          ],
          "x_min": 2007,
          "x_max": 2025,
          "x_title": "Award Year (Colored by Club & League)",
          "y_title": "",
          "show_labels": false,
          "datasets": [
            {
              "label": "Man United \u00b7 Premier League",
              "data": [
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2007.64,
                    2008.36
                  ],
                  "award": "Premier League Golden Boot (2008)",
                  "short_yr": "'08"
                }
              ],
              "backgroundColor": "#ef4444",
              "borderColor": "#ef4444",
              "borderWidth": 1,
              "borderRadius": 6,
              "borderSkipped": false,
              "barThickness": 34,
              "grouped": false
            },
            {
              "label": "Barcelona \u00b7 La Liga",
              "data": [
                {
                  "y": "Lionel Messi",
                  "x": [
                    2009.64,
                    2010.36
                  ],
                  "award": "Pichichi Trophy (2010)",
                  "short_yr": "'10"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2011.64,
                    2012.36
                  ],
                  "award": "Pichichi Trophy (2012)",
                  "short_yr": "'12"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2012.64,
                    2013.36
                  ],
                  "award": "Pichichi Trophy (2013)",
                  "short_yr": "'13"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2016.64,
                    2017.36
                  ],
                  "award": "Pichichi Trophy (2017)",
                  "short_yr": "'17"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2017.64,
                    2018.36
                  ],
                  "award": "Pichichi Trophy (2018)",
                  "short_yr": "'18"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2018.64,
                    2019.36
                  ],
                  "award": "Pichichi Trophy (2019)",
                  "short_yr": "'19"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2019.64,
                    2020.36
                  ],
                  "award": "Pichichi Trophy (2020)",
                  "short_yr": "'20"
                },
                {
                  "y": "Lionel Messi",
                  "x": [
                    2020.64,
                    2021.36
                  ],
                  "award": "Pichichi Trophy (2021)",
                  "short_yr": "'21"
                }
              ],
              "backgroundColor": "#38bdf8",
              "borderColor": "#38bdf8",
              "borderWidth": 1,
              "borderRadius": 6,
              "borderSkipped": false,
              "barThickness": 34,
              "grouped": false
            },
            {
              "label": "Real Madrid \u00b7 La Liga",
              "data": [
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2010.64,
                    2011.36
                  ],
                  "award": "Pichichi Trophy (2011)",
                  "short_yr": "'11"
                },
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2013.64,
                    2014.36
                  ],
                  "award": "Pichichi Trophy (2014)",
                  "short_yr": "'14"
                },
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2014.64,
                    2015.36
                  ],
                  "award": "Pichichi Trophy (2015)",
                  "short_yr": "'15"
                }
              ],
              "backgroundColor": "#f97316",
              "borderColor": "#f97316",
              "borderWidth": 1,
              "borderRadius": 6,
              "borderSkipped": false,
              "barThickness": 34,
              "grouped": false
            },
            {
              "label": "Juventus \u00b7 Serie A",
              "data": [
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2020.64,
                    2021.36
                  ],
                  "award": "Capocannoniere (2021)",
                  "short_yr": "'21"
                }
              ],
              "backgroundColor": "#a855f7",
              "borderColor": "#a855f7",
              "borderWidth": 1,
              "borderRadius": 6,
              "borderSkipped": false,
              "barThickness": 34,
              "grouped": false
            },
            {
              "label": "Al-Nassr \u00b7 Saudi Pro League",
              "data": [
                {
                  "y": "Cristiano Ronaldo",
                  "x": [
                    2023.64,
                    2024.36
                  ],
                  "award": "Saudi Pro League Golden Boot (2024)",
                  "short_yr": "'24"
                }
              ],
              "backgroundColor": "#eab308",
              "borderColor": "#eab308",
              "borderWidth": 1,
              "borderRadius": 6,
              "borderSkipped": false,
              "barThickness": 34,
              "grouped": false
            }
          ]
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +2 Golden Shoes",
    "answer": "Messi: more Golden Shoes & Pichichis vs Ronaldo: top scorer across four distinct leagues.",
    "metric_tags": [
      [
        "messi",
        "Messi +2 Golden Shoes"
      ],
      [
        "messi",
        "Messi +2 League Crowns"
      ],
      [
        "ronaldo",
        "Ronaldo +3 Leagues"
      ]
    ],
    "ref": "4.1.2",
    "cat_num": "4.1",
    "cat_title": "Institutional Accolades & Scoring Crowns",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Captured more continental and domestic top-scorer crowns across distinct leagues?",
    "define_by": "Official European Golden Shoes, UCL scoring titles, and a year-by-year club-coded timeline of domestic league Golden Boots.",
    "metrics": "European Golden Shoes, domestic league top-scorer trophies, UCL Golden Boots, and club-highlighted timeline by league.",
    "question": "Who captured more continental and domestic top-scorer crowns across distinct leagues?",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete official domestic & continental league Golden Boot records across England, Spain, Italy, France, Saudi Arabia, and MLS.",
      "why": "100% verified official top-scorer and European Golden Shoe records."
    }
  },
  {
    "id": "q8_10",
    "chapter": 8,
    "title": "All-Time Career Records Held (World, World Cup, Guinness, UEFA, La Liga & Club)",
    "desc": "Categorised summary of documented all-time football and cultural records across 8 arenas, with the full searchable ledger in Extra Analysis 6.",
    "insights": [
      {
        "headline": "Both hold vast career records; Messi's ledger itemises deeper sub-records.",
        "footnote": "*Counts parsed from Wikipedia Career Achievements Section 3 ledgers (Messi N=400, Ronaldo N=178). Note on editorial granularity: Messi's page lists granular bulleted sub-records (including Guinness World Records), whereas Ronaldo's Section 3 uses a consolidated summary table (and places Guinness social records outside Section 3). See Extra Analysis 6 for the complete searchable ledger. Source: <a href=\"https://en.wikipedia.org/wiki/List_of_career_achievements_by_Lionel_Messi#Records\" target=\"_blank\" rel=\"noopener noreferrer\">Wikipedia Career Achievements & Records Ledgers (Messi & Ronaldo)</a> (MediaWiki API Audit)",
        "chart": {
          "title": "Documented Career Records: Overall, World, FIFA World Cup & Guinness",
          "type": "bar",
          "labels": [
            "Total Documented",
            "World / Global",
            "FIFA World Cup",
            "Guinness World Records"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                400,
                45,
                49,
                29
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                178,
                12,
                7,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 450.0,
          "x_title": "Record Arena",
          "y_title": "Documented Records",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Wikipedia Career Achievements records ledger (401 records across 8 arenas).",
          "why": "Source-linked career records, though editorial granularity differs between player pages."
        },
        "hero": true
      },
      {
        "headline": "Messi leads World Cup, La Liga & club entries; Ronaldo leads UEFA & European records.",
        "footnote": "*All 578 parsed records classified into 8 standardised arenas from Wikipedia's Career Achievements ledgers. Full searchable item-by-item table in Extra Analysis 6. Source: <a href=\"https://en.wikipedia.org/wiki/List_of_career_achievements_by_Lionel_Messi#Records\" target=\"_blank\" rel=\"noopener noreferrer\">Wikipedia Career Achievements & Records Ledgers (Messi & Ronaldo)</a> (MediaWiki API Audit)",
        "chart": {
          "title": "Documented Career Records Breakdown by Arena",
          "type": "bar",
          "labels": [
            "World / Global",
            "FIFA World Cup",
            "Guinness World Records",
            "UEFA & European",
            "La Liga & Spain",
            "Other Domestic Leagues",
            "International & Continental",
            "Club Records"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                45,
                49,
                29,
                32,
                61,
                22,
                37,
                24
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                12,
                7,
                0,
                49,
                10,
                5,
                9,
                10
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 69.0,
          "x_title": "Arena",
          "y_title": "Documented Records",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Wikipedia Career Achievements records ledger (401 records across 8 arenas).",
          "why": "Source-linked career records, though editorial granularity differs between player pages."
        },
        "hero": true
      }
    ],
    "leader": "split",
    "leader_badge": "Messi 400 vs Ronaldo 178 Listed Records",
    "answer": "Both hold vast career records; Messi leads World Cup, La Liga & Guinness entries vs Ronaldo: UEFA & European records.",
    "metric_tags": [
      [
        "messi",
        "Messi 49 vs 7 World Cup Records"
      ],
      [
        "ronaldo",
        "Ronaldo 49 vs 32 UEFA Records"
      ],
      [
        "messi",
        "Messi 29 Listed Guinness"
      ]
    ],
    "ref": "4.1.3",
    "cat_num": "4.1",
    "cat_title": "Institutional Accolades & Scoring Crowns",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Holds more documented all-time career records across major arenas?",
    "define_by": "Categorised audit of documented all-time football and cultural records from Wikipedia's Career Achievements ledgers for both players across 8 standardised arenas (with full searchable ledger in Extra Analysis 6).",
    "metrics": "Total documented records, domain breakdown across World / Global, FIFA World Cup, Guinness World Records, UEFA & European, La Liga & Spain, Other Domestic Leagues, International & Continental, and Club Records.",
    "question": "Who holds more documented all-time career records across major arenas?",
    "reliability": {
      "level": "Medium",
      "score": 2.0,
      "coverage": "Wikipedia Career Achievements records ledger (401 records across 8 arenas, parsed Nov 2026).",
      "why": "Source-linked to official records, though Wikipedia's editorial itemisation is more granular on Messi's page (299 vs 102 entries)."
    }
  },
  {
    "id": "q8_4",
    "chapter": 8,
    "title": "Complete Senior Silverware Breakdown by Trophy Type & Era",
    "desc": "Comprehensive senior trophy breakdown by competition type (side-by-side pies), FIFA/continental national titles, UCL & trebles, and cumulative trajectory.",
    "insights": [
      {
        "headline": "Both won mostly domestic trophies; Messi leads leagues & international, Ronaldo higher UCL share.",
        "footnote": "*Official senior trophies (Messi N=43, Ronaldo N=34) grouped by competition type. Olympic Gold (2008) & FIFA U20 World Cup (2005) excluded from senior totals. Source: <a href=\"https://www.uefa.com/uefachampionsleague/history/winners/\" target=\"_blank\" rel=\"noopener noreferrer\">Senior Career Silverware & Championship Registry (2003\u20132024; N=77 team titles)</a> (Official Competition Archives)",
        "chart": {
          "type": "dual_pie",
          "title": "Senior Career Trophies Breakdown by Competition Type",
          "unit": "trophies",
          "show_val_and_pct": true,
          "messi": {
            "title": "Lionel Messi",
            "subtitle": "43 Senior Trophies",
            "labels": [
              "Domestic League",
              "Domestic Cup",
              "Domestic Supercup",
              "UEFA Champions League",
              "CWC & UEFA Super Cup",
              "Senior International"
            ],
            "full_labels": [
              "Domestic League",
              "Domestic Cup",
              "Domestic Supercup",
              "UEFA Champions League",
              "CWC & UEFA Super Cup",
              "Senior International"
            ],
            "data": [
              13,
              8,
              8,
              4,
              6,
              4
            ],
            "colors": [
              "#38bdf8",
              "#0284c7",
              "#71717a",
              "#f97316",
              "#a855f7",
              "#10b981"
            ]
          },
          "ronaldo": {
            "title": "Cristiano Ronaldo",
            "subtitle": "34 Senior Trophies",
            "labels": [
              "Domestic League",
              "Domestic Cup",
              "Domestic Supercup",
              "UEFA Champions League",
              "CWC & UEFA Super Cup",
              "Senior International"
            ],
            "full_labels": [
              "Domestic League",
              "Domestic Cup",
              "Domestic Supercup",
              "UEFA Champions League",
              "CWC & UEFA Super Cup",
              "Senior International"
            ],
            "data": [
              7,
              7,
              6,
              5,
              7,
              2
            ],
            "colors": [
              "#38bdf8",
              "#0284c7",
              "#71717a",
              "#f97316",
              "#a855f7",
              "#10b981"
            ]
          }
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi leads senior international titles (World Cup + two Copas Am\u00e9rica).",
        "footnote": "*Senior international titles: World Cup (2022), Copa Am\u00e9rica (2021, 2024), Finalissima (2022) vs Euro (2016), UEFA Nations League (2019). Source: <a href=\"https://www.uefa.com/uefachampionsleague/history/winners/\" target=\"_blank\" rel=\"noopener noreferrer\">Senior Career Silverware & Championship Registry (2003\u20132024; N=77 team titles)</a> (Official Competition Archives)",
        "chart": {
          "title": "Senior International Championships",
          "type": "bar",
          "labels": [
            "FIFA World Cup",
            "Continental Championship (Euro / Copa)",
            "Intercontinental Cup (Finalissima / Nations)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1,
                2,
                1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                1,
                1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 2.3,
          "x_title": "Tournament Scope",
          "y_title": "Championships Won",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo edges UCL & Club World Cup titles; Messi won two European Trebles.",
        "footnote": "*UEFA Champions League and FIFA Club World Cup official records. Trebles dynamically verified as winning Domestic League, Domestic Cup, and UCL in the same year. Source: <a href=\"https://www.uefa.com/uefachampionsleague/history/winners/\" target=\"_blank\" rel=\"noopener noreferrer\">Senior Career Silverware & Championship Registry (2003\u20132024; N=77 team titles)</a> (Official Competition Archives)",
        "chart": {
          "title": "European Apex Club Trophies & Trebles",
          "type": "bar",
          "labels": [
            "UEFA Champions League Titles",
            "FIFA Club World Cups",
            "European Trebles (League+Cup+UCL)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                4,
                3,
                2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                5,
                4,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 5.6,
          "x_title": "Competition / Sweep",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi built a decisive cumulative lead in senior silverware over two decades.",
        "footnote": "*Cumulative senior career silverware progression by calendar year across all clubs and senior national teams. Source: <a href=\"https://www.uefa.com/uefachampionsleague/history/winners/\" target=\"_blank\" rel=\"noopener noreferrer\">Senior Career Silverware & Championship Registry (2003\u20132024; N=77 team titles)</a> (Official Competition Archives)",
        "chart": {
          "title": "Cumulative Senior Silverware Evolution (2003\u20132024)",
          "type": "line",
          "labels": [
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
            "2024"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                0,
                1,
                4,
                4,
                4,
                10,
                12,
                17,
                18,
                20,
                20,
                25,
                28,
                29,
                32,
                33,
                33,
                35,
                39,
                41,
                43
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                1,
                1,
                2,
                4,
                7,
                9,
                9,
                10,
                12,
                12,
                16,
                16,
                20,
                25,
                27,
                29,
                31,
                32,
                32,
                33,
                33
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 49.0,
          "x_title": "Year",
          "y_title": "Cumulative Trophies",
          "hide_axes": false,
          "show_labels": false
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +9 Trophies",
    "answer": "Messi: all-time senior silverware record incl. World Cup & trebles vs Ronaldo: UCL titles.",
    "metric_tags": [
      [
        "messi",
        "Messi +9 Trophies"
      ],
      [
        "messi",
        "Messi +1 Intl Trophies"
      ],
      [
        "ronaldo",
        "Ronaldo +1 UCL Title"
      ],
      [
        "messi",
        "Messi +2 Trebles"
      ]
    ],
    "ref": "4.2.1",
    "cat_num": "4.2",
    "cat_title": "Championship Pedigree & Collective Trophy Haul",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Has accumulated the more decorated senior silverware collection across club and country?",
    "define_by": "Complete official senior team trophies broken down by competition type (leagues, cups, UCL, international, trebles) and cumulative evolution.",
    "metrics": "Trophy type composition (side-by-side pies), senior international titles, UEFA Champions League & treble sweeps, and cumulative career silverware.",
    "question": "Who has accumulated the more decorated senior silverware collection across club and country?",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete official senior club & international trophy cabinet (43 Messi vs 34 Ronaldo senior; 45 vs 34 incl. youth/Olympic).",
      "why": "100% verified official competition honours across all clubs and national teams."
    }
  },
  {
    "id": "q8_7",
    "chapter": 8,
    "title": "Global Digital Reach, Social Following & Cultural Moments",
    "desc": "Verified cross-platform social media audience alongside peak all-time cultural engagement milestones.",
    "insights": [
      {
        "headline": "Ronaldo leads every major social platform, especially X and YouTube.",
        "footnote": "*Audited verified social platform followers as of November 2024. Messi does not operate an official personal X account. Source: <a href=\"https://www.instagram.com/cristiano/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta, X & YouTube Verified Platform Telemetry (2024\u20132026; N=4 platforms)</a> (Platform Audit)",
        "chart": {
          "title": "Social Media Audience by Platform (Millions)",
          "type": "bar",
          "labels": [
            "Instagram",
            "Facebook",
            "X (Twitter)",
            "YouTube"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                504.8,
                116.5,
                0.0,
                4.2
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                642.5,
                170.2,
                113.8,
                72.4
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 720.0,
          "x_title": "Platform",
          "y_title": "Followers (Millions)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "Point-in-time cross-platform social media follower & post-likes snapshots.",
          "why": "External social counts fluctuate over time and reflect off-pitch reach rather than longitudinal match logs."
        },
        "hero": true
      },
      {
        "headline": "Ronaldo commands a far larger combined social following.",
        "footnote": "*Sum of verified cross-platform follower accounts across Meta, X, and YouTube ecosystems. Source: <a href=\"https://www.instagram.com/cristiano/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta, X & YouTube Verified Platform Telemetry (2024\u20132026; N=4 platforms)</a> (Platform Audit)",
        "chart": {
          "title": "Total Cross-Platform Digital Reach",
          "type": "bar",
          "labels": [
            "Cross-Platform Total Audience"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                625.5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                998.9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1120.0,
          "x_title": "Total Ecosystem",
          "y_title": "Followers (Millions)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "Point-in-time cross-platform social media follower & post-likes snapshots.",
          "why": "External social counts fluctuate over time and reflect off-pitch reach rather than longitudinal match logs."
        },
        "hero": true
      },
      {
        "headline": "Messi's 2022 World Cup post holds the all-time most-liked internet record.",
        "footnote": "*Official Guinness World Record for the most-liked Instagram post in social media history (Dec 2022) compared against Ronaldo's top post (Louis Vuitton Chess campaign). Source: <a href=\"https://en.wikipedia.org/wiki/List_of_most-liked_Instagram_posts\" target=\"_blank\" rel=\"noopener noreferrer\">Guinness World Records & Meta Engagement Telemetry (2022\u20132024; N=2 global records)</a> (Public Records Audit)",
        "chart": {
          "title": "Peak Cultural Moment: Most-Liked Post in Internet History",
          "type": "bar",
          "labels": [
            "Most-Liked Instagram Post in History (M Likes)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                75.7
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                42.8
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 85.0,
          "x_title": "Cultural Record",
          "y_title": "Likes (Millions)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "Point-in-time cross-platform social media follower & post-likes snapshots.",
          "why": "External social counts fluctuate over time and reflect off-pitch reach rather than longitudinal match logs."
        },
        "hero": true
      }
    ],
    "leader": "ronaldo",
    "leader_badge": "Ronaldo +373.4M Followers",
    "answer": "Ronaldo: largest global social following vs Messi: most-liked post in internet history.",
    "metric_tags": [
      [
        "ronaldo",
        "Ronaldo +373.4M Followers"
      ],
      [
        "messi",
        "Messi +32.9M IG Post Likes"
      ]
    ],
    "ref": "4.3.1",
    "cat_num": "4.3",
    "cat_title": "Cultural Reach, Live Attendance & Global Inspiration",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Commands greater global digital reach, social media audience, and peak cultural resonance?",
    "define_by": "Verified social media followers across Instagram, Facebook, X, and YouTube alongside all-time single-post cultural engagement milestones.",
    "metrics": "Cross-platform total followers, per-platform breakdown, and Guinness World Record post likes.",
    "question": "Who commands greater global digital reach, social media audience, and peak cultural resonance?",
    "reliability": {
      "level": "Low",
      "score": 1.0,
      "coverage": "Point-in-time cross-platform social media follower totals & single-post engagement snapshots.",
      "why": "External snapshots fluctuate over time and reflect off-pitch marketing/era effects rather than longitudinal match data."
    }
  },
  {
    "id": "q8_9",
    "chapter": 8,
    "title": "Live Match Attendance & Matchday Economics",
    "desc": "Matchday stadium attendance (career overall, Home/Away, and season-by-season), before-vs-after post-arrival league turnstile change, and mega-venue peak crowds.",
    "insights": [
      {
        "headline": "Messi drew higher overall & home crowds; Ronaldo drew higher away averages.",
        "footnote": "*Computed from 466 Messi and 426 Ronaldo Transfermarkt match logs with official recorded turnstile attendance. Note: Audited seasonal per-game live TV/streaming viewership and confidential manufacturer (Adidas/Nike) shirt unit sales are unavailable across all club campaigns and are not estimated. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/leistungsdatendetails/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Matchday Stadium Attendance Audit (2012\u20132023; N=892 club fixtures)</a> (Transfermarkt Historical Match Archive)",
        "chart": {
          "title": "Career Matchday Turnstile Attendance: Overall, Home & Away (2012\u20132023)",
          "type": "bar",
          "labels": [
            "Overall Career Avg Attendance",
            "Home Stadium Avg",
            "Away Stadium Avg"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                54040,
                69260,
                37738
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                52743,
                65484,
                39008
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 78000.0,
          "x_title": "Venue Split",
          "y_title": "Average Attendance",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "11 seasons of matchday attendance logs (2012/13\u20132022/23) + MLS/SPL road splits.",
          "why": "Strong fixture-level attendance sample (35\u201365% of career), with stadium capacity caps as a confounder."
        },
        "hero": true
      },
      {
        "headline": "Camp Nou & Bernab\u00e9u stayed 52k\u201360k before club moves and COVID reshaped curves.",
        "footnote": "*Seasonal mean stadium attendance across European club fixtures (gated at >=10 tracked fixtures/season; 2020/21 COVID closed-door season omitted). Source: <a href=\"https://www.transfermarkt.com/lionel-messi/leistungsdatendetails/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Matchday Stadium Attendance Audit (2012\u20132023; N=892 club fixtures)</a> (Transfermarkt Historical Match Archive)",
        "chart": {
          "title": "Average Matchday Attendance per Game by Season (2012/13\u20132022/23)",
          "type": "line",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                57552,
                52392,
                56093,
                56781,
                58652,
                54054,
                59336,
                57027,
                null,
                38854,
                40855
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                57801,
                53382,
                53648,
                53194,
                60158,
                56453,
                39509,
                40527,
                null,
                56213,
                51435
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 68000.0,
          "x_title": "Season",
          "y_title": "Avg Attendance per Game",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Yearly Attendance Lead Margin (Messi Avg \u2212 Ronaldo Avg)",
          "labels": [
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18",
            "18-19",
            "19-20",
            "20-21",
            "21-22",
            "22-23"
          ],
          "m_data": [
            0,
            0,
            1,
            2,
            2,
            2,
            3,
            4,
            4,
            4,
            4
          ],
          "r_data": [
            -1,
            -2,
            -2,
            -2,
            -3,
            -4,
            -4,
            -4,
            -4,
            -5,
            -6
          ],
          "unit": "fans/game"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "11 seasons of matchday attendance logs (2012/13\u20132022/23) + MLS/SPL road splits.",
          "why": "Strong fixture-level attendance sample (35\u201365% of career), with stadium capacity caps as a confounder."
        },
        "hero": false
      },
      {
        "headline": "Messi added larger absolute MLS road gains; Ronaldo posted a higher SPL % lift.",
        "footnote": "*Before = league average road attendance baseline without player (22,111 MLS vs 8,750 SPL); After = road attendance with player (44,250 vs 21,800). Showing both Before vs After prevents low-baseline percentage distortion. Source: <a href=\"https://www.mlssoccer.com/news/lionel-messi-effect-inter-miami-ticket-surge\" target=\"_blank\" rel=\"noopener noreferrer\">MLS & Saudi Pro League Matchday Turnstile Telemetry (2023\u20132025; N=2 leagues)</a> (League Attendance Audit)",
        "chart": {
          "title": "Road Matchday Attendance: Before vs After Player Arrival (MLS vs SPL)",
          "type": "bar",
          "labels": [
            "Messi \u2014 MLS (+22,139 fans / +100.1%)",
            "Ronaldo \u2014 SPL (+13,050 fans / +149.1%)"
          ],
          "datasets": [
            {
              "label": "League Baseline (Before Arrival)",
              "data": [
                22111,
                8750
              ],
              "backgroundColor": "#64748b",
              "borderRadius": 6
            },
            {
              "label": "With Player Road Avg (After Arrival)",
              "data": [
                44250,
                21800
              ],
              "backgroundColor": [
                "#38bdf8",
                "#f97316"
              ],
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 57000.0,
          "x_title": "League Arrival Comparison (Before vs After)",
          "y_title": "Avg Road Attendance",
          "hide_axes": false,
          "show_labels": true,
          "gap_badges": [
            {
              "player": "Messi (MLS)",
              "color": "#38bdf8",
              "text": "+22,139 fans/game (+100.1%)"
            },
            {
              "player": "Ronaldo (SPL)",
              "color": "#f97316",
              "text": "+13,050 fans/game (+149.1%)"
            }
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "11 seasons of matchday attendance logs (2012/13\u20132022/23) + MLS/SPL road splits.",
          "why": "Strong fixture-level attendance sample (35\u201365% of career), with stadium capacity caps as a confounder."
        },
        "hero": true
      },
      {
        "headline": "Messi's peak MLS away crowd slightly edged Ronaldo's peak SPL crowd.",
        "footnote": "*Highest recorded single-match attendance in new domestic club competitions. Broadcast viewership & shirt sales caveat: audited multi-season TV ratings per fixture and confidential Adidas/Nike jersey unit logs are not publicly standardised. Source: <a href=\"https://www.mlssoccer.com/news/lionel-messi-effect-inter-miami-ticket-surge\" target=\"_blank\" rel=\"noopener noreferrer\">MLS & Saudi Pro League Matchday Turnstile Telemetry (2023\u20132025; N=2 leagues)</a> (League Attendance Audit)",
        "chart": {
          "title": "Peak Live Single-Match Attendance",
          "type": "bar",
          "labels": [
            "Peak Live Single-Match Crowd"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                72610
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                68000
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 82000.0,
          "x_title": "Venue Crowd",
          "y_title": "Official Attendance",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "11 seasons of matchday attendance logs (2012/13\u20132022/23) + MLS/SPL road splits.",
          "why": "Strong fixture-level attendance sample (35\u201365% of career), with stadium capacity caps as a confounder."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +1,297 Avg Crowd",
    "answer": "Messi: higher overall & home crowds + MLS road gain vs Ronaldo: higher away avg & SPL % lift.",
    "metric_tags": [
      [
        "messi",
        "Messi +1,297 Avg Crowd"
      ],
      [
        "ronaldo",
        "Ronaldo +1,270 Away Crowd"
      ],
      [
        "messi",
        "Messi +9,089 MLS Road Gain"
      ],
      [
        "ronaldo",
        "Ronaldo +49.0% SPL Lift"
      ]
    ],
    "ref": "4.3.2",
    "cat_num": "4.3",
    "cat_title": "Cultural Reach, Live Attendance & Global Inspiration",
    "pillar_num": "4.0",
    "pillar_title": "Accolades, Recognition & Ability to Inspire (Institutional & Cultural Legacy)",
    "who_is": "Generates greater live stadium attendance and matchday economic draw?",
    "define_by": "Verified matchday stadium attendance overall and by season (2012/13\u20132022/23, Home vs Away), post-move league before-vs-after road attendance (absolute & % gap), and peak stadium crowds (noting where seasonal TV viewership & confidential shirt sales lack auditable series).",
    "metrics": "Career & seasonal matchday attendance, Home vs Away attendance, MLS/SPL before-vs-after road crowds, and peak single-match crowd.",
    "question": "Who generates greater live stadium attendance and matchday economic draw?",
    "reliability": {
      "level": "Medium",
      "score": 2.0,
      "coverage": "Transfermarkt matchday attendance logs (892 European club fixtures, 2012/13\u20132022/23) + MLS/SPL road splits.",
      "why": "Covers 11 European seasons plus MLS/SPL arrival windows, with stadium capacity caps acting as a natural ceiling."
    }
  },
  {
    "id": "wc_1",
    "chapter": "wc",
    "question": "Who scores more goals and knockout strikes at the FIFA World Cup?",
    "myth": "Ronaldo's goalscoring translated equally to the World Cup.",
    "insight_badge": "WC goals: Messi 21 (7 knockout) vs Ronaldo 11 (1 knockout)",
    "summary": "Across 6 World Cups for Messi (34 matches) and 6 for Ronaldo (27 matches), 2006\u20132026: Messi scored 21 (17 non-penalty; 7 in knockouts), Ronaldo 11 (7 non-penalty; 1 in knockouts).",
    "insights": [
      {
        "headline": "Messi scored nearly 2\u00d7 as many World Cup goals overall and non-penalty.",
        "footnote": "*World Cup finals tournaments only; qualifiers excluded. Source: <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "World Cup Goals",
          "type": "bar",
          "labels": [
            "Total",
            "Non-Penalty"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                21,
                17
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                11,
                7
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 24.0,
          "x_title": "Metric",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi edges group goals and dominates World Cup knockout goals.",
        "footnote": "*Stage from match day in Transfermarkt records (group = match days 1\u20133). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Goals by Stage",
          "type": "bar",
          "labels": [
            "Group Stage",
            "Knockouts"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                14,
                7
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                10,
                1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 16.0,
          "x_title": "Stage",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi scores far faster at the World Cup, especially in knockouts.",
        "footnote": "*Lower = more efficient. Knockout minutes: Messi 1716, Ronaldo 740. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Minutes per Goal (Lower = Better)",
          "type": "bar",
          "labels": [
            "Overall",
            "Knockouts"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                145.5,
                245.1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                200.5,
                740.0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 830.0,
          "x_title": "Scope",
          "y_title": "Minutes per Goal",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +10 WC Goals",
    "answer": "Messi leads decisively in World Cup goals overall, knockout goals & minutes per goal.",
    "metric_tags": [
      [
        "messi",
        "Messi +10 WC Goals"
      ],
      [
        "messi",
        "Messi +6 WC KO Goals"
      ]
    ],
    "ref": "WC.1",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Scores more goals and knockout strikes at the FIFA World Cup?",
    "define_by": "All-time FIFA World Cup goals, group vs knockout splits, and minutes per goal across editions.",
    "metrics": "Total World Cup goals, non-penalty goals, knockout goals, and minutes per goal.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete 2006\u20132026 FIFA World Cup Finals match & goal logs.",
      "why": "100% verified official FIFA World Cup Finals tournament records."
    }
  },
  {
    "id": "wc_2",
    "chapter": "wc",
    "question": "Who creates more assists and chances at the FIFA World Cup?",
    "myth": "Messi's World Cup impact is only about goals.",
    "insight_badge": "WC assists: Messi 12 (10 knockout) vs Ronaldo 2 (0)",
    "summary": "Messi has 12 World Cup assists (10 in knockouts) vs Ronaldo's 2 (0). In StatsBomb's World Cup data (11 Messi, 9 Ronaldo matches), Messi made 2.55 key passes per match vs 0.89.",
    "insights": [
      {
        "headline": "Messi dominates World Cup assists, including all knockout assists.",
        "footnote": "Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Assists",
          "type": "bar",
          "labels": [
            "Total",
            "Knockouts"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                12,
                10
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                2,
                0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 14.0,
          "x_title": "Scope",
          "y_title": "Assists",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Complete 2006\u20132026 FIFA World Cup Finals assist and playmaking logs.",
          "why": "Official tournament match records covering all World Cup Finals appearances."
        },
        "hero": true
      },
      {
        "headline": "Messi created far more World Cup key passes per match.",
        "footnote": "*StatsBomb World Cup matches (11 Messi, 9 Ronaldo). Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "World Cup Key Passes",
          "type": "bar",
          "labels": [
            "Total",
            "Per Match"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                28,
                2.55
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                8,
                0.89
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 32.0,
          "x_title": "Metric",
          "y_title": "Key Passes",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Complete 2006\u20132026 FIFA World Cup Finals assist and playmaking logs.",
          "why": "Official tournament match records covering all World Cup Finals appearances."
        },
        "hero": true
      },
      {
        "headline": "Messi generated vastly higher World Cup Expected Assists (xA).",
        "footnote": "*xA = StatsBomb xG of shots created by the pass. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "World Cup Expected Assists (xA)",
          "type": "bar",
          "labels": [
            "Total xA",
            "xA per Match"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                3.43,
                0.31
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0.43,
                0.05
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 3.9,
          "x_title": "Metric",
          "y_title": "xA",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +10 WC Assists",
    "answer": "Messi dominates World Cup playmaking across assists, knockout assists, key passes & xA.",
    "metric_tags": [
      [
        "messi",
        "Messi +10 WC Assists"
      ],
      [
        "messi",
        "Messi +10 WC KO Assists"
      ],
      [
        "messi",
        "Messi +20 WC Key Passes"
      ]
    ],
    "ref": "WC.2",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Creates more assists and chances at the FIFA World Cup?",
    "define_by": "World Cup assists, knockout assists, key passes per match, and Expected Assists (xA).",
    "metrics": "World Cup assists, knockout assists, key passes, and Expected Assists (xA).",
    "reliability": {
      "level": "High",
      "score": 2.67,
      "coverage": "Complete 2006\u20132026 FIFA World Cup Finals assist logs + Opta/StatsBomb key passes & xA.",
      "why": "Tournament assists cover 100% of Finals matches; xA sub-metrics rely on tracked modern editions."
    }
  },
  {
    "id": "wc_3",
    "chapter": "wc",
    "question": "Who contributes more on-ball dribbles, passes, pressures, and tackles at the FIFA World Cup?",
    "myth": "World Cup impact is decided only by goals and assists.",
    "insight_badge": "WC dribbles completed: Messi 47 vs Ronaldo 8",
    "summary": "In StatsBomb World Cup data, Messi completed 47 dribbles (73.4%) vs 8 (47.1%), and made 155 pressures vs 52. Transfermarkt records 902 Messi passes vs 303 across World Cup matches with passing data.",
    "insights": [
      {
        "headline": "Messi completed far more World Cup dribbles at a higher success rate.",
        "footnote": "*StatsBomb World Cup matches (11 Messi, 9 Ronaldo). Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "World Cup Dribbles",
          "type": "bar",
          "labels": [
            "Completed",
            "Success Rate (%)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                47,
                73.4
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                8,
                47.1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 83.0,
          "x_title": "Metric",
          "y_title": "Value",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "Tracked recent FIFA World Cup editions via StatsBomb/FBref event streams.",
          "why": "Event-level pressing and dribble tracking is unavailable for earlier World Cup editions (<7 tournament editions)."
        },
        "hero": true
      },
      {
        "headline": "Messi was ~3\u00d7 more involved in World Cup passing build-up.",
        "footnote": "*World Cup matches with Transfermarkt passing data. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Passes (Totals)",
          "type": "bar",
          "labels": [
            "Completed",
            "Attempted"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                749,
                902
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                245,
                303
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1020.0,
          "x_title": "Metric",
          "y_title": "Passes",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": true
      },
      {
        "headline": "Messi logged ~3\u00d7 more World Cup pressures and ball recoveries.",
        "footnote": "*StatsBomb World Cup event totals. Source: <a href=\"https://github.com/statsbomb/open-data\" target=\"_blank\" rel=\"noopener noreferrer\">StatsBomb Open Data (Supplementary Open Data Sample)</a> (Official Open Data Git Repository (Deprioritised Asymmetric Sample))",
        "chart": {
          "title": "World Cup Pressing (Totals)",
          "type": "bar",
          "labels": [
            "Pressures",
            "Ball Recoveries"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                155,
                56
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                52,
                15
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 180.0,
          "x_title": "Metric",
          "y_title": "Events",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Low",
          "score": 1,
          "coverage": "Tracked recent FIFA World Cup editions via StatsBomb/FBref event streams.",
          "why": "Event-level pressing and dribble tracking is unavailable for earlier World Cup editions (<7 tournament editions)."
        },
        "hero": true
      },
      {
        "headline": "Messi won 2\u00d7+ fouls and made far more World Cup tackles.",
        "footnote": "*World Cup matches with Transfermarkt duel data. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Tackles & Fouls Won (Totals)",
          "type": "bar",
          "labels": [
            "Tackles",
            "Fouls Won"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                21,
                58
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                2,
                24
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 65.0,
          "x_title": "Metric",
          "y_title": "Count",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "Multi-season tracked European league window (7\u201314 seasons / 35\u201365% career coverage).",
          "why": "Solid multi-season provider sample (Understat/Opta/FBref/Transfermarkt) covering shared prime years."
        },
        "hero": false
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +39 WC Dribbles",
    "answer": "Messi logged roughly three to six times Ronaldo's World Cup dribbles, passes, pressures, recoveries & tackles.",
    "metric_tags": [
      [
        "messi",
        "Messi +39 WC Dribbles"
      ],
      [
        "messi",
        "Messi +103 WC Pressures"
      ],
      [
        "messi",
        "Messi +504 WC Passes"
      ]
    ],
    "ref": "WC.3",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Contributes more on-ball dribbles, passes, pressures, and tackles at the FIFA World Cup?",
    "define_by": "Open-play dribbles, passing volume, pressing actions, recoveries, tackles, and fouls won in tracked World Cups.",
    "metrics": "Completed dribbles, passes completed/attempted, pressures, recoveries, tackles, and fouls won.",
    "reliability": {
      "level": "Low",
      "score": 1.5,
      "coverage": "StatsBomb/FBref FIFA World Cup event streams (dribbles, passes, pressures, tackles).",
      "why": "Event-level pressing and dribble tracking is unavailable for earlier World Cup editions (2006\u20132014)."
    }
  },
  {
    "id": "wc_4",
    "chapter": "wc",
    "question": "Who produced greater cumulative G+A trajectory across World Cup editions?",
    "myth": "Messi's World Cup record rests on one tournament.",
    "insight_badge": "WC G+A: Messi 33 vs Ronaldo 13; knockout G+A 17 vs 1",
    "summary": "Across editions 2006\u20132026, Messi recorded 33 World Cup goal contributions (17 in knockouts) vs Ronaldo's 13 (1).",
    "insights": [
      {
        "headline": "Messi's World Cup G+A surged in later editions; Ronaldo's stayed modest.",
        "footnote": "Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup G+A by Edition",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                2,
                1,
                5,
                3,
                10,
                12
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                1,
                2,
                2,
                4,
                1,
                3
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 14.0,
          "x_title": "Edition",
          "y_title": "G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Messi was overwhelmingly more productive in World Cup knockout matches.",
        "footnote": "*Knockout = match day \u22654 in Transfermarkt records. Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Knockout G+A by Edition",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                0,
                1,
                1,
                2,
                7,
                6
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                0,
                0,
                0,
                0,
                0,
                1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 7.9,
          "x_title": "Edition",
          "y_title": "Knockout G+A",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +20 WC G+A",
    "answer": "Messi's World Cup G+A surged in later editions & knockouts; Ronaldo scored across a record five tournaments.",
    "metric_tags": [
      [
        "messi",
        "Messi +20 WC G+A"
      ],
      [
        "messi",
        "Messi +16 WC KO G+A"
      ],
      [
        "ronaldo",
        "Ronaldo +1 Scoring WC"
      ]
    ],
    "ref": "WC.4",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Produced greater cumulative G+A trajectory across World Cup editions?",
    "define_by": "Goals + Assists across each tournament edition (2006\u20132026) and knockout-round G+A totals.",
    "metrics": "Edition-by-edition G+A and cumulative knockout G+A.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete edition-by-edition Goals + Assists across 2006\u20132026 FIFA World Cup Finals.",
      "why": "100% verified official FIFA World Cup Finals goal and assist records."
    }
  },
  {
    "id": "wc_5",
    "chapter": "wc",
    "question": "Who carried a larger share of national team World Cup goals and match results?",
    "myth": "Both carried their nations equally at World Cups.",
    "insight_badge": "Share of team WC goals involved in (on pitch): Messi 55.0% vs Ronaldo 37.1%",
    "summary": "Messi was directly involved in 55.0% of Argentina's World Cup goals while on the pitch vs Ronaldo's 37.1% for Portugal. His team won 76.5% of his World Cup matches (2.35 points per game) vs 44.4% (1.59).",
    "insights": [
      {
        "headline": "Messi accounted for a far larger share of his nation's World Cup goals.",
        "footnote": "*G+A \u00f7 team goals (while on pitch / in all his World Cup matches). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Goal Involvement Share (%)",
          "type": "bar",
          "labels": [
            "While On Pitch",
            "All Team Goals"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                55.0,
                42.3
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                37.1,
                28.9
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 62.0,
          "x_title": "Scope",
          "y_title": "Share (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Argentina's World Cup win rate and PPG with Messi far exceed Portugal's.",
        "footnote": "*Result at full time / after extra time as recorded by Transfermarkt (shoot-outs count as draws). Source: <a href=\"https://tmapi.transfermarkt.technology/player/28003/performance-game\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Match Performance API (2002\u20132026; N=3,260 appearances)</a> (Official JSON API Endpoint)",
        "chart": {
          "title": "World Cup Team Results",
          "type": "bar",
          "labels": [
            "Win Rate (%)",
            "Points per Game"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                76.5,
                2.35
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                44.4,
                1.59
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 86.0,
          "x_title": "Metric",
          "y_title": "Value",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      },
      {
        "headline": "Similar vs Top-20 & minnows; Messi separated against mid-tier World Cup sides.",
        "footnote": "*Opponent FIFA Men's World Ranking published immediately prior to match date (0 Messi, 0 Ronaldo unmapped). Source: <a href=\"https://www.fifa.com/fifa-world-ranking/men\" target=\"_blank\" rel=\"noopener noreferrer\">Historical FIFA Men's World Rankings (1992\u20132026)</a> (Official Release Download) | <a href=\"https://www.transfermarkt.com/lionel-messi/alletore/spieler/28003\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Official Goal Logs & International Results Archive (2002\u20132026; N=1,915 senior goals)</a> (Direct Web Scrape & Public Archive)",
        "chart": {
          "title": "World Cup Goals by Opponent FIFA Rank",
          "type": "bar",
          "labels": [
            "Top 20 (Elite)",
            "Rank 21\u201350 (Strong)",
            "Rank 51+ (Mid/Lower)"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                5,
                13,
                3
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                4,
                3,
                4
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 15.0,
          "x_title": "Opponent FIFA Rank",
          "y_title": "Goals",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "High",
          "score": 3,
          "coverage": "Full senior career / complete official tournament or award records (20\u201325 seasons / 100% coverage).",
          "why": "Cross-verified official match, goal, assist, or honours records covering \u226566% (up to 100%) of both careers."
        },
        "hero": true
      }
    ],
    "leader": "messi",
    "leader_badge": "Messi +17.9% WC Share",
    "answer": "Messi shouldered a higher share of national-team World Cup goals with a stronger tournament win rate.",
    "metric_tags": [
      [
        "messi",
        "Messi +17.9% WC Share"
      ],
      [
        "messi",
        "Messi +32.1% WC Win Rate"
      ],
      [
        "messi",
        "Messi +0.76 WC PPG"
      ]
    ],
    "ref": "WC.5",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Carried a larger share of national team World Cup goals and match results?",
    "define_by": "Team goal share, World Cup win rate and PPG, and goals by opponent FIFA ranking tier.",
    "metrics": "On-pitch G+A share %, World Cup win rate & PPG, and goals by opponent FIFA rank.",
    "reliability": {
      "level": "High",
      "score": 3.0,
      "coverage": "Complete 2006\u20132026 FIFA World Cup Finals national-team goal share, win rate & FIFA rank splits.",
      "why": "100% verified official FIFA World Cup Finals match results and goal logs."
    }
  },
  {
    "id": "wc_6",
    "chapter": "wc",
    "question": "Who entered World Cups with stronger squads, seeding, and pre-tournament form?",
    "myth": "Argentina consistently arrived at World Cups with a superior squad and stronger form than Portugal.",
    "insight_badge": "Excl. Self: Portugal \u20ac473.3M vs Argentina \u20ac434.2M \u00b7 Avg WC FIFA Rank: #5.0 vs #5.7",
    "summary": "Excluding Messi and Ronaldo themselves, both nations led 3 World Cup editions each in surrounding squad value (2006\u20132026): Argentina peaked ahead in 2018 (+\u20ac124.5M), whereas Portugal fielded the pricier supporting roster in 2006, 2022 (+\u20ac321.8M), and 2026. Both stars accounted for 20%\u201334% of their nation's entire squad value during their prime (2010\u20132018). Among all World Cup participants, Argentina averaged a #5.0 pre-tournament FIFA seed and #7.0 supporting squad-value rank vs Portugal's #5.7 and #7.0.",
    "insights": [
      {
        "headline": "Excl. self: Argentina & Portugal split World Cup supporting squad value 3\u20133.",
        "footnote": "*2006\u20132022 rosters matched to official 23/26-man FIFA World Cup squads and valued via Transfermarkt prior to each tournament kickoff (plus archived 2005/06 & 2009/10 squad tables), strictly excluding Messi and Ronaldo. 2026 reflects tracked FIWC match-appeared teammates. Source: <a href=\"https://github.com/jfjelstul/worldcup\" target=\"_blank\" rel=\"noopener noreferrer\">Fjelstul World Cup Official Squads Archive (2006\u20132022)</a> (Academic Relational Dataset) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://www.transfermarkt.com/argentina/kader/verein/3437/saison_id/2005/plus/1\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical National Squad Valuations (2005/06 & 2009/10)</a> (Cached HTML Snapshot)",
        "chart": {
          "title": "Supporting Squad Value by World Cup Edition (Excl. Self \u00b7 \u20acM)",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                175.6,
                258.3,
                273.5,
                519.0,
                595.2,
                783.5
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                192.1,
                200.1,
                197.2,
                394.5,
                917.0,
                939.0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 1060.0,
          "x_title": "World Cup Edition",
          "y_title": "Supporting Squad Value (\u20acM)",
          "hide_axes": false,
          "show_labels": true
        },
        "sample_table": {
          "title": "Supporting Squad Value (Excl. Self) & Player Share by Edition",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_row": [
            "\u20ac175.6M (21/22) \u00b7 Self 7.9%",
            "\u20ac258.3M (22/22) \u00b7 Self 23.6%",
            "\u20ac273.5M (22/22) \u00b7 Self 30.5%",
            "\u20ac519.0M (22/22) \u00b7 Self 25.8%",
            "\u20ac595.2M (25/25) \u00b7 Self 7.7%",
            "\u20ac783.5M (23 mates) \u00b7 Self 1.9%"
          ],
          "r_row": [
            "\u20ac192.1M (21/22) \u00b7 Self 12.1%",
            "\u20ac200.1M (22/22) \u00b7 Self 27.3%",
            "\u20ac197.2M (22/22) \u00b7 Self 33.6%",
            "\u20ac394.5M (22/22) \u00b7 Self 20.2%",
            "\u20ac917.0M (25/25) \u00b7 Self 2.1%",
            "\u20ac939.0M (21 mates) \u00b7 Self 1.1%"
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": true
      },
      {
        "headline": "Per-teammate value (excl. self) mirrors Argentina's 2010\u201318 lead and Portugal's 2022\u201326 surge.",
        "footnote": "*Total pre-tournament supporting squad market value (excluding Messi & Ronaldo) divided by the number of valued teammates per edition. Source: <a href=\"https://github.com/jfjelstul/worldcup\" target=\"_blank\" rel=\"noopener noreferrer\">Fjelstul World Cup Official Squads Archive (2006\u20132022)</a> (Academic Relational Dataset) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://www.transfermarkt.com/argentina/kader/verein/3437/saison_id/2005/plus/1\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical National Squad Valuations (2005/06 & 2009/10)</a> (Cached HTML Snapshot)",
        "chart": {
          "title": "Mean Valuation per Valued Teammate by Edition (Excl. Self \u00b7 \u20acM)",
          "type": "line",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                8.36,
                11.74,
                12.43,
                23.59,
                23.81,
                34.07
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                9.15,
                9.09,
                8.97,
                17.93,
                36.68,
                44.71
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 51.0,
          "x_title": "World Cup Edition",
          "y_title": "Mean Teammate Value (\u20acM)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Editions Leading Mean Teammate Value (Top: Argentina | Bottom: Portugal)",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_data": [
            0,
            1,
            2,
            3,
            3,
            3
          ],
          "r_data": [
            -1,
            -1,
            -1,
            -1,
            -2,
            -3
          ],
          "y_min": -4,
          "y_max": 4,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "In 2010\u201318 prime, each accounted for roughly a fifth to a third of squad value.",
        "footnote": "*Player's own pre-tournament Transfermarkt market value as a percentage of his nation's total valued World Cup squad (self + teammates). Source: <a href=\"https://github.com/jfjelstul/worldcup\" target=\"_blank\" rel=\"noopener noreferrer\">Fjelstul World Cup Official Squads Archive (2006\u20132022)</a> (Academic Relational Dataset) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download) | <a href=\"https://www.transfermarkt.com/argentina/kader/verein/3437/saison_id/2005/plus/1\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical National Squad Valuations (2005/06 & 2009/10)</a> (Cached HTML Snapshot)",
        "chart": {
          "title": "Player's Own Share of National World Cup Squad Value (%)",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                7.9,
                23.6,
                30.5,
                25.8,
                7.7,
                1.9
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                12.1,
                27.3,
                33.6,
                20.2,
                2.1,
                1.1
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 38.0,
          "x_title": "World Cup Edition",
          "y_title": "Share of Total Squad Value (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Portugal seeded higher in 2006\u201318; Argentina seeded higher in 2022 & 2026.",
        "footnote": "*Pre-tournament FIFA Men's World Ranking ranked among the 32 participating nations (2006\u20132022) and 48 tracked FIWC nations (2026, *Sep 2024 snapshot). Lower rank = stronger seed. Source: <a href=\"https://www.fifa.com/fifa-world-ranking/men\" target=\"_blank\" rel=\"noopener noreferrer\">Historical FIFA Men's World Rankings (1992\u20132026)</a> (Official Release Download) | <a href=\"https://github.com/jfjelstul/worldcup\" target=\"_blank\" rel=\"noopener noreferrer\">Fjelstul World Cup Official Squads Archive (2006\u20132022)</a> (Academic Relational Dataset)",
        "chart": {
          "title": "Pre-Tournament FIFA World Ranking Among Participants (Lower = Better)",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                9,
                7,
                5,
                5,
                3,
                1
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                7,
                3,
                4,
                4,
                8,
                8
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 10.1,
          "x_title": "World Cup Edition",
          "y_title": "Participant FIFA Rank (#)",
          "hide_axes": false,
          "show_labels": true
        },
        "sample_table": {
          "title": "Pre-Tournament FIFA Seed (Among Participants & Global)",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_row": [
            "WC #9/32 \u00b7 Global #9",
            "WC #7/32 \u00b7 Global #7",
            "WC #5/32 \u00b7 Global #5",
            "WC #5/32 \u00b7 Global #5",
            "WC #3/32 \u00b7 Global #3",
            "WC #1/44 \u00b7 Global #1*"
          ],
          "r_row": [
            "WC #7/32 \u00b7 Global #7",
            "WC #3/32 \u00b7 Global #3",
            "WC #4/32 \u00b7 Global #4",
            "WC #4/32 \u00b7 Global #4",
            "WC #8/32 \u00b7 Global #9",
            "WC #8/44 \u00b7 Global #8*"
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": true
      },
      {
        "headline": "Excl. self: Argentina stayed top-seven every edition; Portugal climbed to top-four in 2022\u201326.",
        "footnote": "*Rank of Argentina/Portugal's excluding-self supporting squad value against all other participating nations' full valued squads (32 teams in 2006\u20132022; 48 tracked FIWC teams in 2026). Note: 2006 cross-nation Transfermarkt coverage averages 47% (81.5% in 2010; 95\u201398% in 2014\u20132022). Lower rank = more valuable squad. Source: <a href=\"https://github.com/jfjelstul/worldcup\" target=\"_blank\" rel=\"noopener noreferrer\">Fjelstul World Cup Official Squads Archive (2006\u20132022)</a> (Academic Relational Dataset) | <a href=\"https://github.com/dcaribou/transfermarkt-datasets\" target=\"_blank\" rel=\"noopener noreferrer\">Transfermarkt Historical Market Valuations</a> (Open Data Release Download)",
        "chart": {
          "title": "Supporting Squad Value Rank Among All Participants (Excl. Self \u00b7 Lower = Higher Value)",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                5,
                7,
                9,
                7,
                7,
                7
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                4,
                10,
                12,
                8,
                4,
                4
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 14.0,
          "x_title": "World Cup Edition",
          "y_title": "Participant Squad Value Rank (#)",
          "hide_axes": false,
          "show_labels": true
        },
        "sample_table": {
          "title": "Squad Value Rank Among All Participants (Excl. Self vs Full Squad)",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_row": [
            "Excl #5/32 \u00b7 Full #5/32",
            "Excl #7/32 \u00b7 Full #4/32",
            "Excl #9/32 \u00b7 Full #4/32",
            "Excl #7/32 \u00b7 Full #7/32",
            "Excl #7/32 \u00b7 Full #7/32",
            "Excl #7/48 \u00b7 Full #7/48"
          ],
          "r_row": [
            "Excl #4/32 \u00b7 Full #7/32",
            "Excl #10/32 \u00b7 Full #8/32",
            "Excl #12/32 \u00b7 Full #9/32",
            "Excl #8/32 \u00b7 Full #8/32",
            "Excl #4/32 \u00b7 Full #4/32",
            "Excl #4/48 \u00b7 Full #3/48"
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": true
      },
      {
        "headline": "Pre-tournament form flipped: Portugal hotter in 2006 & 2018; Argentina surging into 2022 & 2026.",
        "footnote": "*Last 10 senior international A-matches strictly before each World Cup opening matchday computed from the martj42 international results archive. Pre-WC FIFA World Rankings trace official FIFA rankings (*2026 reflects latest Sep 2024 archive snapshot). Source: <a href=\"https://github.com/martj42/international_results\" target=\"_blank\" rel=\"noopener noreferrer\">martj42 International Football Results</a> (Public Git Archive Download) | <a href=\"https://www.fifa.com/fifa-world-ranking/men\" target=\"_blank\" rel=\"noopener noreferrer\">Historical FIFA Men's World Rankings (1992\u20132026)</a> (Official Release Download)",
        "chart": {
          "title": "Pre-Tournament Win Rate (%) Entering Each World Cup (Last 10 Matches)",
          "type": "bar",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                40.0,
                80.0,
                70.0,
                50.0,
                80.0,
                80.0
              ],
              "backgroundColor": "#38bdf8",
              "borderRadius": 6
            },
            {
              "label": "Ronaldo",
              "data": [
                80.0,
                80.0,
                70.0,
                60.0,
                60.0,
                70.0
              ],
              "backgroundColor": "#f97316",
              "borderRadius": 6
            }
          ],
          "y_min": 0,
          "y_max": 90.0,
          "x_title": "World Cup Edition",
          "y_title": "Pre-WC Win Rate (%)",
          "hide_axes": false,
          "show_labels": true
        },
        "sample_table": {
          "title": "Pre-Tournament Form & Global FIFA Rank Entering Kickoff",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_row": [
            "4W-1D-5L \u00b7 1.30 PPG \u00b7 #9",
            "8W-0D-2L \u00b7 2.40 PPG \u00b7 #7",
            "7W-2D-1L \u00b7 2.30 PPG \u00b7 #5",
            "5W-3D-2L \u00b7 1.80 PPG \u00b7 #5",
            "8W-2D-0L \u00b7 2.60 PPG \u00b7 #3",
            "8W-1D-1L \u00b7 2.50 PPG \u00b7 #1*"
          ],
          "r_row": [
            "8W-2D-0L \u00b7 2.60 PPG \u00b7 #7",
            "8W-2D-0L \u00b7 2.60 PPG \u00b7 #3",
            "7W-2D-1L \u00b7 2.30 PPG \u00b7 #4",
            "6W-3D-1L \u00b7 2.10 PPG \u00b7 #4",
            "6W-1D-3L \u00b7 1.90 PPG \u00b7 #9",
            "7W-2D-1L \u00b7 2.30 PPG \u00b7 #8*"
          ]
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      },
      {
        "headline": "Pre-WC PPG: Portugal sharper early; Argentina elite late-era consistency.",
        "footnote": "*Three points per win, one point per draw across the final 10 international A-matches strictly prior to each tournament opening date. Source: <a href=\"https://github.com/martj42/international_results\" target=\"_blank\" rel=\"noopener noreferrer\">martj42 International Football Results</a> (Public Git Archive Download)",
        "chart": {
          "title": "Pre-Tournament Points per Game (PPG) Entering Each World Cup",
          "type": "line",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "datasets": [
            {
              "label": "Messi",
              "data": [
                1.3,
                2.4,
                2.3,
                1.8,
                2.6,
                2.5
              ],
              "borderColor": "#38bdf8",
              "backgroundColor": "#38bdf81f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            },
            {
              "label": "Ronaldo",
              "data": [
                2.6,
                2.6,
                2.3,
                2.1,
                1.9,
                2.3
              ],
              "borderColor": "#f97316",
              "backgroundColor": "#f973161f",
              "fill": true,
              "tension": 0.3,
              "borderWidth": 2.5,
              "pointRadius": 2.5
            }
          ],
          "y_min": 0,
          "y_max": 3.0,
          "x_title": "World Cup Edition",
          "y_title": "Pre-WC PPG (Last 10 Matches)",
          "hide_axes": false,
          "show_labels": false
        },
        "lead_sub_chart": {
          "title": "Cumulative Editions Leading Pre-WC PPG (Top: Argentina | Bottom: Portugal)",
          "labels": [
            "2006 Germany",
            "2010 S. Africa",
            "2014 Brazil",
            "2018 Russia",
            "2022 Qatar",
            "2026 N. America"
          ],
          "m_data": [
            0,
            0,
            0,
            0,
            1,
            2
          ],
          "r_data": [
            -1,
            -2,
            -2,
            -3,
            -3,
            -3
          ],
          "y_min": -4,
          "y_max": 3,
          "unit": "Seasons Led"
        },
        "reliability": {
          "level": "Medium",
          "score": 2,
          "coverage": "10\u201311 European seasons / 6 World Cup editions of Transfermarkt squad valuations & FIFA ranks.",
          "why": "Contemporary market valuations are estimates rather than on-pitch stats and cover ~11 shared European seasons."
        },
        "hero": false
      }
    ],
    "leader": "tied",
    "leader_badge": "Tied 3-3 Squad Value",
    "metric_tags": [
      [
        "tied",
        "Tied 3-3 Supporting Squad"
      ],
      [
        "ronaldo",
        "Ronaldo +\u20ac321.8M 2022 Cast"
      ],
      [
        "messi",
        "Messi +\u20ac124.5M 2018 Cast"
      ],
      [
        "messi",
        "Avg WC Seed #5.0 vs #5.7"
      ]
    ],
    "ref": "WC.6",
    "cat_num": "wc",
    "cat_title": "FIFA World Cup Arena",
    "pillar_num": "EA.2",
    "pillar_title": "FIFA World Cup Arena",
    "who_is": "Entered World Cups with stronger squads, seeding, and pre-tournament form?",
    "define_by": "Pre-tournament national supporting squad Transfermarkt valuation excluding Messi and Ronaldo, each player's % contribution to national squad value, tournament squad value rank and pre-tournament FIFA World Ranking among all participants, plus last-10 international match form.",
    "metrics": "Supporting squad value excl. self (\u20acM), mean teammate value (\u20acM), player % share of squad value, WC squad value rank & FIFA rank among participants, Last-10 Win % & PPG.",
    "reliability": {
      "level": "Medium",
      "score": 2.0,
      "coverage": "Official pre-tournament FIFA World Rankings & Transfermarkt national-squad valuations (2006\u20132026).",
      "why": "FIFA rankings cover all editions; Transfermarkt national-squad valuations are market estimates and less uniform in 2006\u20132010."
    }
  }
];
