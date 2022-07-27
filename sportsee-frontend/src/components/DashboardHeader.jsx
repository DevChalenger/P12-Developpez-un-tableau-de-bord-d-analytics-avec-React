function DashboardHeader({ firstName, lastName }) {
  return (
    <header className="dashboard-header">
      <h1 className="welcome-title">
        Bonjour <strong className="username-title">{firstName}</strong>
      </h1>
      <p className="yesterday-feat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

export default DashboardHeader;
