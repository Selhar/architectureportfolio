import Logo from "../components/Logo";
import { LogoLayout, LogoSizes } from "../components/utils/enums";

export default function IndexPage() {
  return (
    <div className="bg-red-900">
      <Logo size={LogoSizes.large} type={LogoLayout.logo} />
      <Logo size={LogoSizes.small} type={LogoLayout.logoLegendaHorizontal} />
      <Logo size={LogoSizes.large} type={LogoLayout.logoLegendaVertical} />
    </div>
  );
}
