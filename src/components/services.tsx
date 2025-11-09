import { motion } from "framer-motion";
import ServiceSection from "./service-section";

const Service = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(42,44,111,0.08),transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 relative z-10 text-center py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          خدماتنا <span className="text-red-600">المميزة</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed"
        >
          نقدم حلولاً متكاملة لاستيراد السيارات من الخارج، تشمل جميع المراحل من
          اختيار السيارة المثالية إلى تسليمها بين يديك بثقة واحترافية عالية.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 mx-auto h-[3px] bg-red-600 rounded-full"
        />
      </div>

      <div className="relative z-10">
        <ServiceSection
          id="custom-import"
          title="استيراد السيارات حسب الطلب"
          description="نوفر خدمة استيراد السيارات وفق المواصفات التي يختارها العميل — من الماركة والموديل إلى اللون والمزايا التقنية، من الأسواق الأوروبية والآسيوية والأمريكية."
          image="/services/service-1.jpg"
          color="rgba(202,56,51,0.9)"
        />

        <ServiceSection
          id="inspection"
          title="الفحص والشحن الدولي"
          description="نقوم بإجراء فحص دقيق قبل الشحن بالتعاون مع مراكز معتمدة لضمان الحالة المثالية للسيارة، ثم نؤمن شحنها عبر خطوط النقل البحري والجوي بأعلى معايير الأمان."
          image="/services/service-2.webp"
          color="rgba(42,44,111,0.9)"
          reversed
        />

        <ServiceSection
          id="clearance"
          title="التخليص الجمركي والتسليم المحلي"
          description="نتولى جميع إجراءات الجمارك والاستيراد في ليبيا لتصل سيارتك إلى بابك دون عناء، مع توفير حلول توصيل سريعة وآمنة داخل المدن الليبية."
          image="/services/service-3.jpg"
          color="rgba(202,56,51,0.9)"
        />

        <ServiceSection
          id="warranty"
          title="الضمان وخدمة ما بعد البيع"
          description="نقدم لعملائنا الثقة المستمرة عبر ضمانات حقيقية وخدمات ما بعد البيع تشمل الفحص والدعم الفني لضمان رضاك الكامل بعد الشراء."
          image="/services/service-4.jpg"
          color="rgba(42,44,111,0.9)"
          reversed
        />
      </div>
    </section>
  );
};

export default Service;
