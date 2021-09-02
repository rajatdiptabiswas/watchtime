import Image from 'next/image';
import StreamingServiceDetails from './../data/StreamingServiceDetails';

interface StreamingServiceToggleButtonProps {
  service: string;
  streamingServicesState: { [service: string]: boolean };
  updateStreamingServices: (service: string) => void;
}

export default function StreamingServiceToggleButton({
  service,
  streamingServicesState,
  updateStreamingServices,
}: StreamingServiceToggleButtonProps) {
  return (
    <button
      style={{
        backgroundColor: streamingServicesState[service]
          ? StreamingServiceDetails[service].color
          : undefined,
      }}
      className="bg-gray-800 rounded shadow-md px-8 md:px-12 py-6 md:py-8 cursor-pointer"
      onClick={() => updateStreamingServices(service)}
    >
      <div className="relative h-10 md:h-12 w-40 md:w-48">
        <Image
          src={
            '/streaming-service-logos' + StreamingServiceDetails[service].logo
          }
          alt="logo"
          sizes="100%"
          layout="fill"
        />
      </div>
    </button>
  );
}
