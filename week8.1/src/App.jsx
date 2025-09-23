export default function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>div 1</div>
        <div style={{ backgroundColor: "green" }}>div 2</div>
        <div style={{ backgroundColor: "blue" }}>div 3</div>
      </div>

      <div className="flex justify-center">
        <div style={{ backgroundColor: "red" }}>div 1</div>
        <div style={{ backgroundColor: "green" }}>div 2</div>
        <div style={{ backgroundColor: "blue" }}>div 3</div>
      </div>

      <div className="grid grid-cols-5">
        <div style={{ backgroundColor: "red" }}>div 1</div>
        <div style={{ backgroundColor: "green" }}>div 2</div>
        <div style={{ backgroundColor: "blue" }}>div 3</div>
        <div style={{ backgroundColor: "yellow" }}>div 4</div>
        <div style={{ backgroundColor: "orange" }}>div 5</div>
      </div>

      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">div 1</div>
        <div className="bg-green-500 col-span-4">div 2</div>
        <div className="bg-blue-500 col-span-1">div 3</div>
      </div>
       {/* tailwind is mobile first class so by default its mobile responisve the anything above the specific screen width would be used here sm,md, lg, xl */}
      <div className="bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-violet-500">
        hi i am here!
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500   "> children 1 </div>
        <div className="bg-blue-500   "> children 2 </div>
        <div className="bg-green-500  "> children 3 </div>
      </div>
    </div>
  );
}
