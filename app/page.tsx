import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <h1 className="font-semibold text-4xl">
        Homepage. Accessible by all users.
      </h1>
    </Container>
  );
}
