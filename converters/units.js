const options = [
  {
    name: "Frquency",
    units: [
      {
        name: "Hertz",
        value: (n)=> {
          return [
            n, n*1e-3, n*1e-6, n*1e-9
          ]
        }
      },
      {
        name: "Kilohertz",
        value: (n)=> {
          return [
            n*1e3, n, n*1e-3, n*1e-6
          ]
        }
      },
      {
        name: "Megahertz",
        value: (n)=> {
          return [
            n*1e6, n*1e3, n, n*1e-3
          ]
        }
      },
      {
        name: "Gigahertz",
        value: (n)=> {
          return [
            n*1e9, n*1e6, n*1e3, n
          ]
        }
      }
    ]
  },
  {
    name: "Speed",
    units: [
      {
        name: "Mile per Hour",
        value: [1,1.467,0.44702726866338843,1.609,0.8688097306689835]
      },
      {
        name: "Foot per Second",
        value: [0.6816632583503749,1,0.30478512648582745,1.097,0.5924170616113744]
      }, 
      {
        name: "Meter per Second",
        value: [2.23694,3.28084,1,3.6,1.94384]
      },
      {
        name: "Kilometre per Hour",
        value: [0.6215040397762586,0.9115770282588879,0.2777777777777778,1,0.5399568034557235]
      },
      {
        name: "Knot",
        value: [1.15078,1.68781,0.51440329218107,1.852,1]
      }
    ]
  },
  {
    name: "Temperature",
    units: [
      {
        name: "Degree Celsius",
        value: (n)=> {
          return [
            n, (n*9/5)+32, n+273.15
          ]
        }
      },
      {
        name: "Fahrenheit",
        value: (n)=> {
          return [
            (n-32)*5/9, n, (n-32)*5/9+273.15
          ]
        }
      },
      {
        name: "Kelvin",
        value: (n)=> {
          return [
            n-273.15, (n-273.15)*9/5+32, n
          ]
        }
      }
    ]
  }
]
