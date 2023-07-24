import { FC } from "react";
import styled from "styled-components";

interface StyleButtonProps {
  backgroundColor: string;
  borderColor: string;
  color: string;
  fontSize: string;
  borderRadius: string;
  height: string;
  padding: string;
  fontWeight: number;
  jsContent: string;
  alignItems: string;
  mt: string;
  mb: string;
  ml: string;
  mr: string;
}
interface Props {
  onClick: () => void;
  renderIcon: JSX.Element;
  fullWidth: boolean;
  style: Partial<StyleButtonProps>;
  isLoading: boolean;
  [rest: string]: any;
}

export const StyledButton = styled.button<{
  style?: Partial<StyleButtonProps>;
  fullWidth?: boolean;
}>`
  background-color: ${(props) => props.style?.backgroundColor || "#0f89d4"};
  border-color: ${(props) => props.style?.borderColor || "#58cde5"};
  color: ${(props) => props.style?.color || "#fff"};
  display: flex;
  align-items: ${({ style }) => style?.alignItems || "center"};
  justify-content: ${({ style }) => style?.jsContent || "center"};
  font-size: ${(props) => props.style?.fontSize || "14px"};
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.5px;
  font-family:  system-ui,  sans-serif;
  cursor: pointer;
  border: ${(props) => props.style?.border || "1px solid transparent"};
  border-radius: ${(props) => props.style?.borderRadius || "8px"};
  height: ${(props) => props.style?.height || "40px"};
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  padding: ${(props) => props.style?.padding || "0 14px"};
  font-weight: ${(props) => props.style?.fontWeight || 700};
  margin-top: ${(props) => props.style?.mt || ""};
  margin-bottom: ${(props) => props.style?.mb || ""};
  margin-left: ${(props) => props.style?.ml || ""};
  margin-right: ${(props) => props.style?.mr || ""};
`;
export const StyledLoading = styled.div`
  padding: 30px;
`;
export const Wrapper = styled.div``;

export const Button: FC<Partial<Props>> = ({
  onClick,
  children,
  renderIcon,
  style,
  fullWidth,
  isLoading,
  ...rest
}) => {
  return (
    <Wrapper>
      <StyledButton
        disabled={isLoading}
        fullWidth={fullWidth}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {!isLoading ? (
          <>
            {renderIcon}
            {children}
          </>
        ) : (
          <StyledLoading></StyledLoading>
        )}
      </StyledButton>
    </Wrapper>
  );
};
