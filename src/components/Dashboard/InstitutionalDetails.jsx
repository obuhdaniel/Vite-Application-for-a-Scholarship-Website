import React from "react";
import DashboardLayout from "./DashboardLayout";
import "./styles/institution.css";

const INstitutionalDetails = () => {
  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="top">
          <h3>Institutional Details</h3>
          <p>
            Application Status: <span className="pending">Pending</span>
          </p>
        </div>
        <form className="institution-form">
          <div className="form-group">
            <label>Name of Institution</label>
            <select>
              <option value="" disabled selected>
                Select Institution
              </option>
              <option value="3">ABIA STATE UNIVERSITY, UTURU</option>
              <option value="4">
                ABUBAKAR TAFAWA BALEWA UNIVERSITY, BAUCHI
              </option>
              <option value="5">ACHIEVERS UNIVERSITY, OWO</option>
              <option value="6">ADAMAWA STATE UNIVERSITY MUBI</option>
              <option value="7">ADEKUNLE AJASIN UNIVERSITY, AKUNGBA</option>
              <option value="8">ADELEKE UNIVERSITY, EDE</option>
              <option value="9">ADMIRALTY UNIVERSITY, IBUSA DELTA STATE</option>
              <option value="10">
                AFE BABALOLA UNIVERSITY, ADO-EKITI – EKITI STATE
              </option>
              <option value="11">
                AFRICAN UNIVERSITY OF SCIENCE &amp; TECHNOLOGY, ABUJA
              </option>
              <option value="12">AHMADU BELLO UNIVERSITY, ZARIA</option>
              <option value="13">AHMAN PATEGI UNIVERSITY, KWARA STATE</option>
              <option value="14">
                AIR FORCE INSTITUTE OF TECHNOLOGY, KADUNA
              </option>
              <option value="15">AJAYI CROWTHER UNIVERSITY, IBADAN</option>
              <option value="16">
                AKWA IBOM STATE UNIVERSITY, IKOT AKPADEN
              </option>
              <option value="17">AL-ANSAR UNIVERSITY, MAIDUGURI, BORNO</option>
              <option value="18">
                ALEX EKWUEME UNIVERSITY, NDUFU-ALIKE, EBONYI STATE
              </option>
              <option value="19">AL-HIKMAH UNIVERSITY, ILORIN</option>
              <option value="20">
                AL-ISTIQAMA UNIVERSITY, SUMAILA, KANO STATE
              </option>
              <option value="21">AL-QALAM UNIVERSITY, KATSINA</option>
              <option value="22">AMBROSE ALLI UNIVERSITY, EKPOMA</option>
              <option value="23">AMERICAN UNIVERSITY OF NIGERIA, YOLA</option>
              <option value="24">ANAN UNIVERSITY, KWALL, PLATEAU STATE</option>
              <option value="25">ANCHOR UNIVERSITY AYOBO LAGOS STATE</option>
              <option value="26">
                ARTHUR JAVIS UNIVERSITY AKPOYUBO CROSS RIVER STATE
              </option>
              <option value="27">ATIBA UNIVERSITY, OYO</option>
              <option value="28">AUGUSTINE UNIVERSITY</option>
              <option value="29">
                AVE MARIA UNIVERSITY, PIYANKO, NASARAWA STATE
              </option>
              <option value="30">BABA AHMED UNIVERSITY, KANO STATE</option>
              <option value="31">BABCOCK UNIVERSITY, ILISHAN-REMO</option>
              <option value="32">
                BAMIDELE OLUMILUA UNIVERSITY OF SCIENCE AND TECHNOLOGY IKERE,
                EKITI STATE
              </option>
              <option value="33">BAUCHI STATE UNIVERSITY, GADAU</option>
              <option value="34">BAYELSA MEDICAL UNIVERSITY</option>
              <option value="35">BAYERO UNIVERSITY, KANO</option>
              <option value="36">BAZE UNIVERSITY</option>
              <option value="37">BELLS UNIVERSITY OF TECHNOLOGY, OTTA</option>
              <option value="38">BENSON IDAHOSA UNIVERSITY, BENIN CITY</option>
              <option value="39">BENUE STATE UNIVERSITY, MAKURDI</option>
              <option value="40">BINGHAM UNIVERSITY, NEW KARU</option>
              <option value="41">BORNU STATE UNIVERSITY, MAIDUGURI</option>
              <option value="42">BOWEN UNIVERSITY, IWO</option>
              <option value="43">CALEB UNIVERSITY, LAGOS</option>
              <option value="44">CAPITAL CITY UNIVERSITY, KANO STATE</option>
              <option value="45">CARITAS UNIVERSITY, ENUGU</option>
              <option value="46">CHRISLAND UNIVERSITY</option>
              <option value="47">CHRISTOPHER UNIVERSITY, MOWE</option>
              <option value="48">
                CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY, ULI
              </option>
              <option value="49">
                CLARETIAN UNIVERSITY OF NIGERIA, NEKEDE, IMO STATE
              </option>
              <option value="50">
                CLIFFORD UNIVERSITY OWERRINTA ABIA STATE
              </option>
              <option value="51">COAL CITY UNIVERSITY ENUGU STATE</option>
              <option value="52">
                CONFLUENCE UNIVERSITY OF SCIENCE AND TECHNOLOGY OSARA, KOGI
              </option>
              <option value="53">COVENANT UNIVERSITY OTA</option>
              <option value="54">CRAWFORD UNIVERSITY IGBESA</option>
              <option value="55">CRESCENT UNIVERSITY</option>
              <option value="56">
                CROSS RIVER STATE UNIVERSITY OF TECHNOLOGY, CALABAR
              </option>
              <option value="57">
                CROWN HILL UNIVERSITY EIYENKORIN, KWARA STATE
              </option>
              <option value="58">DELTA STATE UNIVERSITY ABRAKA</option>
              <option value="59">
                DELTA STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY, OZORO
              </option>
              <option value="60">DENNIS OSADEBE UNIVERSITY, ASABA</option>
              <option value="61">DOMINICAN UNIVERSITY IBADAN OYO STATE</option>
              <option value="62">DOMINION UNIVERSITY IBADAN, OYO STATE</option>
              <option value="63">EBONYI STATE UNIVERSITY, ABAKALIKI</option>
              <option value="64">EDO STATE UNIVERSITY UZAIRUE</option>
              <option value="65">EDUSOKO UNIVERSITY, BIDA, NIGER STATE</option>
              <option value="66">EDWIN CLARK UNIVERSITY, KAIGBODO</option>
              <option value="67">EKITI STATE UNIVERSITY</option>
              <option value="68">
                EKO UNIVERSITY OF MEDICAL AND HEALTH SCIENCES IJANIKIN, LAGOS
              </option>
              <option value="69">ELIZADE UNIVERSITY, ILARA-MOKIN</option>
              <option value="70">
                ENUGU STATE UNIVERSITY OF MEDICAL AND APPLIED SCIENCES, IGBO-ENO
              </option>
              <option value="71">
                ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY, ENUGU
              </option>
              <option value="72">
                EUROPEAN UNIVERSITY OF NIGERIA, DUBOYI FCT ABUJA
              </option>
              <option value="73">EVANGEL UNIVERSITY, AKAEZE</option>
              <option value="74">FEDERAL UNIVERSITY GASHUA, YOBE</option>
              <option value="75">
                FEDERAL UNIVERSITY OF AGRICULTURE, ABEOKUTA
              </option>
              <option value="76">
                FEDERAL UNIVERSITY OF AGRICULTURE, ZURU, KEBBI STATE
              </option>
              <option value="77">
                FEDERAL UNIVERSITY OF HEALTH SCIENCES, AZARE, BAUCHI STATE
              </option>
              <option value="78">
                FEDERAL UNIVERSITY OF HEALTH SCIENCES, ILA ORANGUN, OSUN STATE
              </option>
              <option value="79">
                FEDERAL UNIVERSITY OF HEALTH TECHNOLOGY, OTUKPO BENUE STATE
              </option>
              <option value="80">
                FEDERAL UNIVERSITY OF PETROLEUM RESOURCES, EFFURUN
              </option>
              <option value="81">
                FEDERAL UNIVERSITY OF TECHNOLOGY, AKURE
              </option>
              <option value="82">
                FEDERAL UNIVERSITY OF TECHNOLOGY, BABURA, JIGAWA STATE
              </option>
              <option value="83">
                FEDERAL UNIVERSITY OF TECHNOLOGY, IKOT ABASI, AKWA IBOM STATE
              </option>
              <option value="84">
                FEDERAL UNIVERSITY OF TECHNOLOGY, MINNA
              </option>
              <option value="85">
                FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI
              </option>
              <option value="86">FEDERAL UNIVERSITY, BIRNIN KEBBI</option>
              <option value="87">
                FEDERAL UNIVERSITY, DUTSE, JIGAWA STATE
              </option>
              <option value="88">FEDERAL UNIVERSITY, DUTSIN-MA, KATSINA</option>
              <option value="89">FEDERAL UNIVERSITY, GUSAU ZAMFARA</option>
              <option value="90">
                FEDERAL UNIVERSITY, KASHERE, GOMBE STATE
              </option>
              <option value="91">
                FEDERAL UNIVERSITY, LAFIA, NASARAWA STATE
              </option>
              <option value="92">FEDERAL UNIVERSITY, LOKOJA, KOGI STATE</option>
              <option value="93">FEDERAL UNIVERSITY, OTUOKE, BAYELSA</option>
              <option value="94">
                FEDERAL UNIVERSITY, OYE-EKITI, EKITI STATE
              </option>
              <option value="95">
                FEDERAL UNIVERSITY, WUKARI, TARABA STATE
              </option>
              <option value="96">FOUNTAIN UNVERISTY, OSHOGBO</option>
              <option value="97">
                GODFREY OKOYE UNIVERSITY, UGWUOMU-NIKE – ENUGU STATE
              </option>
              <option value="98">GOMBE STATE UNIVERISTY, GOMBE</option>
              <option value="99">
                GOMBE STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY
              </option>
              <option value="100">GREENFIELD UNIVERSITY, KADUNA</option>
              <option value="101">GREGORY UNIVERSITY, UTURU</option>
              <option value="102">
                HALLMARK UNIVERSITY, IJEBI ITELE, OGUN
              </option>
              <option value="103">
                HAVILLA UNIVERSITY, NDE-IKOM, CROSS RIVER STATE
              </option>
              <option value="104">HEZEKIAH UNIVERSITY, UMUDI</option>
              <option value="105">
                IBRAHIM BADAMASI BABANGIDA UNIVERSITY, LAPAI
              </option>
              <option value="106">IGBINEDION UNIVERSITY OKADA</option>
              <option value="107">
                IGNATIUS AJURU UNIVERSITY OF EDUCATION, RUMUOLUMENI
              </option>
              <option value="108">IMO STATE UNIVERSITY, OWERRI</option>
              <option value="109">
                JAMES HOPE UNIVERSITY, LAGOS, LAGOS STATE
              </option>
              <option value="110">
                JOSEPH AYO BABALOLA UNIVERSITY, IKEJI-ARAKEJI
              </option>
              <option value="111">KADUNA STATE UNIVERSITY, KADUNA</option>
              <option value="112">
                KANO UNIVERSITY OF SCIENCE &amp; TECHNOLOGY, WUDIL
              </option>
              <option value="113">
                KARL-KUMM UNIVERSITY, VOM, PLATEAU STATE
              </option>
              <option value="114">
                KEBBI STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY, ALIERO
              </option>
              <option value="115">
                KHADIJA UNIVERSITY, MAJIA, JIGAWA STATE
              </option>
              <option value="116">
                KHALIFA ISIYAKU RABIU UNIVERSITY, KANO
              </option>
              <option value="117">
                KING DAVID UMAHI UNIVERSITY OF MEDICAL SCIENCES, UBURU, EBONYI
                STATE
              </option>
              <option value="118">KINGS UNIVERSITY, ODE OMU</option>
              <option value="119">
                KINGSLEY OZUMBA MBADIWE UNIVERSITY OGBOKO, IMO STATE
              </option>
              <option value="120">
                KOLA DAISI UNIVERSITY IBADAN, OYO STATE
              </option>
              <option value="121">KWARA STATE UNIVERSITY, ILORIN</option>
              <option value="122">KWARARAFA UNIVERSITY, WUKARI</option>
              <option value="123">
                LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY, OGBOMOSO
              </option>
              <option value="124">
                LAGOS STATE UNIVERSITY OF EDUCATION, IJANIKIN
              </option>
              <option value="125">
                LAGOS STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY IKORODU
              </option>
              <option value="126">LAGOS STATE UNIVERSITY, OJO</option>
              <option value="127">LANDMARK UNIVERSITY, OMU-ARAN.</option>
              <option value="128">LEAD CITY UNIVERSITY, IBADAN</option>
              <option value="129">
                LEGACY UNIVERSITY, OKIJA ANAMBRA STATE
              </option>
              <option value="130">MADONNA UNIVERSITY, OKIJA</option>
              <option value="131">
                MARANATHAN UNIVERSITY, MGBIDI, IMO STATE
              </option>
              <option value="132">
                MARGARET LAWRENCE UNIVERSITY, UMUNEDE, DELTA STATE
              </option>
              <option value="133">
                MARYAM ABACHA AMERICAN UNIVERSITY OF NIGERIA, KANO STATE
              </option>
              <option value="134">
                MCPHERSON UNIVERSITY, SERIKI SOTAYO, AJEBO
              </option>
              <option value="135">
                MEWAR INTERNATIONAL UNIVERSITY, MASAKA, NASARAWA STATE
              </option>
              <option value="136">
                MICHAEL OKPARA UNIVERSITY OF AGRICULTURAL UMUDIKE
              </option>
              <option value="137">MICHEAL &amp; CECILIA IBRU UNIVERSITY</option>
              <option value="138">
                MODIBBO ADAMA UNIVERSITY OF TECHNOLOGY, YOLA
              </option>
              <option value="139">
                MOSHOOD ABIOLA UNIVERSITY OF SCIENCE AND TECHNOLOGY ABEOKUTA
              </option>
              <option value="140">MOUNTAIN TOP UNIVERSITY</option>
              <option value="141">MUDIAME UNIVERSITY, IRRUA, EDO STATE</option>
              <option value="142">NASARAWA STATE UNIVERSITY KEFFI</option>
              <option value="143">NATIONAL OPEN UNIVERSITY OF NIGERIA</option>
              <option value="144">
                NEWGATE UNIVERSITY, MINNA, NIGER STATE.
              </option>
              <option value="145">NIGER DELTA UNIVERSITY YENAGOA</option>
              <option value="146">NIGERIA POLICE ACADEMY WUDIL</option>
              <option value="147">NIGERIAN ARMY UNIVERSITY BIU</option>
              <option value="148">
                NIGERIAN BRITISH UNIVERSITY, ASA, ABIA STATE
              </option>
              <option value="149">NIGERIAN DEFENCE ACADEMY KADUNA</option>
              <option value="150">
                NIGERIAN MARITIME UNIVERSITY OKERENKOKO, DELTA STATE
              </option>
              <option value="151">NILE UNIVERSITY OF NIGERIA, ABUJA</option>
              <option value="152">NNAMDI AZIKIWE UNIVERSITY, AWKA</option>
              <option value="153">NOK UNIVERSITY, KACHIA, KADUNA STATE</option>
              <option value="154">NORTHWEST UNIVERSITY SOKOTO STATE</option>
              <option value="155">NOVENA UNIVERSITY, OGUME</option>
              <option value="156">OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE</option>
              <option value="157">OBONG UNIVERSITY, OBONG NTAK</option>
              <option value="158">
                ODUDUWA UNIVERSITY, IPETUMODU – OSUN STATE
              </option>
              <option value="159">
                OLABISI ONABANJO UNIVERSITY, AGO IWOYE
              </option>
              <option value="160">
                ONDO STATE UNIVERSITY OF MEDICAL SCIENCES
              </option>
              <option value="161">
                ONDO STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY OKITIPUPA
              </option>
              <option value="162">OSUN STATE UNIVERSITY OSOGBO</option>
              <option value="163">OYO STATE TECHNICAL UNIVERSITY IBADAN</option>
              <option value="164">
                PAMO UNIVERSITY OF MEDICAL SCIENCES, PORTHARCOURT
              </option>
              <option value="165">PAN-ATLANTIC UNIVERSITY, LAGOS</option>
              <option value="166">PAUL UNIVERSITY AWKA, ANAMBRA STATE</option>
              <option value="167">PEN RESOURCE UNIVERSITY, GOMBE</option>
              <option value="168">
                PETER UNIVERSITY, ACHINA-ONNEH ANAMBRA STATE
              </option>
              <option value="169">PHILOMATH UNIVERSITY, KUJE, ABUJA</option>
              <option value="170">PLATEAU STATE UNIVERSITY BOKKOS</option>
              <option value="171">PRECIOUS CORNERSTONE UNIVERSITY, OYO</option>
              <option value="172">
                PRINCE ABUBAKAR AUDU UNIVERSITY ANYIGBA
              </option>
              <option value="173">REDEEMER’S UNIVERSITY, EDE</option>
              <option value="174">RENAISSANCE UNIVERSITY, ENUGU</option>
              <option value="175">
                RHEMA UNIVERSITY, OBEAMA-ASA – RIVERS STATE
              </option>
              <option value="176">
                RITMAN UNIVERSITY, IKOT EKPENE, AKWA IBOM
              </option>
              <option value="177">RIVERS STATE UNIVERSITY</option>
              <option value="178">
                SAISA UNIVERSITY OF MEDICAL SCIENCES AND TECHNOLOGY, SOKOTO
                STATE
              </option>
              <option value="179">SALEM UNIVERSITY, LOKOJA</option>
              <option value="180">SAMUEL ADEGBOYEGA UNIVERSITY, OGWA.</option>
              <option value="181">
                SHEHU SHAGARI UNIVERSITY OF EDUCATION, SOKOTO
              </option>
              <option value="182">SKYLINE UNIVERSITY, KANO</option>
              <option value="183">SOKOTO STATE UNIVERSITY</option>
              <option value="184">SOUTHWESTERN UNIVERSITY, OKU OWA</option>
              <option value="185">
                SPIRITAN UNIVERSITY, NNEOCHI ABIA STATE
              </option>
              <option value="186">
                SPORTS UNIVERSITY, IDUMUJE, UGBOKO, DELTA STATE
              </option>
              <option value="187">
                SULE LAMIDO UNIVERSITY, KAFIN HAUSA, JIGAWA
              </option>
              <option value="188">SUMMIT UNIVERSITY</option>
              <option value="189">
                TAI SOLARIN UNIVERSITY OF EDUCATION IJEBU ODE
              </option>
              <option value="190">TANSIAN UNIVERSITY, UMUNYA</option>
              <option value="191">TARABA STATE UNIVERSITY, JALINGO</option>
              <option value="192">
                THOMAS ADEWUMI UNIVERSITY, OKO-IRESE, KWARA STATE
              </option>
              <option value="193">TRINITY UNIVERSITY OGUN STATE</option>
              <option value="194">
                UMAR MUSA YAR’ ADUA UNIVERSITY KATSINA
              </option>
              <option value="195">UNIVERSITY OF ABUJA, GWAGWALADA</option>
              <option value="196">
                UNIVERSITY OF AFRICA TORU ORUA, BAYELSA STATE
              </option>
              <option value="197">
                UNIVERSITY OF AGRICULTURE AND ENVIRONMENTAL SCIENCES UMUAGWO,
                IMO STATE
              </option>
              <option value="198">UNIVERSITY OF AGRICULTURE, MAKURDI</option>
              <option value="199">UNIVERSITY OF BENIN</option>
              <option value="200">UNIVERSITY OF CALABAR</option>
              <option value="201">UNIVERSITY OF DELTA, AGBOR</option>
              <option value="202">UNIVERSITY OF IBADAN</option>
              <option value="203">UNIVERSITY OF ILORIN</option>
              <option value="204">UNIVERSITY OF JOS</option>
              <option value="205">UNIVERSITY OF LAGOS</option>
              <option value="206">UNIVERSITY OF MAIDUGURI</option>
              <option value="207">UNIVERSITY OF MKAR, MKAR</option>
              <option value="208">UNIVERSITY OF NIGERIA, NSUKKA</option>
              <option value="209">UNIVERSITY OF OFFA, KWARA STATE</option>
              <option value="210">UNIVERSITY OF PORT-HARCOURT</option>
              <option value="211">UNIVERSITY OF UYO</option>
              <option value="212">USUMANU DANFODIYO UNIVERSITY</option>
              <option value="213">VERITAS UNIVERSITY, ABUJA</option>
              <option value="214">
                WELLSPRING UNIVERSITY, EVBUOBANOSA EDO STATE
              </option>
              <option value="215">WESLEY UNIVERSITY ONDO</option>
              <option value="216">
                WESTERN DELTA UNIVERSITY, OGHARA DELTA STATE
              </option>
              <option value="217">WESTLAND UNIVERSITY IWO, OSUN STATE</option>
              <option value="218">YOBE STATE UNIVERSITY, DAMATURU</option>
              <option value="219">YUSUF MAITAMA SULE UNIVERSITY KANO</option>
              <option value="220">ZAMFARA STATE UNIVERSITY</option>
              <option value="221">
                ADAMU AUGIE COLLEGE OF EDUCATION, ARGUNGU
              </option>
              <option value="222">
                ADENIRAN OGUNSANYA COLLEGE OF EDUCATION, OTTO/IJANIKIN
              </option>
              <option value="223">ADEYEMI COLLEGE OF EDUCATION, ONDO</option>
              <option value="224">
                AKWA IBOM STATE COLLEGE OF EDUCATION, AFAHANSIT
              </option>
              <option value="225">
                ALVAN IKOKU COLLEGE OF EDUCATION, OWERRI
              </option>
              <option value="226">
                AMINU SALE COLLEGE OF EDUCATION, AZARE
              </option>
              <option value="227">
                COLLEGE OF EDUCATION (TECHNICAL), LAFIAGI
              </option>
              <option value="228">COLLEGE OF EDUCATION OJU</option>
              <option value="229">COLLEGE OF EDUCATION ORO</option>
              <option value="230">COLLEGE OF EDUCATION, AROCHUKWU, ABIA</option>
              <option value="231">COLLEGE OF EDUCATION, EKIADOLOR-BENIN</option>
              <option value="232">COLLEGE OF EDUCATION, GASHUA</option>
              <option value="233">COLLEGE OF EDUCATION, GINDIRI</option>
              <option value="234">COLLEGE OF EDUCATION, HONG</option>
              <option value="235">COLLEGE OF EDUCATION, IKERE-EKITI</option>
              <option value="236">
                COLLEGE OF EDUCATION, ILA-ORANGUN, OSUN STATE
              </option>
              <option value="237">COLLEGE OF EDUCATION, KATSINA-ALA</option>
              <option value="238">COLLEGE OF EDUCATION, WAKA BIU</option>
              <option value="239">COLLEGE OF EDUCATION, WARRI</option>
              <option value="240">COLLEGE OF EDUCATION, ZING</option>
              <option value="241">
                CROSS RIVER STATE COLLEGE OF EDUCATION, AKAMPA
              </option>
              <option value="242">
                DELTA STATE COLLEGE OF PHYSICAL EDUCATION, MOSOGAR
              </option>
              <option value="243">
                DELTA STATE COLLEGE OF EDUCATION, AGBOR
              </option>
              <option value="244">
                EBONYI STATE COLLEGE OF EDUCATION, (T) IKWO
              </option>
              <option value="245">
                EDO STATE COLLEGE OF EDUCATION, IGUEBEN
              </option>
              <option value="246">
                EMMANUEL ALAYANDE COLLEGE OF EDUCATION , OYO
              </option>
              <option value="247">
                ENUGU STATE COLL. OF EDUCATION (T), ENUGU
              </option>
              <option value="248">FCT COLLEGE OF EDUCATION, ZUBA</option>
              <option value="249">
                FEDERAL COLLEGE OF EDUCATION (SPECIAL), OYO
              </option>
              <option value="250">
                FEDERAL COLLEGE OF EDUCATION (T), UMUNZE
              </option>
              <option value="251">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), POTISKUM
              </option>
              <option value="252">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), AKOKA
              </option>
              <option value="253">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), ASABA
              </option>
              <option value="254">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), BICHI
              </option>
              <option value="255">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), GOMBE
              </option>
              <option value="256">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), GUSAU
              </option>
              <option value="257">
                FEDERAL COLLEGE OF EDUCATION (TECHNICAL), OMOKU
              </option>
              <option value="258">FEDERAL COLLEGE OF EDUCATION EDO</option>
              <option value="259">
                FEDERAL COLLEGE OF EDUCATION, ABEOKUTA
              </option>
              <option value="260">
                FEDERAL COLLEGE OF EDUCATION, EHA-AMUFU
              </option>
              <option value="261">FEDERAL COLLEGE OF EDUCATION, KANO</option>
              <option value="262">FEDERAL COLLEGE OF EDUCATION, KATSINA</option>
              <option value="263">
                FEDERAL COLLEGE OF EDUCATION, KONTAGORA
              </option>
              <option value="264">FEDERAL COLLEGE OF EDUCATION, OBUDU</option>
              <option value="265">FEDERAL COLLEGE OF EDUCATION, OKENE</option>
              <option value="266">
                FEDERAL COLLEGE OF EDUCATION, PANKSHIN
              </option>
              <option value="267">FEDERAL COLLEGE OF EDUCATION, YOLA</option>
              <option value="268">FEDERAL COLLEGE OF EDUCATION, ZARIA</option>
              <option value="269">
                IMO STATE COLLEGE OF EDUCATION, IHITTE/UBOMA
              </option>
              <option value="270">
                ISA KAITA COLLEGE OF EDUCATION, DUTSIN-MA
              </option>
              <option value="271">
                JIGAWA STATE COLLEGE OF EDUCATION, GUMEL
              </option>
              <option value="272">
                KADUNA STATE COLLEGE OF EDUCATION, GIDAN-WAYA, KAFANCHAN
              </option>
              <option value="273">KASHIM IBRAHIM COLLEGE OF EDUCATION</option>
              <option value="274">
                KOGI STATE COLLEGE OF EDUCATION, ANKPA
              </option>
              <option value="275">
                KOGI STATE COLLEGE OF EDUCATION, KABBA
              </option>
              <option value="276">
                NASARRAWA STATE COLLEGE OF EDUCATION, AKWANGA
              </option>
              <option value="277">
                NIGER STATE COLLEGE OF EDUCATION, MINNA
              </option>
              <option value="278">
                NWAFOR ORIZU COLLEGE OF EDUCATION, NSUGBE
              </option>
              <option value="279">
                OSUN STATE COLLEGE OF EDUCATION, ILESA
              </option>
              <option value="280">
                SA’ADATU RIMI COLLEGE OF EDUCATION, KUMBOTSO, KANO
              </option>
              <option value="281">
                SHEHU SHAGARI COLLEGE OF EDUCATION, SOKOTO
              </option>
              <option value="282">
                TAI SOLARIN COLLEGE OF EDUCATION, IJEBU-ODE
              </option>
              <option value="283">
                UMAR IBN IBRAHIM EL-KANEMI COLLEGE OF EDUCATION, SCIENCE AND
                TECHNOLOGY, BAMA
              </option>
              <option value="284">
                ZAMFARA STATE COLLEGE OF EDUCATION, MARU
              </option>
              <option value="285">
                ZAMFARA STATE COLLEGE OF ARTS AND SCIENCE, GUSAU
              </option>
              <option value="286">
                ABDU GUSAU POLYTECHNIC, TALATA MAFARA, ZAMFARA STATE.
              </option>
              <option value="287">
                ABIA STATE POLYTECHNIC, ABA, ABIA STATE.
              </option>
              <option value="288">
                ABRAHAM ADESANYA POLYTECHNIC, IJEBU-IGBO, OGUN STATE.
              </option>
              <option value="289">
                ABUBAKAR TATARI ALI POLYTECHNIC, BAUCHI, BAUCHI STATE.
              </option>
              <option value="290">
                ADAMAWA STATE POLYTECHNIC, YOLA, ADAMAWA STATE.
              </option>
              <option value="291">
                ADESEUN OGUNDOYIN POLYTECHNIC, ERUWA, OYO STATE.
              </option>
              <option value="292">
                AIRFORCE INSTITUTE OF TECHNOLOGY, NAF BASE KADUNA
              </option>
              <option value="293">
                AJAYI POLYTECHNIC, IKERE EKITI, EKITI STATE
              </option>
              <option value="294">
                AKANU IBIAM FEDERAL POLYTECHNIC UNWANA, AFIKPO, EBONYI STATE.
              </option>
              <option value="295">
                AKWA IBOM STATE POLYTECHNIC, IKOT OSURUA, IKOT-EKPENE.
              </option>
              <option value="296">
                AL-HIKMA POLYTECHNIC KARU, NASARAWA STATE
              </option>
              <option value="297">
                ALLOVER CENTRAL POLYTECHNIC, SANGO OTA, OGUN STATE
              </option>
              <option value="298">ANAMBRA STATE POLYTECHNIC, MGBAKWU.</option>
              <option value="299">ASHI POLYTECHNIC, BENUE STATE</option>
              <option value="300">AUCHI POLYTECHNIC, AUCHI, EDO STATE.</option>
              <option value="301">
                BAYELSA STATE POLYTECHNIC, ALEIBIRI, EKEREMOR
              </option>
              <option value="302">
                BELLARKS POLYTECHNIC, KWALE, DELTA STATE
              </option>
              <option value="303">BENUE STATE POLYTECHNIC, UGBOKOLO.</option>
              <option value="304">
                BEST SOLUTION POLYTECHNIC, AKURE, ONDO STATE
              </option>
              <option value="305">
                BINYAMINU USMAN POLYTECHNIC, HADEJIA, JIGAWA STATE.
              </option>
              <option value="306">
                BOLMOR POLYTECHNIC, DUGBE, IBADAN, OYO STATE.
              </option>
              <option value="307">
                CALVARY POLYTECHNIC, OWA-OYIBU, DELTA STATE
              </option>
              <option value="308">CITI POLYTECHNIC, ABUJA</option>
              <option value="309">COASTAL POLYTECHNIC APAPA, LAGOS</option>
              <option value="310">COVENANT POLYTECHNIC, ABA, ABIA STATE</option>
              <option value="311">
                CROSS RIVER STATE INSTITUTE OF TECHNOLOGY AND MANAGEMENT, UGEP.
              </option>
              <option value="312">
                CROWN POLYTECHNIC, ADO-EKITI, EKITI STATE
              </option>
              <option value="313">
                D.S. ADEGBENRO ICT POLYTECHNIC, ITORI-EWEKORO, IFO, OGUN STATE.
              </option>
              <option value="314">
                DELTA STATE POLYTECHNIC, OGWASHI-UKU, OGWASHI-UKU, DELTA STATE.
              </option>
              <option value="315">
                DELTA STATE POLYTECHNIC, OTEFE-OGHARA, OTEFE-OGHARA, DELTA STATE
              </option>
              <option value="316">
                DELTA STATE SCHOOL OF MARINE TECHNOLOGY, BURUTU, DELTA STATE
              </option>
              <option value="317">DORBEN POLYTECHNIC, BWARI, ABUJA,</option>
              <option value="318">
                EASTERN POLYTECHNIC, PORT HARCOURT, RIVERS STATE.
              </option>
              <option value="319">
                EDO STATE POLYTECHNIC, BENIN CITY, EDO STATE.
              </option>
              <option value="320">
                EKITI STATE COLLEGE OF AGRICULTURE AND TECHNOLOGY, ISAN EKITI,
                EKITI STATE
              </option>
              <option value="321">ENUGU STATE POLYTECHNIC, IWOLLO</option>
              <option value="322">
                FEDERAL POLYTECHNIC ADO EKITI, EKITI STATE.
              </option>
              <option value="323">FEDERAL POLYTECHNIC AYEDE, OYO STATE</option>
              <option value="324">
                FEDERAL POLYTECHNIC BALI, TARABA STATE.
              </option>
              <option value="325">
                FEDERAL POLYTECHNIC BAUCHI, BAUCHI STATE.
              </option>
              <option value="326">
                FEDERAL POLYTECHNIC BIDA, NIGER STATE.
              </option>
              <option value="327">
                FEDERAL POLYTECHNIC DAMATURU, YOBE STATE.
              </option>
              <option value="328">FEDERAL POLYTECHNIC EDE, OSUN STATE.</option>
              <option value="329">
                FEDERAL POLYTECHNIC EKOWE, BAYELSA STATE
              </option>
              <option value="330">FEDERAL POLYTECHNIC IDAH, KOGI STATE.</option>
              <option value="331">
                FEDERAL POLYTECHNIC ILARO, OGUN STATE.
              </option>
              <option value="332">
                FEDERAL POLYTECHNIC ILE-OLUJI, ONDO STATE
              </option>
              <option value="333">
                FEDERAL POLYTECHNIC KALTUNGO, GOMBE STATE
              </option>
              <option value="334">
                FEDERAL POLYTECHNIC KAURA NAMODA, ZAMFARA STATE.
              </option>
              <option value="335">
                FEDERAL POLYTECHNIC MUBI, MUBI, ADAMAWA STATE.
              </option>
              <option value="336">
                FEDERAL POLYTECHNIC MUNGUNO, BORNO STATE
              </option>
              <option value="337">
                FEDERAL POLYTECHNIC N’YAK, SHENDAM, PLATEAU STATE
              </option>
              <option value="338">
                FEDERAL POLYTECHNIC NASARAWA, NASARAWA STATE.
              </option>
              <option value="339">
                FEDERAL POLYTECHNIC NEKEDE, OWERRI, IMO STATE.
              </option>
              <option value="340">
                FEDERAL POLYTECHNIC OF OIL AND GAS BONNY, RIVERS STATE
              </option>
              <option value="341">
                FEDERAL POLYTECHNIC OFFA, KWARA STATE.
              </option>
              <option value="342">
                FEDERAL POLYTECHNIC OHODO, ENUGU STATE
              </option>
              <option value="343">
                FEDERAL POLYTECHNIC OKO, ANAMBRA STATE.
              </option>
              <option value="344">
                FEDERAL POLYTECHNIC UGEP, CROSS RIVERS STATE
              </option>
              <option value="345">
                FEDERAL POLYTECHNIC UKANA, AKWA IBOM STATE
              </option>
              <option value="346">
                FEDERAL POLYTECHNIC WANNUNE, BENUE STATE
              </option>
              <option value="347">
                FEDERAL POLYTECHNIC, DAURA, KATSINA STATE
              </option>
              <option value="348">
                FIDEI POLYTECHNIC, GBOKO, BENUE STATE.
              </option>
              <option value="349">
                GATEWAY POLYTECHNIC, ISARA ODE-REMO, OGUN STATE.
              </option>
              <option value="350">GLOBAL POLYTECHNIC, AKURE, ONDO STATE</option>
              <option value="351">
                GRACE POLYTECHNIC, SURULERE, LAGOS STATE
              </option>
              <option value="352">
                GRACELAND POLYTECHNIC, OFFA, KWARA STATE
              </option>
              <option value="353">
                GRUNDTVIG POLYTECHNIC, OBA ANAMBRA STATE
              </option>
              <option value="354">
                HARRY PASS POLYTECHNIC, MKAR GBOKO, BENUE STATE
              </option>
              <option value="355">
                HASSAN USMAN KATSINA POLYTECHNIC, KATSINA.
              </option>
              <option value="356">
                HERITAGE POLYTECHNIC, IKOT UDOTA, EKET, AKWA IBOM STATE
              </option>
              <option value="357">
                HUSSAINI ADAMU FEDERAL POLYTECHNIC, KAZAURE JIGAWA STATE.
              </option>
              <option value="358">
                IBADAN CITY POLYTECHNIC, IBADAN, OYO STATE
              </option>
              <option value="359">
                I-CON UNIVERSAL POLYTECHNIC OSOGBO, OSUN STATE
              </option>
              <option value="360">
                IGBAJO POLYTECHNIC, IGBAJO, OSUN STATE
              </option>
              <option value="361">
                IMO STATE POLYTECHNIC, UMUAGWO, OWERRI, IMO STATE
              </option>
              <option value="362">
                INSTITUTE OF MANAGEMENT AND TECHNOLOGY, ENUGU, ENUGU STATE.
              </option>
              <option value="363">
                INTERLINK POLYTECHNIC, IJEBU-JESA, OSUN STATE
              </option>
              <option value="364">
                ISA MUSTAPHA AGWAI POLYTECHNIC LAFIA, NASARAWA STATE.
              </option>
              <option value="365">IWO CITY POLYTECHNIC, IWO, OSUN STATE</option>
              <option value="366">
                JIGAWA STATE POLYTECHNIC, DUTSE, JIGAWA STATE
              </option>
              <option value="367">KADUNA POLYTECHNIC, KADUNA.</option>
              <option value="368">
                KALAC CHRISTAL POLYTECHNIC, LEKKI, LAGOS STATE
              </option>
              <option value="369">KANO STATE POLYTECHNIC, KANO,</option>
              <option value="370">
                KEN SAROWIWA POLYTECHNIC, BORI, RIVERS STATE.
              </option>
              <option value="371">KINGS POLYTECHNIC, UBIAJA, EDO STATE</option>
              <option value="372">
                KOGI STATE POLYTECHNIC, LOKOJA, KOGI STATE.
              </option>
              <option value="373">
                KWARA STATE POLYTECHNIC, ILORIN, KWARA STATE.
              </option>
              <option value="374">
                LAGOS CITY POLYTECHNIC, IKEJA, LAGOS STATE
              </option>
              <option value="375">
                LAGOS STATE POLYTECHNIC, IKORODU, LAGOS STATE
              </option>
              <option value="376">
                LANDMARK POLYTECHNIC, AYETORO/ITELE, OGUN STATE
              </option>
              <option value="377">LENS POLYTECHNIC, OFFA, KWARA STATE</option>
              <option value="378">
                LIGHTHOUSE POLYTECHNIC, BENIN CITY, EDO STATE
              </option>
              <option value="379">
                MAI-IDRIS ALOOMA POLYTECHNIC, GEIDAM, YOBE STATE
              </option>
              <option value="380">
                MARIST POLYTECHNIC, UMUCHIGBO, IJI-NIKE, ENUGU STATE
              </option>
              <option value="381">
                MATER DEI POLYTECHNIC, UGWUOBA, ENUGU STATE
              </option>
              <option value="382">
                MOSHOOD ABIOLA POLYTECHNIC, ABEOKUTA, OGUN STATE
              </option>
              <option value="383">
                NACABS POLYTECHNIC, AKWANGA NASARAWA STATE
              </option>
              <option value="384">
                NATIONAL INSTITUTE OF CONSTRUCTION TECHNOLOGY UROMI
              </option>
              <option value="385">
                NIGER STATE POLYTECHNIC, ZUNGERU, NIGER STATE
              </option>
              <option value="386">
                NIGERIAN ARMY INSTITUTE OF TECHNOLOGY AND ENVIRONMENTAL SCIENCE
                MAKURDI
              </option>
              <option value="387">
                NIGERIAN COLLEGE OF AVIATION TECHNOLOGY, ZARIA, KADUNA
              </option>
              <option value="388">
                NOGAK POLYTECHNIC, IKOM, CROSS RIVER STATE.
              </option>
              <option value="389">NOVELTY POLYTECHNIC KISHI, OYO STATE</option>
              <option value="390">
                NUHU BAMALLI POLYTECHNIC, ZARIA, KADUNA STATE
              </option>
              <option value="391">
                OGUN STATE INSTITUTE OF TECHNOLOGY, IGBESA, OGUN STATE
              </option>
              <option value="392">OGUN STATE POLYTECHNIC, IPOKIA</option>
              <option value="393">OKE-OGUN POLYTECHNIC, SHAKI,OYO STATE</option>
              <option value="394">
                OSUN STATE COLLEGE OF TECHNOLOGY, ESA – OKE, OSUN STATE.
              </option>
              <option value="395">
                OSUN STATE POLYTECHNIC, IREE, OSUN STATE.
              </option>
              <option value="396">
                PETROLEUM TRAINING INSTITUTE EFFURUN, EFFURUN. DELTA STATE
              </option>
              <option value="397">
                PLATEAU STATE POLYTECHNIC, BARKIN-LADI, JOS, PLATEAU STATE.
              </option>
              <option value="398">
                PORT-HARCOURT POLYTECHNIC PORT-HARCOURT, RIVERS STATE.
              </option>
              <option value="399">
                PRIME POLYTECHNIC, JIDA BASSA, AJAOKUTA, KOGI STATE
              </option>
              <option value="400">
                RAMAT POLYTECHNIC, MAIDUGURI, BORNO STATE.
              </option>
              <option value="401">
                RONIK POLYTECHNIC, EJIGBO, IKEJA, LAGOS, LAGOS STATE.
              </option>
              <option value="402">
                RUFUS GIWA POLYTECHNIC, OWO, ONDO STATE.
              </option>
              <option value="403">SAF POLYTECHNIC, ISEYIN, OYO STATE.</option>
              <option value="404">
                SAVANAH INSTITUTE OF TECHNOLOGY, ABAKALIKI, EBONYI STATE
              </option>
              <option value="405">
                SHAKA POLYTECHNIC, BENIN CITY, EDO STATE
              </option>
              <option value="406">
                SOUTHERN ATLANTIC POLYTECHNIC, UYO, AKWA IBOM STATE
              </option>
              <option value="407">
                SPEEDWAY POLYTECHNIC, OSOBA OJUDU, OGUN STATE
              </option>
              <option value="408">
                ST. MARY POLYTECHNIC, KWAMBA, SULEJA, NIGER STATE
              </option>
              <option value="409">STARS POLYTECHNIC, OTA OGUN, STATE</option>
              <option value="410">TARABA STATE POLYTECHNIC, SUNTAI</option>
              <option value="411">
                TEMPLE GATE POLYTECHNIC, ABAYI, OSISIOMA, ABA, ABIA STATE.
              </option>
              <option value="412">THE POLYTECHNIC IBADAN, OYO STATE.</option>
              <option value="413">THE POLYTECHNIC IRESI, OSUN STATE</option>
              <option value="414">
                THE POLYTECHNIC OTADA ADOKA, BENUE STATE
              </option>
              <option value="415">
                THE POLYTECHNIC, IGBO-OWU, KWARA STATE
              </option>
              <option value="416">THE POLYTECHNIC, ILE IFE, OSUN STATE</option>
              <option value="417">TIMEON KAIROS POLYTECHNIC LAGOS</option>
              <option value="418">TOWER POLYTECHNIC, IBADAN, OYO STATE</option>
              <option value="419">
                TRINITY POLYTECHNIC UYO, AKWA IBOM STATE
              </option>
              <option value="420">
                UMARU ALI SHINKAFI POLYTECHNIC, SOKOTO, SOKOTO STATE.
              </option>
              <option value="421">
                UYO CITY POLYTECHNIC, UYO, AKWA IBOM STATE
              </option>
              <option value="422">
                VALLEY VIEW POLYTECHNIC, OHAFIA, ABIA SATE
              </option>
              <option value="423">
                WAZIRI UMARU FEDERAL POLYTECHNIC, BIRNIN KEBBI.
              </option>
              <option value="424">WOLEX POLYTECHNIC, IWO, OSUN STATE</option>
              <option value="425">
                YABA COLLEGE OF TECHNOLOGY, YABA, LAGOS STATE.
              </option>
              <option value="426">BAYELSA COLLEGE OF NURSING, TOMBIA</option>
              <option value="429">
                DELTA STATE COLLEGE OF HEALTH TECHNOLOGY, OFOUMA
              </option>
              <option value="430">KOGI STATE UNIVERSITY, ANYIGBA</option>
              <option value="431">MARITIME ACADEMY OF NIGERIA</option>
              <option value="432">MICHAEL AND CECILIA IBRU UNIVERSITY</option>
              <option value="433">RIVERS STATE POLYTECHNIC</option>
              <option value="434">
                SOUTHERN NIGERIA INSTITUTE OF INNOVATIVE TECH
              </option>
              <option value="435">
                ST.LUKE ANGLICAN HOSPITAL SCHOOL NURSING &amp; MIDWIFERY
              </option>
              <option value="436">STATE SCHOOL OF HEALTH TECHNOLOGY</option>
              <option value="437">STATE SCHOOL OF NURSING AGBOR</option>
              <option value="438">STATE SCHOOL OF NURSING EDJEBA</option>
              <option value="439">STATE SCHOOL OF NURSING, EKU</option>
              <option value="440">
                STATE UNIVERSITY OF MEDICAL SCIENCES, ONDO
              </option>
              <option value="441">
                UNIVERSITY OF BENIN TEACHING HOSPITAL (UBTH)
              </option>
              <option value="442">CONVENANT POLYTECHNIC</option>
              <option value="443">EDO STATE UNIVERSITY, IYAMO</option>
              <option value="444">
                FEDERAL SCHOOL OF DENTAL TECHNOLOGY AND THERAPY
              </option>
              <option value="445">
                FEDERAL COLLEGE OF FISHERIES AND MARINE TECHNOLOGY
              </option>
              <option value="446">
                FEDERAL COLLEGE OF ORTHOPAEDIC TECHNOLOGY
              </option>
              <option value="447">
                FEDERAL COLLEGE OF ORTHOPAEDIC TECHNOLOGY, IGBOBI
              </option>
              <option value="448">
                FEDERAL COLLEGE OF DENTAL TECHNOLOGY AND THERAPY ENUGU
              </option>
              <option value="449">STATE SCHOOL OF MIDWIFERY, ASABA</option>
              <option value="450">
                COLLEGE OF NURSING SCIENCE, DELTA STATE SAPELE
              </option>
              <option value="451">EDO STATE UNIVERSITY, UZAIRUE</option>
              <option value="452">OSUN STATE UNIVERSITY</option>
              <option value="453">
                RIVERS STATE COLLEGE OF HEALTH SCIENCE AND MANAGEMENT TECHNOLOGY
              </option>
              <option value="454">BAYELSA MEDICAL SCHOOL YENAGOA</option>
              <option value="455">
                NIGERIAN ARMY COLLEGE OF ENVIRONMENTAL SCIENCE AND TECHNOLOGY
                (NACEST)
              </option>
              <option value="456">FEDERAL COLLEGE OF AGRICULTURE AKURE</option>
              <option value="457">UNIVERSITY OF CROSS RIVER STATE</option>
              <option value="458">UNIVERSITY OF BENIN TEACHING HOSPITAL</option>
              <option value="459">
                KENULE BEESON SARO WIWA POLYTECHNIC BORI RIVERS STATE
              </option>
              <option value="460">
                JOINT PROFESSIONAL TRAINING SUPPORT(JPTS) INSTITUTE OF
                MANAGEMENT SCIENCE AND TECH, BENUE STATE
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Faculty</label>
            <select>
              <option value="" disabled selected>
                Select Faculty
              </option>
              {/* Add faculty options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="" disabled selected>
                Select Department
              </option>
              {/* Add department options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Level</label>
            <select>
              <option value="" disabled selected>
                Select Level
              </option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
            </select>
          </div>
          <div className="form-group">
            <label>Matric. No.</label>
            <input type="text" placeholder="Enter Matric No." />
          </div>
          <div className="form-group">
            <label>Degree Type</label>
            <select>
              <option value="" disabled selected>
                Select Degree
              </option>
              <option value="">Select Degree</option>
              <option value="BSC">BSC</option>
              <option value="BTEC">BTEC</option>
              <option value="BA">BA</option>
              <option value="MSC">MSC</option>
              <option value="HND">HND</option>
              <option value="ND">ND</option>
              <option value="NCE">NCE</option>
              <option value="LLB">LLB</option>
              <option value="B.Eng">B.Eng</option>
              <option value="B.ED">B.ED</option>
              <option value="MBBS">MBBS</option>
            </select>
          </div>
          <div className="form-group">
            <label>Year of Admission</label>
            <select>
              <option value="" disabled selected>
                Select Year
              </option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div className="form-group">
            <label>Expected Grad. Year</label>
            <select>
              <option value="" disabled selected>
                Select Year
              </option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="form-group">
            <label>Current Semester</label>
            <select>
              <option value="" disabled selected>
                Select Semester
              </option>
              <option value="First">First</option>
              <option value="Second">Second</option>
            </select>
          </div>
          <div className="form-group">
            <label>CGPA</label>
            <input type="text" placeholder="Enter CGPA" />
          </div>
          <div className="form-group">
            <label>Jamb Registration No.</label>
            <input type="text" placeholder="Enter Jamb Reg No." />
          </div>
          <button type="submit" className="submit-button">
            Save and Continue
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default INstitutionalDetails;
