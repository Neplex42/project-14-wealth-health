import { InputText } from "primereact/inputtext";

export const RenderHeader = ({ globalFilterValue, onGlobalFilterChange, placeholder }) => {
  return (
      <div className="flex justify-content-end">
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder={placeholder} />
          </span>
      </div>
  );
};