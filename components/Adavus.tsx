import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const adavusContent = [
  {
    name: "Tatta Adavu",
    description: (
      <>
        <p>
          The word <strong>Tatta</strong> literally means "to tap". In this
          adavu, we are taught the Bharatanatyam way of leg tapping. This adavu
          involves only the use of legs unlike most other adavus.
        </p>
        <p>
          As described in an earlier post <em>"More about Adavus"</em>, every
          adavu has a <strong>Bol</strong> or syllable. The Bol is used to
          provide a rhythm for the steps (like 1-2, 1-2-3 etc.) and also acts as
          a mnemonic for the steps. The Bol for Tatta adavu is{" "}
          <strong>"tai ya tai hi"</strong>.
        </p>
        <p>Click on the following links to read more on every Step.</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="#">Tatta Adavu First step</a>
          </li>
          <li>
            <a href="#">Tatta Adavu Second step</a>
          </li>
          <li>
            <a href="#">Tatta Adavu Third step</a>
          </li>
          <li>
            <a href="#">Tatta Adavu Fourth step</a>
          </li>
          <li>
            <a href="#">Tatta Adavu Fifth step</a>
          </li>
          <li>
            <a href="#">Tatta Adavu Sixth step</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Naat Adavu",
    description: (
      <>
        <p>
          "Natta" means to stretch, and so this Adavu involves some stretching
          compared to the Tatta Adavu we explored earlier. Compared to Tatta
          Adavu, the Natta Adavu also involves heel contacts of the feet. The
          word "Nattu" in Tamil refers to the "Perching of heels." So, get ready
          for some stretching and synchronization of hands and legs!
        </p>
        <p>
          The <strong>bols (sollukattu)</strong> for this Adavu is{" "}
          <strong>"tai yum tat ta tai hi ya ha"</strong>. You will notice that
          the basic leg postures used in this Adavu are{" "}
          <strong>Ardhamandal</strong> and <strong>Alidha</strong>. Ardhamandal
          was used in Tatta Adavu, and we will see the Alidha postures in the
          explanation for this Adavu.
        </p>
        <p>Steps</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="#">Natta Adavu – First Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Second Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Third Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Fourth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Fifth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Sixth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Seventh Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Eighth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Ninth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Tenth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Eleventh Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Twelfth Step</a>
          </li>
          <li>
            <a href="#">Natta Adavu – Thirteenth Step</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Visharu Adavu",
    description: (
      <>
        <p>
          Visharu Adavu involves swinging of hands in different directions,
          i.e., sideways, up, and down. Leg movements are simple and straight in
          one line. A concept of shoulder pulls is also introduced later here.
          This Adavu is also called as <strong>Mardita Adavu</strong> or{" "}
          <strong>Paraval Adavu</strong>. The mudras used are{" "}
          <strong>Alapadma</strong>, <strong>Katakamukha</strong>,{" "}
          <strong>Tripataka</strong>, and <strong>Pataka</strong>.
        </p>
        <p>
          The <strong>sollukettu</strong> or <strong>bols</strong> for this
          Adavu is <strong>"Ta Tai Tai Ta Dhit Tai Tai Ta"</strong>.
        </p>
        <p>Steps</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <a href="#">Visharu Adavu – First Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Second Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Third Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Fourth Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Fifth Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Sixth Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Seventh Step</a>
          </li>
          <li>
            <a href="#">Visharu Adavu – Eighth Step</a>
          </li>
        </ol>
      </>
    ),
  },
  {
    name: "TattiMetti Adavu",
    description: (
      <>
        <p>
          "Tatti" means to tap (like in Tatta Adavu) and "Metti" means a heel
          contact with the floor. For Metti, one must first be on the toes
          (either a jump on the toes or just striking a toe) and then flatten
          the feet while the toes are already firm on the ground. Tatti Metti is
          one of the most important adavus, and these steps are often used in{" "}
          <strong>Jatiswarams</strong> and <strong>Tillanas</strong>. I
          personally love this Adavu for its crisp movements.
        </p>
        <p>
          The <strong>sollukettu</strong> or <strong>bols</strong> for this
          Adavu is <strong>"Tat Tai Ta Ha Dhit Tai Ta Ha"</strong>. The mudra
          used in this Adavu is <strong>Tripataka</strong>.
        </p>
        <p>Steps</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="#">Tatti Metti Adavu – First Step</a>
          </li>
          <li>
            <a href="#">Tatti Metti Adavu – Second Step</a>
          </li>
          <li>
            <a href="#">Tatti Metti Adavu – Third Step</a>
          </li>
          <li>
            <a href="#">Tatti Metti Adavu – Fourth Step</a>
          </li>
          <li>
            <a href="#">Tatti Metti Adavu – Fifth Step</a>
          </li>
          <li>
            <a href="#">Tatti Metti Adavu – Sixth Step</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Teermanam Adavu",
    description: (
      <>
        <p>
          <strong>Teermanam</strong> means to conclude, an ending, or a final
          stage. Thus, the steps in these adavus are used to end a dance
          sequence or jathis. It is done in a set of three steps or repeated
          thrice. Most of the time, these steps are performed at a fast pace,
          known as <strong>Dhruta Kala</strong>.
        </p>
        <p>
          The <strong>bols</strong> or syllables of this Adavu are{" "}
          <strong>"Dhit Dhit Tai"</strong>. Some schools also use{" "}
          <strong>"Gi Na Tom"</strong>.
        </p>
        <p>
          The hand gestures used in this Adavu are <strong>Tripataka</strong>,{" "}
          <strong>Pataka</strong>, <strong>Alapadma</strong>, and{" "}
          <strong>Katakamukha</strong>.
        </p>
        <p>Steps</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="#">Teermanam Adavu – First Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Second Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Third Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Fourth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Fifth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Sixth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Seventh Step</a>
          </li>
          <li>
            <a href="#">
              Teermanam Adavu – Seventh, Eighth, and Ninth Step (Explanation)
            </a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eighth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Ninth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Tenth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eleventh Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eleventh Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Twelfth Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Twelfth Step (Video)</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Sarikal Adavu",
    description: (
      <>
        <p>
          <strong>Sarikal</strong> means to slide. Here, as one foot is lifted
          and placed, the other foot slides towards it. Then the feet take the{" "}
          <strong>Anchita</strong> position, where the feet rest on the heel.
          This position is also called <strong>Tadittam</strong>. Then both the
          feet tap together with a slight jump.
        </p>
        <p>
          The <strong>bols</strong> (syllables or sollukettu) of this Adavu are{" "}
          <strong>"Tai Ya Tai Hi"</strong> or{" "}
          <strong>"Tai Ya Tai Ya Tai Hi Tai Hi"</strong>.
        </p>
        <p>Steps</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <a href="#">Sarikal Adavu – First Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – First Step (Video)</a>
          </li>
          <li>
            <a href="#">
              Sarikal Adavu – Second, Third, and Fourth Variation (Explanation)
            </a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – Second and Third Variation (Video)</a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – Fifth Variation (Video)</a>
          </li>
        </ol>
      </>
    ),
  },
  {
    name: "KudittaMetta Adavu",
    description: (
      <>
        <p>
          <strong>Kuditta Metta</strong> refers to jumping on the toes and then
          striking the heels. The initial jump, though not very obvious, is
          crucial. Both jumping and striking the heels are executed in the{" "}
          <strong>Araimandi</strong> position. It is also known as{" "}
          <strong>Guditta Metta</strong>.
        </p>
        <p>
          I have read somewhere (cannot recollect the source) that Kuditta Metta
          is also referred to as <strong>Kutta Adavu</strong>. This may be
          because the movement of jumping on the heels is called{" "}
          <strong>Kuttanam</strong> in the Chari Bhedas (Types of Walks). Thus,
          the name Kutta Adavu. Your thoughts and opinions in this regard are
          welcome.
        </p>
        <p>
          The <strong>bols</strong> (syllables or sollukettu) of this Adavu are{" "}
          <strong>"Tai Gha, Tai Ghi"</strong>.
        </p>
        <p>Steps</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <a href="#">Kuditta Metta Adavu – First and Second Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Third and Fourth Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Fifth and Sixth Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Seventh Variation</a>
          </li>
        </ol>
      </>
    ),
  },
];

const Adavus = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-orange-600 hover:text-orange-800 mb-4"
      >
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold text-orange-800 mb-6">
        Adavus in Bharatnatyam
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {adavusContent.map((adavu, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg p-6 shadow-md flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-orange-900">
              {adavu.name}
            </h3>
            <div className="text-orange-700 mt-2 text-left">
              {adavu.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adavus;
