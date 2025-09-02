import { CheckCircle } from "lucide-react";

const Status = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-light">
      <div className="text-center">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
        <h1 className="text-display mb-2">Sistema Operacional</h1>
        <p className="text-body text-surface-medium">LFCOM - Status: OK</p>
        <p className="text-caption text-surface-medium mt-4">
          {new Date().toLocaleString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default Status;