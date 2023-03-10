import React, { useEffect, useState } from "react";
import {
  addOperator,
  getOperators,
  getOperatorsByCity,
  getOperatorsByCityAndDistrict,
} from "../../api";
import OperatorCard from "../../Components/OperatorCard";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

const ListPage = () => {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const [data, setData] = useState([]);
  const [operators, setOperators] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addCity, setAddCity] = useState("");
  const [addDistrict, setAddDistrict] = useState("");

  const handleList = async (event) => {
    event.preventDefault();

    if (city !== null && district !== null) {
      getOperatorsByCityAndDistrict(city, district).then((response) =>
        setOperators(response.data.operators)
      );
    } else if (city !== null && district === null) {
      getOperatorsByCity(city).then((response) =>
        setOperators(response.data.operators)
      );
    } else {
      getOperators().then((response) => setOperators(response.data.operators));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const operator = {
      fullName,
      phoneNumber,
      city: addCity,
      district: addDistrict,
    };

    console.log(addCity);
    console.log(addDistrict);
    console.log(operator);
    addOperator(operator)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        m="1.5rem 2rem"
        height="100%"
        display="grid"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeProvider theme={useTheme()}>
          <Container component="main" maxWidth="xs">
            <Box textAlign="center" mt="2rem" justifyContent="center">
              <h1>Vin?? Operator?? Rapor Et!</h1>
            </Box>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={fullName}
                  id="fullName"
                  label="Ad Soyad"
                  name="fullName"
                  autoFocus
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={phoneNumber}
                  name="password"
                  label="Telefon Numaras??"
                  id="password"
                  placeholder="??RNEK : 05441234567"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <InputLabel mt="3px">??ehir</InputLabel>
                <Select
                  fullWidth
                  label="Sehir"
                  required
                  onChange={(e) => {
                    setAddCity(e.target.value);
                    console.log(e.target.value);
                    console.log(addCity);
                  }}
                >
                  {data &&
                    data.length > 0 &&
                    data.map((item) => (
                      <MenuItem value={item.text}>{item.text}</MenuItem>
                    ))}
                </Select>
                <InputLabel mt="3px">??l??e</InputLabel>
                {addCity && (
                  <Select
                    fullWidth
                    label="??l??e"
                    required
                    onChange={(e) => setAddDistrict(e.target.value)}
                  >
                    {addCity &&
                      data
                        .filter((item) => item.text === addCity)
                        .map((dist) =>
                          dist.districts.map((item) => (
                            <MenuItem value={item.text}>{item.text}</MenuItem>
                          ))
                        )}
                  </Select>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Rapor Et!
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
      <Box
        m="1.5rem 2rem"
        height="100%"
        display="grid"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeProvider theme={useTheme()}>
          <Container component="main" maxWidth="xs">
            <Box textAlign="center" mt="2rem" justifyContent="center">
              <h1>Vin?? Operatorleri!</h1>
            </Box>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                onSubmit={handleList}
                noValidate
                sx={{ mt: 1 }}
              >
                <InputLabel mt="3px">??ehir</InputLabel>
                <Select
                  fullWidth
                  label="Sehir"
                  required
                  onChange={(e) => setCity(e.target.value)}
                >
                  {data &&
                    data.length > 0 &&
                    data.map((item) => (
                      <MenuItem value={item.text}>{item.text}</MenuItem>
                    ))}
                </Select>
                <InputLabel mt="3px">??l??e</InputLabel>
                {city && (
                  <Select
                    fullWidth
                    label="??l??e"
                    required
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    {city &&
                      data
                        .filter((item) => item.text === city)
                        .map((dist) =>
                          dist.districts.map((item) => (
                            <MenuItem value={item.text}>{item.text}</MenuItem>
                          ))
                        )}
                  </Select>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Vin?? Operat??rlerini Listele!
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
      <Box
        m="1.5rem 2rem"
        height="100%"
        display="grid"
        justifyContent="center"
        alignItems="center"
      >
        {operators &&
          operators.map((opt) => <OperatorCard operator={opt}></OperatorCard>)}
      </Box>
    </>
  );
};

export default ListPage;
