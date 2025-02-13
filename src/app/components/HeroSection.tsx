const HeroSection = () => {
    return (
      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold">Selamat Datang di Desa Wisata</h1>
        </div>
      </section>
    );
  };
  
  export default HeroSection;