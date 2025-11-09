import { motion } from "framer-motion";
import { CheckCircle2, Globe2, ShieldCheck, Headphones } from "lucide-react";

const WhyUs = () => {
  const perks = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "ثقة وخبرة تمتد لأكثر من 9 سنوات",
      desc: "تاريخ حافل من النجاح في استيراد السيارات من أبرز الأسواق العالمية وفق أعلى معايير الجودة.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-red-600" />,
      title: "شراكات عالمية مباشرة",
      desc: "نرتبط بعلاقات وثيقة مع وكلاء وموردين دوليين لضمان تنوع الموديلات وتوفير أفضل الأسعار.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-red-600" />,
      title: "أسعار تنافسية وجودة مضمونة",
      desc: "نوازن بين السعر والخدمة لنقدم لعملائنا قيمة حقيقية ورضا مضمون في كل صفقة.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-red-600" />,
      title: "فريق دعم فني متخصص",
      desc: "نقدم استشارات ودعماً فنياً احترافياً قبل وأثناء وبعد عملية الشراء لضمان تجربة راقية ومتكاملة.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          لماذا تختار <span className="text-red-600">الراقي الحديث</span>؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-16 text-lg"
        >
          نحن لا نبيع السيارات فقط، بل نقدم تجربة متكاملة من الثقة، الشفافية،
          والجودة التي تليق بعملائنا الكرام.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-border shadow-lg hover:shadow-red-500/20 transition"
            >
              <div className="flex justify-center mb-5">{perk.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {perk.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
