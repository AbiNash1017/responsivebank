import { clients } from "../constants/Index";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((clients)=>(
        <div key={clients.id} className={`flex-1 ${styles.flexCenter}  sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={clients.logo} alt="clients" className="sm:w-[192px] w-[100px] object-contain  hover:invert ease-in-out cursor-pointer" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
