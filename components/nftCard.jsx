import {CopyClipboard} from "../components/copyToClipboard"

export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length-4)}</p>
                <p className="text-gray-600" >Contract Address: {`${nft.contract.address.substr(0, 6)}...${nft.contract.address.substr(nft.contract.address.length -4)}`}
                <CopyClipboard onClick />
                </p>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description?.substr(0, 100)}</p>
            </div>
        </div>
        <div className={"disabled:bg-slate-600 text-white bg-blue-400 px-2 py-2 mt-3 rounded-sm w-1/2"}>
            <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} > View on etherscan </a>
        </div>

    </div>
    )
}