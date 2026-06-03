import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useEffect, useState } from "react";

const FIXED_TIP = [15, 18, 20, 25]

export default function Index() {
  const [selectedTip, setSelectedTip] = useState<number>(15)
  const [noOfPepole, setNoOfPeople] = useState<number>(1)
  const [bill, setBill] = useState(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const handleSelectedTip = (tip: number) => {
    setSelectedTip(tip)
  }

  useEffect(() => {
    const total = ((bill * (selectedTip / 100)) + bill) / noOfPepole

    setTotalAmount(total)
  }, [totalAmount, bill, selectedTip, noOfPepole])

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <ScrollView contentContainerStyle={{
        flexDirection: 'column',
        gap: 16,
        padding: 24,
      }}>
        {/* Card 1 */}
        <View style={{
          width: '100%',
          minHeight: 100,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#10B981',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.5rem',
          borderRadius: '.7rem'
        }}>
          <Text style={{
            color: '#00422B',
            fontSize: 18,
            fontWeight: '400',
            fontFamily: 'sans-serif'
          }}>Total Per Person</Text>

          <Text style={{
            color: '#00422B',
            fontSize: 32,
            fontWeight: '700',
            fontFamily: 'sans-serif'
          }}>${totalAmount.toFixed(2)}</Text>
        </View>

        {/* Card 2 */}
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem'
        }}>
          <Text style={{
            fontSize: 20
          }}>Bill Amount</Text>
          <View style={{
            borderColor: '#5d5d5d',
            borderWidth: 1,
            paddingHorizontal: 8,
            paddingVertical: 16,
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'row'

          }}>
            <Text style={{
              fontSize: 32,
              color: 'black',
              width: '10%'
            }}>$</Text>

            <TextInput style={{
              outline: 'none',
              width: '90%',
              alignSelf: 'center',
              fontSize: 32,
              color: 'black',
              textAlign: 'center'
            }}

              placeholder="0.00"
              keyboardType="numeric"
              onChangeText={(val) => setBill(Number(val))}
              // value={bill === 0 ? "" : String(bill)}


            />
          </View>


        </View>

        {/* Card 3 */}
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem'
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>

            <Text style={{
              fontSize: 20
            }}>Select Tip</Text>

            <Text style={{
              fontSize: 20,
              color: '#10B981',
              fontWeight: 700
            }}>{selectedTip}%</Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {FIXED_TIP.map((tip, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => handleSelectedTip(tip)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  width: `${100 / FIXED_TIP.length}%`,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  backgroundColor: selectedTip === tip ? "#ADEDD3" : "#fff",
                  marginTop: 12
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "#1a1a1a",
                  }}
                >
                  {tip}%
                </Text>
              </TouchableOpacity>
            ))}

            {/* Custom tip */}
            <View style={{
              paddingVertical: 2,
              paddingHorizontal: 16,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e2e8f0",
              minWidth: 80,
              display: "flex",
              flexDirection: 'row',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <EvilIcons name="pencil" size={24} color="black" />
              <TextInput
                placeholder="Custom"
                keyboardType="numeric"
                // value={customTip}
                onChangeText={(val) => setSelectedTip(Number(val))}
                style={{
                  outline: 'none',
                  alignSelf: 'center',
                  fontSize: 16,
                  color: 'black',
                  textAlign: 'center'
                }}
              />
            </View>
          </View>
        </View>

        {/* Card 4 */}
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem'
        }}>

          <Text style={{
            fontSize: 20
          }}>Number of People</Text>

          <View style={{
            borderColor: '#5d5d5d',
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <TouchableOpacity style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8,
              backgroundColor: "#EDEEEF",
              opacity: noOfPepole <= 1 ? 0.5 : 1,

            }}
              disabled={noOfPepole == 1}
              onPress={() => setNoOfPeople(prev => prev - 1)}
            >
              <Text style={{
                fontSize: 20
              }}>-</Text>
            </TouchableOpacity>

            <Text style={{
              fontSize: 28
            }}>{noOfPepole}</Text>

            <TouchableOpacity style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8,
              backgroundColor: "#EDEEEF",
            }}
              onPress={() => setNoOfPeople(prev => prev + 1)}
            >
              <Text style={{
                fontSize: 20
              }}>+</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Card 5 */}
        <View style={{ borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 12, backgroundColor: '#F3F4F5' }}>
          {[
            { label: "Bill Total", value: "$0.00", sub: null },
            { label: "Total Tip", value: "$0.00", sub: null },
            { label: "Tip per Person", value: "$0.00", sub: "Shared equally" },
          ].map((item, idx, arr) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderBottomWidth: idx < arr.length - 1 ? 1 : 0,
                borderBottomColor: "#e2e8f0",
              }}
            >
              <View>
                <Text style={{ fontSize: 16, color: "#1a1a1a" }}>
                  {item.label}
                </Text>
                {item.sub && (
                  <Text style={{ fontSize: 13, color: "#10B981", marginTop: 2 }}>
                    {item.sub}
                  </Text>
                )}
              </View>

              <Text style={{
                fontSize: 20,
                color: idx === arr.length - 1 ? "#10B981" : "#1a1a1a",
              }}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

