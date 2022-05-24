interface UserProps {
  avatar: string;
  name: string;
  role: string;
  [props: string]: any;
}

export const User: React.FC<UserProps> = ({
  avatar,
  name,
  role,
  ...props
}) => (
  <div className="user display-center">
    <div className="user__img display-center">
      <img src="assets/images/img-01user.jpg" alt="taylor gaga" />
    </div>

    <p className="user-name text-primary">taylor gaga</p>

    <p className="user-role text-secondary text-capitalize">
      student
    </p>
  </div>
);
