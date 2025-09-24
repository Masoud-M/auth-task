import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

export default function Dashboard() {
  return (
    <Container>
      <Heading text="SOME PRIVATE PAGE THAT ONLY AUTHENTICATED USERS HAVE ACCESS TO" />
    </Container>
  );
}
