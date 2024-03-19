import RamadanTime from "@/components/RamadanTime";
import { useRouter } from "next/router";


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
