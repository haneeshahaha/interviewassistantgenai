import { Menu } from "lucide-react";
  
  const ToggleContainer = () => {
    return (
      <div className="block md:hidden">
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    );
  };

export default ToggleContainer;