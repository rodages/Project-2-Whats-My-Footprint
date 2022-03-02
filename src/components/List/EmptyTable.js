
function EmptyTable({description}){

    return <>
        <div className='mt-4'>
        <h1 className='subtitle has-text-centered '>{description}</h1>
        <table className="column table is-half">
        <thead>
            <tr>
                <th><abbr title={`${description}`}>Order</abbr></th>
                <th>Product Name</th>
                <th><abbr title="Total Climate Footprint">Total Climate Footprint</abbr></th>
                <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                {/* <th><abbr title={`${description}`}>Order</abbr></th>
                <th>Product Name</th>
                <th><abbr title="Total Climate Footprint">Footprint</abbr></th>
                <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th> */}
            </tr>
        </tfoot>
    </table>
    </div>
    </>
    
}
export default EmptyTable