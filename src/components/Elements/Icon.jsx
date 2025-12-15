import OverviewSVG from "../../assets/icon/overview.svg?react";
import TransactionSVG from "../../assets/icon/transaction.svg?react";
import BalanceSVG from "../../assets/icon/wallet.svg?react";
import BillSVG from "../../assets/icon/bill.svg?react";
import ExpenseSVG from "../../assets/icon/expences.svg?react"; // typo tapi cocok
import GoalSVG from "../../assets/icon/goal.svg?react";
import SettingSVG from "../../assets/icon/settings.svg?react";
import DetailSVG from "../../assets/icon/icon.svg?react";
import ChevronRightSVG from "../../assets/icon/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icon/icon2.svg?react";

const withIconProps =
  (Svg) =>
  ({ size = 24, color = "currentColor", className = "", ...props }) =>
    (
      <Svg
        width={size}
        height={size}
        stroke={color}
        className={className}
        {...props}
      />
    );

const Icon = {
  Overview: withIconProps(OverviewSVG),
  Transaction: withIconProps(TransactionSVG),
  Balance: withIconProps(BalanceSVG),
  Bill: withIconProps(BillSVG),
  Expense: withIconProps(ExpenseSVG),
  Goal: withIconProps(GoalSVG),
  Setting: withIconProps(SettingSVG),
  Detail: withIconProps(DetailSVG),
  ChevronRight: withIconProps(ChevronRightSVG),
  Logout: withIconProps(LogoutSVG),
};

export default Icon;
