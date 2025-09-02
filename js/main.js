let mainFunc = null;

$(function() {
	$.funcMain = function() {
		let _this = this;

		this.opt = {

		}

		this.initPC = function() {
			$('.layerPop-overlay').hide();
			$('.layerPop-wrap').hide();
			$('.layerPop-wrap .layerPopCont .layerPop1').remove();

			if ($.cookie("c_nopopup_pc") != "N") {
				_this.getPCPopupList();
			}
		}

		this.initMO = function() {
			if ($.cookie("c_nopopup_mo") != "N") {
				_this.getMOPopupList();
			}
		}

		this.getPCPopupList = function() {
			let param = {
				"page" : "1"
				, "is_show_pc" : "Y"
			}

			$.ajax({
				url: __basePath + '/data/main/popupData.php',		// 요청 할 주소
				async: true,							// false 일 경우 동기 요청으로 변경
				type: 'POST', 							// GET, PUT, DELETE
				data: param,										// 전송할 데이터
				dataType: 'json',						// xml, json, script, html
				beforeSend: function(jqXHR) {		// 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
					//addLoading();
				},
				success: function(jqXHR) {			// 요청 완료 시

					let resultCode = jqXHR.result.resultCode;
					let resultMsg = jqXHR.result.msg;

					if (resultCode == "1") {

                        let popupInfo = jqXHR.data.popupInfo;
                        let popupList = jqXHR.data.popupList;

						if (popupInfo.total_cnt > 0) {

							let popupWrap = '';
							let popupData = '';

							$(popupList).each(function(idx) {

								let info = popupList[idx];

								if ($.cookie("c_nopopup_" + info["idx"]) != "N") {

									let files = info.files;

									let popupImg_pc = null;

									$(files).each(function(fileIdx) {
										let fileInfo = files[fileIdx];

										if (fileInfo["FILE_KIND"] == "popupImg_pc") {
											popupImg_pc = fileInfo;
										}
									})

									if (popupImg_pc != null) {

										popupData  = '			<div class="layerPop1"  data-idx="' +  info["idx"] + '" style="z-index:' + (10000 + info["idx"]) + '">';
										if (info.pc_link_url != "") {
											popupData += '				<a href="' + info.pc_link_url + (info.is_new_win == "N"? '" target="_blank"':'') + '"><img src="' + popupImg_pc["SAVE_PATH"] + popupImg_pc["SAVE_FILE_NM"] + '"></a>';
										} else {
											popupData += '				<a href="#"><img src="' + popupImg_pc["SAVE_PATH"] + popupImg_pc["SAVE_FILE_NM"] + '"></a>';
										}
										popupData += '				<div class="popup-bt"><a href="#" class="noTodayPoup">1일 동안 보지 않음</a> <a href="#" class="layerPopClose">닫기</a></div>';
										popupData += '			</div>';

										$('.layerPop-wrap .layerPopCont').append(popupData);
									}
								}
							})

							if ($('.layerPop-wrap .layerPopCont .layerPop1').length == 0 ) {
								return;
							}

							$('.layerPopTop .layerPopClose').off().on('click', function() {
								if ($('#todayNoPopchk').is(':checked')) {
									$.cookie("c_nopopup_pc", "N", {expires:1});
								}

								$('.layerPop-wrap').remove();
								$('.layerPop-wrap').remove();
								$('.layerPop-overlay').hide();
							})

							if ($('.layerPop-wrap .layerPopCont .layerPop1').length > 0) {
								$('.layerPop-overlay').show();
								$('.layerPop-wrap').show();
							}

							$('.layerPopCont .layerPop1 .layerPopClose').off().on('click', function(e) {
								e.preventDefault();

								$(this).closest('.layerPop1').remove();

								if ($('.layerPopCont .layerPop1').length == 0) {
									$('.layerPop-wrap').remove();
									$('.layerPop-overlay').hide();
								}

							})

							$('.layerPopCont .layerPop1 .noTodayPoup').off().on('click', function(e) {
								e.preventDefault();

								let idx = $(this).closest('.layerPop1').attr('data-idx');

								$.cookie("c_nopopup_" + idx, "N", {expires:1});

								$(this).closest('.layerPop1').find('.layerPopClose').click();

							})
						}
					}
				},
				error: function(jqXHR) {					// 요청 실패.

				},
				complete: function(jqXHR) {				// 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
					//removeLoading();
				}
			});
		}

		this.getMOPopupList = function() {
			let param = {
				"page" : "1"
				, "is_show_mo" : "Y"
			}

			$.ajax({
				url: __baseRoot + '/data/main/popupData.php',		// 요청 할 주소
				async: true,							// false 일 경우 동기 요청으로 변경
				type: 'POST', 							// GET, PUT, DELETE
				data: param,										// 전송할 데이터
				dataType: 'json',						// xml, json, script, html
				beforeSend: function(jqXHR) {		// 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
					//addLoading();
				},
				success: function(jqXHR) {			// 요청 완료 시

					let resultCode = jqXHR.result.resultCode;
					let resultMsg = jqXHR.result.msg;

					if (resultCode == "1") {

                        let popupInfo = jqXHR.data.popupInfo;
                        let popupList = jqXHR.data.popupList;

						if (popupInfo.total_cnt > 0) {

							let popupWrap = '';
							let popupData = '';

							$(popupList).each(function(idx) {

								let info = popupList[idx];

								if ($.cookie("c_nopopup_" + info["idx"]) != "N") {

									let files = info.files;

									let popupImg_mo = null;

									$(files).each(function(fileIdx) {
										let fileInfo = files[fileIdx];

										if (fileInfo["FILE_KIND"] == "popupImg_mo") {
											popupImg_mo = fileInfo;
										}
									})

									if (popupImg_mo != null) {

										popupData  = '			<div class="pop-con swiper-slide"  data-idx="' +  info["idx"] + '" style="z-index:' + (10000 + info["idx"]) + '">';
										if (info.pc_link_url != "") {
											popupData += '				<a href="' + info.mo_link_url + (info.is_new_win == "N"? '" target="_blank"':'') + '"><img src="' + popupImg_mo["SAVE_PATH"] + popupImg_mo["SAVE_FILE_NM"] + '" class="max"></a>';
										} else {
											popupData += '				<a href="#"><img src="' + popupImg_mo["SAVE_PATH"] + popupImg_mo["SAVE_FILE_NM"] + '" class="max"></a>';
										}
										popupData += '			</div>';

										$('.mainPop .swiper-wrapper').append(popupData);
									}
								}
							})

							if ($('.mainPop .swiper-wrapper .pop-con').length == 0 ) {
								return;
							}

							$('.layerPop-overlay').show();
							$('.mainPop').show();

							//1일 동안 보지 않음 버튼 클릭
							$('.mainPop .btn-today-nopop').off().on('click', function(e) {
								e.preventDefault();

								$.cookie("c_nopopup_mo", "N", {expires:1});

								$('.mainPop').remove();
								$('.layerPop-overlay').hide();
							})

							//닫기 버튼 클릭
							$('.mainPop .btn-close-pop').off().on('click', function(e) {
								e.preventDefault();

								$('.mainPop').remove();
								$('.layerPop-overlay').hide();
							})

							$(function(){
								const swiperPop = new Swiper('.mainPop', {
									slidesPerView: 1,
									speed: 800,
									spaceBetween: 0,
									pagination: {
										el: ".mainPop .swiper-pagination",
									},
								});
							});
						}
					}
				},
				error: function(jqXHR) {					// 요청 실패.

				},
				complete: function(jqXHR) {				// 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
					//removeLoading();
				}
			});
		}
    }
});
