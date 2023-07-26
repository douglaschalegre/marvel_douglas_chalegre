import { ReactElement, ComponentType } from 'react';

interface IconProps {
  icon: ComponentType<any>;
  size?: string;
  color?: string;
  className?: string;
}

const Icon = ({
  icon: IconComponent,
  size = '1em',
  color = 'currentColor',
  className = '',
}: IconProps): ReactElement => {
  return <IconComponent className={`text-${color} ${className}`} size={size} />;
};

export default Icon;
