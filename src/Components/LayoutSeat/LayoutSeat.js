
import BarBookingMobile from "../BarBookingMobile/BarBookingMobile"

const LayoutSeats = ({ seatsChoosed, dataSeatCinema, dataSeatsBooked, dataSeatsUserChoosing, getSeatStandardChoosing, getSeatCoupleChoosing }) => {

    const dataStandard = dataSeatCinema[0]
    const dataStandardCouple = dataSeatCinema[1]

    const fillPositonSeats = (seatColunm, columnCount, areaCategoryCode, name) => {
        const column = [...Array(columnCount)]
        seatColunm.forEach((col, i) => {
            column[col.position.columnIndex] = { id: col.id, areaCategoryCode, name }
        })
        return column
    }
    console.log(">>>>>>>>>", seatsChoosed);
    const createSeatsStructure = (dataStandard, fillPositonSeats) => {
        const seatsStructure = {}
        dataStandard.rows.forEach((row, i) => {
            if (row.physicalName) {
                seatsStructure[`${row.physicalName}`] = fillPositonSeats(row.seats, dataStandard.columnCount, dataStandard.areaCategoryCode, row.physicalName)
            }
            else {
                seatsStructure[`_${i}`] = [...Array(dataStandard.columnCount)]
            }
        })
        return seatsStructure
    }
    const result = createSeatsStructure(dataStandard, fillPositonSeats)
    const resultCouple = createSeatsStructure(dataStandardCouple, fillPositonSeats)

    return (
        <>
            {dataSeatCinema &&
                <section className='overflow-hidden'>
                    <table className='text-sm overflow-scroll md:mx-0 mx-2'>
                        <tbody>
                            {console.log(Object.keys(resultCouple))}
                            {Object.keys(resultCouple).reverse().map((seatName, i) => <tr key={i} className=''>
                                <td className='w-7 text-center font-medium md:text-lg text-sm pr-5'>{seatName}</td> {resultCouple[seatName].map((seat, j) => {
                                    if (seat) {
                                        if (seat.id % 2 == 1) return <td colSpan={2} className='' key={j}><p onClick={() => { getSeatCoupleChoosing(`${seat.name}${seat.id}-${seat.name}${seat.id * 1 + 1}`); }} style={{ margin: "2px" }}
                                            className={`border-2 border-solid text-center rounded flex justify-around cursor-pointer
                                        hover:bg-orange-500 hover:border-orange-500
                                        ${dataSeatsBooked.includes(`${seat.name}${seat.id}-${seat.name}${seat.id * 1 + 1}`) ? "pointer-events-none bg-zinc-500 text-transparent border-zinc-500" : undefined}
                                        ${seatsChoosed.couple.includes(`${seat.name}${seat.id}-${seat.name}${seat.id * 1 + 1}`) ? "border-orange-500 bg-orange-500 text-white font-semibold" : "border-blue-500 hover:text-white"}`
                                            }>
                                            <span className="md:text-base text-xs">{seat.id}</span><span className="md:text-base text-xs">{seat.id * 1 + 1}</span></p>
                                        </td>
                                    }
                                    else return <td className='  invisible' key={j}> <p style={{ margin: "2px" }} className=''>{"-"}</p></td>
                                })}
                                <td className={` text-center font-medium md:text-lg text-sm pl-5 ${seatName.includes("_") ? "invisible" : undefined}`} >{seatName}</td>
                            </tr>)}
                            {Object.keys(result).map((seatName, i) => <tr key={i} className=''>
                                <td className={` text-center font-medium md:text-lg text-sm pr-5 w-7 h-7 ${seatName.includes("_") ? "invisible" : undefined}`}>{seatName}</td>
                                {result[seatName].map((seat, j) => {
                                    if (seat) return <td className=' w-7 h-7' key={j}><p onClick={() => {
                                        getSeatStandardChoosing(

                                            `${seat.name}${seat.id}`
                                        );
                                    }} style={{ margin: "2px" }} className={`border-2 border-solid text-center rounded cursor-pointer md:text-lg text-xs
                                            ${seatsChoosed.standard.includes(`${seat.name}${seat.id}`) ? "border-orange-500 bg-orange-500 text-white font-semibold" : "border-zinc-500 "}
                                            ${dataSeatsBooked.includes(`${seat.name}${seat.id}`) ? "pointer-events-none bg-zinc-500 text-transparent" : undefined}`}>{seat.id}</p></td>
                                    else return <td className=' invisible  w-7 h-7' key={j}><p style={{ margin: "2px" }} className='border-2 border-solid border-zinc-500 text-center rounded'>{"-"}</p></td>
                                })}
                                <td className={`w-7 h-7 text-center font-medium pl-5 ${seatName.includes("_") ? "invisible" : undefined}`}>{seatName}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </section>
            }

        </>

    );
}



export default LayoutSeats