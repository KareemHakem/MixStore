import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import DialpadIcon from "@mui/icons-material/Dialpad";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import { styleIcon } from "./style";

export const Icon = {
  EmailIcon: ({ ...props }) => <EmailIcon {...props} />,
  PhoneIphoneIcon: <PhoneIphoneIcon style={styleIcon} />,
  LocationCityIcon: <LocationCityIcon style={styleIcon} />,
  HomeIcon: <HomeIcon style={styleIcon} />,
  DialpadIcon: <DialpadIcon style={styleIcon} />,
  DriveFileRenameOutlineIcon: <DriveFileRenameOutlineIcon style={styleIcon} />,
  VisibilityIcon: <VisibilityIcon style={styleIcon} />,
  AddShoppingCartIcon: <AddShoppingCartIcon style={styleIcon} />,
  FavoriteBorderIcon: <FavoriteBorderIcon style={styleIcon} />,
  FmdGoodIcon: <FmdGoodIcon style={styleIcon} />,
  PermIdentityIcon: <PermIdentityIcon style={styleIcon} />,
  CreditScoreIcon: <CreditScoreIcon style={styleIcon} />,
  CheckIcon: <CheckIcon style={styleIcon} />,
  SearchIcon: <SearchIcon style={styleIcon} />,
};
