import { useContext } from "react";
import AuthContext from "./context";
import storage from "./storage";

const testUser = {
  _id: "645d0e29d49689779757f9d9",
  avatarURL:
    "https://storage.googleapis.com/download/storage/v1/b/taxilen-bucket/o/a0156687-486e-487b-b0ab-dce05f0c645e.jpg?generation=1684418425941443&alt=media",
  firstName: "Samer",
  lastName: "Alsaadawi",
  email: "thedev.samer@gmail.com",
  phone: {
    full: "+972597367606",
    icc: "+972",
    nsn: "597367606",
  },
  gender: "male",
  role: "driver",
  display: {
    language: "ar",
  },
  verified: {
    email: false,
    phone: false,
  },
  notifications: {
    active: true,
    list: [
      {
        title: {
          en: "You have unread notifications",
          ar: "لديك إشعارات غير مقروءة",
        },
        body: {
          en: "You have unread notifications, please check it out",
          ar: "لديك إشعارات غير مقروءة، يرجى تفحّصها",
        },
        photoURL: "",
        seen: false,
        date: "2023-05-11T17:37:48.446Z",
        data: {
          screen: "notifications",
          id: "",
        },
      },
      {
        title: {
          en: "We miss you!",
          ar: "نحن نفتقدك!",
        },
        body: {
          en: "Hello, it seems like you haven't been using our app lately. We wanted to remind you that there are new features and updates that you might be interested in. We'd love to see you back on the app and using its features! If you have any feedback or suggestions for us, we'd love to hear from you. Thank you for being a valued user",
          ar: "مرحبًا، يبدو أنك لم تستخدم تطبيقنا مؤخرًا. أردنا أن نذكرك بأن هناك ميزات وتحديثات جديدة قد تكون مهتمًا بها. نود أن نراك مرة أخرى على التطبيق واستخدام ميزاته! إذا كان لديك أي ملاحظات أو اقتراحات لنا، يسعدنا أن نسمع منك. شكرا لكونك مستخدم قيم",
        },
        photoURL: "",
        seen: false,
        date: "2023-05-11T17:37:38.437Z",
        data: {
          screen: "home",
          id: "",
        },
      },
    ],
  },
  balance: 5,
  referral: {
    number: 1,
    code: "638de23b3dc4b1",
  },
  isConnected: false,
  lastLogin: "2023-05-11T15:47:53.286Z",
};

const useAuth = () => {
  const { user, setUser, isOnline, displayMode, setDisplayMode } =
    useContext(AuthContext);

  const login = async () => {
    try {
      const user = testUser;
      setUser(user);
      setDisplayMode(user.role);
      // await storage.storeToken("token");
    } catch (err) {}
  };

  const logout = async () => {
    try {
      // await storage.removeToken();
      setUser(null);
    } catch (err) {}
  };

  const switchToPassenger = () => {
    try {
      if (user?.role === "driver") {
        setDisplayMode("passenger");
      }
    } catch (err) {}
  };

  const returnToDriver = () => {
    try {
      if (user?.role === "driver") {
        setDisplayMode("driver");
      }
    } catch (err) {}
  };

  return {
    user,
    login,
    logout,
    isOnline,
    displayMode,
    switchToPassenger,
    returnToDriver,
  };
};

export default useAuth;
