
export default function Pagination() {
    return (
        <>
            <div className="join text-mainColor flex gap-6">
                <button className="join-item btn bg-[#F5F5F5] border border-amber-50 text-mainColor flex gap-1">« Previous</button>
                <div >
                    <button className="join-item btn btn-error border border-amber-50">1</button>
                    <button className="join-item btn bg-[#FFFFFF] text-mainColor border border-amber-50">2</button>
                    <button className="join-item btn bg-[#FFFFFF] text-mainColor border border-amber-50">3</button>
                    <button className="join-item btn bg-[#FFFFFF] text-mainColor border border-amber-50">...</button>
                </div>
                <button className="join-item  btn bg-[#F5F5F5]  flex gap-1  text-mainColor border border-amber-50"> Next »</button>
            </div>
        </>
    )
}
