import React from "react";
import { Box } from "../generated/graphql";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import NewItemModal from "./modals/NewItemModal";
import EditItemModal from "./EditItemModal";
import EditBoxModal from "./EditBoxModal";
import { Button } from "./ui/button";
import { QRCodeCanvas } from "qrcode.react";

type BoxCardProps = {
  box: Box;
};

const BoxCard: React.FC<BoxCardProps> = ({ box }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const downloadQRCode = () => {
    const canvas = document.getElementById("qrcode") as HTMLCanvasElement;
    if (!canvas) throw new Error("Canvas not found");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${box.name}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex w-11/12 flex-col rounded-md bg-white p-2 shadow-md">
      <div className="flex">
        <h1 className="text-lg text-gray-700">{box.name}</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">
            number of items: {box.items?.length}
          </p>
          <p className="text-sm text-gray-500">{box.description}</p>
        </div>
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <EditBoxModal box={box} />
          <NewItemModal />
          <QRCodeCanvas
            className=""
            id="qrcode"
            value={`${import.meta.env.VITE_APP_HOSTED_DOMAIN_NAME}/box/${
              box.id
            }}`}
            size={300}
            includeMargin={true}
          />
          <Button onClick={downloadQRCode}>Download QR for box</Button>
        </div>
      </div>
      <Collapsible>
        <CollapsibleTrigger onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <div className="flex items-center gap-2">
              <p className="text-md text-gray-500">Items</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mt-2 h-6 w-6 cursor-pointer text-gray-500 hover:opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <p className="text-md text-gray-500">Items</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-2 h-6 w-6 cursor-pointer text-gray-500 hover:opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Box</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {box.items?.map((item) => (
                <TableRow key={item!.id}>
                  <TableCell className="font-medium">{item?.name}</TableCell>
                  <TableCell>{item?.quantity}</TableCell>
                  <TableCell className="text-right">
                    <EditItemModal item={item!} boxId={box.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end pt-4"></div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default BoxCard;
