import { Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <NavBar />
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Something wrong"}
      </Text>
    </>
  );
}

export default ErrorPage