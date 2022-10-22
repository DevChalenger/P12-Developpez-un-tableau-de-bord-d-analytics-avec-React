class mainData {
  constructor(data, setData) {
    this.id = data.id;

    this.calorieCount = data.keyData.calorieCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
    this.proteinCount = data.keyData.proteinCount;

    this.keyData = {
      calorieCount: this.calorieCount,
      carbohydrateCount: this.carbohydrateCount,
      lipidCount: this.lipidCount,
      proteinCount: this.proteinCount,
    };

    this.todayScore = data.todayScore || data.score;

    this.age = data.userInfos.age;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;

    this.userInfos = {
      age: this.age,
      firstName: this.firstName,
      lastname: this.lastName,
    };

    this.main = {
      id: this.id,
      keyData: this.keyData,
      todayScore: this.todayScore,
      userInfos: this.userInfos,
    };

    setData(this.main);
  }
}

class activityData {
  constructor(data, setData) {
    this.userId = data.userId;

    this.sessions = data.sessions.map((sessions) => {
      return {
        day: this.CustomDate(sessions.day),
        kilogram: sessions.kilogram,
        calories: sessions.calories,
      };
    });

    this.activity = {
      userId: this.userId,
      sessions: this.sessions,
    };

    setData(this.activity);
  }
  CustomDate = (data) => {
    const monthShorten = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formateDate = data.split("-");
    const monthNumber = Number(formateDate[1]);
    const returnedData = `${monthShorten[monthNumber - 1]} ${formateDate[2]}`;

    return returnedData;
  };
}

class averageSessionData {
  constructor(data, setData) {
    this.userId = data.userId;

    this.sessions = data.sessions.map((sessions) => {
      return {
        day: this.dayFormater(sessions.day),
        sessionLength: sessions.sessionLength,
      };
    });

    this.averageSession = {
      userId: this.userId,
      sessions: this.sessions,
    };

    setData(this.averageSession);
  }
  dayFormater = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return null;
    }
  };
}

class performanceData {
  constructor(data, setData) {
    this.userId = data.userId;
    this.data = data.data.map((perform) => {
      return {
        value: perform.value,
        kind: this.formatedKind(perform.kind),
      };
    });
    this.kind = data.kind;

    this.performance = {
      userId: this.userId,
      kind: this.kind,
      data: this.data,
    };

    setData(this.performance);
  }

  formatedKind = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return null;
    }
  };
}

export { mainData, activityData, averageSessionData, performanceData };
