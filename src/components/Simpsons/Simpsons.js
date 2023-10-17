import Simpson from "../Simpson/Simpson";

function Simpsons({items:simpsons}) {



    return (
        <div>

            {
                simpsons.map((value, index) => (<Simpson item={value} key={index}/>))
            }

        </div>
    );
}

export default Simpsons;