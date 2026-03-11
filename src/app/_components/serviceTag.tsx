
type ServiceTagProps = {
  text: string
};

const ServiceTag: React.FC<ServiceTagProps> = ({ text }) => {
  return (
    <div className="py-0.5 px-2.5 bg-background-muted rounded-2xl
                    font-medium text-sm text-text-secondary"
    >
      {text}
    </div>
  );
};

export default ServiceTag;