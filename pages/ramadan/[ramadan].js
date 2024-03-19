import RamadanTime from "@/components/RamadanTime";
import { useParams } from "next/navigation";
import { Router, useRouter } from "next/router";


const Ramadan = () => {
  const router = useRouter();
  const {ramadan} = router.query
  return (
    <div>
      <RamadanTime district={ramadan} />
    </div>
  );
};

export default Ramadan;
