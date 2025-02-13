const ContactSection = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-xl mb-4">Email: info@desawisata.com</p>
          <p className="text-xl mb-4">Telepon: +62 </p>
        </div>
      </section>
    );
  };
  
  export default ContactSection;