import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SignUp from "./sign-up";
import PersonalInfo from "./personal-info";
import ProfessionalInfo from "./professional-info";

const steps = ["Signup info", "Personal Info", "Professional info"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    firstName: "",
    lastName: "",
    currentCompany: "",
    totalExperience: "",
    designation: "",
  });

  const [validationErrors, setValidationErrors] = React.useState({
    emailError: false,
  });

  const handleChange = (input) => (e) => {
    const modifiedUser = { ...user };
    modifiedUser[input] = e.target.value;
    setUser(modifiedUser);

    if (input === "email") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        const modifiedValidationErrors = { ...validationErrors };
        modifiedValidationErrors.emailError = true;
        setValidationErrors(modifiedValidationErrors);
      } else {
        const modifiedValidationErrors = { ...validationErrors };
        modifiedValidationErrors.emailError = false;
        setValidationErrors(modifiedValidationErrors);
      }
    }
  };

  const forms = [
    <SignUp {...user} {...validationErrors} handleChange={handleChange} />,
    <PersonalInfo {...user} handleChange={handleChange} />,
    <ProfessionalInfo {...user} handleChange={handleChange} />,
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === steps.length - 1) {
      console.log(user);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                StepIconProps={{
                  sx: {
                    "&.Mui-active": {
                      color: "secondary.light",
                      fontSize: "35px",
                    },
                    "&.Mui-completed": {
                      color: "secondary.light",
                      fontSize: "35px",
                    },
                  },
                }}
              />
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "secondary.main",
                fontSize: "35px",
              }}
            />
            <span>You have successfully completed the process.</span>
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {steps[activeStep]}
          </Typography>

          {forms[activeStep]}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep > 0 ? (
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{
                  mr: 1,
                  borderRadius: "5px",
                  backgroundColor: "grey.400",
                  color: "white",
                  ":hover": {
                    backgroundColor: "grey.500",
                    color: "white",
                  },
                }}
              >
                Back
              </Button>
            ) : (
              <></>
            )}
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                borderRadius: "5px",
                backgroundColor: "secondary.light",
                ":hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              {activeStep === steps.length - 1 ? "Done" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
