import { StyledSearch } from "../styled-components/styled";
interface Props {
  setUserInput:React.Dispatch<React.SetStateAction<string>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  submit:boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  theme:boolean;
}
const Search: React.FC<Props> =  ({ setUserInput, setSubmit, submit, setTheme, theme }) => {
 
  

    return (
     <div>

        <div className="w-[720px] flex justify-between items-center mt-[144px]">
            <h1  className={theme ? "text-[#f1f1f2] text-[26px] font-[700]"  : "text-[#222731] text-[26px] font-[700]"}>devfinder</h1>

            <section className="w-full flex justify-end items-center gap-2">

                <span className="text-[#697C9A] font-[700] text-[13px] tracking-[2.5px] mr-[10px] hover:cursor-pointer"
                 onClick={() => setTheme(!theme)}>DARK</span>
                <img src="/assets/icon-moon.svg" alt="" onClick={() => setTheme(!theme)}/>

            </section>

        </div>
      <StyledSearch onChange={(e) =>  setUserInput(e.target.value)}>
      </StyledSearch>
      <img src="/assets/icon-search.svg" 
      className="absolute top-[238px] left-[387px]"
       alt="search icon" />
      <button className="bg-[#0079FF] w-[106px] h-[50px] absolute 
      top-[229px] right-[365px] text-white rounded-[10px] hover:cursor-pointer "
       onClick={() => setSubmit(!submit)} >Search</button>
        </div>
    );
};
export default Search;
