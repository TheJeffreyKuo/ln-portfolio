export interface Project {
  slug: string;
  title: string;
  image: string;
  category: string;
  description: string;
  specs?: { label: string; value: string }[];
  images: { src: string; caption: string }[];
}

export const projects: Project[] = [
  {
    slug: "thermal-imaging",
    title: "Multi-Sensor Thermal Imaging Platform (in progress)",
    image: "/images/thermal-sensor.jpg",
    category: "Embedded Systems",
    description:
      "A hardware instrument for real-time thermal imaging of electronics and PCBs, inspired by techniques used in semiconductor failure analysis. Built around a Raspberry Pi 5, the system combines a Pi Camera Module 3 and MLX90640 infrared thermal camera for sensor fusion. So far the Pi has been configured with remote SSH access and port forwarding, and the MLX90640 has been connected over I2C. Next steps include wiring the remaining sensors, designing a 3D printed housing in AutoCAD, and streaming live thermal data to a web dashboard built in collaboration with a software partner.",
    specs: [
      { label: "Sensors",       value: "MLX90640 thermal array, BME280 (temp/humidity/pressure), VL53L7CX ToF distance sensor, Pi Camera Module 3" },
      { label: "Communication", value: "I2C" },
      { label: "Platform",      value: "Raspberry Pi 5, Debian Linux" },
      { label: "Design",        value: "AutoCAD housing (in progress)" },
      { label: "Interface",     value: "React web dashboard (in progress)" },
    ],
    images: [
      { src: "/images/thermal-closeup.jpg",     caption: "MLX90640 infrared thermal camera module" },
    ],
  },
    {
    slug: "pi-hole",
    title: "DNS Sinkhole",
    image: "/images/dns-sinkhole.jpg",
    category: "Network Administration",
    description:
      "Built a Raspberry Pi based DNS Sinkhole which intercepts DNS queries from unwanted domains and returns a controlled IP address instead of the actual destination. This allows things like pop-up ads to be blocked for all devices on a network.",
    specs: [
      { label: "Hardware",       value: "Raspberry Pi Zero, 5V 2.5A Power Supply, Ethernet to Micro USB Adapter, 32GB Micro SD" },
      { label: "Software", value: "Pi-hole" },
      { label: "Network config",      value: "Static IP assignment, router-level DHCP configuration" },
      { label: "Coverage",        value: "Network-wide ad and domain blocking for all connected devices" },
    ],
    images: [
      { src: "/images/sinkhole-pi.jpg",     caption: "Raspberry Pi Zero with Pi-hole installed" },
    ],
  },
  {
    slug: "ECG-Monitor",
    title: "ECG Analog Circuit",
    image: "/images/ecg-circuit.jpg",
    category: "Circuit Design",
    description:
      "Designed and built an analog ECG signal acquisition circuit using an instrumentation amplifier with tuned high and low pass filters to amplify and condition a biosignal while suppressing noise and improving signal clarity.",
    specs: [
      { label: "Filters",       value: "Tuned high and low pass filters (this section is in progress)" },
    ],
    images: [
      { src: "/images/unfiltered-ecg.jpg",     caption: "Oscilloscope trace of the full unfiltered ECG signal" },
      { src: "/images/filtered-ecg.jpg",     caption: "Oscilloscope trace of the full filtered ECG signal" },
      { src: "/images/unfiltered-enhanced.jpg",     caption: "This signal contains noticeably more noise compared to the filtered signal" },
      { src: "/images/filtered-enhanced.jpg",     caption: "This signal is noticeably smoother than the unfiltered signal" },
    ],
  },
];
