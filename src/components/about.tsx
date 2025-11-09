import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(230,33,23,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.12),transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            من نحن
          </h2>
          <div className="inline-block bg-red-600/10 text-red-700 font-semibold px-5 py-2 rounded-full text-xs">
            منذ عام 2015
          </div>
          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            تأسست{" "}
            <span className="font-semibold text-foreground">
              شركة الراقي الحديث لاستيراد السيارات
            </span>{" "}
            لتكون عنواناً للتميز في عالم السيارات داخل ليبيا، حيث نسعى لتوفير
            أفضل الطرازات الحديثة من السيارات الفاخرة والعائلية والاقتصادية من
            كبرى الشركات العالمية، مع التركيز على الجودة، الموثوقية، والخدمة
            الراقية.
          </p>

          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            نؤمن في الراقي الحديث بأن السيارة ليست مجرد وسيلة نقل، بل هي تجربة
            راحة وأناقة وثقة. لذلك نحرص على تقديم خدمات متكاملة تشمل الاستيراد،
            الفحص، الضمان، والدعم بعد البيع، لنمنح عملاءنا تجربة شراء لا مثيل
            لها.
          </p>

          <a
            href="#services"
            className="px-12 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          >
            اكتشف خدماتنا
          </a>
        </motion.div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg h-[460px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)] blur-3xl rounded-full" />
            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/images/about.jpg"
                alt="شركة الراقي الحديث لاستيراد السيارات"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative lighting */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-red-500/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-black/20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
