import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [setting, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="flex flex-col border border-primary-800 min-h-[400px]">
      <DateSelector setting={setting} bookedDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
